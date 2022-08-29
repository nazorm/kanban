import React from 'react';
import styled from 'styled-components';
import { StyleConstants } from 'styles/StylesConstants';

export interface IActiveBoardProps {
    id: string;
    title: string,
    description?: string,
    status?: string,
    subtasks?: IActiveBoardSubTaskProps[],
}

export interface IActiveBoardSubTaskProps {
    id: string;
    title: string,
    isCompleted: boolean,
}

export const TaskCard = ({ title, description, status, subtasks }: IActiveBoardProps) => {
    return (
        <Card>
            <p className='card-title'>{title}</p>
            <span className='subtask-number'>{0} of {subtasks?.length} substasks</span>
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
        cursor:pointer;
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