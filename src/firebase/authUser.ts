import { useState, useEffect } from 'react'
import firebase from './firebaseConfig';
import 'firebase/compat/firestore';


interface IAuthUser{
    uid?: string,
    email: string,
    password? : string
}
  const formatAuthUser = (user: IAuthUser) => ({
    uid: user.uid,
    email: user.email
  });

  export default function useFirebaseAuth(){
    const [authUser, setAuthUser] = useState<IAuthUser | null>(null);
    const [loading, setLoading] = useState(true);

const clear = ()=>{
  setAuthUser(null);
  setLoading(true);
}


const signInWithEmailAndPassword = (email:string, password:string)=>{
  return firebase.auth().signInWithEmailAndPassword(email, password);
}
const createUserWithEmailAndPassword = (email:string, password:string)=>{
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}
const signOut = ()=>{
  return firebase.auth().signOut().then(clear);
}
const sendPasswordResetEmail = (email:string)=>{
  return firebase.auth().sendPasswordResetEmail(email)
}


    // authstateChange listnening for changes in the auth state of a user
    const authStateChanged = async (authState: any) => {
        if (!authState) {
          setAuthUser(null)
          setLoading(false)
          return;
        }
        setLoading(true)
        let formattedUser = formatAuthUser(authState);
        setAuthUser(formattedUser);    
        setLoading(false);

  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
        return () => unsubscribe();
      }, []);

      return {
        authUser,
        loading,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        signOut,
        sendPasswordResetEmail,
      };

}