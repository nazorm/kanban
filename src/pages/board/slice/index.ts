import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "store/store";
import { HYDRATE } from "next-redux-wrapper";
import { Board } from "./types";


const initialState: Board = {
   currentBoard: [],
  };

  export const activeBoard = createSlice({
    name: 'currentBoard',
    initialState, 
    reducers:{
        getCurrentBoard(state, action){
            state.currentBoard = action.payload
        },

    }
  })

export const { getCurrentBoard } = activeBoard.actions;

export const currentBoardSelector = (state: AppState) => state.currentBoard.currentBoard

export default activeBoard.reducer;