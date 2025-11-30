import type { MainTopic } from "../types";

export const framerMotionTopic: MainTopic = {
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
};
