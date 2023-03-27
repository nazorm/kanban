
import axios from "axios";
import {  setAuthState, setUser } from ".";
import { Dispatch, AnyAction } from "@reduxjs/toolkit";
import { SetStateAction } from "react";
import { toast } from 'react-toastify';
const BASE_URL = "https://kanban-task-api.cyclic.app";

export const signIn = (data: { email: string; password: string }, router: any, setLoading: any, dispatch: Dispatch<AnyAction>) => {
    // const dispatch = useDispatch();
    setLoading(true)
    axios
      .post(`${BASE_URL}/login`, {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        if (response.status === 200){
          setLoading(false)
          dispatch(setAuthState(true))
          localStorage.setItem("kanbanJwtToken", response.data.token);
          localStorage.setItem("kanbanUser", JSON.stringify(response.data.user));
          router.push("/home");
        }else{
            setLoading(false)
            dispatch(setAuthState(false))
        }
        // setAuthUser(response.data.user);
      })
      .catch((error: any) => { 
        setLoading(false)
        dispatch(setAuthState(false))
        toast.error(error.response.data)
      });
  };


  export const signUp = (data: {email: string; password: string; fullName: string; }, router: any, setLoading: any, dispatch: Dispatch<AnyAction>) =>{
    setLoading(true);
    axios
    .post(`${BASE_URL}/signup`, {
      fullName: data.fullName,
      password: data.password,
      email: data.email,
    })
    .then((response) => {
        if ( response.status === 200 ||
          response.status === 201 ||
          response.status === 202){
          setLoading(false)
          dispatch(setAuthState(true));
          localStorage.setItem("kanbanJwtToken", response.data.token);
          localStorage.setItem("kanbanUser", JSON.stringify(response.data.user));
          router.push("/");
          dispatch(setUser(response.data.user));
          setLoading(false);   
          }else{
              setLoading(false)
              dispatch(setAuthState(false))
          }
    })
    .catch((error: any) => { 
      setLoading(false)
      dispatch(setAuthState(false))
      toast.error(error.response.data)
    });
  } 
  