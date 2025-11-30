import type { MainTopic } from "../types";

export const cssTopic: MainTopic = {
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
};
