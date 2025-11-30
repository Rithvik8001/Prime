import type { MainTopic } from "../types";

export const nodejsFundamentalsTopic: MainTopic = {
  id: "nodejs-fundamentals",
  title: "Node.js Fundamentals",
  description: "JavaScript runtime for server-side development",
  order: 11,
  subtopics: [
    {
      id: "nodejs-introduction",
      title: "Node.js Introduction & Setup",
      description:
        "Understand what Node.js is, how it works, and how to set up your development environment",
      order: 1,
      prerequisites: ["javascript-fundamentals"],
      resources: [
        {
          type: "doc",
          title: "Node.js: Official Documentation",
          url: "https://nodejs.org/en/docs",
        },
        {
          type: "video",
          title: "Node.js Crash Course",
          url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
        },
        {
          type: "link",
          title: "Node.js: Getting Started",
          url: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
        },
        {
          type: "link",
          title: "MDN: Node.js Introduction",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "nodejs-modules-commonjs",
      title: "Modules & CommonJS",
      description:
        "Learn how Node.js modules work, understand CommonJS require/exports, and module patterns",
      order: 2,
      prerequisites: ["nodejs-introduction"],
      resources: [
        {
          type: "doc",
          title: "Node.js: Modules",
          url: "https://nodejs.org/api/modules.html",
        },
        {
          type: "video",
          title: "Node.js Modules Explained",
          url: "https://www.youtube.com/watch?v=xHLd36QoS4k",
        },
        {
          type: "link",
          title: "Node.js: CommonJS Modules",
          url: "https://nodejs.org/api/modules.html#modules-commonjs-modules",
        },
        {
          type: "link",
          title: "Understanding require() and module.exports",
          url: "https://www.freecodecamp.org/news/require-module-exports-node-js/",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "nodejs-es-modules",
      title: "ES Modules (ESM)",
      description:
        "Learn how to use ES6 import/export syntax in Node.js, understand the differences between CommonJS and ESM",
      order: 3,
      prerequisites: ["nodejs-modules-commonjs"],
      resources: [
        {
          type: "doc",
          title: "Node.js: ES Modules",
          url: "https://nodejs.org/api/esm.html",
        },
        {
          type: "video",
          title: "ES Modules in Node.js",
          url: "https://www.youtube.com/watch?v=mK54Cdr1X2s",
        },
        {
          type: "link",
          title: "Node.js: ES Modules vs CommonJS",
          url: "https://nodejs.org/api/esm.html#esm-commonjs-interoperability",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "nodejs-file-system",
      title: "File System (fs) Module",
      description:
        "Learn how to read, write, and manipulate files using Node.js fs module, both synchronously and asynchronously",
      order: 4,
      prerequisites: ["nodejs-es-modules"],
      resources: [
        {
          type: "doc",
          title: "Node.js: File System",
          url: "https://nodejs.org/api/fs.html",
        },
        {
          type: "video",
          title: "Node.js File System Tutorial",
          url: "https://www.youtube.com/watch?v=U57kU311-nE",
        },
        {
          type: "link",
          title: "Node.js: Reading and Writing Files",
          url: "https://nodejs.org/api/fs.html#file-system",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "nodejs-path-module",
      title: "Path Module",
      description:
        "Learn how to work with file paths, resolve paths across different operating systems, and manipulate path strings",
      order: 5,
      prerequisites: ["nodejs-file-system"],
      resources: [
        {
          type: "doc",
          title: "Node.js: Path Module",
          url: "https://nodejs.org/api/path.html",
        },
        {
          type: "link",
          title: "Node.js: Working with Paths",
          url: "https://nodejs.org/api/path.html#path",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "nodejs-events-eventemitter",
      title: "Events & EventEmitter",
      description:
        "Understand Node.js event-driven architecture, EventEmitter class, and how to create custom events",
      order: 6,
      prerequisites: ["nodejs-path-module"],
      resources: [
        {
          type: "doc",
          title: "Node.js: Events",
          url: "https://nodejs.org/api/events.html",
        },
        {
          type: "video",
          title: "Node.js Events Tutorial",
          url: "https://www.youtube.com/watch?v=l20MBBFZAmA",
        },
        {
          type: "link",
          title: "Node.js: EventEmitter",
          url: "https://nodejs.org/api/events.html#class-eventemitter",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "nodejs-streams",
      title: "Streams",
      description:
        "Learn about Node.js streams, readable/writable streams, and how to process large data efficiently",
      order: 7,
      prerequisites: ["nodejs-events-eventemitter"],
      resources: [
        {
          type: "doc",
          title: "Node.js: Streams",
          url: "https://nodejs.org/api/stream.html",
        },
        {
          type: "video",
          title: "Node.js Streams Explained",
          url: "https://www.youtube.com/watch?v=GlybFFMXXmQ",
        },
        {
          type: "link",
          title: "Node.js: Understanding Streams",
          url: "https://nodejs.org/api/stream.html#stream",
        },
      ],
      difficulty: "advanced",
    },
    {
      id: "nodejs-async-patterns",
      title: "Async Patterns & Promises",
      description:
        "Master asynchronous programming in Node.js, understand callbacks, promises, async/await, and error handling",
      order: 8,
      prerequisites: ["nodejs-streams"],
      resources: [
        {
          type: "doc",
          title: "Node.js: Async Patterns",
          url: "https://nodejs.org/en/learn/asynchronous-work",
        },
        {
          type: "video",
          title: "Node.js Async Patterns",
          url: "https://www.youtube.com/watch?v=8aGhZQkoFbQ",
        },
        {
          type: "link",
          title: "Node.js: Promises and Async/Await",
          url: "https://nodejs.org/en/learn/asynchronous-work/promises-and-async-await",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "nodejs-npm-package-json",
      title: "NPM & package.json",
      description:
        "Learn how to use npm, manage dependencies, understand package.json, and work with npm scripts",
      order: 9,
      prerequisites: ["nodejs-async-patterns"],
      resources: [
        {
          type: "doc",
          title: "NPM Documentation",
          url: "https://docs.npmjs.com/",
        },
        {
          type: "video",
          title: "NPM Tutorial for Beginners",
          url: "https://www.youtube.com/watch?v=jHDhaSSKmB0",
        },
        {
          type: "link",
          title: "Understanding package.json",
          url: "https://docs.npmjs.com/cli/v9/configuring-npm/package-json",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "nodejs-environment-variables",
      title: "Environment Variables",
      description:
        "Learn how to use environment variables in Node.js, manage different environments, and use dotenv",
      order: 10,
      prerequisites: ["nodejs-npm-package-json"],
      resources: [
        {
          type: "doc",
          title: "Node.js: Environment Variables",
          url: "https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs",
        },
        {
          type: "link",
          title: "Using dotenv in Node.js",
          url: "https://www.npmjs.com/package/dotenv",
        },
        {
          type: "video",
          title: "Environment Variables in Node.js",
          url: "https://www.youtube.com/watch?v=17UVejOw3z0",
        },
      ],
      difficulty: "beginner",
    },
  ],
};
