import { createContext, useContext, Context } from 'react';
import useFirebaseAuth from './authUser';

const authUserContext = createContext({
  authUser: null,
  loading: true,
  signInWithEmailAndPassword : async (email:string, password:string)=>{},
  createUserWithEmailAndPassword : async (email:string, password:string)=>{},
  signOut: async ()=> {},
  sendPasswordResetEmail: async ()=>{}
});

export const AuthUserProvider = ({ children }: any) => {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
);
  }
export const useAuth = () => useContext(authUserContext);
