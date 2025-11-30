"use client";

import { useCallback, useState } from "react";
import type { RoadmapProgress, SubtopicStatus } from "@/lib/roadmap/types";
import {
  getProgress,
  updateStatus,
  toggleBookmark,
  updateNotes,
} from "@/lib/roadmap/progress";

export function useRoadmap() {
  // Initialize state with a function to avoid calling setState in useEffect
  const [progress, setProgress] = useState<RoadmapProgress>(() =>
    getProgress()
  );

  const handleStatusChange = useCallback(
    (subtopicId: string, status: SubtopicStatus) => {
      updateStatus(subtopicId, status);
      // Force immediate state update with new object reference
      // Use functional update to ensure React detects the change
      setProgress(() => {
        const updatedProgress = getProgress();
        return { ...updatedProgress };
      });
    },
    []
  );

  const handleBookmarkToggle = useCallback((subtopicId: string) => {
    toggleBookmark(subtopicId);
    // Force immediate state update with new object reference
    // Use functional update to ensure React detects the change
    setProgress(() => {
      const updatedProgress = getProgress();
      return { ...updatedProgress };
    });
  }, []);

  const handleNotesUpdate = useCallback((subtopicId: string, notes: string) => {
    updateNotes(subtopicId, notes);
    // Force immediate state update with new object reference
    // Use functional update to ensure React detects the change
    setProgress(() => {
      const updatedProgress = getProgress();
      return { ...updatedProgress };
    });
  }, []);

  return {
    progress,
    handleStatusChange,
    handleBookmarkToggle,
    handleNotesUpdate,
  };
}
