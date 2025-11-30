import type { MainTopic } from "../types";

export const nextjsBackendTopic: MainTopic = {
  id: "nextjs-backend",
  title: "Next.js Backend",
  description: "React framework for production - Backend features",
  order: 16,
  subtopics: [
    {
      id: "nextjs-server-components",
      title: "Server Components",
      description:
        "Understand Server Components, when to use them, how they differ from Client Components, and their benefits",
      order: 1,
      prerequisites: ["nextjs-layouts-templates"],
      resources: [
        {
          type: "doc",
          title: "Next.js: Server Components",
          url: "https://nextjs.org/docs/app/building-your-application/rendering/server-components",
        },
        {
          type: "video",
          title: "Server Components Explained",
          url: "https://www.youtube.com/watch?v=zjZ2hEf20UI",
        },
        {
          type: "link",
          title: "Next.js: When to use Server vs Client Components",
          url: "https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns",
        },
        {
          type: "link",
          title: "freeCodeCamp: Next.js Server Components",
          url: "https://www.freecodecamp.org/news/nextjs-server-components/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "nextjs-server-actions",
      title: "Server Actions",
      description:
        "Learn Server Actions for form submissions, mutations, and server-side data mutations without API routes",
      order: 2,
      prerequisites: ["nextjs-server-components"],
      resources: [
        {
          type: "doc",
          title: "Next.js: Server Actions",
          url: "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations",
        },
        {
          type: "video",
          title: "Next.js Server Actions Tutorial",
          url: "https://www.youtube.com/watch?v=dDpZfOQBMaU",
        },
        {
          type: "link",
          title: "Next.js: Server Actions Guide",
          url: "https://nextjs.org/docs/app/api-reference/functions/server-actions",
        },
        {
          type: "link",
          title: "freeCodeCamp: Next.js Server Actions",
          url: "https://www.freecodecamp.org/news/nextjs-server-actions/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "nextjs-api-routes",
      title: "API Routes",
      description:
        "Create API endpoints using Next.js API routes, handle HTTP methods, request/response handling, and route handlers",
      order: 3,
      prerequisites: ["nextjs-server-actions", "expressjs-routing"],
      resources: [
        {
          type: "doc",
          title: "Next.js: Route Handlers",
          url: "https://nextjs.org/docs/app/building-your-application/routing/route-handlers",
        },
        {
          type: "video",
          title: "Next.js API Routes Tutorial",
          url: "https://www.youtube.com/watch?v=G4QN0-8ptbc",
        },
        {
          type: "link",
          title: "Next.js: API Routes Guide",
          url: "https://nextjs.org/docs/app/building-your-application/routing/route-handlers",
        },
        {
          type: "link",
          title: "freeCodeCamp: Next.js API Routes",
          url: "https://www.freecodecamp.org/news/nextjs-api-routes/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "nextjs-data-fetching",
      title: "Data Fetching Patterns",
      description:
        "Master data fetching in Next.js: async Server Components, fetch API, revalidation, and data caching",
      order: 4,
      prerequisites: ["nextjs-server-components"],
      resources: [
        {
          type: "doc",
          title: "Next.js: Data Fetching",
          url: "https://nextjs.org/docs/app/building-your-application/data-fetching",
        },
        {
          type: "video",
          title: "Next.js Data Fetching Explained",
          url: "https://www.youtube.com/watch?v=5QnJtcrQZ9M",
        },
        {
          type: "link",
          title: "Next.js: Fetching Data",
          url: "https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating",
        },
        {
          type: "link",
          title: "Next.js: Caching and Revalidation",
          url: "https://nextjs.org/docs/app/building-your-application/data-fetching/caching",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "nextjs-middleware",
      title: "Middleware",
      description:
        "Learn Next.js middleware for request interception, authentication, redirects, and request/response modification",
      order: 5,
      prerequisites: ["nextjs-api-routes"],
      resources: [
        {
          type: "doc",
          title: "Next.js: Middleware",
          url: "https://nextjs.org/docs/app/building-your-application/routing/middleware",
        },
        {
          type: "video",
          title: "Next.js Middleware Tutorial",
          url: "https://www.youtube.com/watch?v=6szFshlUtyE",
        },
        {
          type: "link",
          title: "Next.js: Middleware Guide",
          url: "https://nextjs.org/docs/app/api-reference/file-conventions/middleware",
        },
        {
          type: "link",
          title: "freeCodeCamp: Next.js Middleware",
          url: "https://www.freecodecamp.org/news/nextjs-middleware/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "nextjs-authentication",
      title: "Authentication & Authorization",
      description:
        "Implement authentication in Next.js: NextAuth.js, session management, protected routes, and authorization patterns",
      order: 6,
      prerequisites: ["nextjs-middleware"],
      resources: [
        {
          type: "doc",
          title: "Next.js: Authentication",
          url: "https://nextjs.org/docs/app/building-your-application/authentication",
        },
        {
          type: "video",
          title: "Next.js Authentication Tutorial",
          url: "https://www.youtube.com/watch?v=w2h54xz6Ndw",
        },
        {
          type: "link",
          title: "Next.js: Auth Patterns",
          url: "https://nextjs.org/docs/app/building-your-application/authentication",
        },
        {
          type: "link",
          title: "freeCodeCamp: Next.js Authentication",
          url: "https://www.freecodecamp.org/news/nextjs-authentication/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "nextjs-database-integration",
      title: "Database Integration",
      description:
        "Connect Next.js to databases: using ORMs (Drizzle), database clients, connection pooling, and best practices",
      order: 7,
      prerequisites: ["nextjs-data-fetching", "drizzle-basics"],
      resources: [
        {
          type: "doc",
          title: "Next.js: Database Integration",
          url: "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations",
        },
        {
          type: "video",
          title: "Next.js Database Integration",
          url: "https://www.youtube.com/watch?v=5QnJtcrQZ9M",
        },
        {
          type: "link",
          title: "Next.js: Using Databases",
          url: "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations",
        },
        {
          type: "link",
          title: "Drizzle with Next.js",
          url: "https://orm.drizzle.team/docs/get-started-postgresql",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "nextjs-server-side-rendering",
      title: "Server-Side Rendering (SSR)",
      description:
        "Understand Server-Side Rendering, dynamic rendering, when to use SSR vs SSG, and rendering strategies",
      order: 8,
      prerequisites: ["nextjs-static-generation"],
      resources: [
        {
          type: "doc",
          title: "Next.js: Server-Side Rendering",
          url: "https://nextjs.org/docs/app/building-your-application/rendering/server-components",
        },
        {
          type: "video",
          title: "Next.js SSR Explained",
          url: "https://www.youtube.com/watch?v=9P8mASSREYM",
        },
        {
          type: "link",
          title: "Next.js: Rendering Strategies",
          url: "https://nextjs.org/docs/app/building-your-application/rendering",
        },
        {
          type: "link",
          title: "Next.js: Dynamic Rendering",
          url: "https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "nextjs-edge-runtime",
      title: "Edge Runtime & Edge Functions",
      description:
        "Learn Edge Runtime, Edge Functions, when to use edge vs Node.js runtime, and edge-compatible APIs",
      order: 9,
      prerequisites: ["nextjs-api-routes"],
      resources: [
        {
          type: "doc",
          title: "Next.js: Edge Runtime",
          url: "https://nextjs.org/docs/app/api-reference/edge",
        },
        {
          type: "video",
          title: "Next.js Edge Runtime Tutorial",
          url: "https://www.youtube.com/watch?v=5QnJtcrQZ9M",
        },
        {
          type: "link",
          title: "Next.js: Edge Functions",
          url: "https://nextjs.org/docs/app/api-reference/edge",
        },
        {
          type: "link",
          title: "Next.js: Runtime Comparison",
          url: "https://nextjs.org/docs/app/api-reference/edge",
        },
      ],
      difficulty: "advanced",
    },
  ],
};
