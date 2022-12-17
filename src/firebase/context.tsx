import { createContext, useContext, Context } from 'react';
import useFirebaseAuth from './authUser';

const authUserContext = createContext({
  authUser: null,
  loading: true,
  signIn:async(data: any)=>{},
  signUp:async(data:any, userEmail:string, userName:string)=>{},
  // signInWithEmailAndPassword : async (email:string, password:string)=>{},
  // createUserWithEmailAndPassword : async (email:string, password:string)=>{},
  signOut: async ()=> {},
  sendPasswordResetEmail: async ()=>{},
  // createUser: async ({uid, userEmail:string, userName})=>{},
  getUserAdditionalData: async (arg:any)=> {},
  setAuthUser: async (arg:any)=> {},

});

export const AuthUserProvider = ({ children }: any) => {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
);
  }
export const useAuth = () => useContext(authUserContext);
