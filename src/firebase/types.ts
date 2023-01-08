export type UserBoard = {
    boardTitle: string,
    id: number,
    icon: any,
    status: string,
    items : Tasks[]
  }
  export type Tasks = {
    title:string,
    description: string,
    status: string,
    boardId:string,
    subtask: Subtasks[]
  }

  export type Subtasks={
    id?: number,
    title?: number,
    isCompleted?: boolean,
  }
  export type NewBoard={
    name:string;
  }