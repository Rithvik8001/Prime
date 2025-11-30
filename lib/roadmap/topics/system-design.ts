import type { MainTopic } from "../types";

export const systemDesignTopic: MainTopic = {
  id: "system-design",
  title: "System Design",
  description: "Designing scalable systems",
  order: 19,
  subtopics: [
    {
      id: "system-design-fundamentals",
      title: "System Design Fundamentals",
      description:
        "Understand system design principles, scalability concepts, performance vs scalability, availability, reliability, and design trade-offs",
      order: 1,
      prerequisites: ["expressjs-rest-api"],
      resources: [
        {
          type: "link",
          title: "System Design Primer",
          url: "https://github.com/donnemartin/system-design-primer",
        },
        {
          type: "video",
          title: "System Design Fundamentals",
          url: "https://www.youtube.com/watch?v=m8Icp_Cid5o",
        },
        {
          type: "link",
          title: "Scalability vs Performance",
          url: "https://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones",
        },
        {
          type: "link",
          title: "freeCodeCamp: System Design",
          url: "https://www.freecodecamp.org/news/systems-design-for-interviews/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "system-design-load-balancing",
      title: "Load Balancing & Horizontal Scaling",
      description:
        "Understand load balancing, horizontal vs vertical scaling, load balancer types (round-robin, least connections), and session management",
      order: 2,
      prerequisites: ["system-design-fundamentals"],
      resources: [
        {
          type: "link",
          title: "Load Balancing Explained",
          url: "https://www.nginx.com/resources/glossary/load-balancing/",
        },
        {
          type: "video",
          title: "Load Balancing & Scaling",
          url: "https://www.youtube.com/watch?v=K0Ta65OqQkY",
        },
        {
          type: "link",
          title: "Horizontal vs Vertical Scaling",
          url: "https://www.lecloud.net/post/7295452622/scalability-for-dummies-part-2-database",
        },
        {
          type: "link",
          title: "Load Balancing Algorithms",
          url: "https://kemptechnologies.com/load-balancer/load-balancing-algorithms-techniques/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "system-design-caching",
      title: "Caching Strategies",
      description:
        "Design caching layers, cache invalidation strategies, CDN usage, cache-aside pattern, write-through/write-behind patterns, and distributed caching",
      order: 3,
      prerequisites: ["system-design-fundamentals", "caching-fundamentals"],
      resources: [
        {
          type: "link",
          title: "Caching Strategies",
          url: "https://aws.amazon.com/caching/caching-strategies/",
        },
        {
          type: "video",
          title: "Caching in System Design",
          url: "https://www.youtube.com/watch?v=U3RkDLtS7uY",
        },
        {
          type: "link",
          title: "Cache-Aside Pattern",
          url: "https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/Strategies.html",
        },
        {
          type: "link",
          title: "CDN Explained",
          url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "system-design-databases",
      title: "Database Scaling & Sharding",
      description:
        "Database replication, master-slave architecture, read replicas, database sharding, partitioning strategies, and CAP theorem",
      order: 4,
      prerequisites: ["system-design-fundamentals", "database-fundamentals"],
      resources: [
        {
          type: "link",
          title: "Database Replication",
          url: "https://www.postgresql.org/docs/current/high-availability.html",
        },
        {
          type: "video",
          title: "Database Sharding Explained",
          url: "https://www.youtube.com/watch?v=5faMjKuB9bc",
        },
        {
          type: "link",
          title: "CAP Theorem Explained",
          url: "https://www.ibm.com/cloud/learn/cap-theorem",
        },
        {
          type: "link",
          title: "Database Partitioning",
          url: "https://www.postgresql.org/docs/current/ddl-partitioning.html",
        },
      ],
      difficulty: "advanced",
    },
    {
      id: "system-design-messaging",
      title: "Message Queues & Event-Driven Architecture",
      description:
        "Design event-driven systems, message queues for decoupling, pub/sub patterns, event sourcing, and microservices communication",
      order: 5,
      prerequisites: ["system-design-fundamentals", "queues-fundamentals"],
      resources: [
        {
          type: "link",
          title: "Event-Driven Architecture",
          url: "https://aws.amazon.com/event-driven-architecture/",
        },
        {
          type: "video",
          title: "Event-Driven Architecture Explained",
          url: "https://www.youtube.com/watch?v=STKCRSUsyP0",
        },
        {
          type: "link",
          title: "Pub/Sub Pattern",
          url: "https://aws.amazon.com/pub-sub-messaging/",
        },
        {
          type: "link",
          title: "Event Sourcing",
          url: "https://martinfowler.com/eaaDev/EventSourcing.html",
        },
      ],
      difficulty: "advanced",
    },
    {
      id: "system-design-microservices",
      title: "Microservices Architecture",
      description:
        "Microservices vs monolith, service decomposition, API gateways, service discovery, inter-service communication, and distributed systems challenges",
      order: 6,
      prerequisites: ["system-design-fundamentals", "expressjs-rest-api"],
      resources: [
        {
          type: "link",
          title: "Microservices Architecture",
          url: "https://microservices.io/patterns/microservices.html",
        },
        {
          type: "video",
          title: "Microservices Explained",
          url: "https://www.youtube.com/watch?v=rv4LlmLmVW4",
        },
        {
          type: "link",
          title: "API Gateway Pattern",
          url: "https://microservices.io/patterns/apigateway.html",
        },
        {
          type: "link",
          title: "Service Discovery",
          url: "https://microservices.io/patterns/service-registry.html",
        },
      ],
      difficulty: "advanced",
    },
    {
      id: "system-design-designing-systems",
      title: "Designing Real-World Systems",
      description:
        "Design popular systems (URL shortener, chat system, social media feed), step-by-step design process, requirements gathering, and capacity estimation",
      order: 7,
      prerequisites: ["system-design-load-balancing", "system-design-caching"],
      resources: [
        {
          type: "link",
          title: "Designing a URL Shortener",
          url: "https://www.educative.io/courses/grokking-the-system-design-interview",
        },
        {
          type: "video",
          title: "Designing Twitter",
          url: "https://www.youtube.com/watch?v=KmAyPUv9gOY",
        },
        {
          type: "link",
          title: "Designing a Chat System",
          url: "https://www.educative.io/courses/grokking-the-system-design-interview",
        },
        {
          type: "link",
          title: "System Design Interview Guide",
          url: "https://github.com/donnemartin/system-design-primer#how-to-approach-a-system-design-interview-question",
        },
      ],
      difficulty: "advanced",
    },
    {
      id: "system-design-monitoring",
      title: "Monitoring & Observability",
      description:
        "System monitoring, logging strategies, metrics collection, distributed tracing, alerting, and observability tools",
      order: 8,
      prerequisites: ["system-design-fundamentals"],
      resources: [
        {
          type: "link",
          title: "Observability vs Monitoring",
          url: "https://www.datadoghq.com/knowledge-center/observability/",
        },
        {
          type: "video",
          title: "System Monitoring",
          url: "https://www.youtube.com/watch?v=2JBYqRwZz0I",
        },
        {
          type: "link",
          title: "Distributed Tracing",
          url: "https://opentelemetry.io/docs/concepts/what-is-distributed-tracing/",
        },
        {
          type: "link",
          title: "Metrics & Logging",
          url: "https://www.datadoghq.com/knowledge-center/logs-vs-metrics/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "system-design-security-scale",
      title: "Security at Scale",
      description:
        "Security considerations for distributed systems, authentication/authorization at scale, API security, and security best practices for microservices",
      order: 9,
      prerequisites: ["system-design-microservices", "security-authentication"],
      resources: [
        {
          type: "link",
          title: "Microservices Security",
          url: "https://microservices.io/patterns/security/microservices-security.html",
        },
        {
          type: "video",
          title: "Security in Distributed Systems",
          url: "https://www.youtube.com/watch?v=z8ru2SK6FJE",
        },
        {
          type: "link",
          title: "API Security Best Practices",
          url: "https://owasp.org/www-project-api-security/",
        },
        {
          type: "link",
          title: "Zero Trust Architecture",
          url: "https://www.cloudflare.com/learning/security/glossary/what-is-zero-trust/",
        },
      ],
      difficulty: "advanced",
    },
  ],
};
