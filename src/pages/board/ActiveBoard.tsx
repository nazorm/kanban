import React from 'react';
import styled from 'styled-components';
import doneIcon from '../../assets/icons/done-icon.svg';
import doingIcon from '../../assets/icons/doing-icon.svg';
import todoIcon from '../../assets/icons/todo-icon.svg';
import Image from 'next/image';
import { StyleConstants } from 'styles/StylesConstants';
import { BorderlessButton } from '../../components/Button';

export interface IActiveBoardProps {

}

export const ActiveBoard = () => {
    const addTodoCard = () => {
        console.log('todo')
    }
    const addDoingCard = () => {
        console.log('doing')
    }
    const addDoneCard = () => {
        console.log('done')
    }
    const addNewColumn = () => {
        console.log('new Column')
    }

    return (
        <Wrapper>
            <ActiveColumn>
                <div className='active-board-head'>
                    <Image src={todoIcon} alt='icon' className='icon' width={10}  height={10} />
                    <span>TODO {'()'} </span>
                </div>
                <div className='todo-list'>

                </div>
                <BorderlessButton
                    content='+ New Card'
                    primaryBtnAction={addTodoCard}
                />
            </ActiveColumn>
            <ActiveColumn>
                <div className='active-board-head'>
                    <Image src={doingIcon} alt='icon' className='icon' width={10}  height={10}  />
                    <span>DOING {'()'} </span>
                </div>
                <div className='doing-list'>

                </div>
                <BorderlessButton
                    content='+ New Card'
                    primaryBtnAction={addDoingCard}
                />
            </ActiveColumn>
            <ActiveColumn>
                <div className='active-board-head'>
                    <Image src={doneIcon} alt='icon' className='icon' width={10}  height={10} />
                    <span>DONE {'()'} </span>
                </div>
                <div className='done-list'>

                </div>
                <BorderlessButton
                    content='+ New Card'
                    primaryBtnAction={addDoneCard}
                />
            </ActiveColumn>
            <NewColumn>
                <BorderlessButton
                    content='+ New Column'
                    primaryBtnAction={addNewColumn}
                />
            </NewColumn>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    border: 1px solid blue;
    width: 90%;
    margin: 10px auto;
    display: flex;
`;

const ActiveColumn = styled.div`
    width: 25%;
    height: inherit;
    background-color: #dddddd;
    margin-right: 30px;
`;

const NewColumn = styled.div`
    display: flex;
    align-items: center;
`;