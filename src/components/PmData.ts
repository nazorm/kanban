import doneIcon from '../assets/icons/done-icon.svg';
import doingIcon from '../assets/icons/doing-icon.svg';
import todoIcon from '../assets/icons/todo-icon.svg';
import backLogIcon from '../assets/icons/backlog-icon.svg';
import blockedIcon from '../assets/icons/blocked-icon.svg';


const uniqueId = JSON.stringify(new Date().getTime());





export const newBoardList = [
  {boardTitle: "BACKLOG", id:1, icon: backLogIcon, status: "backlog", items:[
    {
      title: "Build UI for onboarding flow",
      description: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
      status: "backlog",
      id: 10,
      subtasks: [
        {
          id: 141,
          title: "Sign up page",
          isCompleted: true,
        },
        {
          id: 145,
          title: "Sign in page",
          isCompleted: false,
        },
        {
          id: 146,
          title: "Welcome page",
          isCompleted: false,
        },
      ],
    },
  ]},

  {boardTitle: "DOING NEXT", icon: todoIcon, status: "doingNext", id:2, items:[
    {
      title: "Build UI for onboarding flow",
      description: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
      status: "doingNext",
      id: 67,
      subtasks: [
        {
          id: 147,
          title: "Sign up page",
          isCompleted: true,
        },
        {
          id: 148,
          title: "Sign in page",
          isCompleted: false,
        },
        {
          id: 149,
          title: "Welcome page",
          isCompleted: false,
        },
      ],
    },
  ]},




  {boardTitle: "IN PROGRESS", icon: doingIcon, status: "inProgress", id:5, items:[
    {
      title: "Design settings and search pages",
      description: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
      status: "inProgress",
      id: 14,
      subtasks: [
        {
          id: 150,
          title: "Settings - Account page",
          isCompleted: true,
        },
        {
          id: 151,
          title: "Settings - Billing page",
          isCompleted: true,
        },
        {
          id: 152,
          title: "Search page",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Add account management endpoints",
      description: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
      status: "inProgress",
      id: 60,
      subtasks: [
        {
          id: 153,
          title: "Upgrade plan",
          isCompleted: true,
        },
        {
          id: 154,
          title: "Cancel plan",
          isCompleted: true,
        },
        {
          id: 155,
          title: "Update payment method",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Design onboarding flow",
      description: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
      status: "inProgress",
      id: 98,
      subtasks: [
        {
          id: 156,
          title: "Sign up page",
          isCompleted: true,
        },
        {
          id: 157,
          title: "Sign in page",
          isCompleted: false,
        },
        {
          id: 158,
          title: "Welcome page",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Add search enpoints",
      description: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
      status: "inProgress",
      id: 89,
      subtasks: [
        {
          id: 159,
          title: "Add search endpoint",
          isCompleted: true,
        },
        {
          id: 159,
          title: "Define search filters",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Add authentication endpoints",
      description: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
      status: "inProgress",
      id: 56,
      subtasks: [
        {
          id: 160,
          title: "Define user model",
          isCompleted: true,
        },
        {
          id: 161,
          title: "Add auth endpoints",
          isCompleted: false,
        },
      ],
    },
  
    {
      title:
        "Research pricing points of various competitors and trial different business models",
      description:
        "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
      status: "inProgress",
      id: 90,
      subtasks: [
        {
          id: 162,
          title: "Research competitor pricing and business models",
          isCompleted: true,
        },
        {
          id: 163,
          title: "Outline a business model that works for our solution",
          isCompleted: false,
        },
        {
          id: 164,
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
        },
      ],
    },
  ]}, 







  {boardTitle: "BLOCKED", icon: blockedIcon,
  status: "blocked",
  id:3,
   items:[
    {
      title: "Build UI for onboarding flow",
      description: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
      status: "blocked",
      id: 12,
      subtasks: [
        {
          id: 31,
          title: "Sign up page",
          isCompleted: true,
        },
        {
          id: 41,
          title: "Sign in page",
          isCompleted: false,
        },
        {
          id: 51,
          title: "Welcome page",
          isCompleted: false,
        },
      ],
    },
  ]},  


  {boardTitle: "COMPLETED", icon: doneIcon,
   id:4,
   status: "completed",
   items:[
    {
      title: "Conduct wireframe tests",
      description:
        "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
      status: "completed",
      id: 43,
      subtasks: [
        {
          id: 61,
          title: "Complete 5 wireframe prototype tests",
          isCompleted: true,
        },
      ],
    },
    {
      title: "Conduct 5 wireframe tests",
      description:
        "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
      status: "completed",
      id: 22,
      subtasks: [
        {
          id: 71,
          title: "Complete 5 wireframe prototype tests",
          isCompleted: true,
        },
      ],
    },
    {
      title: "Conduct 5 wireframe tests",
      description:
        "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
      status: "completed",
      id: 36,
      subtasks: [
        {
          id: 81,
          title: "Complete 5 wireframe prototype tests",
          isCompleted: true,
        },
      ],
    },
    {
      title: "Conduct 5 wireframe tests",
      description:
        "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
      status: "completed",
      id: 21,
      subtasks: [
        {
          id: 91,
          title: "Complete 5 wireframe prototype tests",
          isCompleted: true,
        },
      ],
    },
    {
      title: "Conduct 5 wireframe tests",
      description:
        "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
      status: "completed",
      id: 94,
      subtasks: [
        {
          id: 101,
          title: "Complete 5 wireframe prototype tests",
          isCompleted: true,
        },
      ],
    },
    {
      title: "Conduct 5 wireframe tests",
      description:
        "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
      status: "completed",
      id:74,
      subtasks: [
        {
          id: 102,
          title: "Complete 5 wireframe prototype tests",
          isCompleted: true,
        },
      ],
    },
    {
      title: "Conduct 5 wireframe tests",
      description:
        "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
      status: "completed",
      id: 80,
      subtasks: [
        {
          id: 103,
          title: "Complete 5 wireframe prototype tests",
          isCompleted: true,
        },
      ],
    },
  ]
},  
]





export const boardList = [
  {
    title: "Build UI for onboarding flow",
    description: "",
    status: "backlog",
    id: 104,
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
    id: 105,
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
    id: 106,
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
    id: 107,
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
    id: 108,
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
    id: 109,
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
    id: 110,
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
    id: 111,
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
    id: 112,
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
    id: 113,
    // subtasks: [
    //   {
    //     id: uniqueId,
    //     title: "Complete 5 wireframe prototype tests",
    //     isCompleted: true,
    //   },
    // ],
  },
]

