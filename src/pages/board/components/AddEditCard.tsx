import React, { useState, useEffect } from 'react';
import { PrimaryButton, TransparentButton } from 'src/components/Button';
import styled from 'styled-components';
import { StyleConstants } from 'styles/StylesConstants';
import closeIcon from '../../../assets/icons/close.svg';
import Image from 'next/image';

export interface IEditCardProps{
    
}

export const AddEditCard = () => {
    const [newSubtaskList, setNewSubtaskList] = useState([{
        id:1,
    }])

    const handleAddSubtask = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('done');
        // const subTaskList = document.getElementsByClassName('subtasks');
        // const subtaskInput = document.createElement('input');
        // const newSubtask = document.createElement('li').appendChild(subtaskInput);
        // subTaskList?.appendChild(newSubtask);
       const uniqueId = new Date().getTime();
        let newSubTask = {id: uniqueId};
        const subtaskList = [...newSubtaskList, newSubTask]
        setNewSubtaskList(subtaskList);
    }

    const handleRemoveSubtask = (id: number) => {
        const newList = newSubtaskList.filter((subtask) => {
            return subtask.id !== id;
        })
        setNewSubtaskList(newList);
    }
    const SubmitNewTask = (e: any) => {
        e.preventDefault();
        console.log('submitted');
    }
    return (
        <Box>
            <h3>Add New Task</h3>
            <form onSubmit={SubmitNewTask}>
                <label className='new-task-label'>Title</label>
                <input type='text' placeholder='e.g Take coffee break' className='task-input' />
                <label className='new-task-label'>Description</label>
                <textarea placeholder='e.g. It’s always good to take a break. 
                            This 15 minute break will 
                            recharge the batteries a little.' className='task-input' />
                <SubtaskContainer>
                    <label className='subtitle-heading'>Subtasks</label>
                    <ul className='subtasks'>
                        {newSubtaskList.map((subtask) => {
                            return <li key={subtask.id} className='subtask'>
                                <input type='text' placeholder='e.g Make Coffee' className='task-input' />
                                <Image src={closeIcon} alt='more' width={30} height={15} onClick={() => handleRemoveSubtask(subtask.id)} />
                            </li>
                        })}
                        <TransparentButton content='+ Add New Subtask' secondaryBtnAction={handleAddSubtask} style={{ width: '100%' }} />
                    </ul>
                </SubtaskContainer>
                <StatusContainer>
                    <label className='new-task-label'>Status</label>
                    <select style={{ width: '100%', padding: '10px' }}>
                        <option value='backlog'> Backlog</option>
                        <option value='doing next'>Doing Next</option>
                        <option value='in progress'>In Progress</option>
                        <option value='completed'>Completed</option>
                        <option value='blocked'>Blocked</option>
                    </select>
                </StatusContainer>
                <PrimaryButton content='+ Create Task' primaryBtnAction={SubmitNewTask} style={{ width: '100%', marginBottom: '20px' }} />
            </form>
        </Box>
    )
};

const Box = styled.div`
  padding: 20px 50px;
  width: 480px;
  height: 575px;
  .subtitle-heading, input::placeholder, .new-task-label{
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: ${StyleConstants.MEDIUM_GREY_COLOR};
    display: block;
}
.task-input{
    display: block;
    width: 100%;
    padding: 10px;
    margin: 5px 0 20px; 
}
select{
    outline: none;
}
`;
const SubtaskContainer = styled.div`

.subtasks{
  padding: 0;
  margin: 0;
  .subtask{
     list-style: none;
     display: flex;
     justify-content: space-between;
     align-items: center;
    }
  }
`;

const StatusContainer = styled.div`
  margin: 20px 0;
`;