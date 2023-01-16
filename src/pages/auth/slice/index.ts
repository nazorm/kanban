import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "store/store";
import { HYDRATE } from "next-redux-wrapper";
import { AuthState } from "./types";


const initialState: AuthState = {
    authState: false,
    user: {}
  };

  export const authSlice = createSlice({
    name: 'auth',
    initialState, 
    reducers:{
        setAuthState(state, action){
            state.authState = action.payload
        },
        setUser(state, action){
            state.user = action.payload;
        }
    }
  })

export const { setAuthState , setUser} = authSlice.actions;

export const authStateSelector = (state: AppState) => state.auth.authState;
export const userSelector = (state:AppState)=> state.auth.user

export default authSlice.reducer;