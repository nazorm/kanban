const uniqueId = JSON.stringify(new Date().getTime());

export const boards = [
  {
    name: "Platform Launch",
    columns: [
      {
        name: "Doing",
        tasks: [],
      },
      {
        name: "Done",
        tasks: [],
      },
    ],
  },

  {
    name: "Marketing Plan",
    columns: [
      {
        name: "Todo",
        tasks: [
          {
            title: "Plan Product Hunt launch",
            description: "",
            status: "Todo",
            subtasks: [
              {
                title: "Find hunter",
                isCompleted: false,
              },
              {
                title: "Gather assets",
                isCompleted: false,
              },
              {
                title: "Draft product page",
                isCompleted: false,
              },
              {
                title: "Notify customers",
                isCompleted: false,
              },
              {
                title: "Notify network",
                isCompleted: false,
              },
              {
                title: "Launch!",
                isCompleted: false,
              },
            ],
          },
          {
            title: "Share on Show HN",
            description: "",
            status: "",
            subtasks: [
              {
                title: "Draft out HN post",
                isCompleted: false,
              },
              {
                title: "Get feedback and refine",
                isCompleted: false,
              },
              {
                title: "Publish post",
                isCompleted: false,
              },
            ],
          },
          {
            title: "Write launch article to publish on multiple channels",
            description: "",
            status: "",
            subtasks: [
              {
                title: "Write article",
                isCompleted: false,
              },
              {
                title: "Publish on LinkedIn",
                isCompleted: false,
              },
              {
                title: "Publish on Inndie Hackers",
                isCompleted: false,
              },
              {
                title: "Publish on Medium",
                isCompleted: false,
              },
            ],
          },
        ],
      },
      {
        name: "Doing",
        tasks: [],
      },
      {
        name: "Done",
        tasks: [],
      },
    ],
  },
  {
    name: "Roadmap",
    columns: [
      {
        name: "Now",
        tasks: [
          {
            title: "Launch version one",
            description: "",
            status: "",
            subtasks: [
              {
                title: "Launch privately to our waitlist",
                isCompleted: false,
              },
              {
                title: "Launch publicly on PH, HN, etc.",
                isCompleted: false,
              },
            ],
          },
          {
            title: "Review early feedback and plan next steps for roadmap",
            description:
              "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
            status: "",
            subtasks: [
              {
                title: "Interview 10 customers",
                isCompleted: false,
              },
              {
                title: "Review common customer pain points and suggestions",
                isCompleted: false,
              },
              {
                title: "Outline next steps for our roadmap",
                isCompleted: false,
              },
            ],
          },
        ],
      },
      {
        name: "Next",
        tasks: [],
      },
      {
        name: "Later",
        tasks: [],
      },
    ],
  },
];

export const backlog = [
  {
    title: "Build UI for onboarding flow",
    description: "",
    status: "Todo",
    subtasks: [
      {
        id: uniqueId,
        title: "Sign up page",
        isCompleted: true,
      },
      {
        id: uniqueId,
        title: "Sign in page",
        isCompleted: false,
      },
      {
        id: uniqueId,
        title: "Welcome page",
        isCompleted: false,
      },
    ],
  },
];


export const inProgress = [
  {
    title: "Design settings and search pages",
    description: "",
    status: "Doing",
    subtasks: [
      {
        id: uniqueId,
        title: "Settings - Account page",
        isCompleted: true,
      },
      {
        id: uniqueId,
        title: "Settings - Billing page",
        isCompleted: true,
      },
      {
        id: uniqueId,
        title: "Search page",
        isCompleted: false,
      },
    ],
  },
  {
    title: "Add account management endpoints",
    description: "",
    status: "Doing",
    subtasks: [
      {
        id: uniqueId,
        title: "Upgrade plan",
        isCompleted: true,
      },
      {
        id: uniqueId,
        title: "Cancel plan",
        isCompleted: true,
      },
      {
        id: uniqueId,
        title: "Update payment method",
        isCompleted: false,
      },
    ],
  },
  {
    title: "Design onboarding flow",
    description: "",
    status: "Doing",
    subtasks: [
      {
        id: uniqueId,
        title: "Sign up page",
        isCompleted: true,
      },
      {
        id: uniqueId,
        title: "Sign in page",
        isCompleted: false,
      },
      {
        id: uniqueId,
        title: "Welcome page",
        isCompleted: false,
      },
    ],
  },
  {
    title: "Add search enpoints",
    description: "",
    status: "Doing",
    subtasks: [
      {
        id: uniqueId,
        title: "Add search endpoint",
        isCompleted: true,
      },
      {
        id: uniqueId,
        title: "Define search filters",
        isCompleted: false,
      },
    ],
  },
  {
    title: "Add authentication endpoints",
    description: "",
    status: "Doing",
    subtasks: [
      {
        id: uniqueId,
        title: "Define user model",
        isCompleted: true,
      },
      {
        id: uniqueId,
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
    status: "Doing",
    subtasks: [
      {
        id: uniqueId,
        title: "Research competitor pricing and business models",
        isCompleted: true,
      },
      {
        id: uniqueId,
        title: "Outline a business model that works for our solution",
        isCompleted: false,
      },
      {
        id: uniqueId,
        title:
          "Talk to potential customers about our proposed solution and ask for fair price expectancy",
        isCompleted: false,
      },
    ],
  },
];



export const completed = [
  {
    title: "Conduct 5 wireframe tests",
    description:
      "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
    status: "Done",
    subtasks: [
      {
        id: uniqueId,
        title: "Complete 5 wireframe prototype tests",
        isCompleted: true,
      },
    ],
  },

];
