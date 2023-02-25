import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { StyleConstants } from 'styles/StylesConstants';
import { useDropzone } from "react-dropzone";
import { Subtasks } from 'src/api/types';

export interface IActiveBoardProps {
    _id?: number;
    title: string,
    description?: string,
    status?: string,
    subtasks?: Subtasks[],
    handleDragStart: (e: any) => void
    handleDragEnter: any,
    handleCardView?: () => void,
}

export interface IActiveBoardSubTaskProps {
    _id?: string;
    name?: string,
    isCompleted?: boolean,
}
export const TaskCard = ({ title, handleDragStart, handleDragEnter, handleCardView, subtasks }: IActiveBoardProps) => {
    const [completedSubtasks, setCompletedSubtasks] = useState<Subtasks[]>([]);

    useEffect(() => {
        const newCheckedList = subtasks?.filter((task) => task.isCompleted === 'true');
        setCompletedSubtasks(newCheckedList!);
    }, [subtasks])

    return (
        <Card onDragStart={handleDragStart} onDragEnter={handleDragEnter} onClick={handleCardView} draggable>
            <p className='card-title'>{title}</p>
            <span className='subtask-number'>{completedSubtasks?.length} of {subtasks?.length} substasks</span>
        </Card>

    )
}

const Card = styled.div`
    width: 90%;
    margin: 10px auto;
    padding: 5px;
    border-radius: 4px;
    background-color: ${StyleConstants.WHITE_COLOR};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    &:hover{
        cursor:move;
        background-color: rgba(142, 142, 148, 0.2);
    }
.class-title{
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    color: ${StyleConstants.BLACK_COLOR};
}
.subtask-number{
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: ${StyleConstants.MEDIUM_GREY_COLOR};
}
`;