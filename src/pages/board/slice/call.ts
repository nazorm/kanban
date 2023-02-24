import { NextRouter, useRouter } from "next/router";
import axios from "axios";
import { getCurrentBoard, getSingleTask } from "../slice";
import { Dispatch, AnyAction } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { NewBoard } from "src/api/types";
const BASE_URL = "https://kanban-task-api.cyclic.app";

export const getAllCurrentBoardTasks = async (
  boardId: string | string[] | undefined,
  dispatch: Dispatch<AnyAction>,
  setLoading: any
) => {
  const token = localStorage.getItem("kanbanJwtToken");
  setLoading(true);
  await axios
    .get(`${BASE_URL}/task/allboard-tasks/${boardId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        ContentType: "application/json",
      },
    })
    .then((response) => {
      setLoading(false);
      if (response.status === 200) {
        dispatch(getCurrentBoard(response.data.data));
        toast.success('Successful');
      }
    })
    .catch((error) => {
      setLoading(false)
      console.log(error)
      toast.error('something went wrong')
    });
};


export const createBoard = async (data: NewBoard, router: string[] | NextRouter, setLoading: any) => {
    const token = localStorage.getItem("kanbanJwtToken");
    setLoading(true)
    await axios
      .post(`${BASE_URL}/board/create`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          ContentType: "application/json",
        },
      })
      .then((response) => {
        if(response.status === 200){
          setLoading(false);
          router.push(`/board/${data.name}?boardId=${response.data.data._id}`);
          toast.success('Successful');
        }

      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
        toast.error('something went wrong')
      });
  };

  export const updateBoard = async (boardId: string | string[] | undefined, updateData: { name: string; }, setLoading: any, router: string[] | NextRouter,) => {
    const token = localStorage.getItem("kanbanJwtToken");
    setLoading(true);
    await axios
      .put(`${BASE_URL}/board/${boardId}`, updateData, {
        headers: {
          Authorization: `Bearer ${token}`,
          ContentType: "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          router.push(`/board/${updateData.name}?boardId=${response.data.data._id}`);
          setLoading(false);
          toast.success('Successful');
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error)
        toast.error('something went wrong')
      });
  };

  export const addCollaborator = async (data: { email: string; boardId: string | string[] | undefined; }, setLoading: any) => {
    const token = localStorage.getItem("kanbanJwtToken");
    setLoading(true)
    await axios
      .post(`${BASE_URL}/board/add-collaborator`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          ContentType: "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setLoading(false)
          toast.success('Successful');
        }
      })
      .catch((error) => {
        setLoading(false)
        console.log(error);
        toast.error('something went wrong')
      });
  };

  export const deleteBoard = async (data: string | string[] | undefined, router: NextRouter | string[], setLoading: any) => {
    const token = localStorage.getItem("kanbanJwtToken");
    setLoading(true)
    await axios
      .delete(`${BASE_URL}/board/${data}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          ContentType: "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setLoading(false)
          router.push("/home");
          toast.success('Successful');
        }
      })
      .catch((error) => {
        setLoading(false)
        console.log(error);
        toast.error('something went wrong')
      });
  };

  export const createTask = async (data: any, setLoading:any) => {
    const token = localStorage.getItem("kanbanJwtToken");
    setLoading(true)
    await axios
      .post(`${BASE_URL}/task/create-task`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          ContentType: "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200){
          setLoading(false)
          toast.success('Successful');
        }
       
      })
      .catch((error)=>{
        setLoading(false)
        console.log(error);
        toast.error('something went wrong')
      })
  };

  export const updateTask = async(cardId:string | number, data:any, setLoading:any)=>{
    const token = localStorage.getItem("kanbanJwtToken");
    setLoading(true)
    await axios
      .patch(`${BASE_URL}/task/update/${cardId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          ContentType: "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200){
          setLoading(false)
          toast.success('Successful');
        }
       
      })
      .catch((error)=>{
        setLoading(false)
        console.log(error);
        toast.error('something went wrong')
      })
  }

  export const updateSubtaskStatus =async (subtaskId:string, setLoading: any) => {
    const token = localStorage.getItem("kanbanJwtToken");
    setLoading(true)
    await axios
      .get(`${BASE_URL}/task/update-subtask-status/${subtaskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          ContentType: "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200){
          setLoading(false)
          toast.success('Successful');
        }
       
      })
      .catch((error)=>{
        setLoading(false)
        console.log(error);
        toast.error('something went wrong')
      })
  }

  export const getSelectedSingleTask = async (taskId: string | number, setLoading:any,  dispatch: Dispatch<AnyAction>,)=>{
    const token = localStorage.getItem("kanbanJwtToken");
    setLoading(true)
    await axios
      .get(`${BASE_URL}/task/single-task/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          ContentType: "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200){
          dispatch(getSingleTask(response.data.data));
          setLoading(false)
          toast.success('Successful');
          console.log('selected', response.data.data)
        }
       
      })
      .catch((error)=>{
        setLoading(false)
        console.log(error);
        toast.error('something went wrong')
      })
  }