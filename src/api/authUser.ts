import { useState, useEffect } from "react";
import "firebase/compat/firestore";
import { useRouter } from "next/router";
import axios from "axios";
import { NewBoard, Tasks } from "./types";


const BASE_URL = "https://kanban-task-api.cyclic.app";
interface IAuthUser {
  _id?: string;
  email?: string;
  password?: string;
  fullName?: string;
}

export default function useUser() {
  const router = useRouter();
  const [authUser, setAuthUser] = useState<IAuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signIn = (data: { email: string; password: string }) => {
    setLoading(true);
    axios
      .post(`${BASE_URL}/login`, {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        console.log("this login response", response);
        localStorage.setItem("kanbanJwtToken", response.data.token);
        localStorage.setItem("kanbanUser", JSON.stringify(response.data.user));
        setAuthUser(response.data.user);
        setLoading(false);
        router.push('/home');
      })
      .catch((error: any) => console.log(error));
  };
  const signUp = (data: {
    email: string;
    password: string;
    fullName: string;
  }) => {
    setLoading(true);
    axios
      .post(`${BASE_URL}/signup`, {
        fullName: data.fullName,
        password: data.password,
        email: data.email,
      })
      .then((response) => {
        console.log("this is response ==>", response);
        localStorage.setItem("kanbanJwtToken", response.data.token);
        localStorage.setItem("kanbanUser", JSON.stringify(response.data.user));
        setAuthUser(response.data.user);
        setLoading(false);
        router.push('/home');
      })
      .catch((error: any) => console.log(error));
  };

  const getAllBoards = async ()=>{
    const token = localStorage.getItem("kanbanJwtToken");
    const userValue = localStorage.getItem('kanbanUser') as string;
    const user = JSON.parse(userValue);
  
   await axios
      .get(`${BASE_URL}/board/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
          ContentType: "application/json",
        },
      })
      .then((response) => {
        // console.log("all boards", response);
        const allBoards = response.data.data;
        const updatedUser = {
          ...authUser,
          allBoards,
        };
        setAuthUser(updatedUser);
      })
      .catch((error) => console.log(error));
  }

const getAllCurrentBoardTasks = async  (boardId:string)=>{
  const token = localStorage.getItem("kanbanJwtToken");
  // const userValue = localStorage.getItem('kanbanUser') as string;
  // const user = JSON.parse(userValue);

 await axios
    .get(`${BASE_URL}/task/allboard-tasks/${boardId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        ContentType: "application/json",
      },
    })
    .then((response) => {
      const currentBoardTasks = response.data.data;
      console.log("single", currentBoardTasks);
      const updatedUser = {
        ...authUser,
        currentBoardTasks,
      };
      setAuthUser(updatedUser);
    })
    .catch((error) => console.log(error));
}

const createBoard = async (data:NewBoard)=>{
  const token = localStorage.getItem("kanbanJwtToken");
  await axios.post(`${BASE_URL}/board/create`,
  data,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      ContentType: "application/json",
    },
  }
  )
  .then((response)=> {

    console.log('board response', response)
    router.push(`/board/${data.name}?boardId=${response.data.data._id}`);
  })
  .catch((error)=> console.log(error));
}

  // const getSingleBoard = async (boardId: string) => {
  //   const token = localStorage.getItem("kanbanJwtToken");
  
  //  await axios
  //     .get(`${BASE_URL}/board/${boardId}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         ContentType: "application/json",
  //       },
  //     })
  //     .then((response) => {
  //       console.log("sing board", response);
  //     })
  //     .catch((error) => console.log(error));
  // };




  const createTask = (data: any) => {
    const token = localStorage.getItem("kanbanJwtToken");
    axios
      .post(`${BASE_URL}/task/create-task`, 
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          ContentType: "application/json",
        },

      })
      .then((response) => {
        console.log("task response", response);
      });
  };

  // const signOut = () => {
  //   return firebase.auth().signOut().then(clear);
  // };
  // const sendPasswordResetEmail = (email: string) => {
  //   return firebase.auth().sendPasswordResetEmail(email);
  // };

  return {
    authUser,
    loading,
    signIn,
    signUp,
    // signOut,
    // sendPasswordResetEmail,
    getAllBoards,
    getAllCurrentBoardTasks,
    createBoard,
    createTask,
    setAuthUser,
  };
}
