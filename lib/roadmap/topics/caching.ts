import type { MainTopic } from "../types";

export const cachingTopic: MainTopic = {
  id: "caching",
  title: "Caching",
  description:
    "Caching strategies and implementations for frontend and backend",
  order: 15,
  subtopics: [
    {
      id: "caching-fundamentals",
      title: "Caching Fundamentals",
      description:
        "Learn what caching is, why use it, types of caching (browser, CDN, application, database), and cache invalidation concepts",
      order: 1,
      prerequisites: ["database-fundamentals"],
      resources: [
        {
          type: "link",
          title: "What is Caching?",
          url: "https://www.cloudflare.com/learning/cdn/what-is-caching/",
        },
        {
          type: "video",
          title: "Caching Explained",
          url: "https://www.youtube.com/watch?v=6gBVa3lEMuY",
        },
        {
          type: "link",
          title: "freeCodeCamp: Caching Strategies",
          url: "https://www.freecodecamp.org/news/caching-strategies/",
        },
        {
          type: "link",
          title: "MDN: HTTP Caching",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "frontend-browser-caching",
      title: "Browser Caching",
      description:
        "Understand browser caching: HTTP cache headers (Cache-Control, ETag, Last-Modified), browser storage (localStorage, sessionStorage), and cache strategies",
      order: 2,
      prerequisites: ["caching-fundamentals"],
      resources: [
        {
          type: "doc",
          title: "MDN: HTTP Caching",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching",
        },
        {
          type: "video",
          title: "Browser Caching Explained",
          url: "https://www.youtube.com/watch?v=6gBVa3lEMuY",
        },
        {
          type: "link",
          title: "MDN: Cache-Control",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control",
        },
        {
          type: "link",
          title: "Web.dev: HTTP Caching",
          url: "https://web.dev/http-cache/",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "frontend-react-query",
      title: "React Query / TanStack Query",
      description:
        "Learn React Query for client-side data caching: queries, mutations, cache management, stale-while-revalidate pattern, and query invalidation",
      order: 3,
      prerequisites: ["frontend-browser-caching", "react-effects"],
      resources: [
        {
          type: "doc",
          title: "TanStack Query: Documentation",
          url: "https://tanstack.com/query/latest",
        },
        {
          type: "video",
          title: "React Query Tutorial",
          url: "https://www.youtube.com/watch?v=novnyCaa7To",
        },
        {
          type: "link",
          title: "TanStack Query: Getting Started",
          url: "https://tanstack.com/query/latest/docs/react/overview",
        },
        {
          type: "link",
          title: "freeCodeCamp: React Query",
          url: "https://www.freecodecamp.org/news/react-query-tutorial/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "frontend-swr",
      title: "SWR (Stale-While-Revalidate)",
      description:
        "Master SWR library for data fetching and caching: automatic revalidation, focus revalidation, error retry, and cache management",
      order: 4,
      prerequisites: ["frontend-browser-caching", "react-effects"],
      resources: [
        {
          type: "doc",
          title: "SWR: Documentation",
          url: "https://swr.vercel.app/",
        },
        {
          type: "video",
          title: "SWR Tutorial",
          url: "https://www.youtube.com/watch?v=1UY_74x5xQY",
        },
        {
          type: "link",
          title: "SWR: Getting Started",
          url: "https://swr.vercel.app/docs/getting-started",
        },
        {
          type: "link",
          title: "SWR: Data Fetching",
          url: "https://swr.vercel.app/docs/data-fetching",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "frontend-nextjs-caching",
      title: "Next.js Frontend Caching",
      description:
        "Understand Next.js frontend caching: Data Cache, Full Route Cache, Request Memoization, and cache configuration",
      order: 5,
      prerequisites: ["frontend-react-query", "nextjs-data-fetching"],
      resources: [
        {
          type: "doc",
          title: "Next.js: Caching",
          url: "https://nextjs.org/docs/app/building-your-application/data-fetching/caching",
        },
        {
          type: "video",
          title: "Next.js Caching Explained",
          url: "https://www.youtube.com/watch?v=5QnJtcrQZ9M",
        },
        {
          type: "link",
          title: "Next.js: Data Cache",
          url: "https://nextjs.org/docs/app/building-your-application/data-fetching/caching#data-cache",
        },
        {
          type: "link",
          title: "Next.js: Request Memoization",
          url: "https://nextjs.org/docs/app/building-your-application/data-fetching/caching#request-memoization",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "backend-redis-basics",
      title: "Redis Basics",
      description:
        "Get started with Redis: installation, data structures (strings, hashes, lists, sets), basic commands, and use cases",
      order: 6,
      prerequisites: ["caching-fundamentals"],
      resources: [
        {
          type: "doc",
          title: "Redis: Official Documentation",
          url: "https://redis.io/docs/",
        },
        {
          type: "video",
          title: "Redis Tutorial for Beginners",
          url: "https://www.youtube.com/watch?v=G1rOthIU-uo",
        },
        {
          type: "link",
          title: "Redis: Getting Started",
          url: "https://redis.io/docs/getting-started/",
        },
        {
          type: "link",
          title: "freeCodeCamp: Redis Tutorial",
          url: "https://www.freecodecamp.org/news/redis-tutorial/",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "backend-redis-advanced",
      title: "Redis Advanced Features",
      description:
        "Master Redis advanced features: pub/sub, transactions, Lua scripting, expiration, and Redis persistence",
      order: 7,
      prerequisites: ["backend-redis-basics"],
      resources: [
        {
          type: "doc",
          title: "Redis: Pub/Sub",
          url: "https://redis.io/docs/manual/pubsub/",
        },
        {
          type: "doc",
          title: "Redis: Transactions",
          url: "https://redis.io/docs/manual/transactions/",
        },
        {
          type: "link",
          title: "Redis: Lua Scripting",
          url: "https://redis.io/docs/manual/programmability/eval-intro/",
        },
        {
          type: "video",
          title: "Redis Advanced Features",
          url: "https://www.youtube.com/watch?v=G1rOthIU-uo",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "backend-caching-patterns",
      title: "Backend Caching Patterns",
      description:
        "Learn common backend caching patterns: Cache-Aside, Read-Through, Write-Through, Write-Behind, and when to use each",
      order: 8,
      prerequisites: ["backend-redis-basics"],
      resources: [
        {
          type: "link",
          title: "Caching Patterns",
          url: "https://aws.amazon.com/caching/caching-patterns/",
        },
        {
          type: "video",
          title: "Caching Patterns Explained",
          url: "https://www.youtube.com/watch?v=6gBVa3lEMuY",
        },
        {
          type: "link",
          title: "freeCodeCamp: Caching Patterns",
          url: "https://www.freecodecamp.org/news/caching-strategies/",
        },
        {
          type: "link",
          title: "Cache-Aside Pattern",
          url: "https://aws.amazon.com/caching/caching-patterns/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "backend-cache-invalidation",
      title: "Cache Invalidation Strategies",
      description:
        "Master cache invalidation: TTL (Time-To-Live), cache tags, manual invalidation, and handling stale data",
      order: 9,
      prerequisites: ["backend-caching-patterns"],
      resources: [
        {
          type: "link",
          title: "Cache Invalidation Strategies",
          url: "https://aws.amazon.com/caching/cache-invalidation/",
        },
        {
          type: "video",
          title: "Cache Invalidation Explained",
          url: "https://www.youtube.com/watch?v=6gBVa3lEMuY",
        },
        {
          type: "link",
          title: "freeCodeCamp: Cache Invalidation",
          url: "https://www.freecodecamp.org/news/cache-invalidation/",
        },
        {
          type: "link",
          title: "Next.js: Revalidating Data",
          url: "https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "backend-nextjs-caching",
      title: "Next.js Backend Caching",
      description:
        "Implement caching in Next.js backend: server-side caching, API route caching, and integrating Redis with Next.js",
      order: 10,
      prerequisites: ["backend-caching-patterns", "nextjs-api-routes"],
      resources: [
        {
          type: "doc",
          title: "Next.js: Server-Side Caching",
          url: "https://nextjs.org/docs/app/building-your-application/data-fetching/caching",
        },
        {
          type: "video",
          title: "Next.js Backend Caching",
          url: "https://www.youtube.com/watch?v=5QnJtcrQZ9M",
        },
        {
          type: "link",
          title: "Next.js: Route Segment Config",
          url: "https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config",
        },
        {
          type: "link",
          title: "Using Redis with Next.js",
          url: "https://nextjs.org/docs/app/building-your-application/data-fetching/caching",
        },
      ],
      difficulty: "intermediate",
    },
  ],
};
