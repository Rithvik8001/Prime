import type { MainTopic } from "../types";

export const securityTopic: MainTopic = {
  id: "security",
  title: "Security",
  description: "Web security best practices",
  order: 18,
  subtopics: [
    {
      id: "security-fundamentals",
      title: "Web Security Fundamentals",
      description:
        "Understand common web vulnerabilities (OWASP Top 10), security principles, threat modeling, and security mindset",
      order: 1,
      prerequisites: ["expressjs-rest-api"],
      resources: [
        {
          type: "doc",
          title: "OWASP Top 10",
          url: "https://owasp.org/www-project-top-ten/",
        },
        {
          type: "video",
          title: "Web Security Fundamentals",
          url: "https://www.youtube.com/watch?v=In0Q2QJ3h-c",
        },
        {
          type: "link",
          title: "MDN: Web Security",
          url: "https://developer.mozilla.org/en-US/docs/Web/Security",
        },
        {
          type: "link",
          title: "freeCodeCamp: Web Security",
          url: "https://www.freecodecamp.org/news/web-security-fundamentals/",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "security-authentication",
      title: "Authentication & Sessions",
      description:
        "Implement secure authentication, password hashing (bcrypt), session management, JWT tokens, and secure cookie handling",
      order: 2,
      prerequisites: ["security-fundamentals", "expressjs-middleware"],
      resources: [
        {
          type: "doc",
          title: "OWASP: Authentication Cheat Sheet",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html",
        },
        {
          type: "video",
          title: "Authentication & Authorization Explained",
          url: "https://www.youtube.com/watch?v=7Q17ubqLfaM",
        },
        {
          type: "link",
          title: "JWT.io: Introduction to JSON Web Tokens",
          url: "https://jwt.io/introduction",
        },
        {
          type: "link",
          title: "bcrypt: Password Hashing",
          url: "https://github.com/kelektiv/node.bcrypt.js",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "security-authorization",
      title: "Authorization & Access Control",
      description:
        "Implement role-based access control (RBAC), permissions, middleware for authorization, and protect routes/resources",
      order: 3,
      prerequisites: ["security-authentication"],
      resources: [
        {
          type: "doc",
          title: "OWASP: Authorization Cheat Sheet",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html",
        },
        {
          type: "video",
          title: "RBAC Explained",
          url: "https://www.youtube.com/watch?v=C4NP8Eon3cU",
        },
        {
          type: "link",
          title: "Authorization Patterns",
          url: "https://auth0.com/blog/role-based-access-control-rbac/",
        },
        {
          type: "link",
          title: "freeCodeCamp: Authorization",
          url: "https://www.freecodecamp.org/news/authorization-in-web-applications/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "security-input-validation",
      title: "Input Validation & Sanitization",
      description:
        "Validate and sanitize user inputs, prevent injection attacks (SQL, XSS), use validation libraries (Zod, Joi), and implement CSRF protection",
      order: 4,
      prerequisites: ["security-fundamentals", "expressjs-body-parsing"],
      resources: [
        {
          type: "doc",
          title: "OWASP: Input Validation Cheat Sheet",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html",
        },
        {
          type: "video",
          title: "Input Validation & Sanitization",
          url: "https://www.youtube.com/watch?v=2k8NleFjG7I",
        },
        {
          type: "link",
          title: "Zod: Schema Validation",
          url: "https://zod.dev/",
        },
        {
          type: "link",
          title: "OWASP: XSS Prevention",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "security-sql-injection",
      title: "SQL Injection Prevention",
      description:
        "Understand SQL injection attacks, use parameterized queries, ORM protection, and secure database access patterns",
      order: 5,
      prerequisites: ["security-input-validation", "sql-basics"],
      resources: [
        {
          type: "doc",
          title: "OWASP: SQL Injection Prevention",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html",
        },
        {
          type: "video",
          title: "SQL Injection Explained",
          url: "https://www.youtube.com/watch?v=ciNHn38EyRc",
        },
        {
          type: "link",
          title: "Preventing SQL Injection with ORMs",
          url: "https://www.prisma.io/docs/guides/performance-and-optimization/query-optimization",
        },
        {
          type: "link",
          title: "Parameterized Queries",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Query_Parameterization_Cheat_Sheet.html",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "security-https-ssl",
      title: "HTTPS & SSL/TLS",
      description:
        "Understand HTTPS, SSL/TLS certificates, secure communication, certificate management, and enforce HTTPS in production",
      order: 6,
      prerequisites: ["security-fundamentals"],
      resources: [
        {
          type: "doc",
          title: "MDN: HTTPS",
          url: "https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security",
        },
        {
          type: "video",
          title: "HTTPS & SSL/TLS Explained",
          url: "https://www.youtube.com/watch?v=j9wYopW3Mbc",
        },
        {
          type: "link",
          title: "Let's Encrypt: Free SSL Certificates",
          url: "https://letsencrypt.org/",
        },
        {
          type: "link",
          title: "OWASP: Transport Layer Protection",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "security-rate-limiting",
      title: "Rate Limiting & DDoS Protection",
      description:
        "Implement rate limiting, prevent brute force attacks, protect against DDoS, and use rate limiting middleware",
      order: 7,
      prerequisites: ["expressjs-middleware"],
      resources: [
        {
          type: "link",
          title: "express-rate-limit",
          url: "https://github.com/express-rate-limit/express-rate-limit",
        },
        {
          type: "video",
          title: "Rate Limiting Explained",
          url: "https://www.youtube.com/watch?v=wLx5OH3vXUo",
        },
        {
          type: "link",
          title: "OWASP: Rate Limiting",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Rate_Limiting_Cheat_Sheet.html",
        },
        {
          type: "link",
          title: "DDoS Protection Strategies",
          url: "https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "security-secrets-management",
      title: "Secrets Management",
      description:
        "Securely manage API keys, secrets, environment variables, use secret management services, and avoid committing secrets",
      order: 8,
      prerequisites: ["nodejs-environment-variables"],
      resources: [
        {
          type: "doc",
          title: "OWASP: Secrets Management",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html",
        },
        {
          type: "video",
          title: "Secrets Management Best Practices",
          url: "https://www.youtube.com/watch?v=JSl4Fbfs6qE",
        },
        {
          type: "link",
          title: "dotenv: Environment Variables",
          url: "https://github.com/motdotla/dotenv",
        },
        {
          type: "link",
          title: "GitHub: Secret Scanning",
          url: "https://docs.github.com/en/code-security/secret-scanning",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "security-nextjs",
      title: "Security in Next.js",
      description:
        "Next.js security features, secure API routes, middleware security, Content Security Policy (CSP), and security headers",
      order: 9,
      prerequisites: ["security-authentication", "nextjs-api-routes"],
      resources: [
        {
          type: "doc",
          title: "Next.js: Security Headers",
          url: "https://nextjs.org/docs/app/api-reference/next-config-js/headers",
        },
        {
          type: "link",
          title: "Next.js Security Best Practices",
          url: "https://nextjs.org/docs/app/building-your-application/configuring/security",
        },
        {
          type: "video",
          title: "Next.js Security",
          url: "https://www.youtube.com/watch?v=Y5qYlMg3l8g",
        },
        {
          type: "link",
          title: "Content Security Policy (CSP)",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "security-auditing",
      title: "Security Auditing & Testing",
      description:
        "Perform security audits, use security scanning tools, penetration testing basics, and implement security monitoring",
      order: 10,
      prerequisites: ["security-fundamentals"],
      resources: [
        {
          type: "link",
          title: "npm audit: Dependency Scanning",
          url: "https://docs.npmjs.com/cli/v9/commands/npm-audit",
        },
        {
          type: "video",
          title: "Security Auditing",
          url: "https://www.youtube.com/watch?v=H7LJ6QjYCro",
        },
        {
          type: "link",
          title: "OWASP: Security Testing",
          url: "https://owasp.org/www-project-web-security-testing-guide/",
        },
        {
          type: "link",
          title: "Snyk: Security Scanning",
          url: "https://snyk.io/",
        },
      ],
      difficulty: "advanced",
    },
  ],
};
