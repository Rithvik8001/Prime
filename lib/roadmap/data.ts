import type { RoadmapData } from "./types";

export const roadmapData: RoadmapData = {
  topics: [
    {
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
    },
    {
      id: "html",
      title: "HTML",
      description: "HyperText Markup Language - the foundation of web pages",
      order: 2,
      subtopics: [
        {
          id: "html-basics",
          title: "HTML Basics & Document Structure",
          description:
            "Learn the fundamental HTML document structure, DOCTYPE, head, body, and basic tags",
          order: 1,
          prerequisites: [],
          resources: [
            {
              type: "doc",
              title: "MDN: HTML Introduction",
              url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started",
            },
            {
              type: "video",
              title: "HTML Tutorial for Beginners: HTML Crash Course",
              url: "https://www.youtube.com/watch?v=qz0aGYrrlhU",
            },
            {
              type: "link",
              title: "freeCodeCamp: Learn HTML",
              url: "https://www.freecodecamp.org/news/html-crash-course/",
            },
            {
              type: "doc",
              title: "MDN: HTML Document Structure",
              url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "html-text-elements",
          title: "Text Elements & Formatting",
          description:
            "Master text elements like headings, paragraphs, lists, and text formatting tags",
          order: 2,
          prerequisites: ["html-basics"],
          resources: [
            {
              type: "doc",
              title: "MDN: HTML Text Fundamentals",
              url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals",
            },
            {
              type: "video",
              title: "HTML Headings, Paragraphs, and Text Formatting",
              url: "https://www.youtube.com/watch?v=DPnqb74Smug",
            },
            {
              type: "link",
              title: "W3Schools: HTML Text Formatting",
              url: "https://www.w3schools.com/html/html_formatting.asp",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "html-semantic",
          title: "Semantic HTML",
          description:
            "Learn to use semantic HTML5 elements for better structure, accessibility, and SEO",
          order: 3,
          prerequisites: ["html-text-elements"],
          resources: [
            {
              type: "doc",
              title: "MDN: HTML Semantics",
              url: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_elements",
            },
            {
              type: "video",
              title: "Semantic HTML Explained",
              url: "https://www.youtube.com/watch?v=kGW8Al_cga4",
            },
            {
              type: "link",
              title: "freeCodeCamp: Semantic HTML5 Elements Explained",
              url: "https://www.freecodecamp.org/news/semantic-html5-elements/",
            },
            {
              type: "doc",
              title: "MDN: HTML5 Semantic Elements",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "html-links-images",
          title: "Links & Images",
          description:
            "Master creating hyperlinks, embedding images, and understanding relative vs absolute paths",
          order: 4,
          prerequisites: ["html-basics"],
          resources: [
            {
              type: "doc",
              title: "MDN: Creating Hyperlinks",
              url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks",
            },
            {
              type: "doc",
              title: "MDN: Images in HTML",
              url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML",
            },
            {
              type: "video",
              title: "HTML Links and Images Tutorial",
              url: "https://www.youtube.com/watch?v=DiSvq5SgLMI",
            },
            {
              type: "link",
              title: "CSS-Tricks: A Complete Guide to Links and Buttons",
              url: "https://css-tricks.com/a-complete-guide-to-links-and-buttons/",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "html-forms",
          title: "Forms & Inputs",
          description:
            "Master HTML form elements, input types, validation, and form submission",
          order: 5,
          prerequisites: ["html-semantic"],
          resources: [
            {
              type: "doc",
              title: "MDN: HTML Forms",
              url: "https://developer.mozilla.org/en-US/docs/Learn/Forms",
            },
            {
              type: "video",
              title: "HTML Forms Tutorial",
              url: "https://www.youtube.com/watch?v=fNcJuPIZ2WE",
            },
            {
              type: "link",
              title: "freeCodeCamp: HTML Forms",
              url: "https://www.freecodecamp.org/news/html-form-tutorial/",
            },
            {
              type: "doc",
              title: "MDN: HTML Input Types",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "html-tables",
          title: "Tables",
          description:
            "Learn to create and structure HTML tables for displaying tabular data",
          order: 6,
          prerequisites: ["html-semantic"],
          resources: [
            {
              type: "doc",
              title: "MDN: HTML Tables",
              url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables",
            },
            {
              type: "video",
              title: "HTML Tables Tutorial",
              url: "https://www.youtube.com/watch?v=Gx7fY3iQ1-w",
            },
            {
              type: "link",
              title: "CSS-Tricks: A Complete Guide to the Table Element",
              url: "https://css-tricks.com/complete-guide-table-element/",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "html-media",
          title: "Audio & Video",
          description:
            "Embed audio and video content using HTML5 media elements",
          order: 7,
          prerequisites: ["html-links-images"],
          resources: [
            {
              type: "doc",
              title: "MDN: Video and Audio Content",
              url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content",
            },
            {
              type: "video",
              title: "HTML5 Audio and Video Elements",
              url: "https://www.youtube.com/watch?v=9BvyX9XvZqk",
            },
            {
              type: "link",
              title: "MDN: Using HTML5 audio and video",
              url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "html-accessibility",
          title: "Accessibility (a11y)",
          description:
            "Learn HTML accessibility best practices, ARIA attributes, and semantic markup for screen readers",
          order: 8,
          prerequisites: ["html-semantic", "html-forms"],
          resources: [
            {
              type: "doc",
              title: "MDN: Accessibility",
              url: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML",
            },
            {
              type: "link",
              title: "WebAIM: Introduction to Web Accessibility",
              url: "https://webaim.org/intro/",
            },
            {
              type: "video",
              title: "HTML Accessibility Basics",
              url: "https://www.youtube.com/watch?v=z8xUCzToff8",
            },
            {
              type: "doc",
              title: "MDN: ARIA Basics",
              url: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics",
            },
          ],
          difficulty: "intermediate",
        },
        {
          id: "html-meta-seo",
          title: "Meta Tags & SEO",
          description:
            "Understand meta tags, Open Graph, and HTML elements that affect SEO",
          order: 9,
          prerequisites: ["html-basics"],
          resources: [
            {
              type: "doc",
              title: "MDN: Meta Tags",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta",
            },
            {
              type: "link",
              title: "freeCodeCamp: HTML Meta Tags",
              url: "https://www.freecodecamp.org/news/meta-tags-in-html/",
            },
            {
              type: "link",
              title: "Open Graph Protocol",
              url: "https://ogp.me/",
            },
            {
              type: "video",
              title: "HTML Meta Tags for SEO",
              url: "https://www.youtube.com/watch?v=WjDrfZXjR3o",
            },
          ],
          difficulty: "beginner",
        },
      ],
    },
    {
      id: "css",
      title: "CSS",
      description: "Cascading Style Sheets - styling web pages",
      order: 3,
      subtopics: [
        {
          id: "css-basics-selectors",
          title: "CSS Basics & Selectors",
          description:
            "Learn CSS syntax, how to apply styles, and master CSS selectors (element, class, ID, attribute, pseudo-classes)",
          order: 1,
          prerequisites: ["html-basics"],
          resources: [
            {
              type: "doc",
              title: "MDN: CSS Basics",
              url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics",
            },
            {
              type: "video",
              title: "CSS Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
            },
            {
              type: "doc",
              title: "MDN: CSS Selectors",
              url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors",
            },
            {
              type: "link",
              title: "CSS-Tricks: CSS Selectors Reference",
              url: "https://css-tricks.com/almanac/selectors/",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "css-box-model",
          title: "Box Model & Layout",
          description:
            "Understand the CSS box model (content, padding, border, margin), display properties, and positioning",
          order: 2,
          prerequisites: ["css-basics-selectors"],
          resources: [
            {
              type: "doc",
              title: "MDN: The Box Model",
              url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model",
            },
            {
              type: "video",
              title: "CSS Box Model Explained",
              url: "https://www.youtube.com/watch?v=rIO5326FgPE",
            },
            {
              type: "doc",
              title: "MDN: CSS Positioning",
              url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning",
            },
            {
              type: "link",
              title: "CSS-Tricks: The Box Model",
              url: "https://css-tricks.com/the-css-box-model/",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "css-flexbox",
          title: "Flexbox",
          description:
            "Master Flexbox for one-dimensional layouts - perfect for navigation bars, card layouts, and centering content",
          order: 3,
          prerequisites: ["css-box-model"],
          resources: [
            {
              type: "link",
              title: "CSS-Tricks: Complete Guide to Flexbox",
              url: "https://css-tricks.com/snippets/css/complete-guide-to-flexbox/",
            },
            {
              type: "video",
              title: "Flexbox Tutorial",
              url: "https://www.youtube.com/watch?v=u044iM9xsWU",
            },
            {
              type: "doc",
              title: "MDN: Flexbox",
              url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox",
            },
            {
              type: "link",
              title: "Flexbox Froggy - Interactive Game",
              url: "https://flexboxfroggy.com/",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "css-grid",
          title: "CSS Grid",
          description:
            "Learn CSS Grid for two-dimensional layouts - ideal for complex page layouts, card grids, and responsive designs",
          order: 4,
          prerequisites: ["css-flexbox"],
          resources: [
            {
              type: "link",
              title: "CSS-Tricks: Complete Guide to Grid",
              url: "https://css-tricks.com/snippets/css/complete-guide-grid/",
            },
            {
              type: "video",
              title: "CSS Grid Tutorial",
              url: "https://www.youtube.com/watch?v=9zBsdzdE4sM",
            },
            {
              type: "doc",
              title: "MDN: Grid Layout",
              url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids",
            },
            {
              type: "link",
              title: "Grid Garden - Interactive Game",
              url: "https://cssgridgarden.com/",
            },
          ],
          difficulty: "intermediate",
        },
        {
          id: "css-responsive",
          title: "Responsive Design",
          description:
            "Master media queries, responsive units (rem, em, vw, vh), and mobile-first design principles",
          order: 5,
          prerequisites: ["css-grid"],
          resources: [
            {
              type: "doc",
              title: "MDN: Responsive Design",
              url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
            },
            {
              type: "video",
              title: "Responsive Web Design Tutorial",
              url: "https://www.youtube.com/watch?v=srvUrASNdxk",
            },
            {
              type: "link",
              title: "freeCodeCamp: Responsive Web Design",
              url: "https://www.freecodecamp.org/news/responsive-web-design-how-to-make-a-website-responsive/",
            },
            {
              type: "doc",
              title: "MDN: Media Queries",
              url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries",
            },
          ],
          difficulty: "intermediate",
        },
        {
          id: "css-variables",
          title: "CSS Variables & Custom Properties",
          description:
            "Use CSS custom properties for theming, dynamic styling, and maintaining consistent design systems",
          order: 6,
          prerequisites: ["css-basics-selectors"],
          resources: [
            {
              type: "doc",
              title: "MDN: Using CSS Custom Properties",
              url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
            },
            {
              type: "video",
              title: "CSS Variables Explained",
              url: "https://www.youtube.com/watch?v=PHO6TBq_auI",
            },
            {
              type: "link",
              title: "CSS-Tricks: A Complete Guide to Custom Properties",
              url: "https://css-tricks.com/a-complete-guide-to-custom-properties/",
            },
          ],
          difficulty: "beginner",
        },
      ],
    },
    {
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
    },
    {
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
    },
    {
      id: "react",
      title: "React",
      description: "A JavaScript library for building user interfaces",
      order: 6,
      subtopics: [
        {
          id: "react-basics",
          title: "React Fundamentals",
          description:
            "Learn React basics: JSX, components (functional), props, rendering, and the component tree",
          order: 1,
          prerequisites: ["js-es6", "js-dom"],
          resources: [
            {
              type: "doc",
              title: "React Docs: Getting Started",
              url: "https://react.dev/learn",
            },
            {
              type: "video",
              title: "React Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=SqcY0GlETPk",
            },
            {
              type: "link",
              title: "freeCodeCamp: React Tutorial",
              url: "https://www.freecodecamp.org/news/react-beginner-handbook/",
            },
            {
              type: "doc",
              title: "React Docs: Your First Component",
              url: "https://react.dev/learn/your-first-component",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "react-state",
          title: "State & useState Hook",
          description:
            "Manage component state with useState hook, state updates, and understanding React's rendering cycle",
          order: 2,
          prerequisites: ["react-basics"],
          resources: [
            {
              type: "doc",
              title: "React Docs: State",
              url: "https://react.dev/learn/state-a-components-memory",
            },
            {
              type: "video",
              title: "React useState Hook Tutorial",
              url: "https://www.youtube.com/watch?v=O6P86uwfdR0",
            },
            {
              type: "link",
              title: "freeCodeCamp: React useState Hook",
              url: "https://www.freecodecamp.org/news/react-usestate-hook/",
            },
            {
              type: "doc",
              title: "React Docs: useState API",
              url: "https://react.dev/reference/react/useState",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "react-effects",
          title: "useEffect Hook",
          description:
            "Handle side effects, lifecycle events, data fetching, and cleanup with useEffect hook",
          order: 3,
          prerequisites: ["react-state", "js-async"],
          resources: [
            {
              type: "doc",
              title: "React Docs: useEffect",
              url: "https://react.dev/learn/synchronizing-with-effects",
            },
            {
              type: "video",
              title: "React useEffect Hook Explained",
              url: "https://www.youtube.com/watch?v=0ZJgIjIuY7U",
            },
            {
              type: "link",
              title: "freeCodeCamp: React useEffect Hook",
              url: "https://www.freecodecamp.org/news/react-useeffect-hook/",
            },
            {
              type: "doc",
              title: "React Docs: useEffect API",
              url: "https://react.dev/reference/react/useEffect",
            },
          ],
          difficulty: "intermediate",
        },
        {
          id: "react-conditional-rendering",
          title: "Conditional Rendering & Lists",
          description:
            "Render components conditionally, map over arrays to render lists, and use keys properly",
          order: 4,
          prerequisites: ["react-basics"],
          resources: [
            {
              type: "doc",
              title: "React Docs: Conditional Rendering",
              url: "https://react.dev/learn/conditional-rendering",
            },
            {
              type: "doc",
              title: "React Docs: Rendering Lists",
              url: "https://react.dev/learn/rendering-lists",
            },
            {
              type: "video",
              title: "React Conditional Rendering Tutorial",
              url: "https://www.youtube.com/watch?v=7o5FPaVA9m0",
            },
            {
              type: "link",
              title: "freeCodeCamp: React Lists and Keys",
              url: "https://www.freecodecamp.org/news/react-list-tutorial/",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "react-events",
          title: "Event Handling",
          description:
            "Handle user events in React, event objects, synthetic events, and form handling",
          order: 5,
          prerequisites: ["react-state", "js-events"],
          resources: [
            {
              type: "doc",
              title: "React Docs: Responding to Events",
              url: "https://react.dev/learn/responding-to-events",
            },
            {
              type: "video",
              title: "React Event Handling Tutorial",
              url: "https://www.youtube.com/watch?v=rg1Y8qP_F4Y",
            },
            {
              type: "link",
              title: "freeCodeCamp: React Events",
              url: "https://www.freecodecamp.org/news/react-event-handlers/",
            },
            {
              type: "doc",
              title: "React Docs: Forms",
              url: "https://react.dev/reference/react-dom/components/form",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "react-props-children",
          title: "Props & Children",
          description:
            "Pass data with props, prop types, default props, children prop, and prop drilling",
          order: 6,
          prerequisites: ["react-basics"],
          resources: [
            {
              type: "doc",
              title: "React Docs: Passing Props",
              url: "https://react.dev/learn/passing-props-to-a-component",
            },
            {
              type: "video",
              title: "React Props Tutorial",
              url: "https://www.youtube.com/watch?v=IYvD9oBCuJI",
            },
            {
              type: "link",
              title: "freeCodeCamp: React Props",
              url: "https://www.freecodecamp.org/news/react-props/",
            },
            {
              type: "doc",
              title: "React Docs: Children",
              url: "https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "react-routing",
          title: "React Router",
          description:
            "Implement client-side routing with React Router: Routes, Route, Link, NavLink, useNavigate, and nested routes",
          order: 7,
          prerequisites: ["react-props-children", "react-events"],
          resources: [
            {
              type: "doc",
              title: "React Router Documentation",
              url: "https://reactrouter.com/en/main",
            },
            {
              type: "video",
              title: "React Router Tutorial",
              url: "https://www.youtube.com/watch?v=Ul3y1LXxzdU",
            },
            {
              type: "link",
              title: "freeCodeCamp: React Router Tutorial",
              url: "https://www.freecodecamp.org/news/react-router-tutorial/",
            },
            {
              type: "doc",
              title: "React Router: Getting Started",
              url: "https://reactrouter.com/en/main/start/overview",
            },
          ],
          difficulty: "intermediate",
        },
        {
          id: "react-hooks-advanced",
          title: "Advanced Hooks",
          description:
            "Master useRef, useMemo, useCallback, useContext, and custom hooks for performance and code reuse",
          order: 8,
          prerequisites: ["react-effects"],
          resources: [
            {
              type: "doc",
              title: "React Docs: Hooks API Reference",
              url: "https://react.dev/reference/react",
            },
            {
              type: "video",
              title: "React Hooks Explained",
              url: "https://www.youtube.com/watch?v=TNhaISOUy6Q",
            },
            {
              type: "link",
              title: "freeCodeCamp: React Hooks",
              url: "https://www.freecodecamp.org/news/react-hooks/",
            },
            {
              type: "doc",
              title: "React Docs: Custom Hooks",
              url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
            },
          ],
          difficulty: "intermediate",
        },
        {
          id: "react-performance",
          title: "Performance Optimization",
          description:
            "Optimize React apps with memo, useMemo, useCallback, code splitting, and React.memo",
          order: 9,
          prerequisites: ["react-hooks-advanced"],
          resources: [
            {
              type: "doc",
              title: "React Docs: Performance",
              url: "https://react.dev/learn/render-and-commit",
            },
            {
              type: "video",
              title: "React Performance Optimization",
              url: "https://www.youtube.com/watch?v=4FhJkX8f1F4",
            },
            {
              type: "link",
              title: "freeCodeCamp: React Performance",
              url: "https://www.freecodecamp.org/news/react-performance-optimization/",
            },
            {
              type: "doc",
              title: "React Docs: memo API",
              url: "https://react.dev/reference/react/memo",
            },
          ],
          difficulty: "intermediate",
        },
        {
          id: "react-context",
          title: "Context API",
          description:
            "Share state across components without prop drilling using React Context API, useContext hook, and context providers",
          order: 10,
          prerequisites: ["react-hooks-advanced"],
          resources: [
            {
              type: "doc",
              title: "React Docs: Passing Data Deeply with Context",
              url: "https://react.dev/learn/passing-data-deeply-with-context",
            },
            {
              type: "video",
              title: "React Context API Tutorial",
              url: "https://www.youtube.com/watch?v=5LrDIWkK_Bc",
            },
            {
              type: "link",
              title: "freeCodeCamp: React Context API",
              url: "https://www.freecodecamp.org/news/react-context-api/",
            },
            {
              type: "doc",
              title: "React Docs: useContext API",
              url: "https://react.dev/reference/react/useContext",
            },
          ],
          difficulty: "intermediate",
        },
      ],
    },
    {
      id: "state-management",
      title: "State Management",
      description: "Managing application state effectively",
      order: 7,
      subtopics: [
        {
          id: "state-management-context",
          title: "Context API for State Management",
          description:
            "Use React Context API for global state management, when to use it, and its limitations",
          order: 1,
          prerequisites: ["react-context"],
          resources: [
            {
              type: "doc",
              title: "React Docs: Context API",
              url: "https://react.dev/learn/passing-data-deeply-with-context",
            },
            {
              type: "link",
              title: "freeCodeCamp: Context API for State Management",
              url: "https://www.freecodecamp.org/news/react-context-api/",
            },
            {
              type: "video",
              title: "Using Context API for Global State",
              url: "https://www.youtube.com/watch?v=5LrDIWkK_Bc",
            },
          ],
          difficulty: "intermediate",
        },
        {
          id: "redux-basics",
          title: "Redux Fundamentals",
          description:
            "Learn Redux core concepts: store, actions, reducers, dispatch, and the Redux data flow",
          order: 2,
          prerequisites: ["react-context"],
          resources: [
            {
              type: "doc",
              title: "Redux: Core Concepts",
              url: "https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow",
            },
            {
              type: "video",
              title: "Redux Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=CVpUuw9XSjY",
            },
            {
              type: "link",
              title: "freeCodeCamp: Redux Basics",
              url: "https://www.freecodecamp.org/news/redux-for-beginners/",
            },
            {
              type: "doc",
              title: "Redux: Three Principles",
              url: "https://redux.js.org/understanding/thinking-in-redux/three-principles",
            },
          ],
          difficulty: "intermediate",
        },
        {
          id: "redux-toolkit",
          title: "Redux Toolkit",
          description:
            "Master Redux Toolkit (RTK) - the modern way to write Redux: createSlice, configureStore, and RTK Query basics",
          order: 3,
          prerequisites: ["redux-basics"],
          resources: [
            {
              type: "doc",
              title: "Redux Toolkit Documentation",
              url: "https://redux-toolkit.js.org/",
            },
            {
              type: "video",
              title: "Redux Toolkit Tutorial",
              url: "https://www.youtube.com/watch?v=9zySeP5vH9c",
            },
            {
              type: "link",
              title: "freeCodeCamp: Redux Toolkit Guide",
              url: "https://www.freecodecamp.org/news/redux-toolkit-tutorial/",
            },
            {
              type: "doc",
              title: "Redux Toolkit: Quick Start",
              url: "https://redux-toolkit.js.org/tutorials/quick-start",
            },
          ],
          difficulty: "intermediate",
        },
        {
          id: "redux-react-integration",
          title: "Redux with React",
          description:
            "Connect Redux to React components using react-redux, useSelector, useDispatch hooks, and Provider",
          order: 4,
          prerequisites: ["redux-toolkit"],
          resources: [
            {
              type: "doc",
              title: "React-Redux Documentation",
              url: "https://react-redux.js.org/",
            },
            {
              type: "video",
              title: "React Redux Tutorial",
              url: "https://www.youtube.com/watch?v=9zySeP5vH9c",
            },
            {
              type: "link",
              title: "freeCodeCamp: React Redux",
              url: "https://www.freecodecamp.org/news/redux-react-guide/",
            },
            {
              type: "doc",
              title: "React-Redux: Hooks",
              url: "https://react-redux.js.org/api/hooks",
            },
          ],
          difficulty: "intermediate",
        },
        {
          id: "zustand-basics",
          title: "Zustand Fundamentals",
          description:
            "Learn Zustand basics: creating stores, using hooks, updating state, and the simple API",
          order: 5,
          prerequisites: ["state-management-context"],
          resources: [
            {
              type: "doc",
              title: "Zustand: Getting Started",
              url: "https://docs.pmnd.rs/zustand/getting-started/introduction",
            },
            {
              type: "video",
              title: "Zustand Tutorial",
              url: "https://www.youtube.com/watch?v=J-g9ZJha8FE",
            },
            {
              type: "link",
              title: "freeCodeCamp: Zustand Guide",
              url: "https://www.freecodecamp.org/news/zustand-react-state-management/",
            },
            {
              type: "doc",
              title: "Zustand: Basic Usage",
              url: "https://docs.pmnd.rs/zustand/getting-started/introduction",
            },
          ],
          difficulty: "intermediate",
        },
        {
          id: "zustand-advanced",
          title: "Zustand Advanced Patterns",
          description:
            "Master Zustand advanced features: TypeScript integration, middleware, devtools, persistence, and best practices",
          order: 6,
          prerequisites: ["zustand-basics"],
          resources: [
            {
              type: "doc",
              title: "Zustand: TypeScript Guide",
              url: "https://docs.pmnd.rs/zustand/guides/typescript",
            },
            {
              type: "video",
              title: "Zustand Advanced Patterns",
              url: "https://www.youtube.com/watch?v=J-g9ZJha8FE",
            },
            {
              type: "link",
              title: "Zustand: Middleware",
              url: "https://docs.pmnd.rs/zustand/guides/middleware",
            },
            {
              type: "doc",
              title: "Zustand: DevTools",
              url: "https://docs.pmnd.rs/zustand/guides/connect-to-devtools",
            },
          ],
          difficulty: "intermediate",
        },
      ],
    },
    {
      id: "tailwind",
      title: "Tailwind",
      description: "Utility-first CSS framework",
      order: 8,
      subtopics: [
        {
          id: "tailwind-basics",
          title: "Tailwind CSS Basics",
          description:
            "Learn Tailwind fundamentals: installation, utility classes, spacing, colors, typography, and the utility-first approach",
          order: 1,
          prerequisites: ["css-basics-selectors"],
          resources: [
            {
              type: "doc",
              title: "Tailwind CSS Documentation",
              url: "https://tailwindcss.com/docs",
            },
            {
              type: "video",
              title: "Tailwind CSS Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=UBOj6rqRUME",
            },
            {
              type: "link",
              title: "freeCodeCamp: Tailwind CSS Tutorial",
              url: "https://www.freecodecamp.org/news/tailwind-css-tutorial/",
            },
            {
              type: "doc",
              title: "Tailwind: Installation",
              url: "https://tailwindcss.com/docs/installation",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "tailwind-layout",
          title: "Layout & Flexbox/Grid",
          description:
            "Master Tailwind's layout utilities: flexbox, grid, positioning, display, and container classes",
          order: 2,
          prerequisites: ["tailwind-basics", "css-flexbox", "css-grid"],
          resources: [
            {
              type: "doc",
              title: "Tailwind: Flexbox",
              url: "https://tailwindcss.com/docs/flex",
            },
            {
              type: "doc",
              title: "Tailwind: Grid",
              url: "https://tailwindcss.com/docs/grid-template-columns",
            },
            {
              type: "video",
              title: "Tailwind Layout Tutorial",
              url: "https://www.youtube.com/watch?v=UBOj6rqRUME",
            },
            {
              type: "link",
              title: "Tailwind: Layout Utilities",
              url: "https://tailwindcss.com/docs/display",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "tailwind-responsive",
          title: "Responsive Design",
          description:
            "Master Tailwind's responsive utilities: breakpoints, mobile-first approach, and responsive variants",
          order: 3,
          prerequisites: ["tailwind-basics", "css-responsive"],
          resources: [
            {
              type: "doc",
              title: "Tailwind: Responsive Design",
              url: "https://tailwindcss.com/docs/responsive-design",
            },
            {
              type: "video",
              title: "Tailwind Responsive Design",
              url: "https://www.youtube.com/watch?v=UBOj6rqRUME",
            },
            {
              type: "link",
              title: "freeCodeCamp: Tailwind Responsive",
              url: "https://www.freecodecamp.org/news/responsive-design-with-tailwind-css/",
            },
            {
              type: "doc",
              title: "Tailwind: Breakpoints",
              url: "https://tailwindcss.com/docs/responsive-design#breakpoints",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "tailwind-dark-mode",
          title: "Dark Mode & Variants",
          description:
            "Implement dark mode, hover states, focus states, and other variants using Tailwind's variant system",
          order: 4,
          prerequisites: ["tailwind-basics"],
          resources: [
            {
              type: "doc",
              title: "Tailwind: Dark Mode",
              url: "https://tailwindcss.com/docs/dark-mode",
            },
            {
              type: "video",
              title: "Tailwind Dark Mode Tutorial",
              url: "https://www.youtube.com/watch?v=UBOj6rqRUME",
            },
            {
              type: "link",
              title: "Tailwind: Variants",
              url: "https://tailwindcss.com/docs/hover-focus-and-other-states",
            },
            {
              type: "doc",
              title: "Tailwind: State Variants",
              url: "https://tailwindcss.com/docs/hover-focus-and-other-states",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "tailwind-customization",
          title: "Configuration & Customization",
          description:
            "Customize Tailwind: tailwind.config.js, custom colors, fonts, spacing, and extending the default theme",
          order: 5,
          prerequisites: ["tailwind-basics"],
          resources: [
            {
              type: "doc",
              title: "Tailwind: Configuration",
              url: "https://tailwindcss.com/docs/configuration",
            },
            {
              type: "video",
              title: "Tailwind Configuration Tutorial",
              url: "https://www.youtube.com/watch?v=UBOj6rqRUME",
            },
            {
              type: "link",
              title: "freeCodeCamp: Tailwind Config",
              url: "https://www.freecodecamp.org/news/tailwind-config/",
            },
            {
              type: "doc",
              title: "Tailwind: Theme Configuration",
              url: "https://tailwindcss.com/docs/theme",
            },
          ],
          difficulty: "intermediate",
        },
        {
          id: "tailwind-components",
          title: "Building Components",
          description:
            "Build reusable components with Tailwind, component patterns, and best practices for component architecture",
          order: 6,
          prerequisites: ["tailwind-layout", "react-basics"],
          resources: [
            {
              type: "link",
              title: "Tailwind UI Components",
              url: "https://tailwindui.com/components",
            },
            {
              type: "video",
              title: "Building Components with Tailwind",
              url: "https://www.youtube.com/watch?v=UBOj6rqRUME",
            },
            {
              type: "link",
              title: "freeCodeCamp: Tailwind Components",
              url: "https://www.freecodecamp.org/news/tailwind-components/",
            },
            {
              type: "doc",
              title: "Tailwind: Component Patterns",
              url: "https://tailwindcss.com/docs/reusing-styles",
            },
          ],
          difficulty: "intermediate",
        },
      ],
    },
    {
      id: "framer-motion",
      title: "Framer Motion",
      description: "Animation library for React",
      order: 9,
      subtopics: [
        {
          id: "framer-motion-basics",
          title: "Framer Motion Basics",
          description:
            "Learn Framer Motion fundamentals: motion components, basic animations, and the animate prop",
          order: 1,
          prerequisites: ["react-basics"],
          resources: [
            {
              type: "doc",
              title: "Framer Motion: Getting Started",
              url: "https://www.framer.com/motion/introduction/",
            },
            {
              type: "video",
              title: "Framer Motion Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=2V1WK-3HgNk",
            },
            {
              type: "link",
              title: "freeCodeCamp: Framer Motion Tutorial",
              url: "https://www.freecodecamp.org/news/framer-motion-tutorial/",
            },
            {
              type: "doc",
              title: "Framer Motion: Motion Components",
              url: "https://www.framer.com/motion/component/",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "framer-motion-animations",
          title: "Animations & Transitions",
          description:
            "Master animation properties: duration, delay, easing, spring animations, and transition types",
          order: 2,
          prerequisites: ["framer-motion-basics"],
          resources: [
            {
              type: "doc",
              title: "Framer Motion: Animation",
              url: "https://www.framer.com/motion/animation/",
            },
            {
              type: "video",
              title: "Framer Motion Animations",
              url: "https://www.youtube.com/watch?v=2V1WK-3HgNk",
            },
            {
              type: "link",
              title: "Framer Motion: Transitions",
              url: "https://www.framer.com/motion/transition/",
            },
            {
              type: "doc",
              title: "Framer Motion: Spring Animations",
              url: "https://www.framer.com/motion/transition/#spring",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "framer-motion-gestures",
          title: "Gestures & Interactions",
          description:
            "Handle user interactions: hover, tap, drag, whileHover, whileTap, whileDrag, and gesture animations",
          order: 3,
          prerequisites: ["framer-motion-animations"],
          resources: [
            {
              type: "doc",
              title: "Framer Motion: Gestures",
              url: "https://www.framer.com/motion/gestures/",
            },
            {
              type: "video",
              title: "Framer Motion Gestures Tutorial",
              url: "https://www.youtube.com/watch?v=2V1WK-3HgNk",
            },
            {
              type: "link",
              title: "Framer Motion: Drag",
              url: "https://www.framer.com/motion/gestures/#drag",
            },
            {
              type: "doc",
              title: "Framer Motion: While Variants",
              url: "https://www.framer.com/motion/gestures/#while-hover",
            },
          ],
          difficulty: "intermediate",
        },
        {
          id: "framer-motion-variants",
          title: "Variants & Orchestration",
          description:
            "Use variants for reusable animations, parent-child animations, and orchestrated sequences",
          order: 4,
          prerequisites: ["framer-motion-animations"],
          resources: [
            {
              type: "doc",
              title: "Framer Motion: Variants",
              url: "https://www.framer.com/motion/animation/#variants",
            },
            {
              type: "video",
              title: "Framer Motion Variants Tutorial",
              url: "https://www.youtube.com/watch?v=2V1WK-3HgNk",
            },
            {
              type: "link",
              title: "freeCodeCamp: Framer Motion Variants",
              url: "https://www.freecodecamp.org/news/framer-motion-variants/",
            },
            {
              type: "doc",
              title: "Framer Motion: Orchestration",
              url: "https://www.framer.com/motion/animation/#orchestration",
            },
          ],
          difficulty: "intermediate",
        },
        {
          id: "framer-motion-layout",
          title: "Layout Animations",
          description:
            "Animate layout changes automatically: layout prop, layoutId, shared layout animations, and AnimatePresence",
          order: 5,
          prerequisites: ["framer-motion-variants"],
          resources: [
            {
              type: "doc",
              title: "Framer Motion: Layout Animations",
              url: "https://www.framer.com/motion/layout-animations/",
            },
            {
              type: "video",
              title: "Framer Motion Layout Animations",
              url: "https://www.youtube.com/watch?v=2V1WK-3HgNk",
            },
            {
              type: "link",
              title: "Framer Motion: AnimatePresence",
              url: "https://www.framer.com/motion/animate-presence/",
            },
            {
              type: "doc",
              title: "Framer Motion: Shared Layout",
              url: "https://www.framer.com/motion/layout-animations/#shared-layout-animations",
            },
          ],
          difficulty: "intermediate",
        },
      ],
    },
    {
      id: "nextjs-frontend",
      title: "Next.js Frontend",
      description: "React framework for production - Frontend features",
      order: 10,
      subtopics: [
        {
          id: "nextjs-setup-installation",
          title: "Next.js Setup & Installation",
          description:
            "Learn how to create a new Next.js project, understand the project structure, and configure your development environment",
          order: 1,
          prerequisites: ["react-fundamentals"],
          resources: [
            {
              type: "doc",
              title: "Next.js: Getting Started",
              url: "https://nextjs.org/docs/getting-started",
            },
            {
              type: "video",
              title: "Next.js 14 Full Course",
              url: "https://www.youtube.com/watch?v=Sklc_fQBmcs",
            },
            {
              type: "link",
              title: "Next.js Documentation: Installation",
              url: "https://nextjs.org/docs/app/building-your-application/installing",
            },
            {
              type: "link",
              title: "Next.js Project Structure",
              url: "https://nextjs.org/docs/getting-started/project-structure",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "nextjs-app-router",
          title: "App Router & File-based Routing",
          description:
            "Understand Next.js App Router, file-based routing system, dynamic routes, route groups, and parallel routes",
          order: 2,
          prerequisites: ["nextjs-setup-installation"],
          resources: [
            {
              type: "doc",
              title: "Next.js: App Router",
              url: "https://nextjs.org/docs/app",
            },
            {
              type: "doc",
              title: "Next.js: Routing",
              url: "https://nextjs.org/docs/app/building-your-application/routing",
            },
            {
              type: "video",
              title: "Next.js App Router Explained",
              url: "https://www.youtube.com/watch?v=Yt-t7N5hXKM",
            },
            {
              type: "link",
              title: "Next.js: Dynamic Routes",
              url: "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes",
            },
          ],
          difficulty: "intermediate",
        },
        {
          id: "nextjs-layouts-templates",
          title: "Layouts & Templates",
          description:
            "Learn how to create shared layouts, nested layouts, templates, and understand the difference between layouts and templates",
          order: 3,
          prerequisites: ["nextjs-app-router"],
          resources: [
            {
              type: "doc",
              title: "Next.js: Layouts",
              url: "https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts",
            },
            {
              type: "doc",
              title: "Next.js: Templates",
              url: "https://nextjs.org/docs/app/api-reference/file-conventions/template",
            },
            {
              type: "video",
              title: "Next.js Layouts Tutorial",
              url: "https://www.youtube.com/watch?v=6fNy0iD3hsk",
            },
            {
              type: "link",
              title: "Next.js: Nested Layouts",
              url: "https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#nesting-layouts",
            },
          ],
          difficulty: "intermediate",
        },
        {
          id: "nextjs-client-components",
          title: "Client Components & Hooks",
          description:
            "Understand when to use client components, how to add interactivity with hooks, and the difference between server and client components",
          order: 4,
          prerequisites: ["nextjs-layouts-templates"],
          resources: [
            {
              type: "doc",
              title: "Next.js: Client Components",
              url: "https://nextjs.org/docs/app/building-your-application/rendering/client-components",
            },
            {
              type: "doc",
              title: "Next.js: Server and Client Components",
              url: "https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns",
            },
            {
              type: "video",
              title: "Server vs Client Components in Next.js",
              url: "https://www.youtube.com/watch?v=zjZ2hEf20UI",
            },
            {
              type: "link",
              title: "Next.js: When to use Client Components",
              url: "https://nextjs.org/docs/app/building-your-application/rendering/client-components#when-to-use-client-components",
            },
          ],
          difficulty: "intermediate",
        },
        {
          id: "nextjs-image-optimization",
          title: "Image Optimization",
          description:
            "Learn how to use Next.js Image component for automatic image optimization, lazy loading, and responsive images",
          order: 5,
          prerequisites: ["nextjs-client-components"],
          resources: [
            {
              type: "doc",
              title: "Next.js: Image Component",
              url: "https://nextjs.org/docs/app/api-reference/components/image",
            },
            {
              type: "video",
              title: "Next.js Image Optimization",
              url: "https://www.youtube.com/watch?v=8aGf0s7l1_8",
            },
            {
              type: "link",
              title: "Next.js: Image Optimization Guide",
              url: "https://nextjs.org/docs/app/building-your-application/optimizing/images",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "nextjs-font-optimization",
          title: "Font Optimization",
          description:
            "Learn how to optimize fonts using Next.js font optimization features, including Google Fonts and custom fonts",
          order: 6,
          prerequisites: ["nextjs-image-optimization"],
          resources: [
            {
              type: "doc",
              title: "Next.js: Font Optimization",
              url: "https://nextjs.org/docs/app/building-your-application/optimizing/fonts",
            },
            {
              type: "doc",
              title: "Next.js: next/font",
              url: "https://nextjs.org/docs/app/api-reference/components/font",
            },
            {
              type: "link",
              title: "Next.js: Using Google Fonts",
              url: "https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts",
            },
          ],
          difficulty: "beginner",
        },
        {
          id: "nextjs-static-generation",
          title: "Static Site Generation (SSG)",
          description:
            "Understand static site generation, when to use it, and how to generate static pages at build time",
          order: 7,
          prerequisites: ["nextjs-font-optimization"],
          resources: [
            {
              type: "doc",
              title: "Next.js: Static Generation",
              url: "https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic",
            },
            {
              type: "video",
              title: "Next.js Static Generation Explained",
              url: "https://www.youtube.com/watch?v=9P8mASSREYM",
            },
            {
              type: "link",
              title: "Next.js: Static vs Dynamic Rendering",
              url: "https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic",
            },
          ],
          difficulty: "intermediate",
        },
        {
          id: "nextjs-isr",
          title: "Incremental Static Regeneration (ISR)",
          description:
            "Learn how to use ISR to update static pages after build time without rebuilding the entire site",
          order: 8,
          prerequisites: ["nextjs-static-generation"],
          resources: [
            {
              type: "doc",
              title: "Next.js: Incremental Static Regeneration",
              url: "https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration",
            },
            {
              type: "video",
              title: "Next.js ISR Tutorial",
              url: "https://www.youtube.com/watch?v=BGexHR1tuOA",
            },
            {
              type: "link",
              title: "Next.js: Revalidating Data",
              url: "https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating",
            },
          ],
          difficulty: "intermediate",
        },
        {
          id: "nextjs-metadata-seo",
          title: "Metadata & SEO",
          description:
            "Learn how to add metadata, Open Graph tags, and optimize your Next.js app for search engines",
          order: 9,
          prerequisites: ["nextjs-isr"],
          resources: [
            {
              type: "doc",
              title: "Next.js: Metadata",
              url: "https://nextjs.org/docs/app/api-reference/functions/generate-metadata",
            },
            {
              type: "doc",
              title: "Next.js: SEO",
              url: "https://nextjs.org/docs/app/building-your-application/optimizing/metadata",
            },
            {
              type: "video",
              title: "Next.js SEO Tutorial",
              url: "https://www.youtube.com/watch?v=9P8mASSREYM",
            },
            {
              type: "link",
              title: "Next.js: Metadata API",
              url: "https://nextjs.org/docs/app/api-reference/functions/generate-metadata",
            },
          ],
          difficulty: "intermediate",
        },
      ],
    },
    {
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
    },
    {
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
    },
    {
      id: "databases",
      title: "Databases",
      description: "Understanding database systems and SQL",
      order: 13,
      subtopics: [],
    },
    {
      id: "orms",
      title: "ORMs",
      description: "Object-Relational Mapping tools",
      order: 14,
      subtopics: [],
    },
    {
      id: "caching",
      title: "Caching",
      description: "Caching strategies and implementations",
      order: 15,
      subtopics: [],
    },
    {
      id: "nextjs-backend",
      title: "Next.js Backend",
      description: "React framework for production - Backend features",
      order: 16,
      subtopics: [],
    },
    {
      id: "queues",
      title: "Queues",
      description: "Message queues and job processing",
      order: 17,
      subtopics: [],
    },
    {
      id: "security",
      title: "Security",
      description: "Web security best practices",
      order: 18,
      subtopics: [],
    },
    {
      id: "system-design",
      title: "System Design",
      description: "Designing scalable systems",
      order: 19,
      subtopics: [],
    },
    {
      id: "trpc",
      title: "tRPC",
      description: "End-to-end typesafe APIs",
      order: 20,
      subtopics: [],
    },
  ],
};
