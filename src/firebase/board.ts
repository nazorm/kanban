import { useState, useEffect } from 'react'
import firebase from './firebaseConfig';
import 'firebase/compat/firestore';

export type UserBoard = {
    boardTitle: string,
    id: number,
    icon: any,
    status: string,
    items : Items[]
  }
  type Items = {
    title:string,
    description: string,
    status: string,
    id:number,
    subtasks: Subtasks[]
  }
  
  type Subtasks={
    id: number,
    title: number,
    isCompleted: boolean,
  }

export default function useFirebaseBoard(){
    const [userBoard, setUserBoard] = useState()
    const [loading, setLoading] = useState(true);
}