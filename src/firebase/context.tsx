import { createContext, useContext, Context } from 'react';
import useFirebaseAuth from './authUser';
import { NewBoard, Tasks } from './types';

const authUserContext = createContext({
  authUser: null,
  loading: true,
  signIn:async(data: any)=>{},
  signUp:async(data:any)=>{},
  signOut: async ()=> {},
  sendPasswordResetEmail: async ()=>{},
  setAuthUser: async (arg:any)=> {},
  // addNewTask: async (arg:any)=>{},
  getAllBoards:async () => {},
  createTask:async (data:Tasks) => {},
  createBoard: async (data:NewBoard) => {},

});

export const AuthUserProvider = ({ children }: any) => {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
);
  }
export const useAuth = () => useContext(authUserContext);
