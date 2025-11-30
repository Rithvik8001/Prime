import type { MainTopic } from "../types";

export const internetWebFundamentalsTopic: MainTopic = {
  id: "internet-web-fundamentals",
  title: "Internet & Web Fundamentals",
  description: "Understanding how the internet and web technologies work",
  order: 1,
  subtopics: [
    {
      id: "internet-how-it-works",
      title: "How the Internet Works",
      description:
        "Learn the fundamental concepts of how data travels across the internet, including packets, routers, and the TCP/IP model",
      order: 1,
      prerequisites: [],
      resources: [
        {
          type: "video",
          title: "How the Internet Works in 5 Minutes",
          url: "https://www.youtube.com/watch?v=7_LPdttKXPc",
        },
        {
          type: "doc",
          title: "MDN: How the Internet Works",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work",
        },
        {
          type: "video",
          title: "The Internet: Packets, Routing & Reliability",
          url: "https://www.youtube.com/watch?v=AYdF7b3nMto",
        },
        {
          type: "link",
          title: "Khan Academy: Internet 101",
          url: "https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "http-https-protocols",
      title: "HTTP & HTTPS Protocols",
      description:
        "Understand the HyperText Transfer Protocol, how requests and responses work, status codes, headers, and the security benefits of HTTPS",
      order: 2,
      prerequisites: ["internet-how-it-works"],
      resources: [
        {
          type: "doc",
          title: "MDN: HTTP Overview",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
        },
        {
          type: "video",
          title: "HTTP Crash Course & Exploration",
          url: "https://www.youtube.com/watch?v=iYM2zFP3Zn0",
        },
        {
          type: "link",
          title: "freeCodeCamp: HTTP and HTTPS Explained",
          url: "https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/",
        },
        {
          type: "link",
          title: "HTTP Status Codes Reference",
          url: "https://httpstatuses.com/",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "dns-domain-names",
      title: "DNS & Domain Names",
      description:
        "Learn how Domain Name System translates human-readable domain names to IP addresses and how domains are structured",
      order: 3,
      prerequisites: ["internet-how-it-works"],
      resources: [
        {
          type: "video",
          title: "DNS Explained",
          url: "https://www.youtube.com/watch?v=72snZctFFtA",
        },
        {
          type: "doc",
          title: "MDN: What is a Domain Name?",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name",
        },
        {
          type: "link",
          title: "Cloudflare: What is DNS?",
          url: "https://www.cloudflare.com/learning/dns/what-is-dns/",
        },
        {
          type: "video",
          title: "How DNS Works - Computerphile",
          url: "https://www.youtube.com/watch?v=vrxwXXytEuI",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "web-browsers",
      title: "Web Browsers & How They Work",
      description:
        "Understand how browsers render web pages, the rendering engine, JavaScript engine, and browser architecture",
      order: 4,
      prerequisites: ["http-https-protocols"],
      resources: [
        {
          type: "doc",
          title: "MDN: How Browsers Work",
          url: "https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work",
        },
        {
          type: "video",
          title: "How Browsers Work - Web Performance",
          url: "https://www.youtube.com/watch?v=0IsQqJ7pwhw",
        },
        {
          type: "link",
          title: "Web.dev: How the Browser Rendering Works",
          url: "https://web.dev/howbrowserswork/",
        },
        {
          type: "link",
          title: "Chrome DevTools: Rendering Performance",
          url: "https://developer.chrome.com/docs/devtools/performance/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "client-server-architecture",
      title: "Client-Server Architecture",
      description:
        "Learn the fundamental architecture pattern of web applications, understanding the roles of clients and servers",
      order: 5,
      prerequisites: ["http-https-protocols"],
      resources: [
        {
          type: "doc",
          title: "MDN: Client-Server Overview",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview",
        },
        {
          type: "video",
          title: "Client-Server Model Explained",
          url: "https://www.youtube.com/watch?v=L5BlpPU_muY",
        },
        {
          type: "link",
          title: "freeCodeCamp: Client-Server Architecture",
          url: "https://www.freecodecamp.org/news/client-server-model/",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "rest-api-basics",
      title: "REST APIs Basics",
      description:
        "Introduction to RESTful APIs, HTTP methods (GET, POST, PUT, DELETE), endpoints, and API design principles",
      order: 6,
      prerequisites: ["client-server-architecture", "http-https-protocols"],
      resources: [
        {
          type: "doc",
          title: "MDN: REST API Concepts",
          url: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
        },
        {
          type: "video",
          title: "REST API Concepts and Examples",
          url: "https://www.youtube.com/watch?v=SLwpqD8n3d0",
        },
        {
          type: "link",
          title: "freeCodeCamp: REST API Tutorial",
          url: "https://www.freecodecamp.org/news/rest-api-tutorial-rest-client-rest-service-and-api-calls-explained-with-code-examples/",
        },
        {
          type: "link",
          title: "REST API Design Best Practices",
          url: "https://restfulapi.net/",
        },
      ],
      difficulty: "beginner",
    },
    {
      id: "web-security-basics",
      title: "Web Security Fundamentals",
      description:
        "Essential security concepts including HTTPS, CORS, same-origin policy, and common web vulnerabilities",
      order: 7,
      prerequisites: ["http-https-protocols", "rest-api-basics"],
      resources: [
        {
          type: "doc",
          title: "MDN: Web Security",
          url: "https://developer.mozilla.org/en-US/docs/Web/Security",
        },
        {
          type: "doc",
          title: "MDN: CORS Explained",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
        },
        {
          type: "video",
          title: "CORS in 100 Seconds",
          url: "https://www.youtube.com/watch?v=4KHiSt0oLJ0",
        },
        {
          type: "link",
          title: "OWASP Top 10 Overview",
          url: "https://owasp.org/www-project-top-ten/",
        },
      ],
      difficulty: "intermediate",
    },
    {
      id: "urls-uris",
      title: "URLs & URIs",
      description:
        "Understanding Uniform Resource Locators and Identifiers, URL structure, query parameters, and fragments",
      order: 8,
      prerequisites: ["http-https-protocols"],
      resources: [
        {
          type: "doc",
          title: "MDN: What is a URL?",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL",
        },
        {
          type: "doc",
          title: "MDN: URL Structure Explained",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#absolute_urls_vs_relative_urls",
        },
        {
          type: "video",
          title: "URLs Explained",
          url: "https://www.youtube.com/watch?v=5Jr-_Za5yQM",
        },
      ],
      difficulty: "beginner",
    },
  ],
};
