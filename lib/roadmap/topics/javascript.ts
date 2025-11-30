import type { MainTopic } from "../types";

export const javascriptTopic: MainTopic = {
  id: "javascript",
  title: "JavaScript",
  description: "The programming language of the web",
  order: 4,
  subtopics: [
    {
      id: "js-basics",
      title: "JavaScript Fundamentals",
      description:
        "Learn variables (let, const, var), data types, operators, type coercion, and basic syntax",
      order: 1,
      prerequisites: ["html-basics"],
      resources: [
        {
          type: "doc",
          title: "MDN: JavaScript First Steps",
          url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps",
        },
        {
          type: "video",
          title: "JavaScript Crash Course for Beginners",
          url: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
        },
        {
          type: "link",
          title: "freeCodeCamp: JavaScript Basics",
          url: "https://www.freecodecamp.org/news/learn-javascript-free-js-courses-for-beginners/",
        },
        {
          type: "doc",
          title: "MDN: JavaScript Data Types",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "js-functions-scope",
      title: "Functions & Scope",
      description:
        "Master function declarations, arrow functions, function expressions, scope (global, function, block), and closures",
      order: 2,
      prerequisites: ["js-basics"],
      resources: [
        {
          type: "doc",
          title: "MDN: Functions",
          url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions",
        },
        {
          type: "video",
          title: "JavaScript Functions Explained",
          url: "https://www.youtube.com/watch?v=N8ap4k_1QEQ",
        },
        {
          type: "doc",
          title: "MDN: Closures",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
        },
        {
          type: "link",
          title: "freeCodeCamp: JavaScript Functions",
          url: "https://www.freecodecamp.org/news/javascript-functions-explained/",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "js-arrays-objects",
      title: "Arrays & Objects",
      description:
        "Work with arrays (methods, iteration) and objects (properties, methods, destructuring) - essential data structures",
      order: 3,
      prerequisites: ["js-basics"],
      resources: [
        {
          type: "doc",
          title: "MDN: Arrays",
          url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays",
        },
        {
          type: "doc",
          title: "MDN: Objects",
          url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects",
        },
        {
          type: "video",
          title: "JavaScript Arrays & Objects Tutorial",
          url: "https://www.youtube.com/watch?v=o9e0iqB3sWI",
        },
        {
          type: "link",
          title: "JavaScript.info: Arrays and Methods",
          url: "https://javascript.info/array",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "js-control-flow",
      title: "Control Flow & Loops",
      description:
        "Master conditional statements (if/else, switch), loops (for, while, forEach, map, filter), and logical operators",
      order: 4,
      prerequisites: ["js-basics"],
      resources: [
        {
          type: "doc",
          title: "MDN: Making Decisions in Code",
          url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals",
        },
        {
          type: "doc",
          title: "MDN: Looping Code",
          url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code",
        },
        {
          type: "video",
          title: "JavaScript Control Flow Tutorial",
          url: "https://www.youtube.com/watch?v=IsG4Xd6LlsM",
        },
        {
          type: "link",
          title: "JavaScript.info: Loops",
          url: "https://javascript.info/while-for",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "js-dom",
      title: "DOM Manipulation",
      description:
        "Select and manipulate HTML elements, modify content, styles, and attributes using JavaScript",
      order: 5,
      prerequisites: ["js-functions-scope", "html-semantic"],
      resources: [
        {
          type: "doc",
          title: "MDN: DOM Manipulation",
          url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents",
        },
        {
          type: "video",
          title: "JavaScript DOM Manipulation Tutorial",
          url: "https://www.youtube.com/watch?v=5fb2aPlgoys",
        },
        {
          type: "link",
          title: "freeCodeCamp: DOM Manipulation",
          url: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-explained-in-plain-english/",
        },
        {
          type: "doc",
          title: "MDN: Document Object Model",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "js-events",
      title: "Events & Event Handling",
      description:
        "Handle user interactions with event listeners, event objects, event delegation, and common event types",
      order: 6,
      prerequisites: ["js-dom"],
      resources: [
        {
          type: "doc",
          title: "MDN: Events",
          url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events",
        },
        {
          type: "video",
          title: "JavaScript Events Tutorial",
          url: "https://www.youtube.com/watch?v=XF1_MlZ5l6M",
        },
        {
          type: "link",
          title: "JavaScript.info: Events",
          url: "https://javascript.info/events",
        },
        {
          type: "doc",
          title: "MDN: Event Reference",
          url: "https://developer.mozilla.org/en-US/docs/Web/Events",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "js-async",
      title: "Asynchronous JavaScript",
      description:
        "Understand callbacks, Promises, async/await, fetch API, and handling asynchronous operations",
      order: 7,
      prerequisites: ["js-functions-scope"],
      resources: [
        {
          type: "doc",
          title: "MDN: Asynchronous JavaScript",
          url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous",
        },
        {
          type: "video",
          title: "JavaScript Async/Await Tutorial",
          url: "https://www.youtube.com/watch?v=vn3tm0quoqE",
        },
        {
          type: "link",
          title: "freeCodeCamp: JavaScript Promises",
          url: "https://www.freecodecamp.org/news/javascript-promises-explained/",
        },
        {
          type: "doc",
          title: "MDN: Fetch API",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "js-es6",
      title: "ES6+ Modern JavaScript",
      description:
        "Learn modern JavaScript features: template literals, destructuring, spread operator, modules (import/export), and more",
      order: 8,
      prerequisites: ["js-arrays-objects"],
      resources: [
        {
          type: "doc",
          title: "MDN: ES6 In Depth",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla",
        },
        {
          type: "video",
          title: "ES6+ JavaScript Features",
          url: "https://www.youtube.com/watch?v=NCwa_xi0Uuc",
        },
        {
          type: "link",
          title: "JavaScript.info: Modern JavaScript",
          url: "https://javascript.info/",
        },
        {
          type: "link",
          title: "freeCodeCamp: ES6 Features",
          url: "https://www.freecodecamp.org/news/es6-features/",
        },
      ],
      difficulty: "intermediate",
    },
  ],
};
