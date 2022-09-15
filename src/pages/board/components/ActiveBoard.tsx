import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import doneIcon from '../../../assets/icons/done-icon.svg';
import doingIcon from '../../../assets/icons/doing-icon.svg';
import todoIcon from '../../../assets/icons/todo-icon.svg';
import Image from 'next/image';
import { StyleConstants } from 'styles/StylesConstants';
import { BorderlessButton } from '../../../components/Button';
import { boardList, newBoardList } from '../../../components/PmData';
import { IActiveBoardProps, TaskCard } from 'src/components/TaskCard';
import { TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';



export const ActiveBoard = () => {
    const [isViewTaskModalOpen, setIsViewTaskModalOpen] = useState(false);
    const [taskDescriptionData, setTaskDescriptionData] = useState<IActiveBoardProps>();
    const [isDragging, setIsDragging] = useState(false)
    const [list, setList] = useState(newBoardList);
    const dragItem = useRef();
    const dragNode = useRef();



    const handleViewTaskModal = (id: string) => {
        setIsViewTaskModalOpen(!isViewTaskModalOpen);
        console.log(id)
        const taskCardInfo = newBoardList.map((taskInfo) => {
            return taskInfo.items;
        })
        console.log(...taskCardInfo)

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
    const handleDragEnd = () => {
        console.log('drag end')
        dragNode.current.removeEventListener('dragend', handleDragEnd);
        dragItem.current = null;
        dragNode.current = null;
        setIsDragging(false);
    }
    const handleDragEnter = (e:any, params: { boardIndex: number; cardIndex: number; }) => {
        console.log('entering', params);
        const currentItem = dragItem.current;
        if(e.target !== dragNode.current){
            console.log('not itself');
        }
    }

    return (
        <Wrapper>
            <CarouselContainer>
                {list.map((board, boardIndex) => (
                    <ActiveColumn key={boardIndex}>
                        <div className='active-board-head'>
                            <Image src={board.icon} alt='icon' className='icon' width={10} height={10} />
                            <span className='active-board-text'>{board.boardTitle} {`(${board.items.length})`} </span>
                        </div>
                        <div className={board.items.length > 5 ? 'active-column-scroll' : 'active-column'}>
                            <ActiveList>
                                {board.items.map((card, cardIndex) => {
                                    return (
                                        <TaskCard
                                            key={cardIndex}
                                            id={cardIndex}
                                            title={card.title}
                                            handleDragStart={(e) => { handleDragStart(e, { boardIndex, cardIndex })}}
                                            handleDragEnter={isDragging ? (e) => { handleDragEnter(e, { boardIndex, cardIndex })} : null}
                                        />
                                    )
                                })}
                            </ActiveList>
                            <Dialog open={isViewTaskModalOpen} onClose={handleViewTaskModal}>
                                <DialogTitle>Subscribe{taskDescriptionData?.id}</DialogTitle>
                            </Dialog>
                        </div>

                        <BorderlessButton
                            content='+ New Card'
                            primaryBtnAction={addCardHandler}
                        />
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
        /* overflow-y: scroll; */
`;