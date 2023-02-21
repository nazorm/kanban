import doneIcon from '../assets/icons/done-icon.svg';
import doingIcon from '../assets/icons/doing-icon.svg';
import todoIcon from '../assets/icons/todo-icon.svg';
import backLogIcon from '../assets/icons/backlog-icon.svg';
import blockedIcon from '../assets/icons/blocked-icon.svg';


const uniqueId = JSON.stringify(new Date().getTime());





export const newBoardList = [
  {columnTitle: "TODO", 
   id:1,
   icon: backLogIcon, 
   status: "todo", 
   tasks:[
    {
      title: "Build UI for onboarding flow",
      description: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
      status: "backlog",
      id: 10,
      subtasks: [
        {
          id: 141,
          subtaskTitle: "Sign up page",
          isCompleted: true,
        },
        {
          id: 145,
          subtaskTitle: "Sign in page",
          isCompleted: false,
        },
        {
          id: 146,
          subtaskTitle: "Welcome page",
          isCompleted: false,
        },
      ],
    },
  ]},

  {columnTitle: "DOING NEXT", icon: todoIcon, status: "doingNext", id:2, items:[
    {
      title: "Build UI for onboarding flow",
      description: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
      status: "doingNext",
      id: 67,
      subtasks: [
        {
          id: 147,
          subtaskTitle: "Sign up page",
          isCompleted: true,
        },
        {
          id: 148,
          subtaskTitle: "Sign in page",
          isCompleted: false,
        },
        {
          id: 149,
          subtaskTitle: "Welcome page",
          isCompleted: false,
        },
      ],
    },
  ]},




  {columnTitle: "IN PROGRESS", icon: doingIcon, status: "inProgress", id:5, items:[
    {
      title: "Design settings and search pages",
      description: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
      status: "inProgress",
      id: 14,
      subtasks: [
        {
          id: 150,
          subtaskTitle: "Settings - Account page",
          isCompleted: true,
        },
        {
          id: 151,
          subtaskTitle: "Settings - Billing page",
          isCompleted: true,
        },
        {
          id: 152,
          subtaskTitle: "Search page",
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
          subtaskTitle: "Upgrade plan",
          isCompleted: true,
        },
        {
          id: 154,
          subtaskTitle: "Cancel plan",
          isCompleted: true,
        },
        {
          id: 155,
          subtaskTitle: "Update payment method",
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
          subtaskTitle: "Sign up page",
          isCompleted: true,
        },
        {
          id: 157,
          subtaskTitle: "Sign in page",
          isCompleted: false,
        },
        {
          id: 158,
          subtaskTitle: "Welcome page",
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
          subtaskTitle: "Add search endpoint",
          isCompleted: true,
        },
        {
          id: 159,
          subtaskTitle: "Define search filters",
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
          subtaskTitle: "Define user model",
          isCompleted: true,
        },
        {
          id: 161,
          subtaskTitle: "Add auth endpoints",
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
          subtaskTitle: "Research competitor pricing and business models",
          isCompleted: true,
        },
        {
          id: 163,
          subtaskTitle: "Outline a business model that works for our solution",
          isCompleted: false,
        },
        {
          id: 164,
          subtaskTitle:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
        },
      ],
    },
  ]}, 







  {columnTitle: "BLOCKED", icon: blockedIcon,
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
          subtaskTitle: "Sign up page",
          isCompleted: true,
        },
        {
          id: 41,
          subtaskTitle: "Sign in page",
          isCompleted: false,
        },
        {
          id: 51,
          subtaskTitle: "Welcome page",
          isCompleted: false,
        },
      ],
    },
  ]},  


  {columnTitle: "COMPLETED", icon: doneIcon,
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
          subtaskTitle: "Complete 5 wireframe prototype tests",
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
          subtaskTitle: "Complete 5 wireframe prototype tests",
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
          subtaskTitle: "Complete 5 wireframe prototype tests",
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
          subtaskTitle: "Complete 5 wireframe prototype tests",
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
          subtaskTitle: "Complete 5 wireframe prototype tests",
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
          subtaskTitle: "Complete 5 wireframe prototype tests",
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
          subtaskTitle: "Complete 5 wireframe prototype tests",
          isCompleted: true,
        },
      ],
    },
  ]
},  
]



