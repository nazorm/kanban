import React from 'react';
import styled from 'styled-components';
import doneIcon from '../../../assets/icons/done-icon.svg';
import doingIcon from '../../../assets/icons/doing-icon.svg';
import todoIcon from '../../../assets/icons/todo-icon.svg';
import Image from 'next/image';
import { StyleConstants } from 'styles/StylesConstants';
import { BorderlessButton } from '../../../components/Button';
import { backlog, inProgress, completed } from '../../../components/PmData';
import { TaskCard } from 'src/components/TaskCard';

export interface IActiveBoardProps {

}

export const ActiveBoard = () => {
    const uniqueId = JSON.stringify(new Date().getTime());
    console.log()
    const addBacklogCard = () => {
        console.log('todo')
    }
    const addInProgressCard = () => {
        console.log('doing')
    }
    const addCompletedCard = () => {
        console.log('done')
    }
    const addNewColumn = () => {
        console.log('new Column')
    }

    return (
        <Wrapper>
            <CarouselContainer>
                <ActiveColumn>
                    <div className='active-board-head'>
                        <Image src={todoIcon} alt='icon' className='icon' width={10} height={10} />
                        <span className='active-board-text'>BACKLOG {`(${backlog.length})`} </span>
                    </div>
                        <div className={backlog.length > 5 ? 'active-column-scroll' : 'active-column'}>
                            {backlog.length > 0 && <ActiveList>
                                {backlog.map((todo) => {
                                    return (
                                        <TaskCard key={uniqueId} id={uniqueId} title={todo.title} subtasks={todo.subtasks} />
                                    )
                                })}
                            </ActiveList>}
                        </div>

                    <BorderlessButton
                        content='+ New Card'
                        primaryBtnAction={addBacklogCard}
                    />
                </ActiveColumn>
                <ActiveColumn>
                    <div className='active-board-head'>
                        <Image src={todoIcon} alt='icon' className='icon' width={10} height={10} />
                        <span className='active-board-text'>DOING NEXT {`(${backlog.length})`} </span>
                    </div>
                        <div className={backlog.length > 5 ? 'active-column-scroll' : 'active-column'}>
                            {backlog.length > 0 && <ActiveList>
                                {backlog.map((todo) => {
                                    return (
                                        <TaskCard key={uniqueId} id={uniqueId} title={todo.title} subtasks={todo.subtasks} />
                                    )
                                })}
                            </ActiveList>}
                        </div>

                    <BorderlessButton
                        content='+ New Card'
                        primaryBtnAction={addBacklogCard}
                    />
                </ActiveColumn>
                <ActiveColumn>
                    <div className='active-board-head'>
                        <Image src={doingIcon} alt='icon' className='icon' width={10} height={10} />
                        <span className='active-board-text'>IN PROGRESS  {`(${inProgress.length})`} </span>
                    </div>
                        <div className={inProgress.length > 5 ? 'active-column-scroll' : 'active-column'}>
                            {inProgress.length > 0 && <ActiveList>
                                {inProgress.map((doing) => {
                                    return (
                                        <TaskCard key={uniqueId} id={uniqueId} title={doing.title} subtasks={doing.subtasks} />
                                    )
                                })}
                            </ActiveList>}
                        </div>

                    <BorderlessButton
                        content='+ New Card'
                        primaryBtnAction={addInProgressCard}
                    />
                </ActiveColumn>
                <ActiveColumn>
                    <div className='active-board-head'>
                        <Image src={doneIcon} alt='icon' className='icon' width={10} height={10} />
                        <span className='active-board-text'>COMPLETED  {`(${completed.length})`} </span>
                    </div>
                        <div className={completed.length > 5 ? 'active-column-scroll' : 'active-column'}>
                            {completed.length > 0 && <ActiveList>
                                {completed.map((done) => {
                                    return (
                                        <TaskCard key={uniqueId} id={uniqueId} title={done.title} subtasks={done.subtasks} />
                                    )
                                })}
                            </ActiveList>}
                        </div>

                    <BorderlessButton
                        content='+ New Card'
                        primaryBtnAction={addCompletedCard}
                    />
                </ActiveColumn>

                <ActiveColumn>
                    <div className='active-board-head'>
                        <Image src={doneIcon} alt='icon' className='icon' width={10} height={10} />
                        <span className='active-board-text'>BLOCKED  {`(${completed.length})`} </span>
                    </div>
                        <div className={completed.length > 5 ? 'active-column-scroll' : 'active-column'}>
                            {completed.length > 0 && <ActiveList>
                                {completed.map((done) => {
                                    return (
                                        <TaskCard key={uniqueId} id={uniqueId} title={done.title} subtasks={done.subtasks} />
                                    )
                                })}
                            </ActiveList>}
                        </div>

                    <BorderlessButton
                        content='+ New Card'
                        primaryBtnAction={addCompletedCard}
                    />
                </ActiveColumn>


                <NewColumn>
                    <BorderlessButton
                        content='+ New Column'
                        primaryBtnAction={addNewColumn}
                    />
                </NewColumn>

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
            font-family: 'Plus Jakarta Sans';
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

const NewColumn = styled.div`
        display: flex;
        align-items: center;
`;

const ActiveList = styled.div`
        margin: 10px;
        width: 90%;
        overflow-y: scroll;
`;