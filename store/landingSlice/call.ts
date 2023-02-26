import { useRouter } from "next/router";
import axios from "axios";
import {  getAllUserBoard } from ".";
import { Dispatch, AnyAction } from "@reduxjs/toolkit";
import { SetStateAction } from "react";
const BASE_URL = "https://kanban-task-api.cyclic.app";



export const getAllBoards = async (dispatch: Dispatch<AnyAction>, setLoading: any) => {
    const token = window.localStorage.getItem("kanbanJwtToken");
    const userValue = window.localStorage.getItem("kanbanUser") as string;
    const user = JSON.parse(userValue);
    setLoading(true)
    await axios
      .get(`${BASE_URL}/board/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
          ContentType: "application/json",
        },
      })
      .then((response) => {
        setLoading(false)
        if(response.status === 200){
            const allBoards = response.data.data;
            dispatch(getAllUserBoard(response.data.data))
        }
      })
      .catch((error) => console.log(error));
  };