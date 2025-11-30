export type SubtopicStatus = "not-started" | "in-progress" | "completed";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export type ResourceType = "link" | "video" | "doc";

export interface Resource {
  type: ResourceType;
  title: string;
  url: string;
}

export interface Subtopic {
  id: string;
  title: string;
  description: string;
  order: number;
  prerequisites: string[];
  resources: Resource[];
  difficulty: Difficulty;
}

export interface MainTopic {
  id: string;
  title: string;
  description: string;
  order: number;
  subtopics: Subtopic[];
  prerequisites?: string[];
}

export interface RoadmapData {
  topics: MainTopic[];
}

export interface UserProgress {
  subtopicId: string;
  status: SubtopicStatus;
  bookmarked: boolean;
  notes: string;
  completedAt?: string;
}

export interface RoadmapProgress {
  [subtopicId: string]: UserProgress;
}
