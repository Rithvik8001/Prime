import type { MainTopic } from "../types";

export const nextjsFrontendTopic: MainTopic = {
  id: "nextjs-frontend",
  title: "Next.js Frontend",
  description: "React framework for production - Frontend features",
  order: 10,
  subtopics: [
    {
      id: "nextjs-setup-installation",
      title: "Next.js Setup & Installation",
      description:
        "Learn how to create a new Next.js project, understand the project structure, and configure your development environment",
      order: 1,
      prerequisites: ["react-fundamentals"],
      resources: [
        {
          type: "doc",
          title: "Next.js: Getting Started",
          url: "https://nextjs.org/docs/getting-started",
        },
        {
          type: "video",
          title: "Next.js 14 Full Course",
          url: "https://www.youtube.com/watch?v=Sklc_fQBmcs",
        },
        {
          type: "link",
          title: "Next.js Documentation: Installation",
          url: "https://nextjs.org/docs/app/building-your-application/installing",
        },
        {
          type: "link",
          title: "Next.js Project Structure",
          url: "https://nextjs.org/docs/getting-started/project-structure",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "nextjs-app-router",
      title: "App Router & File-based Routing",
      description:
        "Understand Next.js App Router, file-based routing system, dynamic routes, route groups, and parallel routes",
      order: 2,
      prerequisites: ["nextjs-setup-installation"],
      resources: [
        {
          type: "doc",
          title: "Next.js: App Router",
          url: "https://nextjs.org/docs/app",
        },
        {
          type: "doc",
          title: "Next.js: Routing",
          url: "https://nextjs.org/docs/app/building-your-application/routing",
        },
        {
          type: "video",
          title: "Next.js App Router Explained",
          url: "https://www.youtube.com/watch?v=Yt-t7N5hXKM",
        },
        {
          type: "link",
          title: "Next.js: Dynamic Routes",
          url: "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "nextjs-layouts-templates",
      title: "Layouts & Templates",
      description:
        "Learn how to create shared layouts, nested layouts, templates, and understand the difference between layouts and templates",
      order: 3,
      prerequisites: ["nextjs-app-router"],
      resources: [
        {
          type: "doc",
          title: "Next.js: Layouts",
          url: "https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts",
        },
        {
          type: "doc",
          title: "Next.js: Templates",
          url: "https://nextjs.org/docs/app/api-reference/file-conventions/template",
        },
        {
          type: "video",
          title: "Next.js Layouts Tutorial",
          url: "https://www.youtube.com/watch?v=6fNy0iD3hsk",
        },
        {
          type: "link",
          title: "Next.js: Nested Layouts",
          url: "https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#nesting-layouts",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "nextjs-client-components",
      title: "Client Components & Hooks",
      description:
        "Understand when to use client components, how to add interactivity with hooks, and the difference between server and client components",
      order: 4,
      prerequisites: ["nextjs-layouts-templates"],
      resources: [
        {
          type: "doc",
          title: "Next.js: Client Components",
          url: "https://nextjs.org/docs/app/building-your-application/rendering/client-components",
        },
        {
          type: "doc",
          title: "Next.js: Server and Client Components",
          url: "https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns",
        },
        {
          type: "video",
          title: "Server vs Client Components in Next.js",
          url: "https://www.youtube.com/watch?v=zjZ2hEf20UI",
        },
        {
          type: "link",
          title: "Next.js: When to use Client Components",
          url: "https://nextjs.org/docs/app/building-your-application/rendering/client-components#when-to-use-client-components",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "nextjs-image-optimization",
      title: "Image Optimization",
      description:
        "Learn how to use Next.js Image component for automatic image optimization, lazy loading, and responsive images",
      order: 5,
      prerequisites: ["nextjs-client-components"],
      resources: [
        {
          type: "doc",
          title: "Next.js: Image Component",
          url: "https://nextjs.org/docs/app/api-reference/components/image",
        },
        {
          type: "video",
          title: "Next.js Image Optimization",
          url: "https://www.youtube.com/watch?v=8aGf0s7l1_8",
        },
        {
          type: "link",
          title: "Next.js: Image Optimization Guide",
          url: "https://nextjs.org/docs/app/building-your-application/optimizing/images",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "nextjs-font-optimization",
      title: "Font Optimization",
      description:
        "Learn how to optimize fonts using Next.js font optimization features, including Google Fonts and custom fonts",
      order: 6,
      prerequisites: ["nextjs-image-optimization"],
      resources: [
        {
          type: "doc",
          title: "Next.js: Font Optimization",
          url: "https://nextjs.org/docs/app/building-your-application/optimizing/fonts",
        },
        {
          type: "doc",
          title: "Next.js: next/font",
          url: "https://nextjs.org/docs/app/api-reference/components/font",
        },
        {
          type: "link",
          title: "Next.js: Using Google Fonts",
          url: "https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "nextjs-static-generation",
      title: "Static Site Generation (SSG)",
      description:
        "Understand static site generation, when to use it, and how to generate static pages at build time",
      order: 7,
      prerequisites: ["nextjs-font-optimization"],
      resources: [
        {
          type: "doc",
          title: "Next.js: Static Generation",
          url: "https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic",
        },
        {
          type: "video",
          title: "Next.js Static Generation Explained",
          url: "https://www.youtube.com/watch?v=9P8mASSREYM",
        },
        {
          type: "link",
          title: "Next.js: Static vs Dynamic Rendering",
          url: "https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "nextjs-isr",
      title: "Incremental Static Regeneration (ISR)",
      description:
        "Learn how to use ISR to update static pages after build time without rebuilding the entire site",
      order: 8,
      prerequisites: ["nextjs-static-generation"],
      resources: [
        {
          type: "doc",
          title: "Next.js: Incremental Static Regeneration",
          url: "https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration",
        },
        {
          type: "video",
          title: "Next.js ISR Tutorial",
          url: "https://www.youtube.com/watch?v=BGexHR1tuOA",
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
      id: "nextjs-metadata-seo",
      title: "Metadata & SEO",
      description:
        "Learn how to add metadata, Open Graph tags, and optimize your Next.js app for search engines",
      order: 9,
      prerequisites: ["nextjs-isr"],
      resources: [
        {
          type: "doc",
          title: "Next.js: Metadata",
          url: "https://nextjs.org/docs/app/api-reference/functions/generate-metadata",
        },
        {
          type: "doc",
          title: "Next.js: SEO",
          url: "https://nextjs.org/docs/app/building-your-application/optimizing/metadata",
        },
        {
          type: "video",
          title: "Next.js SEO Tutorial",
          url: "https://www.youtube.com/watch?v=9P8mASSREYM",
        },
        {
          type: "link",
          title: "Next.js: Metadata API",
          url: "https://nextjs.org/docs/app/api-reference/functions/generate-metadata",
        },
      ],
      difficulty: "intermediate",
    },
  ],
};
