import type { RoadmapProgress, UserProgress, SubtopicStatus } from "./types";

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

export function updateStatus(
  subtopicId: string,
  status: SubtopicStatus
): void {
  updateSubtopicProgress(subtopicId, { status });
}

export function getCompletionStats(progress: RoadmapProgress): {
  total: number;
  completed: number;
  inProgress: number;
  notStarted: number;
  percentage: number;
} {
  const entries = Object.values(progress);
  const total = entries.length;
  const completed = entries.filter((e) => e.status === "completed").length;
  const inProgress = entries.filter((e) => e.status === "in-progress").length;
  const notStarted = entries.filter((e) => e.status === "not-started").length;

  return {
    total,
    completed,
    inProgress,
    notStarted,
    percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
  };
}

