import type { MainTopic } from "../types";

export const expressjsTopic: MainTopic = {
  id: "expressjs",
  title: "Express.js",
  description: "Web application framework for Node.js",
  order: 12,
  subtopics: [
    {
      id: "expressjs-introduction",
      title: "Express.js Introduction & Setup",
      description:
        "Learn what Express.js is, how to install it, create your first Express server, and understand the basics",
      order: 1,
      prerequisites: ["nodejs-environment-variables"],
      resources: [
        {
          type: "doc",
          title: "Express.js: Getting Started",
          url: "https://expressjs.com/en/starter/installing.html",
        },
        {
          type: "video",
          title: "Express.js Crash Course",
          url: "https://www.youtube.com/watch?v=SccSCuHhOw0",
        },
        {
          type: "link",
          title: "Express.js: Hello World Example",
          url: "https://expressjs.com/en/starter/hello-world.html",
        },
        {
          type: "link",
          title: "Express.js Official Documentation",
          url: "https://expressjs.com/",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "expressjs-routing",
      title: "Routing",
      description:
        "Learn how to define routes, handle HTTP methods (GET, POST, PUT, DELETE), and create route handlers",
      order: 2,
      prerequisites: ["expressjs-introduction"],
      resources: [
        {
          type: "doc",
          title: "Express.js: Routing",
          url: "https://expressjs.com/en/guide/routing.html",
        },
        {
          type: "video",
          title: "Express.js Routing Tutorial",
          url: "https://www.youtube.com/watch?v=pKd0Rpw7O48",
        },
        {
          type: "link",
          title: "Express.js: Route Methods",
          url: "https://expressjs.com/en/guide/routing.html#route-methods",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "expressjs-middleware",
      title: "Middleware",
      description:
        "Understand Express middleware, how to create custom middleware, use built-in middleware, and understand the request-response cycle",
      order: 3,
      prerequisites: ["expressjs-routing"],
      resources: [
        {
          type: "doc",
          title: "Express.js: Using Middleware",
          url: "https://expressjs.com/en/guide/using-middleware.html",
        },
        {
          type: "video",
          title: "Express.js Middleware Explained",
          url: "https://www.youtube.com/watch?v=lY6icfhap2o",
        },
        {
          type: "link",
          title: "Express.js: Writing Middleware",
          url: "https://expressjs.com/en/guide/writing-middleware.html",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "expressjs-request-response",
      title: "Request & Response Objects",
      description:
        "Learn how to access request data (params, query, body), send responses, set headers, and handle different response types",
      order: 4,
      prerequisites: ["expressjs-middleware"],
      resources: [
        {
          type: "doc",
          title: "Express.js: Request Object",
          url: "https://expressjs.com/en/api.html#req",
        },
        {
          type: "doc",
          title: "Express.js: Response Object",
          url: "https://expressjs.com/en/api.html#res",
        },
        {
          type: "video",
          title: "Express Request & Response Objects",
          url: "https://www.youtube.com/watch?v=9H6X5oZ3v8M",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "expressjs-error-handling",
      title: "Error Handling",
      description:
        "Learn how to handle errors in Express, create error middleware, and properly manage error responses",
      order: 5,
      prerequisites: ["expressjs-request-response"],
      resources: [
        {
          type: "doc",
          title: "Express.js: Error Handling",
          url: "https://expressjs.com/en/guide/error-handling.html",
        },
        {
          type: "video",
          title: "Express.js Error Handling",
          url: "https://www.youtube.com/watch?v=w1o4XIWq3CY",
        },
        {
          type: "link",
          title: "Express.js: Error Handling Best Practices",
          url: "https://expressjs.com/en/guide/error-handling.html#error-handling",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "expressjs-static-files",
      title: "Serving Static Files",
      description:
        "Learn how to serve static files (CSS, images, JavaScript) using Express static middleware",
      order: 6,
      prerequisites: ["expressjs-error-handling"],
      resources: [
        {
          type: "doc",
          title: "Express.js: Serving Static Files",
          url: "https://expressjs.com/en/starter/static-files.html",
        },
        {
          type: "link",
          title: "Express.js: express.static",
          url: "https://expressjs.com/en/api.html#express.static",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "expressjs-template-engines",
      title: "Template Engines",
      description:
        "Learn how to use template engines like EJS, Pug, or Handlebars to render dynamic HTML",
      order: 7,
      prerequisites: ["expressjs-static-files"],
      resources: [
        {
          type: "doc",
          title: "Express.js: Using Template Engines",
          url: "https://expressjs.com/en/guide/using-template-engines.html",
        },
        {
          type: "video",
          title: "Express.js with EJS Template Engine",
          url: "https://www.youtube.com/watch?v=7HqkAHBz2bE",
        },
        {
          type: "link",
          title: "Express.js: Template Engine Guide",
          url: "https://expressjs.com/en/guide/using-template-engines.html",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "expressjs-rest-api",
      title: "Building REST APIs",
      description:
        "Learn how to build RESTful APIs with Express, handle CRUD operations, and follow REST conventions",
      order: 8,
      prerequisites: ["expressjs-template-engines"],
      resources: [
        {
          type: "doc",
          title: "Express.js: REST API Guide",
          url: "https://expressjs.com/en/guide/routing.html",
        },
        {
          type: "video",
          title: "Build a REST API with Express.js",
          url: "https://www.youtube.com/watch?v=pKd0Rpw7O48",
        },
        {
          type: "link",
          title: "REST API Best Practices",
          url: "https://restfulapi.net/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "expressjs-body-parsing",
      title: "Body Parsing & JSON",
      description:
        "Learn how to parse request bodies, handle JSON data, form data, and use body-parser middleware",
      order: 9,
      prerequisites: ["expressjs-rest-api"],
      resources: [
        {
          type: "doc",
          title: "Express.js: Body Parsing",
          url: "https://expressjs.com/en/api.html#express.json",
        },
        {
          type: "link",
          title: "Express.js: express.json()",
          url: "https://expressjs.com/en/api.html#express.json",
        },
        {
          type: "video",
          title: "Express Body Parser Tutorial",
          url: "https://www.youtube.com/watch?v=WXsD0ZgxjRw",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "expressjs-cors",
      title: "CORS & Security",
      description:
        "Understand Cross-Origin Resource Sharing (CORS), how to configure it in Express, and basic security practices",
      order: 10,
      prerequisites: ["expressjs-body-parsing"],
      resources: [
        {
          type: "doc",
          title: "Express.js: CORS",
          url: "https://expressjs.com/en/resources/middleware/cors.html",
        },
        {
          type: "video",
          title: "CORS Explained",
          url: "https://www.youtube.com/watch?v=4KHiSt0oLJ0",
        },
        {
          type: "link",
          title: "MDN: CORS",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
        },
      ],
      difficulty: "intermediate",
    },
  ],
};
