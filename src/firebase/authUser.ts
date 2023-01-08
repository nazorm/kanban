import { useState, useEffect } from "react";
import firebase from "./firebaseConfig";
import "firebase/compat/firestore";
import { UserBoard } from "./board";
import { useRouter } from "next/router";
import axios from "axios";
import { NewBoard, Tasks } from "./types";
import { json } from "stream/consumers";

const BASE_URL = "https://kanban-task-api.cyclic.app";
interface IAuthUser {
  _id?: string;
  email?: string;
  password?: string;
  fullName?: string;
}

export default function useFirebaseAuth() {
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


  const getAllBoards = async () => {
    const token = localStorage.getItem("kanbanJwtToken");
    const userValue = localStorage.getItem('kanbanUser') as string;
    const user = JSON.parse(userValue);
  
   await axios
      .get(`${BASE_URL}/task/allboard-tasks/${user?._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          ContentType: "application/json",
        },
      })
      .then((response) => {
        console.log("all boards", response);
        const userBoard = response.data.data;
        const updatedUser = {
          ...authUser,
          userBoard,
        };
        setAuthUser(updatedUser);
      })
      .catch((error) => console.log(error));
  };

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
    router.push('/board');
  })
  .catch((error)=> console.log(error));
}


  const createTask = (data: Tasks) => {
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

  const signOut = () => {
    return firebase.auth().signOut().then(clear);
  };
  const sendPasswordResetEmail = (email: string) => {
    return firebase.auth().sendPasswordResetEmail(email);
  };

  // const createUser = (user: IAuthUser) => {
  //   return firebase
  //     .firestore()
  //     .collection("users")
  //     .doc(user.uid)
  //     .set(user)
  //     .then((response) => {
  //       console.log("after creation", response);
  //       console.log("Success");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // const getUserAdditionalData = (user: firebase.User) => {
  //   return firebase
  //     .firestore()
  //     .collection("users")
  //     .doc(user.uid)
  //     .get()
  //     .then((userData) => {
  //       if (userData.data()) {
  //         setAuthUser(userData.data());
  //       }
  //     });
  // };
  // console.log(authUser);

  // const addNewTask = (board: any) => {
  //   const updatedUser = {
  //     ...authUser,
  //     userBoard: board,
  //   };
  //   // createUser(updatedUser)
  //   return firebase
  //     .firestore()
  //     .collection("users")
  //     .doc(authUser!.uid)
  //     .set(updatedUser)
  //     .then((response) => {
  //       console.log("card submitted");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // authstateChange listening for changes in the auth state of a user
  // const authStateChanged = async (authState: any) => {
  //   if (!authState) {
  //     setAuthUser(null);
  //     setLoading(false);
  //     return;
  //   }
  //   setLoading(true);
  //   let formattedUser = formatAuthUser(authState);
  //   setAuthUser(formattedUser);
  //   // if (authUser) {
  //   //   getUserAdditionalData(authUser);
  //   // }
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
  //   return () => unsubscribe();
  // }, []);

  // update user state whenever user makes an update
  // useEffect(() => {
  //   if (authUser?.uid) {
  //     // Subscribe to user document on mount
  //     const unsubscribe = firebase
  //       .firestore()
  //       .collection("users")
  //       .doc(authUser.uid)
  //       .onSnapshot((doc) => setAuthUser(doc.data()));
  //     return () => unsubscribe();
  //   }
  // }, []);
  return {
    authUser,
    loading,
    signIn,
    signUp,
    signOut,
    sendPasswordResetEmail,
    getAllBoards,
    createBoard,
    createTask,
    // createUser,
    // getUserAdditionalData,
    setAuthUser,
    // addNewTask,
  };
}
