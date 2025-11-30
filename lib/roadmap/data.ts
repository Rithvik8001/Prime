import type { RoadmapData } from "./types";

import { internetWebFundamentalsTopic } from "./topics/internet-web-fundamentals";
import { htmlTopic } from "./topics/html";
import { cssTopic } from "./topics/css";
import { javascriptTopic } from "./topics/javascript";
import { typescriptTopic } from "./topics/typescript";
import { reactTopic } from "./topics/react";
import { stateManagementTopic } from "./topics/state-management";
import { tailwindTopic } from "./topics/tailwind";
import { framerMotionTopic } from "./topics/framer-motion";
import { nextjsFrontendTopic } from "./topics/nextjs-frontend";
import { nodejsFundamentalsTopic } from "./topics/nodejs-fundamentals";
import { expressjsTopic } from "./topics/expressjs";
import { databasesTopic } from "./topics/databases";
import { ormsTopic } from "./topics/orms";
import { cachingTopic } from "./topics/caching";
import { nextjsBackendTopic } from "./topics/nextjs-backend";
import { queuesTopic } from "./topics/queues";
import { securityTopic } from "./topics/security";
import { systemDesignTopic } from "./topics/system-design";
import { trpcTopic } from "./topics/trpc";

export const roadmapData: RoadmapData = {
  topics: [
    internetWebFundamentalsTopic,
    htmlTopic,
    cssTopic,
    javascriptTopic,
    typescriptTopic,
    reactTopic,
    stateManagementTopic,
    tailwindTopic,
    framerMotionTopic,
    nextjsFrontendTopic,
    nodejsFundamentalsTopic,
    expressjsTopic,
    databasesTopic,
    ormsTopic,
    cachingTopic,
    nextjsBackendTopic,
    queuesTopic,
    securityTopic,
    systemDesignTopic,
    trpcTopic
  ],
};
