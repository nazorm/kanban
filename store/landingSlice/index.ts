import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "store/store";
import { HYDRATE } from "next-redux-wrapper";
import { AllBoards } from "./types";


const initialState: AllBoards = {
   allUserBoard: [],
  };

  export const allBoardSlice = createSlice({
    name: 'allboard',
    initialState, 
    reducers:{
        getAllUserBoard(state, action){
            state.allUserBoard = action.payload
        },

    }
  })

export const { getAllUserBoard } = allBoardSlice.actions;

export const userBoardSelector = (state: AppState) => state.allboard.allUserBoard

export default allBoardSlice.reducer;