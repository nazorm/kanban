import doneIcon from '../assets/icons/done-icon.svg';
import doingIcon from '../assets/icons/doing-icon.svg';
import todoIcon from '../assets/icons/todo-icon.svg';
import backLogIcon from '../assets/icons/backlog-icon.svg';
import blockedIcon from '../assets/icons/blocked-icon.svg';


const uniqueId = JSON.stringify(new Date().getTime());





export const newBoardList = [
  {boardTitle: "BACKLOG", id:1, icon: backLogIcon,  items:[
    {
      title: "Build UI for onboarding flow",
      description: "",
      status: "backlog",
      id: 10,
      // subtasks: [
      //   {
      //     id: uniqueId,
      //     title: "Sign up page",
      //     isCompleted: true,
      //   },
      //   {
      //     id: uniqueId,
      //     title: "Sign in page",
      //     isCompleted: false,
      //   },
      //   {
      //     id: uniqueId,
      //     title: "Welcome page",
      //     isCompleted: false,
      //   },
      // ],
    },
  ]},

  {boardTitle: "DOING NEXT", icon: todoIcon, id:2, items:[
    {
      title: "Build UI for onboarding flow",
      description: "",
      status: "doingNext",
      id: 67,
      // subtasks: [
      //   {
      //     id: uniqueId,
      //     title: "Sign up page",
      //     isCompleted: true,
      //   },
      //   {
      //     id: uniqueId,
      //     title: "Sign in page",
      //     isCompleted: false,
      //   },
      //   {
      //     id: uniqueId,
      //     title: "Welcome page",
      //     isCompleted: false,
      //   },
      // ],
    },
  ]},




  {boardTitle: "IN PROGRESS", icon: doingIcon, id:5, items:[
    {
      title: "Design settings and search pages",
      description: "",
      status: "inProgress",
      id: 14,
      // subtasks: [
      //   {
      //     id: uniqueId,
      //     title: "Settings - Account page",
      //     isCompleted: true,
      //   },
      //   {
      //     id: uniqueId,
      //     title: "Settings - Billing page",
      //     isCompleted: true,
      //   },
      //   {
      //     id: uniqueId,
      //     title: "Search page",
      //     isCompleted: false,
      //   },
      // ],
    },
    {
      title: "Add account management endpoints",
      description: "",
      status: "inProgress",
      id: 60,
      // subtasks: [
      //   {
      //     id: uniqueId,
      //     title: "Upgrade plan",
      //     isCompleted: true,
      //   },
      //   {
      //     id: uniqueId,
      //     title: "Cancel plan",
      //     isCompleted: true,
      //   },
      //   {
      //     id: uniqueId,
      //     title: "Update payment method",
      //     isCompleted: false,
      //   },
      // ],
    },
    {
      title: "Design onboarding flow",
      description: "",
      status: "inProgress",
      id: 98,
      // subtasks: [
      //   {
      //     id: uniqueId,
      //     title: "Sign up page",
      //     isCompleted: true,
      //   },
      //   {
      //     id: uniqueId,
      //     title: "Sign in page",
      //     isCompleted: false,
      //   },
      //   {
      //     id: uniqueId,
      //     title: "Welcome page",
      //     isCompleted: false,
      //   },
      // ],
    },
    {
      title: "Add search enpoints",
      description: "",
      status: "inProgress",
      id: 89,
      // subtasks: [
      //   {
      //     id: uniqueId,
      //     title: "Add search endpoint",
      //     isCompleted: true,
      //   },
      //   {
      //     id: uniqueId,
      //     title: "Define search filters",
      //     isCompleted: false,
      //   },
      // ],
    },
    {
      title: "Add authentication endpoints",
      description: "",
      status: "inProgress",
      id: 56,
      // subtasks: [
      //   {
      //     id: uniqueId,
      //     title: "Define user model",
      //     isCompleted: true,
      //   },
      //   {
      //     id: uniqueId,
      //     title: "Add auth endpoints",
      //     isCompleted: false,
      //   },
      // ],
    },
  
    {
      title:
        "Research pricing points of various competitors and trial different business models",
      description:
        "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
      status: "inProgress",
      // id: 90,
      // subtasks: [
      //   {
      //     id: uniqueId,
      //     title: "Research competitor pricing and business models",
      //     isCompleted: true,
      //   },
      //   {
      //     id: uniqueId,
      //     title: "Outline a business model that works for our solution",
      //     isCompleted: false,
      //   },
      //   {
      //     id: uniqueId,
      //     title:
      //       "Talk to potential customers about our proposed solution and ask for fair price expectancy",
      //     isCompleted: false,
      //   },
      // ],
    },
  ]}, 







  {boardTitle: "BLOCKED", icon: blockedIcon,
  
  // id:3,
   items:[
    {
      title: "Build UI for onboarding flow",
      description: "",
      status: "blocked",
      // id: 12,
      // subtasks: [
      //   {
      //     id: uniqueId,
      //     title: "Sign up page",
      //     isCompleted: true,
      //   },
      //   {
      //     id: uniqueId,
      //     title: "Sign in page",
      //     isCompleted: false,
      //   },
      //   {
      //     id: uniqueId,
      //     title: "Welcome page",
      //     isCompleted: false,
      //   },
      // ],
    },
  ]},  


  {boardTitle: "COMPLETED", icon: doneIcon,
  //  id:4,
   items:[
    {
      title: "Conduct 5 wireframe tests",
      description:
        "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
      status: "completed",
      // id: 43,
      // subtasks: [
      //   {
      //     id: uniqueId,
      //     title: "Complete 5 wireframe prototype tests",
      //     isCompleted: true,
      //   },
      // ],
    },
    {
      title: "Conduct 5 wireframe tests",
      description:
        "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
      status: "completed",
      // id: 22,
      // subtasks: [
      //   {
      //     id: uniqueId,
      //     title: "Complete 5 wireframe prototype tests",
      //     isCompleted: true,
      //   },
      // ],
    },
    {
      title: "Conduct 5 wireframe tests",
      description:
        "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
      status: "completed",
      // id: 36,
      // subtasks: [
      //   {
      //     id: uniqueId,
      //     title: "Complete 5 wireframe prototype tests",
      //     isCompleted: true,
      //   },
      // ],
    },
    {
      title: "Conduct 5 wireframe tests",
      description:
        "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
      status: "completed",
      // id: 21,
      // subtasks: [
      //   {
      //     id: uniqueId,
      //     title: "Complete 5 wireframe prototype tests",
      //     isCompleted: true,
      //   },
      // ],
    },
    {
      title: "Conduct 5 wireframe tests",
      description:
        "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
      status: "completed",
      // id: 94,
      // subtasks: [
      //   {
      //     id: uniqueId,
      //     title: "Complete 5 wireframe prototype tests",
      //     isCompleted: true,
      //   },
      // ],
    },
    {
      title: "Conduct 5 wireframe tests",
      description:
        "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
      status: "completed",
      // id:74,
      // subtasks: [
      //   {
      //     id: uniqueId,
      //     title: "Complete 5 wireframe prototype tests",
      //     isCompleted: true,
      //   },
      // ],
    },
    {
      title: "Conduct 5 wireframe tests",
      description:
        "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
      status: "completed",
      // id: 80,
      // subtasks: [
      //   {
      //     id: uniqueId,
      //     title: "Complete 5 wireframe prototype tests",
      //     isCompleted: true,
      //   },
      // ],
    },
  ]},  








]





export const boardList = [
  {
    title: "Build UI for onboarding flow",
    description: "",
    status: "backlog",
    id: uniqueId,
    // subtasks: [
    //   {
    //     id: uniqueId,
    //     title: "Sign up page",
    //     isCompleted: true,
    //   },
    //   {
    //     id: uniqueId,
    //     title: "Sign in page",
    //     isCompleted: false,
    //   },
    //   {
    //     id: uniqueId,
    //     title: "Welcome page",
    //     isCompleted: false,
    //   },
    // ],
  },
  {
    title: "Build UI for onboarding flow",
    description: "",
    status: "doingNext",
    id: uniqueId,
    // subtasks: [
    //   {
    //     id: uniqueId,
    //     title: "Sign up page",
    //     isCompleted: true,
    //   },
    //   {
    //     id: uniqueId,
    //     title: "Sign in page",
    //     isCompleted: false,
    //   },
    //   {
    //     id: uniqueId,
    //     title: "Welcome page",
    //     isCompleted: false,
    //   },
    // ],
  },
  {
    title: "Build UI for onboarding flow",
    description: "",
    status: "blocked",
    id: uniqueId,
    // subtasks: [
    //   {
    //     id: uniqueId,
    //     title: "Sign up page",
    //     isCompleted: true,
    //   },
    //   {
    //     id: uniqueId,
    //     title: "Sign in page",
    //     isCompleted: false,
    //   },
    //   {
    //     id: uniqueId,
    //     title: "Welcome page",
    //     isCompleted: false,
    //   },
    // ],
  },
  {
    title: "Design settings and search pages",
    description: "",
    status: "inProgress",
    id: uniqueId,
    // subtasks: [
    //   {
    //     id: uniqueId,
    //     title: "Settings - Account page",
    //     isCompleted: true,
    //   },
    //   {
    //     id: uniqueId,
    //     title: "Settings - Billing page",
    //     isCompleted: true,
    //   },
    //   {
    //     id: uniqueId,
    //     title: "Search page",
    //     isCompleted: false,
    //   },
    // ],
  },
  {
    title: "Add account management endpoints",
    description: "",
    status: "inProgress",
    id: uniqueId,
    // subtasks: [
    //   {
    //     id: uniqueId,
    //     title: "Upgrade plan",
    //     isCompleted: true,
    //   },
    //   {
    //     id: uniqueId,
    //     title: "Cancel plan",
    //     isCompleted: true,
    //   },
    //   {
    //     id: uniqueId,
    //     title: "Update payment method",
    //     isCompleted: false,
    //   },
    // ],
  },
  {
    title: "Design onboarding flow",
    description: "",
    status: "inProgress",
    id: uniqueId,
    // subtasks: [
    //   {
    //     id: uniqueId,
    //     title: "Sign up page",
    //     isCompleted: true,
    //   },
    //   {
    //     id: uniqueId,
    //     title: "Sign in page",
    //     isCompleted: false,
    //   },
    //   {
    //     id: uniqueId,
    //     title: "Welcome page",
    //     isCompleted: false,
    //   },
    // ],
  },
  {
    title: "Add search enpoints",
    description: "",
    status: "inProgress",
    id: uniqueId,
    // subtasks: [
    //   {
    //     id: uniqueId,
    //     title: "Add search endpoint",
    //     isCompleted: true,
    //   },
    //   {
    //     id: uniqueId,
    //     title: "Define search filters",
    //     isCompleted: false,
    //   },
    // ],
  },
  {
    title: "Add authentication endpoints",
    description: "",
    status: "inProgress",
    id: uniqueId,
    // subtasks: [
    //   {
    //     id: uniqueId,
    //     title: "Define user model",
    //     isCompleted: true,
    //   },
    //   {
    //     id: uniqueId,
    //     title: "Add auth endpoints",
    //     isCompleted: false,
    //   },
    // ],
  },

  {
    title:
      "Research pricing points of various competitors and trial different business models",
    description:
      "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
    status: "inProgress",
    id: uniqueId,
    // subtasks: [
    //   {
    //     id: uniqueId,
    //     title: "Research competitor pricing and business models",
    //     isCompleted: true,
    //   },
    //   {
    //     id: uniqueId,
    //     title: "Outline a business model that works for our solution",
    //     isCompleted: false,
    //   },
    //   {
    //     id: uniqueId,
    //     title:
    //       "Talk to potential customers about our proposed solution and ask for fair price expectancy",
    //     isCompleted: false,
    //   },
    // ],
  },
  {
    title: "Conduct 5 wireframe tests",
    description:
      "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
    status: "completed",
    id: uniqueId,
    // subtasks: [
    //   {
    //     id: uniqueId,
    //     title: "Complete 5 wireframe prototype tests",
    //     isCompleted: true,
    //   },
    // ],
  },
]

