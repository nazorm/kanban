import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "store/store";
import { HYDRATE } from "next-redux-wrapper";
import { Board } from "./types";


const initialState: Board = {
   currentBoard: [],
   singleTask: {},
  };

  export const activeBoard = createSlice({
    name: 'currentBoard',
    initialState, 
    reducers:{
        getCurrentBoard(state, action){
            state.currentBoard = action.payload
        },
        getSingleTask(state, action){
          state.singleTask = action.payload
        }

    }
  })

export const { getCurrentBoard, getSingleTask } = activeBoard.actions;

export const currentBoardSelector = (state: AppState) => state.currentBoard.currentBoard;
export const singleTaskSelector = (state:AppState)=> state.currentBoard.singleTask;

export default activeBoard.reducer;