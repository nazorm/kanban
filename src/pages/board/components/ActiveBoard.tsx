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
import { useAuth } from 'src/firebase/context';
import { useRouter } from 'next/router';


export const ActiveBoard = () => {
    const { authUser, loading } = useAuth();
    const [isViewTaskModalOpen, setIsViewTaskModalOpen] = useState(false);
    const [taskDescriptionData, setTaskDescriptionData] = useState<any>();
    const [isDragging, setIsDragging] = useState(false)
    const [isEmptyCard, setIsEmptyCard] = useState(false);
    const [list, setList] = useState(newBoardList);
    const dragItem = useRef();
    const dragNode = useRef()

console.log('this lists', list)
    const router = useRouter();
    useEffect(() => {
        if (!loading && !authUser)
          router.push('/auth/login')
      }, [authUser, loading])

console.log('tired.com', authUser.userBoard)
    const handleViewTaskModal = (boardId: number | string, cardId: number | string) => {
        console.log('clicked')
        setIsViewTaskModalOpen(!isViewTaskModalOpen);
        if (boardId === 'new-card' && cardId === 'new-card') {
            setIsEmptyCard(true)
        } else {
            setIsEmptyCard(false)
            const taskboardInfo = list.find((boardInfo: { id: string | number; }) => {
                return boardInfo.id === boardId;
            })
            console.log('board info ==>', taskboardInfo);

            const taskCardInfo = taskboardInfo?.items.find((card: { id: string | number; }) => {
                return card.id === cardId;
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
                // let newList = [...oldlist]
                const activeBoard = newList.find((board: { id: number; }) => {
                    return board.id === params.boardIndex
                })
                const currentBoard = newList.find((board: { id: any; }) => {
                    return board.id === currentItem.boardIndex
                })
                let cardPosition = activeBoard.items.indexOf(params.cardIndex);
                let currentCardPosition = currentBoard?.items.indexOf(currentItem.cardIndex);
                activeBoard?.items.splice(cardPosition, 0, currentBoard.items.splice(currentCardPosition, 1)[0])
                // newList[params.boardIndex].items.splice(params.cardIndex, 0, newList[currentItem.boardIndex].items.splice(currentItem.cardIndex, 1)[0])
                // newList[params.boardIndex].items.splice(1 ,0,2)
                dragItem.current = params;
                return newList;
            })
        }
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
                {list?.map((board, boardIndex: any) => (
                    <ActiveColumn
                        key={board.id}
                        onDragEnter={isDragging && !board.items.length ? (e) => { handleDragEnter(e, { boardIndex: board.id, cardIndex: 0 }) } : null}
                    >
                        <div className='active-board-head'>
                            <Image src={board.icon} alt='icon' className='icon' width={10} height={10} />
                            <span className='active-board-text'>{board.boardTitle} {`(${board.items.length})`} </span>
                        </div>
                        <div className={board.items.length > 5 ? 'active-column-scroll' : 'active-column'}>
                            <ActiveList>
                                {board.items.map((card: { id: React.Key | null | undefined; title: string; subtasks: IActiveBoardSubTaskProps[] | undefined; }, cardIndex: any) => {
                                    return (
                                        <TaskCard
                                            key={card.id}
                                            id={card.id}
                                            title={card.title}
                                            subtasks={card.subtasks}
                                            handleCardView={() => handleViewTaskModal(board.id, card.id)}
                                            handleDragStart={(e) => { handleDragStart(e, { boardIndex: board.id, cardIndex: card.id }) }}
                                            handleDragEnter={isDragging ? (e) => { handleDragEnter(e, { boardIndex: board.id, cardIndex: card.id }) } : null}
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
                          subtasks = {taskDescriptionData?.subtasks}
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
