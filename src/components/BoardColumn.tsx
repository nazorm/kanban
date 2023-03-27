import React from 'react';
import styled from 'styled-components';
import { StyleConstants } from 'styles/StylesConstants';

export interface IActiveBoardProps {
    handleDragEnter: any,
    content: any;
}

export const BoardColumn = ({ handleDragEnter, content }: IActiveBoardProps) => {
    return (
        <ActiveColumn onDragEnter={handleDragEnter}>
            {content}
        </ActiveColumn>
    )
}

const ActiveColumn = styled.div`
    text-align: center;
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