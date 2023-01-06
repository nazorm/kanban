import { createContext, useContext, Context } from 'react';
import useFirebaseAuth from './authUser';

const authUserContext = createContext({
  authUser: null,
  loading: true,
  signIn:async(data: any)=>{},
  signUp:async(data:any, userEmail:string, userName:string)=>{},
  signOut: async ()=> {},
  sendPasswordResetEmail: async ()=>{},
  getUserAdditionalData: async (arg:any)=> {},
  setAuthUser: async (arg:any)=> {},
  addNewTask: async (arg:any)=>{},

});

export const AuthUserProvider = ({ children }: any) => {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
);
  }
export const useAuth = () => useContext(authUserContext);
