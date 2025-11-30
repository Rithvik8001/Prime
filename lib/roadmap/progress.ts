import type { RoadmapProgress, UserProgress, SubtopicStatus } from "./types";
import { roadmapData } from "./data";

const STORAGE_KEY = "prime-roadmap-progress";

export function getProgress(): RoadmapProgress {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function saveProgress(progress: RoadmapProgress): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error("Failed to save progress:", error);
  }
}

export function getSubtopicProgress(
  subtopicId: string
): UserProgress | undefined {
  const progress = getProgress();
  return progress[subtopicId];
}

export function updateSubtopicProgress(
  subtopicId: string,
  updates: Partial<UserProgress>
): void {
  const progress = getProgress();
  const existing = progress[subtopicId] || {
    subtopicId,
    status: "not-started",
    bookmarked: false,
    notes: "",
  };

  progress[subtopicId] = {
    ...existing,
    ...updates,
    subtopicId,
  };

  if (updates.status === "completed" && !existing.completedAt) {
    progress[subtopicId].completedAt = new Date().toISOString();
  }

  saveProgress(progress);
}

export function toggleBookmark(subtopicId: string): void {
  const existing = getSubtopicProgress(subtopicId);
  updateSubtopicProgress(subtopicId, {
    bookmarked: !existing?.bookmarked,
  });
}

export function updateNotes(subtopicId: string, notes: string): void {
  updateSubtopicProgress(subtopicId, { notes });
}

export function updateStatus(subtopicId: string, status: SubtopicStatus): void {
  updateSubtopicProgress(subtopicId, { status });
}

export function getCompletionStats(progress: RoadmapProgress): {
  total: number;
  completed: number;
  inProgress: number;
  notStarted: number;
  percentage: number;
} {
  // Count all subtopics across all topics
  let total = 0;
  let completed = 0;
  let inProgress = 0;
  let notStarted = 0;

  roadmapData.topics.forEach((topic) => {
    topic.subtopics.forEach((subtopic) => {
      total++;
      const subtopicProgress = progress[subtopic.id];
      const status = subtopicProgress?.status || "not-started";

      if (status === "completed") {
        completed++;
      } else if (status === "in-progress") {
        inProgress++;
      } else {
        notStarted++;
      }
    });
  });

  return {
    total,
    completed,
    inProgress,
    notStarted,
    percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
  };
}

export function getBookmarkCount(progress: RoadmapProgress): number {
  let count = 0;
  roadmapData.topics.forEach((topic) => {
    topic.subtopics.forEach((subtopic) => {
      if (progress[subtopic.id]?.bookmarked) {
        count++;
      }
    });
  });
  return count;
}
