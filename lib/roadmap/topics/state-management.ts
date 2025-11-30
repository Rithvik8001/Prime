import type { MainTopic } from "../types";

export const stateManagementTopic: MainTopic = {
  id: "state-management",
  title: "State Management",
  description: "Managing application state effectively",
  order: 7,
  subtopics: [
    {
      id: "state-management-context",
      title: "Context API for State Management",
      description:
        "Use React Context API for global state management, when to use it, and its limitations",
      order: 1,
      prerequisites: ["react-context"],
      resources: [
        {
          type: "doc",
          title: "React Docs: Context API",
          url: "https://react.dev/learn/passing-data-deeply-with-context",
        },
        {
          type: "link",
          title: "freeCodeCamp: Context API for State Management",
          url: "https://www.freecodecamp.org/news/react-context-api/",
        },
        {
          type: "video",
          title: "Using Context API for Global State",
          url: "https://www.youtube.com/watch?v=5LrDIWkK_Bc",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "redux-basics",
      title: "Redux Fundamentals",
      description:
        "Learn Redux core concepts: store, actions, reducers, dispatch, and the Redux data flow",
      order: 2,
      prerequisites: ["react-context"],
      resources: [
        {
          type: "doc",
          title: "Redux: Core Concepts",
          url: "https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow",
        },
        {
          type: "video",
          title: "Redux Tutorial for Beginners",
          url: "https://www.youtube.com/watch?v=CVpUuw9XSjY",
        },
        {
          type: "link",
          title: "freeCodeCamp: Redux Basics",
          url: "https://www.freecodecamp.org/news/redux-for-beginners/",
        },
        {
          type: "doc",
          title: "Redux: Three Principles",
          url: "https://redux.js.org/understanding/thinking-in-redux/three-principles",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "redux-toolkit",
      title: "Redux Toolkit",
      description:
        "Master Redux Toolkit (RTK) - the modern way to write Redux: createSlice, configureStore, and RTK Query basics",
      order: 3,
      prerequisites: ["redux-basics"],
      resources: [
        {
          type: "doc",
          title: "Redux Toolkit Documentation",
          url: "https://redux-toolkit.js.org/",
        },
        {
          type: "video",
          title: "Redux Toolkit Tutorial",
          url: "https://www.youtube.com/watch?v=9zySeP5vH9c",
        },
        {
          type: "link",
          title: "freeCodeCamp: Redux Toolkit Guide",
          url: "https://www.freecodecamp.org/news/redux-toolkit-tutorial/",
        },
        {
          type: "doc",
          title: "Redux Toolkit: Quick Start",
          url: "https://redux-toolkit.js.org/tutorials/quick-start",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "redux-react-integration",
      title: "Redux with React",
      description:
        "Connect Redux to React components using react-redux, useSelector, useDispatch hooks, and Provider",
      order: 4,
      prerequisites: ["redux-toolkit"],
      resources: [
        {
          type: "doc",
          title: "React-Redux Documentation",
          url: "https://react-redux.js.org/",
        },
        {
          type: "video",
          title: "React Redux Tutorial",
          url: "https://www.youtube.com/watch?v=9zySeP5vH9c",
        },
        {
          type: "link",
          title: "freeCodeCamp: React Redux",
          url: "https://www.freecodecamp.org/news/redux-react-guide/",
        },
        {
          type: "doc",
          title: "React-Redux: Hooks",
          url: "https://react-redux.js.org/api/hooks",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "zustand-basics",
      title: "Zustand Fundamentals",
      description:
        "Learn Zustand basics: creating stores, using hooks, updating state, and the simple API",
      order: 5,
      prerequisites: ["state-management-context"],
      resources: [
        {
          type: "doc",
          title: "Zustand: Getting Started",
          url: "https://docs.pmnd.rs/zustand/getting-started/introduction",
        },
        {
          type: "video",
          title: "Zustand Tutorial",
          url: "https://www.youtube.com/watch?v=J-g9ZJha8FE",
        },
        {
          type: "link",
          title: "freeCodeCamp: Zustand Guide",
          url: "https://www.freecodecamp.org/news/zustand-react-state-management/",
        },
        {
          type: "doc",
          title: "Zustand: Basic Usage",
          url: "https://docs.pmnd.rs/zustand/getting-started/introduction",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "zustand-advanced",
      title: "Zustand Advanced Patterns",
      description:
        "Master Zustand advanced features: TypeScript integration, middleware, devtools, persistence, and best practices",
      order: 6,
      prerequisites: ["zustand-basics"],
      resources: [
        {
          type: "doc",
          title: "Zustand: TypeScript Guide",
          url: "https://docs.pmnd.rs/zustand/guides/typescript",
        },
        {
          type: "video",
          title: "Zustand Advanced Patterns",
          url: "https://www.youtube.com/watch?v=J-g9ZJha8FE",
        },
        {
          type: "link",
          title: "Zustand: Middleware",
          url: "https://docs.pmnd.rs/zustand/guides/middleware",
        },
        {
          type: "doc",
          title: "Zustand: DevTools",
          url: "https://docs.pmnd.rs/zustand/guides/connect-to-devtools",
        },
      ],
      difficulty: "intermediate",
    },
  ],
};
