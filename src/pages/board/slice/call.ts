import { NextRouter, useRouter } from "next/router";
import axios from "axios";
import { getCurrentBoard } from "../slice";
import { Dispatch, AnyAction } from "@reduxjs/toolkit";
// import { Dispatch, SetStateAction } from "react";
import { NewBoard } from "src/api/types";
const BASE_URL = "https://kanban-task-api.cyclic.app";

export const getAllCurrentBoardTasks = async (
  boardId: string | string[] | undefined,
  dispatch: Dispatch<AnyAction>,
  setLoading: any
) => {
  const token = localStorage.getItem("kanbanJwtToken");
  // const userValue = localStorage.getItem('kanbanUser') as string;
  // const user = JSON.parse(userValue);
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
      }
    })
    .catch((error) => {
      setLoading(false)
      console.log(error)
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
          console.log("board response", response);
          router.push(`/board/${data.name}?boardId=${response.data.data._id}`);
        }

      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      });
  };

  export const updateBoard = async (boardId: string | string[] | undefined, updateData: { name: string; }, setLoading: any) => {
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
          setLoading(false);
          console.log(response);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error)
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
          console.log(response);
        }
      })
      .catch((error) => {
        setLoading(false)
        console.log(error);
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
        console.log(response);
        if (response.status === 200) {
          setLoading(false)
          router.push("/home");
          // const newBoardList = authUser?.allBoards
        }
      })
      .catch((error) => {
        setLoading(false)
        console.log(error);
      });
  };

  const createTask = (data: any) => {
    const token = localStorage.getItem("kanbanJwtToken");
    axios
      .post(`${BASE_URL}/task/create-task`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          ContentType: "application/json",
        },
      })
      .then((response) => {
        console.log("task response", response);
      });
  };