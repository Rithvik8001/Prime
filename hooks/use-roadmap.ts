"use client";

import { useCallback, useEffect, useState } from "react";
import type { RoadmapProgress, SubtopicStatus } from "@/lib/roadmap/types";
import {
  getProgress,
  updateStatus,
  toggleBookmark,
  updateNotes,
} from "@/lib/roadmap/progress";

export function useRoadmap() {
  const [progress, setProgress] = useState<RoadmapProgress>({});

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const handleStatusChange = useCallback(
    (subtopicId: string, status: SubtopicStatus) => {
      updateStatus(subtopicId, status);
      setProgress(getProgress());
    },
    []
  );

  const handleBookmarkToggle = useCallback((subtopicId: string) => {
    toggleBookmark(subtopicId);
    setProgress(getProgress());
  }, []);

  const handleNotesUpdate = useCallback((subtopicId: string, notes: string) => {
    updateNotes(subtopicId, notes);
    setProgress(getProgress());
  }, []);

  return {
    progress,
    handleStatusChange,
    handleBookmarkToggle,
    handleNotesUpdate,
  };
}

