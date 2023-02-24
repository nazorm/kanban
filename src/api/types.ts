export type UserBoard = {
  columnTitle: string,
    _id?: number,
    // icon: any,
    status?: string,
    tasks?:Tasks[],
    items? : Tasks[]
  }
  export type Tasks = {
    _id?:string,
    title:string,
    description: string,
    status: string,
    boardId:string,
    subtask: Subtasks[]
  }

  export type Subtasks={
    _id?: string,
    name?: string,
    isCompleted?: string,
  }
  export type NewBoard={
    name:string;
  }



  const applicationBoard=[
    {
      columnTitle:'todo',
      tasks:[
        {},
        {}
      ]
    },
    {
      columnTitle: 'doing',
      tasks:[
        {},
        {}
      ]
    },
    {
      columnTitle: 'done',
      tasks:[
        {},
        {}
      ]
    }
  ]