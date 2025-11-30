import type { MainTopic } from "../types";

export const queuesTopic: MainTopic = {
  id: "queues",
  title: "Queues",
  description: "Message queues and job processing",
  order: 17,
  subtopics: [
    {
      id: "queues-fundamentals",
      title: "Queue Fundamentals",
      description:
        "Understand what queues are, why use them, message queues vs job queues, and common use cases (async processing, task scheduling, decoupling)",
      order: 1,
      prerequisites: ["expressjs-rest-api"],
      resources: [
        {
          type: "link",
          title: "What are Message Queues?",
          url: "https://aws.amazon.com/message-queue/",
        },
        {
          type: "video",
          title: "Message Queues Explained",
          url: "https://www.youtube.com/watch?v=oUJbuFMyZJk",
        },
        {
          type: "link",
          title: "freeCodeCamp: Message Queues",
          url: "https://www.freecodecamp.org/news/what-is-a-message-queue/",
        },
        {
          type: "link",
          title: "Message Queue vs Job Queue",
          url: "https://www.cloudamqp.com/blog/message-queue-vs-job-queue.html",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "queues-bullmq",
      title: "BullMQ Basics",
      description:
        "Learn BullMQ, a Redis-based queue system for Node.js. Setup, creating queues, adding jobs, processing jobs, and basic job options",
      order: 2,
      prerequisites: ["queues-fundamentals"],
      resources: [
        {
          type: "doc",
          title: "BullMQ: Getting Started",
          url: "https://docs.bullmq.io/guide/getting-started",
        },
        {
          type: "video",
          title: "BullMQ Tutorial",
          url: "https://www.youtube.com/watch?v=iFbGpF7Vl9s",
        },
        {
          type: "link",
          title: "BullMQ: Installation & Setup",
          url: "https://docs.bullmq.io/guide/connections",
        },
        {
          type: "link",
          title: "BullMQ: Creating Queues",
          url: "https://docs.bullmq.io/guide/queues",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "queues-job-processing",
      title: "Job Processing & Workers",
      description:
        "Create workers to process jobs, handle job events (completed, failed, progress), retry strategies, and error handling",
      order: 3,
      prerequisites: ["queues-bullmq"],
      resources: [
        {
          type: "doc",
          title: "BullMQ: Workers",
          url: "https://docs.bullmq.io/guide/workers",
        },
        {
          type: "link",
          title: "BullMQ: Job Events",
          url: "https://docs.bullmq.io/guide/jobs",
        },
        {
          type: "link",
          title: "BullMQ: Retry Strategies",
          url: "https://docs.bullmq.io/guide/jobs/retrying-failing-jobs",
        },
        {
          type: "video",
          title: "BullMQ Workers Tutorial",
          url: "https://www.youtube.com/watch?v=0hQvX4jQ_5s",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "queues-scheduled-jobs",
      title: "Scheduled Jobs & Cron",
      description:
        "Schedule jobs for future execution, use cron patterns, recurring jobs, and delayed jobs",
      order: 4,
      prerequisites: ["queues-job-processing"],
      resources: [
        {
          type: "doc",
          title: "BullMQ: Scheduled Jobs",
          url: "https://docs.bullmq.io/guide/jobs/scheduled",
        },
        {
          type: "link",
          title: "BullMQ: Cron Jobs",
          url: "https://docs.bullmq.io/guide/jobs/repeatable",
        },
        {
          type: "link",
          title: "Cron Expression Guide",
          url: "https://crontab.guru/",
        },
        {
          type: "video",
          title: "Scheduled Jobs with BullMQ",
          url: "https://www.youtube.com/watch?v=ZbX4Ok9YX94",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "queues-priority-queues",
      title: "Priority Queues & Rate Limiting",
      description:
        "Implement priority queues, rate limiting, job prioritization, and concurrency control",
      order: 5,
      prerequisites: ["queues-job-processing"],
      resources: [
        {
          type: "doc",
          title: "BullMQ: Job Priorities",
          url: "https://docs.bullmq.io/guide/jobs/prioritized",
        },
        {
          type: "link",
          title: "BullMQ: Rate Limiting",
          url: "https://docs.bullmq.io/guide/queues/rate-limiting",
        },
        {
          type: "link",
          title: "Priority Queue Patterns",
          url: "https://docs.bullmq.io/guide/patterns",
        },
        {
          type: "video",
          title: "Priority Queues Explained",
          url: "https://www.youtube.com/watch?v=wptevk0bshY",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "queues-job-monitoring",
      title: "Job Monitoring & Dashboard",
      description:
        "Monitor queue health, job status, failed jobs, set up BullMQ dashboard, and implement monitoring solutions",
      order: 6,
      prerequisites: ["queues-job-processing"],
      resources: [
        {
          type: "link",
          title: "BullMQ Dashboard",
          url: "https://github.com/taskforcesh/bullmq-pro/tree/main/packages/ui",
        },
        {
          type: "link",
          title: "BullMQ: Monitoring",
          url: "https://docs.bullmq.io/guide/queues/monitoring",
        },
        {
          type: "video",
          title: "BullMQ Dashboard Setup",
          url: "https://www.youtube.com/watch?v=K4l6qX0lqJk",
        },
        {
          type: "link",
          title: "Queue Monitoring Best Practices",
          url: "https://docs.bullmq.io/guide/queues/monitoring",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "queues-advanced-patterns",
      title: "Advanced Queue Patterns",
      description:
        "Implement job chaining, job dependencies, job batching, and advanced queue architectures",
      order: 7,
      prerequisites: ["queues-priority-queues"],
      resources: [
        {
          type: "doc",
          title: "BullMQ: Job Dependencies",
          url: "https://docs.bullmq.io/guide/jobs/dependencies",
        },
        {
          type: "link",
          title: "BullMQ: Job Batching",
          url: "https://docs.bullmq.io/guide/jobs/batching",
        },
        {
          type: "link",
          title: "Queue Patterns & Best Practices",
          url: "https://docs.bullmq.io/guide/patterns",
        },
        {
          type: "video",
          title: "Advanced Queue Patterns",
          url: "https://www.youtube.com/watch?v=8xJQXbKj4k4",
        },
      ],
      difficulty: "advanced",
    },
    {
      id: "queues-nextjs-integration",
      title: "Queues in Next.js",
      description:
        "Integrate BullMQ with Next.js, create API routes for queue management, handle jobs in Server Actions, and deploy queue workers",
      order: 8,
      prerequisites: ["queues-job-processing", "nextjs-api-routes"],
      resources: [
        {
          type: "link",
          title: "BullMQ with Next.js",
          url: "https://docs.bullmq.io/guide/connections",
        },
        {
          type: "video",
          title: "Next.js Queue Integration",
          url: "https://www.youtube.com/watch?v=YzP164YANAU",
        },
        {
          type: "link",
          title: "Next.js Background Jobs",
          url: "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations",
        },
        {
          type: "link",
          title: "Deploying Queue Workers",
          url: "https://docs.bullmq.io/guide/connections",
        },
      ],
      difficulty: "advanced",
    },
  ],
};
