import type { MainTopic } from "../types";

export const trpcTopic: MainTopic = {
  id: "trpc",
  title: "tRPC",
  description: "End-to-end typesafe APIs",
  order: 20,
  subtopics: [
    {
      id: "trpc-fundamentals",
      title: "tRPC Fundamentals",
      description:
        "Understand what tRPC is, why use it, end-to-end type safety, how it differs from REST/GraphQL, and when to use tRPC",
      order: 1,
      prerequisites: ["ts-basics", "react-fundamentals"],
      resources: [
        {
          type: "doc",
          title: "tRPC: Introduction",
          url: "https://trpc.io/docs",
        },
        {
          type: "video",
          title: "tRPC Explained",
          url: "https://www.youtube.com/watch?v=G6Cvzw2n1cI",
        },
        {
          type: "link",
          title: "tRPC: Why tRPC?",
          url: "https://trpc.io/docs/why-trpc",
        },
        {
          type: "link",
          title: "freeCodeCamp: tRPC Tutorial",
          url: "https://www.freecodecamp.org/news/trpc-tutorial/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "trpc-setup",
      title: "tRPC Setup & Installation",
      description:
        "Install tRPC, set up tRPC router, create your first tRPC procedure, and configure TypeScript for tRPC",
      order: 2,
      prerequisites: ["trpc-fundamentals", "ts-config"],
      resources: [
        {
          type: "doc",
          title: "tRPC: Quick Start",
          url: "https://trpc.io/docs/quickstart",
        },
        {
          type: "video",
          title: "tRPC Setup Tutorial",
          url: "https://www.youtube.com/watch?v=UfUbBWIFdJs",
        },
        {
          type: "link",
          title: "tRPC: Installation",
          url: "https://trpc.io/docs/install",
        },
        {
          type: "link",
          title: "tRPC: Router Setup",
          url: "https://trpc.io/docs/router",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "trpc-procedures",
      title: "Procedures: Queries & Mutations",
      description:
        "Create queries and mutations, input validation with Zod, return types, error handling, and procedure chaining",
      order: 3,
      prerequisites: ["trpc-setup", "ts-functions"],
      resources: [
        {
          type: "doc",
          title: "tRPC: Procedures",
          url: "https://trpc.io/docs/server/procedures",
        },
        {
          type: "video",
          title: "tRPC Procedures Tutorial",
          url: "https://www.youtube.com/watch?v=UfUbBWIFdJs",
        },
        {
          type: "link",
          title: "tRPC: Input Validation",
          url: "https://trpc.io/docs/server/validators",
        },
        {
          type: "link",
          title: "tRPC: Error Handling",
          url: "https://trpc.io/docs/server/error-handling",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "trpc-react-integration",
      title: "tRPC with React",
      description:
        "Set up tRPC React hooks, use useQuery and useMutation, handle loading/error states, and integrate with React Query",
      order: 4,
      prerequisites: ["trpc-procedures", "react-useeffect"],
      resources: [
        {
          type: "doc",
          title: "tRPC: React Query Integration",
          url: "https://trpc.io/docs/react",
        },
        {
          type: "video",
          title: "tRPC with React",
          url: "https://www.youtube.com/watch?v=G6Cvzw2n1cI",
        },
        {
          type: "link",
          title: "tRPC: useQuery & useMutation",
          url: "https://trpc.io/docs/react/useQuery",
        },
        {
          type: "link",
          title: "tRPC: React Query Setup",
          url: "https://trpc.io/docs/react/setup",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "trpc-nextjs",
      title: "tRPC with Next.js",
      description:
        "Integrate tRPC with Next.js App Router, create API route handlers, use tRPC in Server Components and Server Actions, and handle SSR",
      order: 5,
      prerequisites: ["trpc-react-integration", "nextjs-api-routes"],
      resources: [
        {
          type: "doc",
          title: "tRPC: Next.js Integration",
          url: "https://trpc.io/docs/nextjs",
        },
        {
          type: "video",
          title: "tRPC with Next.js",
          url: "https://www.youtube.com/watch?v=G6Cvzw2n1cI",
        },
        {
          type: "link",
          title: "tRPC: Next.js App Router",
          url: "https://trpc.io/docs/nextjs/app-router",
        },
        {
          type: "link",
          title: "tRPC: Server Components",
          url: "https://trpc.io/docs/nextjs/server-components",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "trpc-middleware",
      title: "Middleware & Context",
      description:
        "Create tRPC middleware, authentication middleware, request context, logging middleware, and custom middleware patterns",
      order: 6,
      prerequisites: ["trpc-procedures"],
      resources: [
        {
          type: "doc",
          title: "tRPC: Middleware",
          url: "https://trpc.io/docs/server/middlewares",
        },
        {
          type: "video",
          title: "tRPC Middleware Tutorial",
          url: "https://www.youtube.com/watch?v=UfUbBWIFdJs",
        },
        {
          type: "link",
          title: "tRPC: Context",
          url: "https://trpc.io/docs/server/context",
        },
        {
          type: "link",
          title: "tRPC: Authentication",
          url: "https://trpc.io/docs/server/middlewares#authentication",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "trpc-subscriptions",
      title: "Subscriptions & Real-time",
      description:
        "Implement tRPC subscriptions, real-time updates, WebSocket integration, and subscription patterns",
      order: 7,
      prerequisites: ["trpc-middleware"],
      resources: [
        {
          type: "doc",
          title: "tRPC: Subscriptions",
          url: "https://trpc.io/docs/subscriptions",
        },
        {
          type: "video",
          title: "tRPC Subscriptions",
          url: "https://www.youtube.com/watch?v=UfUbBWIFdJs",
        },
        {
          type: "link",
          title: "tRPC: WebSocket Support",
          url: "https://trpc.io/docs/subscriptions",
        },
        {
          type: "link",
          title: "Real-time Patterns",
          url: "https://trpc.io/docs/subscriptions",
        },
      ],
      difficulty: "advanced",
    },
    {
      id: "trpc-advanced",
      title: "Advanced tRPC Patterns",
      description:
        "Nested routers, router composition, batch requests, streaming, custom transformers, and performance optimization",
      order: 8,
      prerequisites: ["trpc-nextjs"],
      resources: [
        {
          type: "doc",
          title: "tRPC: Router Composition",
          url: "https://trpc.io/docs/server/routers",
        },
        {
          type: "link",
          title: "tRPC: Batching",
          url: "https://trpc.io/docs/links/httpBatchLink",
        },
        {
          type: "link",
          title: "tRPC: Streaming",
          url: "https://trpc.io/docs/links/httpBatchLink",
        },
        {
          type: "video",
          title: "Advanced tRPC Patterns",
          url: "https://www.youtube.com/watch?v=UfUbBWIFdJs",
        },
      ],
      difficulty: "advanced",
    },
    {
      id: "trpc-testing",
      title: "Testing tRPC",
      description:
        "Test tRPC procedures, mock tRPC routers, integration testing, and testing patterns for type-safe APIs",
      order: 9,
      prerequisites: ["trpc-procedures"],
      resources: [
        {
          type: "doc",
          title: "tRPC: Testing",
          url: "https://trpc.io/docs/testing",
        },
        {
          type: "link",
          title: "Testing tRPC Procedures",
          url: "https://trpc.io/docs/testing",
        },
        {
          type: "video",
          title: "Testing tRPC",
          url: "https://www.youtube.com/watch?v=UfUbBWIFdJs",
        },
        {
          type: "link",
          title: "tRPC Testing Best Practices",
          url: "https://trpc.io/docs/testing",
        },
      ],
      difficulty: "intermediate",
    },
  ],
};
