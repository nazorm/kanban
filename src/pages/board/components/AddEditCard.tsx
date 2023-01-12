import React, { useState, useEffect, ChangeEvent } from 'react';
import { PrimaryBtn, TransparentButton } from 'src/components/Button';
import styled from 'styled-components';
import { StyleConstants } from 'styles/StylesConstants';
import closeIcon from '../../../assets/icons/close.svg';
import Image from 'next/image';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { ErrorText } from 'src/components/Form/TextInput';
import CheckIcon from '@mui/icons-material/Check';
import { useAuth } from 'src/api/context';
import { Subtasks } from 'src/api/types';

export interface IEditCardProps {
    title: string,
    description: string,
    status: string;
    boardId?: string;
}

const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    status: yup.string().required(),
})
const boardSchema = yup.object().shape({
    name: yup.string().required(),
})
const collaboratorSchema = yup.object().shape({
    collaboratorEmail: yup.string().required(),
})
export interface INewBoardProps {
    name: string
}

export interface ICollaboratorProps {
    collaboratorEmail: string;
}

export const AddCollaboratorCard = () => {
    const router = useRouter();
    const boardId = router.query.boardId
    const { addCollaborator } = useAuth();
    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<ICollaboratorProps>({
        resolver: yupResolver(collaboratorSchema)
    })


    const onSubmit: SubmitHandler<ICollaboratorProps> = (data) => {
        const collaborationData = {
            email: data.collaboratorEmail,
            boardId: boardId
        }
        addCollaborator(collaborationData)
    }
    return (
        <Box>
            <h3>
                Add Collaborator

            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='new-task-label'>Collaborator Email</label>
                <input type='text' placeholder='jahn@gmail.com' className='task-input' {...register("collaboratorEmail")} />
                <ErrorSpan>
                    {errors?.collaboratorEmail?.message}
                </ErrorSpan>
                <SubmitBtn style={{ width: '100%', marginTop: '20px', marginBottom: '20px', padding: '10px' }}> Submit </SubmitBtn>

            </form>
        </Box>
    )
}

export const AddEditBoard = (props: { boardParam: any; }) => {
    const router = useRouter();
    const boardId = router.query.boardId
    const { boardParam } = props
    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<INewBoardProps>({
        resolver: yupResolver(boardSchema)
    })
    const { createBoard, authUser, updateBoard } = useAuth();
    const onSubmit: SubmitHandler<INewBoardProps> = data => {
        if (boardParam === 'new') {
            createBoard(data);
        } else {
            const updateData = {
                name: data.name,
            }

            updateBoard({ boardId, updateData })
        }
    }

    return (
        <Box>
            <h3>
                {boardParam === 'new' ? 'Create board' : 'Update board'}

            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='new-task-label'>Name</label>
                <input type='text' placeholder='e.g Work' className='task-input' {...register("name")} />
                <ErrorSpan>
                    {errors?.name?.message}
                </ErrorSpan>
                <SubmitBtn style={{ width: '100%', marginTop: '20px', marginBottom: '20px', padding: '10px' }}> Submit </SubmitBtn>

            </form>
        </Box>
    )
}




export const AddEditCard = () => {
    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IEditCardProps>({
        resolver: yupResolver(schema)
    })
    const { createTask, authUser } = useAuth();
    const router = useRouter();
    const boardId = router.query.boardId

    const [subtaskList, setSubtaskList] = useState<string[]>([])
    const [newSubtask, setNewSubtask] = useState('')

    const handleAddSubtask = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // const uniqueId = new Date().getTime();
        // let newSubTask = {
        //     _id: JSON.stringify(uniqueId),
        //     title: newSubtask,
        //     isCompleted: false,
        // };
        // const newSubtasklist = [...subtaskList, newSubTask]
        // setSubtaskList(newSubtasklist);
        setSubtaskList([...subtaskList, newSubtask])
    }
    const changeSubtask = (event: ChangeEvent<HTMLInputElement>) => {
        setNewSubtask(event.target.value);
    }

    // const handleRemoveSubtask = (id: string) => {
    //     const newList = subtaskList.filter((subtask) => {
    //         return subtask._id !== id;
    //     })
    //     setSubtaskList(newList);
    // }
    const onSubmit: SubmitHandler<IEditCardProps> = data => {
        const newCardData = {
            ...data,
            subtask: subtaskList,
            boardId: boardId
        }
        console.log('sending task', newCardData)
        createTask(newCardData);
    }
    return (
        <Box>
            <h3>Add New Task</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='new-task-label'>Title</label>
                <input type='text' placeholder='e.g Take coffee break' className='task-input' {...register("title")} />
                <ErrorSpan>
                    {errors?.title?.message}
                </ErrorSpan>

                <label className='new-task-label'>Description</label>
                <textarea  {...register("description")} placeholder='e.g. It’s always good to take a break. 
                            This 15 minute break will 
                            recharge the batteries a little.' className='task-input' />
                <ErrorSpan>
                    {errors?.description?.message}
                </ErrorSpan>
                <SubtaskContainer>
                    <label className='subtitle-heading'>Subtasks</label>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type='text' placeholder='e.g Make Coffee' className='task-input' onChange={changeSubtask} style={{ display: 'inline' }} />
                        <CheckIcon onClick={handleAddSubtask} style={{ color: `${StyleConstants.ACCENT_COLOR}` }} />
                    </div>
                    <ul className='subtasks' >
                        {subtaskList?.map((subtask, index) => {
                            return <li key={index} className='subtask'>
                                <input type='text' placeholder='e.g Make Coffee' className='task-input' value={subtask} />
                                {/* <Image src={closeIcon} alt='more' width={30} height={15} onClick={() => handleRemoveSubtask(subtask?._id!)} /> */}
                            </li>
                        })}
                        {/* <TransparentButton content='+ Add New Subtask' secondaryBtnAction={handleAddSubtask} style={{ width: '100%' }} /> */}
                    </ul>
                </SubtaskContainer>
                <StatusContainer>
                    <label className='new-task-label'>Status</label>
                    <select {...register("status")}
                        style={{ width: '100%', padding: '10px' }}>
                        <option value=''> Status</option>
                        <option value='backlog'> Backlog</option>
                        <option value='doing next'>Doing Next</option>
                        <option value='in progress'>In Progress</option>
                        <option value='completed'>Completed</option>
                        <option value='blocked'>Blocked</option>
                    </select>
                </StatusContainer>
                <ErrorSpan>
                    {errors?.status?.message}
                </ErrorSpan>
                <SubmitBtn style={{ width: '100%', marginTop: '20px', marginBottom: '20px', padding: '10px' }}> + Create Task </SubmitBtn>
            </form>
        </Box>
    )
};

const Box = styled.div`
  padding: 20px 50px;
  width: 480px;
  height: inherit;
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

const ErrorSpan = styled(ErrorText)`
`;
const SubmitBtn = styled(PrimaryBtn)`
`;
const Btn = styled(PrimaryBtn)``;