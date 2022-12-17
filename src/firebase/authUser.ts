import { useState, useEffect } from "react";
import firebase from "./firebaseConfig";
import "firebase/compat/firestore";
import { UserBoard } from "./board";
import { useRouter } from "next/router";

interface IAuthUser {
  uid?: string;
  email: string;
  password?: string;
  userName?: string;
  userBoard?: UserBoard[];
}
const formatAuthUser = (user: IAuthUser) => ({
  uid: user.uid,
  email: user.email,
  userName: user.userName,
  userBoard: [],
});

export default function useFirebaseAuth() {
  const router = useRouter();
  const [authUser, setAuthUser] = useState<
    IAuthUser | firebase.firestore.DocumentData | null
  >(null);
  const [loading, setLoading] = useState(true);

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  // const signInWithEmailAndPassword = (email: string, password: string) => {
  //   return firebase.auth().signInWithEmailAndPassword(email, password);
  // };
  const signIn = (data: { email: string; password: string }) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((response) => {
        setAuthUser(response?.user);
        getUserAdditionalData(authUser);
        router.push("/board");
      })
      .catch((error) => console.log(error.message));
  };
  const signUp = (
    data: { email: string; password: string },
    userEmail: any,
    userName: any
  ) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((response) => {
        createUser({
          uid: response?.user?.uid,
          email: userEmail,
          userName,
          userBoard: [],
        });
        setAuthUser(response?.user);
        router.push("/board");
      })
      .catch((error: any) => console.log(error));
  };
  // const createUserWithEmailAndPassword = (email: string, password: string) => {
  //   return firebase.auth().createUserWithEmailAndPassword(email, password);
  // };
  const signOut = () => {
    return firebase.auth().signOut().then(clear);
  };
  const sendPasswordResetEmail = (email: string) => {
    return firebase.auth().sendPasswordResetEmail(email);
  };

  const createUser = (user: IAuthUser) => {
    return firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .set(user)
      .then((response) => {
        console.log("after creation", response);
        console.log("Success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getUserAdditionalData = (user: firebase.User) => {
    return firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .get()
      .then((userData) => {
        if (userData.data()) {
          setAuthUser(userData.data());
        }
      });
  };
  console.log(authUser);

  // authstateChange listening for changes in the auth state of a user
  const authStateChanged = async (authState: any) => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    let formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    if (authUser) {
      getUserAdditionalData(authUser);
    }
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  // update user state whenever user makes an update
  useEffect(() => {
    if (authUser?.uid) {
      // Subscribe to user document on mount
      const unsubscribe = firebase
        .firestore()
        .collection("users")
        .doc(authUser.uid)
        .onSnapshot((doc) => setAuthUser(doc.data()));
      return () => unsubscribe();
    }
  }, []);
  return {
    authUser,
    loading,
    signIn,
    signUp,
    signOut,
    sendPasswordResetEmail,
    createUser,
    getUserAdditionalData,
    setAuthUser,
  };
}
