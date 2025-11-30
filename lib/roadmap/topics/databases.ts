import type { MainTopic } from "../types";

export const databasesTopic: MainTopic = {
  id: "databases",
  title: "Databases",
  description: "Understanding database systems: SQL and NoSQL",
  order: 13,
  subtopics: [
    {
      id: "database-fundamentals",
      title: "Database Fundamentals & Concepts",
      description:
        "Learn what databases are, types of databases (relational vs NoSQL), database management systems, and core concepts",
      order: 1,
      prerequisites: [],
      resources: [
        {
          type: "doc",
          title: "MDN: Database Basics",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Database_basics",
        },
        {
          type: "video",
          title: "Database Tutorial for Beginners",
          url: "https://www.youtube.com/watch?v=wR0jg0eQsZA",
        },
        {
          type: "link",
          title: "freeCodeCamp: Database Fundamentals",
          url: "https://www.freecodecamp.org/news/database-fundamentals/",
        },
        {
          type: "link",
          title: "SQL vs NoSQL Explained",
          url: "https://www.mongodb.com/nosql-explained/nosql-vs-sql",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "sql-basics",
      title: "SQL Basics",
      description:
        "Master fundamental SQL operations: SELECT, INSERT, UPDATE, DELETE, WHERE clauses, and basic queries",
      order: 2,
      prerequisites: ["database-fundamentals"],
      resources: [
        {
          type: "doc",
          title: "PostgreSQL: SQL Tutorial",
          url: "https://www.postgresql.org/docs/current/tutorial.html",
        },
        {
          type: "video",
          title: "SQL Tutorial for Beginners",
          url: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
        },
        {
          type: "link",
          title: "W3Schools: SQL Tutorial",
          url: "https://www.w3schools.com/sql/",
        },
        {
          type: "link",
          title: "SQLBolt - Interactive SQL Tutorial",
          url: "https://sqlbolt.com/",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "database-design",
      title: "Database Design & Normalization",
      description:
        "Learn how to design relational databases effectively, understand normalization (1NF, 2NF, 3NF), and avoid data redundancy",
      order: 3,
      prerequisites: ["sql-basics"],
      resources: [
        {
          type: "doc",
          title: "PostgreSQL: Database Design",
          url: "https://www.postgresql.org/docs/current/ddl.html",
        },
        {
          type: "video",
          title: "Database Design Tutorial",
          url: "https://www.youtube.com/watch?v=ZTvxjs8ZX3Y",
        },
        {
          type: "link",
          title: "freeCodeCamp: Database Normalization",
          url: "https://www.freecodecamp.org/news/database-normalization-explained/",
        },
        {
          type: "link",
          title: "Database Design Best Practices",
          url: "https://www.postgresql.org/docs/current/ddl.html",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "database-relationships",
      title: "Relationships & Joins",
      description:
        "Understand database relationships (one-to-one, one-to-many, many-to-many), foreign keys, and JOIN operations",
      order: 4,
      prerequisites: ["database-design"],
      resources: [
        {
          type: "doc",
          title: "PostgreSQL: Foreign Keys",
          url: "https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-FK",
        },
        {
          type: "video",
          title: "SQL Joins Explained",
          url: "https://www.youtube.com/watch?v=9yeOJ0ZMUYw",
        },
        {
          type: "link",
          title: "SQL JOINs Tutorial",
          url: "https://www.w3schools.com/sql/sql_join.asp",
        },
        {
          type: "link",
          title: "freeCodeCamp: SQL Relationships",
          url: "https://www.freecodecamp.org/news/sql-joins-explained/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "sql-advanced",
      title: "Advanced SQL",
      description:
        "Master advanced SQL concepts: subqueries, aggregate functions (COUNT, SUM, AVG), GROUP BY, HAVING, and window functions",
      order: 5,
      prerequisites: ["database-relationships"],
      resources: [
        {
          type: "doc",
          title: "PostgreSQL: Advanced SQL",
          url: "https://www.postgresql.org/docs/current/tutorial-advanced.html",
        },
        {
          type: "video",
          title: "Advanced SQL Tutorial",
          url: "https://www.youtube.com/watch?v=7S_tz1z_5bA",
        },
        {
          type: "link",
          title: "PostgreSQL: Window Functions",
          url: "https://www.postgresql.org/docs/current/tutorial-window.html",
        },
        {
          type: "link",
          title: "freeCodeCamp: Advanced SQL",
          url: "https://www.freecodecamp.org/news/advanced-sql/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "postgresql-basics",
      title: "PostgreSQL Basics",
      description:
        "Get started with PostgreSQL: installation, basic operations, data types, and PostgreSQL-specific features",
      order: 6,
      prerequisites: ["sql-basics"],
      resources: [
        {
          type: "doc",
          title: "PostgreSQL: Official Documentation",
          url: "https://www.postgresql.org/docs/",
        },
        {
          type: "video",
          title: "PostgreSQL Tutorial for Beginners",
          url: "https://www.youtube.com/watch?v=qw--VYLpxG4",
        },
        {
          type: "link",
          title: "PostgreSQL Tutorial",
          url: "https://www.postgresqltutorial.com/",
        },
        {
          type: "link",
          title: "freeCodeCamp: PostgreSQL Tutorial",
          url: "https://www.freecodecamp.org/news/postgresql-full-course/",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "database-indexes",
      title: "Indexes & Performance",
      description:
        "Learn how indexes work, when to use them, query optimization, and performance tuning strategies for SQL databases",
      order: 7,
      prerequisites: ["sql-advanced"],
      resources: [
        {
          type: "doc",
          title: "PostgreSQL: Indexes",
          url: "https://www.postgresql.org/docs/current/indexes.html",
        },
        {
          type: "video",
          title: "Database Indexes Explained",
          url: "https://www.youtube.com/watch?v=-qNSXK7s7_w",
        },
        {
          type: "link",
          title: "freeCodeCamp: Database Indexing",
          url: "https://www.freecodecamp.org/news/database-indexing-explained/",
        },
        {
          type: "link",
          title: "Use The Index, Luke!",
          url: "https://use-the-index-luke.com/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "database-transactions",
      title: "Transactions & ACID Properties",
      description:
        "Understand database transactions, ACID properties (Atomicity, Consistency, Isolation, Durability), and transaction management",
      order: 8,
      prerequisites: ["database-indexes"],
      resources: [
        {
          type: "doc",
          title: "PostgreSQL: Transactions",
          url: "https://www.postgresql.org/docs/current/tutorial-transactions.html",
        },
        {
          type: "video",
          title: "Database Transactions Explained",
          url: "https://www.youtube.com/watch?v=U6n2NcJ7rLc",
        },
        {
          type: "link",
          title: "freeCodeCamp: ACID Properties",
          url: "https://www.freecodecamp.org/news/acid-databases-explained/",
        },
        {
          type: "link",
          title: "Database Transactions Guide",
          url: "https://www.postgresql.org/docs/current/tutorial-transactions.html",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "nosql-fundamentals",
      title: "NoSQL Fundamentals",
      description:
        "Learn NoSQL database concepts, types (document, key-value, column-family, graph), and when to use NoSQL vs SQL",
      order: 9,
      prerequisites: ["database-fundamentals"],
      resources: [
        {
          type: "doc",
          title: "MongoDB: What is NoSQL?",
          url: "https://www.mongodb.com/nosql-explained",
        },
        {
          type: "video",
          title: "NoSQL Databases Explained",
          url: "https://www.youtube.com/watch?v=0buKQHokLK8",
        },
        {
          type: "link",
          title: "freeCodeCamp: NoSQL Databases",
          url: "https://www.freecodecamp.org/news/nosql-databases-explained/",
        },
        {
          type: "link",
          title: "SQL vs NoSQL: When to Use Which",
          url: "https://www.mongodb.com/nosql-explained/nosql-vs-sql",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "mongodb-basics",
      title: "MongoDB Basics",
      description:
        "Get started with MongoDB: installation, collections, documents, basic CRUD operations, and MongoDB shell",
      order: 10,
      prerequisites: ["nosql-fundamentals"],
      resources: [
        {
          type: "doc",
          title: "MongoDB: Official Documentation",
          url: "https://www.mongodb.com/docs/",
        },
        {
          type: "video",
          title: "MongoDB Tutorial for Beginners",
          url: "https://www.youtube.com/watch?v=ExcRbA7fy_A",
        },
        {
          type: "link",
          title: "MongoDB University: Free Courses",
          url: "https://university.mongodb.com/",
        },
        {
          type: "link",
          title: "freeCodeCamp: MongoDB Tutorial",
          url: "https://www.freecodecamp.org/news/learn-mongodb-a4ce205e7739/",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "mongodb-queries",
      title: "MongoDB Queries & Aggregation",
      description:
        "Master MongoDB query language, find operations, update operations, aggregation pipeline, and advanced querying",
      order: 11,
      prerequisites: ["mongodb-basics"],
      resources: [
        {
          type: "doc",
          title: "MongoDB: Query Documents",
          url: "https://www.mongodb.com/docs/manual/tutorial/query-documents/",
        },
        {
          type: "video",
          title: "MongoDB Queries Tutorial",
          url: "https://www.youtube.com/watch?v=ExcRbA7fy_A",
        },
        {
          type: "link",
          title: "MongoDB: Aggregation Pipeline",
          url: "https://www.mongodb.com/docs/manual/core/aggregation-pipeline/",
        },
        {
          type: "link",
          title: "freeCodeCamp: MongoDB Aggregation",
          url: "https://www.freecodecamp.org/news/mongodb-aggregation/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "mongodb-indexes-performance",
      title: "MongoDB Indexes & Performance",
      description:
        "Learn MongoDB indexing strategies, query optimization, explain plans, and performance tuning for NoSQL databases",
      order: 12,
      prerequisites: ["mongodb-queries"],
      resources: [
        {
          type: "doc",
          title: "MongoDB: Indexes",
          url: "https://www.mongodb.com/docs/manual/indexes/",
        },
        {
          type: "video",
          title: "MongoDB Performance Optimization",
          url: "https://www.youtube.com/watch?v=ExcRbA7fy_A",
        },
        {
          type: "link",
          title: "MongoDB: Query Optimization",
          url: "https://www.mongodb.com/docs/manual/core/query-optimization/",
        },
        {
          type: "link",
          title: "MongoDB Performance Best Practices",
          url: "https://www.mongodb.com/docs/manual/administration/optimization/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "database-migrations",
      title: "Database Migrations",
      description:
        "Learn how to manage database schema changes with migrations, version control for databases, and migration best practices",
      order: 13,
      prerequisites: ["postgresql-basics", "database-design"],
      resources: [
        {
          type: "link",
          title: "What are Database Migrations?",
          url: "https://www.prisma.io/dataguide/types/relational/what-are-database-migrations",
        },
        {
          type: "video",
          title: "Database Migrations Explained",
          url: "https://www.youtube.com/watch?v=KZXtKzWjTgE",
        },
        {
          type: "link",
          title: "freeCodeCamp: Database Migrations",
          url: "https://www.freecodecamp.org/news/database-migrations-explained/",
        },
        {
          type: "doc",
          title: "PostgreSQL: Schema Management",
          url: "https://www.postgresql.org/docs/current/ddl.html",
        },
      ],
      difficulty: "intermediate",
    },
  ],
};
