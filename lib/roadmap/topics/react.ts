import type { MainTopic } from "../types";

export const reactTopic: MainTopic = {
  id: "react",
  title: "React",
  description: "A JavaScript library for building user interfaces",
  order: 6,
  subtopics: [
    {
      id: "react-basics",
      title: "React Fundamentals",
      description:
        "Learn React basics: JSX, components (functional), props, rendering, and the component tree",
      order: 1,
      prerequisites: ["js-es6", "js-dom"],
      resources: [
        {
          type: "doc",
          title: "React Docs: Getting Started",
          url: "https://react.dev/learn",
        },
        {
          type: "video",
          title: "React Tutorial for Beginners",
          url: "https://www.youtube.com/watch?v=SqcY0GlETPk",
        },
        {
          type: "link",
          title: "freeCodeCamp: React Tutorial",
          url: "https://www.freecodecamp.org/news/react-beginner-handbook/",
        },
        {
          type: "doc",
          title: "React Docs: Your First Component",
          url: "https://react.dev/learn/your-first-component",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "react-state",
      title: "State & useState Hook",
      description:
        "Manage component state with useState hook, state updates, and understanding React's rendering cycle",
      order: 2,
      prerequisites: ["react-basics"],
      resources: [
        {
          type: "doc",
          title: "React Docs: State",
          url: "https://react.dev/learn/state-a-components-memory",
        },
        {
          type: "video",
          title: "React useState Hook Tutorial",
          url: "https://www.youtube.com/watch?v=O6P86uwfdR0",
        },
        {
          type: "link",
          title: "freeCodeCamp: React useState Hook",
          url: "https://www.freecodecamp.org/news/react-usestate-hook/",
        },
        {
          type: "doc",
          title: "React Docs: useState API",
          url: "https://react.dev/reference/react/useState",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "react-effects",
      title: "useEffect Hook",
      description:
        "Handle side effects, lifecycle events, data fetching, and cleanup with useEffect hook",
      order: 3,
      prerequisites: ["react-state", "js-async"],
      resources: [
        {
          type: "doc",
          title: "React Docs: useEffect",
          url: "https://react.dev/learn/synchronizing-with-effects",
        },
        {
          type: "video",
          title: "React useEffect Hook Explained",
          url: "https://www.youtube.com/watch?v=0ZJgIjIuY7U",
        },
        {
          type: "link",
          title: "freeCodeCamp: React useEffect Hook",
          url: "https://www.freecodecamp.org/news/react-useeffect-hook/",
        },
        {
          type: "doc",
          title: "React Docs: useEffect API",
          url: "https://react.dev/reference/react/useEffect",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "react-conditional-rendering",
      title: "Conditional Rendering & Lists",
      description:
        "Render components conditionally, map over arrays to render lists, and use keys properly",
      order: 4,
      prerequisites: ["react-basics"],
      resources: [
        {
          type: "doc",
          title: "React Docs: Conditional Rendering",
          url: "https://react.dev/learn/conditional-rendering",
        },
        {
          type: "doc",
          title: "React Docs: Rendering Lists",
          url: "https://react.dev/learn/rendering-lists",
        },
        {
          type: "video",
          title: "React Conditional Rendering Tutorial",
          url: "https://www.youtube.com/watch?v=7o5FPaVA9m0",
        },
        {
          type: "link",
          title: "freeCodeCamp: React Lists and Keys",
          url: "https://www.freecodecamp.org/news/react-list-tutorial/",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "react-events",
      title: "Event Handling",
      description:
        "Handle user events in React, event objects, synthetic events, and form handling",
      order: 5,
      prerequisites: ["react-state", "js-events"],
      resources: [
        {
          type: "doc",
          title: "React Docs: Responding to Events",
          url: "https://react.dev/learn/responding-to-events",
        },
        {
          type: "video",
          title: "React Event Handling Tutorial",
          url: "https://www.youtube.com/watch?v=rg1Y8qP_F4Y",
        },
        {
          type: "link",
          title: "freeCodeCamp: React Events",
          url: "https://www.freecodecamp.org/news/react-event-handlers/",
        },
        {
          type: "doc",
          title: "React Docs: Forms",
          url: "https://react.dev/reference/react-dom/components/form",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "react-props-children",
      title: "Props & Children",
      description:
        "Pass data with props, prop types, default props, children prop, and prop drilling",
      order: 6,
      prerequisites: ["react-basics"],
      resources: [
        {
          type: "doc",
          title: "React Docs: Passing Props",
          url: "https://react.dev/learn/passing-props-to-a-component",
        },
        {
          type: "video",
          title: "React Props Tutorial",
          url: "https://www.youtube.com/watch?v=IYvD9oBCuJI",
        },
        {
          type: "link",
          title: "freeCodeCamp: React Props",
          url: "https://www.freecodecamp.org/news/react-props/",
        },
        {
          type: "doc",
          title: "React Docs: Children",
          url: "https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "react-routing",
      title: "React Router",
      description:
        "Implement client-side routing with React Router: Routes, Route, Link, NavLink, useNavigate, and nested routes",
      order: 7,
      prerequisites: ["react-props-children", "react-events"],
      resources: [
        {
          type: "doc",
          title: "React Router Documentation",
          url: "https://reactrouter.com/en/main",
        },
        {
          type: "video",
          title: "React Router Tutorial",
          url: "https://www.youtube.com/watch?v=Ul3y1LXxzdU",
        },
        {
          type: "link",
          title: "freeCodeCamp: React Router Tutorial",
          url: "https://www.freecodecamp.org/news/react-router-tutorial/",
        },
        {
          type: "doc",
          title: "React Router: Getting Started",
          url: "https://reactrouter.com/en/main/start/overview",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "react-hooks-advanced",
      title: "Advanced Hooks",
      description:
        "Master useRef, useMemo, useCallback, useContext, and custom hooks for performance and code reuse",
      order: 8,
      prerequisites: ["react-effects"],
      resources: [
        {
          type: "doc",
          title: "React Docs: Hooks API Reference",
          url: "https://react.dev/reference/react",
        },
        {
          type: "video",
          title: "React Hooks Explained",
          url: "https://www.youtube.com/watch?v=TNhaISOUy6Q",
        },
        {
          type: "link",
          title: "freeCodeCamp: React Hooks",
          url: "https://www.freecodecamp.org/news/react-hooks/",
        },
        {
          type: "doc",
          title: "React Docs: Custom Hooks",
          url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "react-performance",
      title: "Performance Optimization",
      description:
        "Optimize React apps with memo, useMemo, useCallback, code splitting, and React.memo",
      order: 9,
      prerequisites: ["react-hooks-advanced"],
      resources: [
        {
          type: "doc",
          title: "React Docs: Performance",
          url: "https://react.dev/learn/render-and-commit",
        },
        {
          type: "video",
          title: "React Performance Optimization",
          url: "https://www.youtube.com/watch?v=4FhJkX8f1F4",
        },
        {
          type: "link",
          title: "freeCodeCamp: React Performance",
          url: "https://www.freecodecamp.org/news/react-performance-optimization/",
        },
        {
          type: "doc",
          title: "React Docs: memo API",
          url: "https://react.dev/reference/react/memo",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "react-context",
      title: "Context API",
      description:
        "Share state across components without prop drilling using React Context API, useContext hook, and context providers",
      order: 10,
      prerequisites: ["react-hooks-advanced"],
      resources: [
        {
          type: "doc",
          title: "React Docs: Passing Data Deeply with Context",
          url: "https://react.dev/learn/passing-data-deeply-with-context",
        },
        {
          type: "video",
          title: "React Context API Tutorial",
          url: "https://www.youtube.com/watch?v=5LrDIWkK_Bc",
        },
        {
          type: "link",
          title: "freeCodeCamp: React Context API",
          url: "https://www.freecodecamp.org/news/react-context-api/",
        },
        {
          type: "doc",
          title: "React Docs: useContext API",
          url: "https://react.dev/reference/react/useContext",
        },
      ],
      difficulty: "intermediate",
    },
  ],
};
