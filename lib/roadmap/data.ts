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
          id: "react-hooks-advanced",
          title: "Advanced Hooks",
          description:
            "Master useRef, useMemo, useCallback, useContext, and custom hooks for performance and code reuse",
          order: 7,
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
          order: 8,
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
      ],
    },
    {
      id: "state-management",
      title: "State Management",
      description: "Managing application state effectively",
      order: 7,
      subtopics: [],
    },
    {
      id: "data-fetching-fundamentals",
      title: "Data Fetching Fundamentals",
      description: "Understanding how to fetch and handle data",
      order: 8,
      subtopics: [],
    },
    {
      id: "data-fetching-tools",
      title: "Data Fetching Tools",
      description: "Tools and libraries for data fetching",
      order: 9,
      subtopics: [],
    },
    {
      id: "tailwind",
      title: "Tailwind",
      description: "Utility-first CSS framework",
      order: 10,
      subtopics: [],
    },
    {
      id: "framer-motion",
      title: "Framer Motion",
      description: "Animation library for React",
      order: 11,
      subtopics: [],
    },
    {
      id: "nextjs",
      title: "Next.js",
      description: "React framework for production",
      order: 12,
      subtopics: [],
    },
    {
      id: "nodejs-fundamentals",
      title: "Node.js Fundamentals",
      description: "JavaScript runtime for server-side development",
      order: 13,
      subtopics: [],
    },
    {
      id: "expressjs",
      title: "Express.js",
      description: "Web application framework for Node.js",
      order: 14,
      subtopics: [],
    },
    {
      id: "databases",
      title: "Databases",
      description: "Understanding database systems and SQL",
      order: 15,
      subtopics: [],
    },
    {
      id: "orms",
      title: "ORMs",
      description: "Object-Relational Mapping tools",
      order: 16,
      subtopics: [],
    },
    {
      id: "caching",
      title: "Caching",
      description: "Caching strategies and implementations",
      order: 17,
      subtopics: [],
    },
    {
      id: "queues",
      title: "Queues",
      description: "Message queues and job processing",
      order: 18,
      subtopics: [],
    },
    {
      id: "security",
      title: "Security",
      description: "Web security best practices",
      order: 19,
      subtopics: [],
    },
    {
      id: "system-design",
      title: "System Design",
      description: "Designing scalable systems",
      order: 20,
      subtopics: [],
    },
    {
      id: "trpc",
      title: "tRPC",
      description: "End-to-end typesafe APIs",
      order: 21,
      subtopics: [],
    },
  ],
};
