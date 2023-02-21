import React, { useState, useRef,useEffect } from 'react';
import styled from 'styled-components';
import doneIcon from '../../../assets/icons/done-icon.svg';
import doingIcon from '../../../assets/icons/doing-icon.svg';
import todoIcon from '../../../assets/icons/todo-icon.svg';
import Image from 'next/image';
import { StyleConstants } from 'styles/StylesConstants';
import { BorderlessButton } from '../../../components/Button';
import { newBoardList } from '../../../components/PmData';
import { IActiveBoardProps, IActiveBoardSubTaskProps, TaskCard } from 'src/components/TaskCard';
import { TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Card } from '@mui/material';
import { DescriptionCard } from './DescriptionCard';
import { AddEditCard } from './AddEditCard';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { currentBoardSelector } from '../slice';
import { getAllCurrentBoardTasks } from '../slice/call';
import { UserBoard } from 'src/api/types';
// import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';


export const ActiveBoard = () => {
    const router = useRouter();
    const dispatch= useDispatch();
    const [loading, setLoading] = useState('false')
    const [isViewTaskModalOpen, setIsViewTaskModalOpen] = useState(false);
    const [taskDescriptionData, setTaskDescriptionData] = useState<any>();
    const [isDragging, setIsDragging] = useState(false)
    const [isEmptyCard, setIsEmptyCard] = useState(false);
    const currentBoardList = useSelector(currentBoardSelector)
    const [list, setList] = useState(currentBoardList);
    const boardId = router.query.boardId
    const dragItem = useRef();
    const dragNode = useRef()
   console.log('board',currentBoardList )
    // useEffect(() => {
    //     if (!loading && !authUser)
    //       router.push('/auth/login')
    //   }, [authUser, loading])

    useEffect(() => {
        getAllCurrentBoardTasks(boardId, dispatch, setLoading)
    }, [boardId])

    const handleViewTaskModal = (columnId: number | string, cardId: number | string) => {
        console.log('clicked', columnId, cardId)
        setIsViewTaskModalOpen(!isViewTaskModalOpen);
        if (columnId === 'new-card' && cardId === 'new-card') {
            setIsEmptyCard(true)
        } else {
            setIsEmptyCard(false)
            const taskboardInfo = list.find((boardInfo: { _id: string | number; }) => {
                return boardInfo._id === columnId;
            })
            console.log('board info ==>', taskboardInfo);

            const taskCardInfo = taskboardInfo?.tasks.find((card: { _id: string | number; }) => {
                return card._id === cardId;
            })

            setTaskDescriptionData(taskCardInfo);
            console.log('card info ==>', taskCardInfo);
        }
    }

    const addCardHandler = () => {
        console.log('new card')
    }
    const handleDragStart = (e: any, params: { boardIndex: number; cardIndex: number; }) => {
        console.log('drag starting', params);
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd);
        setIsDragging(true);
    }

    const handleDragEnter = (e: any, params: { boardIndex: number; cardIndex: number; }) => {
        console.log('entering', params);
        const currentItem = dragItem.current;
        if (e.target === dragNode.current) {
            console.log('itself');
        } else {
            console.log('not itself');
            setList((oldlist: any) => {
                let newList = JSON.parse(JSON.stringify(oldlist))
                const activeBoard = newList.find((board: { _id: number; }) => {
                    return board._id === params.boardIndex
                })
                const currentBoard = newList.find((board: { _id: number; }) => {
                    return board._id === currentItem.boardIndex
                })
                newList[params.boardIndex].tasks.splice(params.cardIndex, 0, newList[currentItem.boardIndex].tasks.splice(currentItem.cardIndex, 1)[0])
                dragItem.current = params;
                return newList;
            })
            //update task status
        }

    }

const styleActiveCard = (params: { boardIndex: any; cardIndex: any; })=>{
const currentItem = dragItem.current;
if(currentItem?.boardIndex! === params.boardIndex && currentItem.cardIndex === params.cardIndex){
    return 'current-dnd-item'
}
return ''
}


    const handleDragEnd = () => {
        console.log('drag end')
        dragNode.current.removeEventListener('dragend', handleDragEnd);
        dragItem.current = null;
        dragNode.current = null;
        setIsDragging(false);
    }

    return (
        <Wrapper>
        <CarouselContainer>
            {list?.map((board:UserBoard, boardIndex: any) => (
                <ActiveColumn
                    key={board._id}
                    onDragEnter={isDragging && !board.tasks!.length ? (e) => { handleDragEnter(e, { boardIndex, cardIndex: 0 }) } : null}
                >
                    <div className='active-board-head'>
                        {/* <Image src={board.icon} alt='icon' className='icon' width={10} height={10} /> */}
                        <span className='active-board-text'>{board.columnTitle.charAt(0).toUpperCase() + board.columnTitle.slice(1)} {`(${board.tasks!.length})`} </span>
                    </div>
                    <div className={board.tasks!.length > 5 ? 'active-column-scroll' : 'active-column'}>
                        <ActiveList>
                            {board?.tasks?.map((card, cardIndex: any) => {
                                return (
                                    <TaskCard
                                        key={card._id}
                                        ClassName={isDragging?styleActiveCard({boardIndex, cardIndex}): ''}
                                        title={card.title}
                                        subtasks={card.subtask}
                                        handleCardView={() => handleViewTaskModal(board._id!, card._id!)}
                                        handleDragStart={(e) => { handleDragStart(e, { boardIndex, cardIndex }) }}
                                        handleDragEnter={isDragging ? (e) => { handleDragEnter(e, { boardIndex, cardIndex }) } : null}
                                    />
                                )
                            })}
                        </ActiveList>

                    </div>

                    <BorderlessButton
                        content='+ New Card'
                        primaryBtnAction={() => handleViewTaskModal('new-card', 'new-card')}
                    />
                    {isEmptyCard ? 
                    <Dialog open={isViewTaskModalOpen} onClose={handleViewTaskModal}>
                       <AddEditCard 
                       />
                    </Dialog>
                    :
                    <Dialog open={isViewTaskModalOpen} onClose={handleViewTaskModal}>
                      <DescriptionCard
                      cardTitle={taskDescriptionData?.title}
                      cardDescription = {taskDescriptionData?.description}
                      status = {taskDescriptionData?.status}
                      subtasks = {taskDescriptionData?.subtask}
                      />
                     </Dialog>
                    }
                    
                </ActiveColumn>
            ))
            }

        </CarouselContainer>
    </Wrapper >
    )
}

const Wrapper = styled.section`
        width: 90%;
        margin: 0 auto;
        scroll-snap-type: x mandatory;
        overflow-x: scroll;
        scroll-behavior: smooth;
`;

const ActiveColumn = styled.div`

        .active-board-head{
            padding: 10px;
            text-align: center;
        .active-board-text{
            /* font-family: 'Plus Jakarta Sans'; */
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 15px;
            letter-spacing: 2.4px;
            color: ${StyleConstants.MEDIUM_GREY_COLOR};
            margin-left: 12px;
        }
    }

    .active-column-scroll{
        width: 300px;
        height: 70vh;
        overflow-y: scroll;
    }
    .active-column{
        width: 300px;
    }
`;
const CarouselContainer = styled.div`
        width: 100%;
        display: flex;
`;

const ActiveList = styled.div`
        margin: 10px;
        width: 90%;
`;
