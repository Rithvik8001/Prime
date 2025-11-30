import type { MainTopic } from "../types";

export const tailwindTopic: MainTopic = {
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
};
