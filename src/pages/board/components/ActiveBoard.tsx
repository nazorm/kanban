import React, { useState, useRef, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import doneIcon from '../../../assets/icons/done-icon.svg';
import doingIcon from '../../../assets/icons/doing-icon.svg';
import todoIcon from '../../../assets/icons/todo-icon.svg';
import Image from 'next/image';
import { StyleConstants } from 'styles/StylesConstants';
import { BorderlessButton } from '../../../components/Button';
import { newBoardList } from '../../../components/PmData';
import {  TaskCard } from 'src/components/TaskCard';
import { Dialog } from '@mui/material';
import DescriptionCard from './DescriptionCard';
import { AddEditCard } from '../../../components/AddEditCard';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { currentBoardSelector, singleTaskSelector } from '../../../../store/boardSlice';
import { getAllCurrentBoardTasks, updateTask, getSelectedSingleTask } from '../../../../store/boardSlice/call';
import { UserBoard } from 'src/api/types';
import { Loader } from "src/components/Loader";
import { BoardColumn } from '@components/BoardColumn';

const ActiveBoard = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState('false')
    const [isViewTaskModalOpen, setIsViewTaskModalOpen] = useState(false);
    const [isDragging, setIsDragging] = useState(false)
    const [isEmptyCard, setIsEmptyCard] = useState(false);
    const currentBoardList = useSelector(currentBoardSelector)
    const taskDescriptionData = useSelector(singleTaskSelector);
    const [list, setList] = useState(currentBoardList);
    const boardId = router.query.boardId
    const dragItem = useRef<any>();
    const dragNode = useRef<any>();

    useEffect(() => {
        getAllCurrentBoardTasks(boardId, dispatch, setLoading)
    }, [boardId])

    const handleViewTaskModal = (columnId: number | string, cardId: number | string) => {
        setIsViewTaskModalOpen(!isViewTaskModalOpen);
        if (columnId === 'new-card' && cardId === 'new-card') {
            setIsEmptyCard(true)
        } else {
            getSelectedSingleTask(cardId, setLoading, dispatch)
        }
    }

    const handleDragStart = (e: any, params: { boardIndex: number; cardIndex: number; columnTitle: string }) => {
        // console.log('drag starting', params);
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd);
        setIsDragging(true);
    }

    const handleDragEnter = (e: any, params: { boardIndex: number; cardIndex: number; columnTitle: string;  cardId: number | string }) => {
        // console.log('entering', params);
        const currentItem = dragItem.current;
        if (e.target === dragNode.current) {
            // console.log('itself');
            return;
        } else {
            // console.log('not itself');
            setList((oldlist: any) => {
                let newList = JSON.parse(JSON.stringify(oldlist))
                newList[params.boardIndex].tasks.splice(params.cardIndex, 0, newList[currentItem.boardIndex].tasks.splice(currentItem.cardIndex, 1)[0])
                dragItem.current = params;
                return newList;
            })
            //update task status
            updateTaskStatus(params.cardId, params.columnTitle)
        }

    }

const updateTaskStatus = ( cardId: string | number, columnTitle:string)=>{
    const updateData={
        status: columnTitle
    }
    updateTask(cardId, updateData )
}

    const handleDragEnd = () => {
        // console.log('drag end')
        dragNode.current.removeEventListener('dragend', handleDragEnd);
        dragItem.current = null;
        dragNode.current = null;
        setIsDragging(false);
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <Wrapper>
            <CarouselContainer>
                {list?.map((board: UserBoard, boardIndex: any) => (
                    <BoardColumn
                    key={board._id}
                    handleDragEnter ={isDragging && !board.tasks!.length ? (e:any) => {
                        handleDragEnter(e, {
                            boardIndex, cardIndex: 0,
                            columnTitle: board.columnTitle,
                            cardId: 0
                        })
                    } : null}
                    content ={
                        <>
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
                                            title={card.title}
                                            subtasks={card.subtask}
                                            handleCardView={() => handleViewTaskModal(board._id!, card._id!)}
                                            handleDragStart={(e) => { handleDragStart(e, { boardIndex, cardIndex, columnTitle: board.columnTitle }) }}
                                            handleDragEnter={isDragging ? (e: any) => { handleDragEnter(e, {
                                                boardIndex, cardIndex, columnTitle: board.columnTitle,
                                                cardId: card._id!
                                            }) } : null}
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
                                    _id={taskDescriptionData?._id}
                                    cardTitle={taskDescriptionData?.title}
                                    cardDescription={taskDescriptionData?.description}
                                    status={taskDescriptionData?.status}
                                    subtasks={taskDescriptionData?.subtask}
                                />
                            </Dialog>
                        }
                        </>
                    }
                />
                
                ))
                }

            </CarouselContainer>
        </Wrapper >
    )
}
export default ActiveBoard;

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
