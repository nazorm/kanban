import { createContext, useContext, Context } from 'react';
import useUser from './authUser';
import { NewBoard, Tasks } from './types';

const authUserContext = createContext({
  authUser: null,
  loading: true,
  signIn:async(data: any)=>{},
  signUp:async(data:any)=>{},
  // signOut: async ()=> {},
  // sendPasswordResetEmail: async ()=>{},
  setAuthUser: async (arg:any)=> {},
  getAllBoards:async()=>{},
  getAllCurrentBoardTasks:async (data:string | string[] | undefined) => {},
  createTask:async (data:any) => {},
  createBoard: async (data:NewBoard) => {},
  deleteBoard: async (data:string | string[] | undefined)=>{},
  updateBoard: async (data:any)=> {},
  addCollaborator:async (data:any) => {}
});

export const AuthUserProvider = ({ children }: any) => {
  const auth = useUser();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
);
  }
export const useAuth = () => useContext(authUserContext);
