import type { MainTopic } from "../types";

export const htmlTopic: MainTopic = {
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
      description: "Embed audio and video content using HTML5 media elements",
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
};
