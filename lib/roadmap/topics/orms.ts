import type { MainTopic } from "../types";

export const ormsTopic: MainTopic = {
  id: "orms",
  title: "ORMs",
  description: "Object-Relational Mapping tools for database interactions",
  order: 14,
  subtopics: [
    {
      id: "orm-fundamentals",
      title: "ORM Fundamentals",
      description:
        "Learn what ORMs are, why use them, benefits and drawbacks, and how they abstract database operations. Note: This roadmap focuses on Drizzle ORM, but you can also check out Prisma as an alternative ORM option.",
      order: 1,
      prerequisites: ["sql-basics", "postgresql-basics"],
      resources: [
        {
          type: "link",
          title: "What is an ORM?",
          url: "https://www.prisma.io/dataguide/types/relational/what-is-an-orm",
        },
        {
          type: "video",
          title: "What is an ORM?",
          url: "https://www.youtube.com/watch?v=S9uPnppG8p0",
        },
        {
          type: "link",
          title: "freeCodeCamp: ORM Explained",
          url: "https://www.freecodecamp.org/news/what-is-an-orm/",
        },
        {
          type: "link",
          title: "ORM vs Raw SQL: When to Use What",
          url: "https://www.prisma.io/dataguide/types/relational/orms-vs-raw-sql",
        },
        {
          type: "link",
          title: "Prisma Documentation (Alternative)",
          url: "https://www.prisma.io/docs",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "drizzle-basics",
      title: "Drizzle ORM Basics",
      description:
        "Get started with Drizzle ORM: installation, schema definition, Drizzle Kit, and basic queries",
      order: 2,
      prerequisites: ["orm-fundamentals"],
      resources: [
        {
          type: "doc",
          title: "Drizzle ORM: Documentation",
          url: "https://orm.drizzle.team/docs/overview",
        },
        {
          type: "video",
          title: "Drizzle ORM Tutorial",
          url: "https://www.youtube.com/watch?v=5iz69WHqOx4",
        },
        {
          type: "link",
          title: "Drizzle: Getting Started",
          url: "https://orm.drizzle.team/docs/get-started-postgresql",
        },
        {
          type: "link",
          title: "Drizzle ORM: Why Drizzle?",
          url: "https://orm.drizzle.team/docs/overview",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "drizzle-schema",
      title: "Drizzle Schema Definition",
      description:
        "Master Drizzle schema definitions: tables, columns, types, relations, and schema organization",
      order: 3,
      prerequisites: ["drizzle-basics"],
      resources: [
        {
          type: "doc",
          title: "Drizzle: Schema Overview",
          url: "https://orm.drizzle.team/docs/schema-overview",
        },
        {
          type: "doc",
          title: "Drizzle: Table Definitions",
          url: "https://orm.drizzle.team/docs/schema-common",
        },
        {
          type: "link",
          title: "Drizzle: Column Types",
          url: "https://orm.drizzle.team/docs/column-types/postgresql",
        },
        {
          type: "video",
          title: "Drizzle Schema Tutorial",
          url: "https://www.youtube.com/watch?v=5iz69WHqOx4",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "drizzle-queries",
      title: "Drizzle Query Building",
      description:
        "Learn Drizzle's query API: SELECT, INSERT, UPDATE, DELETE operations, WHERE clauses, and query chaining",
      order: 4,
      prerequisites: ["drizzle-schema"],
      resources: [
        {
          type: "doc",
          title: "Drizzle: Query Builder",
          url: "https://orm.drizzle.team/docs/select",
        },
        {
          type: "doc",
          title: "Drizzle: Insert Operations",
          url: "https://orm.drizzle.team/docs/insert",
        },
        {
          type: "doc",
          title: "Drizzle: Update & Delete",
          url: "https://orm.drizzle.team/docs/update",
        },
        {
          type: "link",
          title: "Drizzle: Query Examples",
          url: "https://orm.drizzle.team/docs/select",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "drizzle-relations",
      title: "Drizzle Relations & Joins",
      description:
        "Master relationships in Drizzle: one-to-one, one-to-many, many-to-many, and relational queries",
      order: 5,
      prerequisites: ["drizzle-queries"],
      resources: [
        {
          type: "doc",
          title: "Drizzle: Relations",
          url: "https://orm.drizzle.team/docs/relations",
        },
        {
          type: "doc",
          title: "Drizzle: One-to-Many Relations",
          url: "https://orm.drizzle.team/docs/relations#one-to-many",
        },
        {
          type: "doc",
          title: "Drizzle: Many-to-Many Relations",
          url: "https://orm.drizzle.team/docs/relations#many-to-many",
        },
        {
          type: "video",
          title: "Drizzle Relations Tutorial",
          url: "https://www.youtube.com/watch?v=5iz69WHqOx4",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "drizzle-migrations",
      title: "Drizzle Migrations",
      description:
        "Learn Drizzle Kit migrations: generating migrations, running migrations, and managing schema changes",
      order: 6,
      prerequisites: ["drizzle-schema"],
      resources: [
        {
          type: "doc",
          title: "Drizzle Kit: Migrations",
          url: "https://orm.drizzle.team/kit-docs/overview#migrations",
        },
        {
          type: "doc",
          title: "Drizzle: Generate Migrations",
          url: "https://orm.drizzle.team/kit-docs/migrations",
        },
        {
          type: "link",
          title: "Drizzle: Migration Workflow",
          url: "https://orm.drizzle.team/kit-docs/migrations#migration-workflow",
        },
        {
          type: "video",
          title: "Drizzle Migrations Tutorial",
          url: "https://www.youtube.com/watch?v=5iz69WHqOx4",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "drizzle-advanced",
      title: "Drizzle Advanced Features",
      description:
        "Master advanced Drizzle features: transactions, prepared statements, raw SQL, and performance optimization",
      order: 7,
      prerequisites: ["drizzle-relations"],
      resources: [
        {
          type: "doc",
          title: "Drizzle: Transactions",
          url: "https://orm.drizzle.team/docs/transactions",
        },
        {
          type: "doc",
          title: "Drizzle: Raw SQL",
          url: "https://orm.drizzle.team/docs/raw-queries",
        },
        {
          type: "link",
          title: "Drizzle: Prepared Statements",
          url: "https://orm.drizzle.team/docs/select#prepared-statements",
        },
        {
          type: "link",
          title: "Drizzle: Performance Tips",
          url: "https://orm.drizzle.team/docs/overview",
        },
      ],
      difficulty: "intermediate",
    },
  ],
};
