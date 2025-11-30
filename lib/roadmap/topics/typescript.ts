import type { MainTopic } from "../types";

export const typescriptTopic: MainTopic = {
  id: "typescript",
  title: "TypeScript",
  description: "Typed superset of JavaScript",
  order: 5,
  subtopics: [
    {
      id: "ts-basics",
      title: "TypeScript Basics & Setup",
      description:
        "Learn what TypeScript is, why use it, setting up TypeScript, type annotations, and basic types (string, number, boolean)",
      order: 1,
      prerequisites: ["js-basics"],
      resources: [
        {
          type: "doc",
          title: "TypeScript Handbook: Basic Types",
          url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html",
        },
        {
          type: "video",
          title: "TypeScript Crash Course",
          url: "https://www.youtube.com/watch?v=ahCwqrYpIuM",
        },
        {
          type: "link",
          title: "freeCodeCamp: TypeScript Tutorial",
          url: "https://www.freecodecamp.org/news/learn-typescript-beginners-guide/",
        },
        {
          type: "doc",
          title: "TypeScript: Getting Started",
          url: "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "ts-type-system",
      title: "Type System Fundamentals",
      description:
        "Master TypeScript's type system: unions, intersections, type aliases, literal types, and type inference",
      order: 2,
      prerequisites: ["ts-basics"],
      resources: [
        {
          type: "doc",
          title: "TypeScript Handbook: Unions and Intersections",
          url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types",
        },
        {
          type: "video",
          title: "TypeScript Type System Explained",
          url: "https://www.youtube.com/watch?v=7qjb2-pa1SE",
        },
        {
          type: "link",
          title: "TypeScript Deep Dive: Types",
          url: "https://basarat.gitbook.io/typescript/type-system",
        },
        {
          type: "doc",
          title: "TypeScript Handbook: Type Aliases",
          url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "ts-functions",
      title: "Functions & Function Types",
      description:
        "Type functions, function parameters, return types, optional parameters, default parameters, and function overloads",
      order: 3,
      prerequisites: ["ts-basics", "js-functions-scope"],
      resources: [
        {
          type: "doc",
          title: "TypeScript Handbook: Functions",
          url: "https://www.typescriptlang.org/docs/handbook/2/functions.html",
        },
        {
          type: "video",
          title: "TypeScript Functions Tutorial",
          url: "https://www.youtube.com/watch?v=nViEqpgwxHE",
        },
        {
          type: "link",
          title: "freeCodeCamp: TypeScript Functions",
          url: "https://www.freecodecamp.org/news/typescript-functions/",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "ts-interfaces-types",
      title: "Interfaces & Type Definitions",
      description:
        "Define object shapes with interfaces and types, optional properties, readonly, extending interfaces, and type vs interface",
      order: 4,
      prerequisites: ["ts-type-system", "js-arrays-objects"],
      resources: [
        {
          type: "doc",
          title: "TypeScript Handbook: Interfaces",
          url: "https://www.typescriptlang.org/docs/handbook/2/objects.html",
        },
        {
          type: "video",
          title: "TypeScript Interfaces Tutorial",
          url: "https://www.youtube.com/watch?v=riDVvXZ_Kb4",
        },
        {
          type: "link",
          title: "TypeScript: Interface vs Type",
          url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces-vs-type-aliases",
        },
        {
          type: "link",
          title: "freeCodeCamp: TypeScript Interfaces",
          url: "https://www.freecodecamp.org/news/typescript-interfaces/",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "ts-generics",
      title: "Generics",
      description:
        "Create reusable, type-safe code with generics, generic functions, generic interfaces, and constraints",
      order: 5,
      prerequisites: ["ts-interfaces-types"],
      resources: [
        {
          type: "doc",
          title: "TypeScript Handbook: Generics",
          url: "https://www.typescriptlang.org/docs/handbook/2/generics.html",
        },
        {
          type: "video",
          title: "TypeScript Generics Tutorial",
          url: "https://www.youtube.com/watch?v=nViEqpgwxHE",
        },
        {
          type: "link",
          title: "freeCodeCamp: TypeScript Generics",
          url: "https://www.freecodecamp.org/news/typescript-generics-explained/",
        },
        {
          type: "doc",
          title: "TypeScript Handbook: Generic Constraints",
          url: "https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "ts-narrowing",
      title: "Type Narrowing & Type Guards",
      description:
        "Narrow types with type guards, typeof, instanceof, discriminated unions, and assertion functions",
      order: 6,
      prerequisites: ["ts-type-system"],
      resources: [
        {
          type: "doc",
          title: "TypeScript Handbook: Narrowing",
          url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html",
        },
        {
          type: "video",
          title: "TypeScript Type Narrowing",
          url: "https://www.youtube.com/watch?v=46a6X-fsJ78",
        },
        {
          type: "link",
          title: "TypeScript Deep Dive: Type Guards",
          url: "https://basarat.gitbook.io/typescript/type-system/typeguard",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "ts-utility-types",
      title: "Utility Types",
      description:
        "Use built-in utility types: Partial, Required, Pick, Omit, Record, and create custom utility types",
      order: 7,
      prerequisites: ["ts-generics"],
      resources: [
        {
          type: "doc",
          title: "TypeScript Handbook: Utility Types",
          url: "https://www.typescriptlang.org/docs/handbook/utility-types.html",
        },
        {
          type: "video",
          title: "TypeScript Utility Types Explained",
          url: "https://www.youtube.com/watch?v=6M6samPEMPY",
        },
        {
          type: "link",
          title: "freeCodeCamp: TypeScript Utility Types",
          url: "https://www.freecodecamp.org/news/typescript-utility-types/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "ts-config",
      title: "TypeScript Configuration",
      description:
        "Configure TypeScript with tsconfig.json, compiler options, module resolution, and strict mode",
      order: 8,
      prerequisites: ["ts-basics"],
      resources: [
        {
          type: "doc",
          title: "TypeScript Handbook: tsconfig.json",
          url: "https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",
        },
        {
          type: "link",
          title: "TypeScript Compiler Options",
          url: "https://www.typescriptlang.org/tsconfig",
        },
        {
          type: "video",
          title: "TypeScript Configuration Explained",
          url: "https://www.youtube.com/watch?v=zQnBQ4tB3ZA",
        },
        {
          type: "link",
          title: "freeCodeCamp: TypeScript Config",
          url: "https://www.freecodecamp.org/news/typescript-config/",
        },
      ],
      difficulty: "intermediate",
    },
  ],
};
