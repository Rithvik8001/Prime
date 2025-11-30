"use client";

import { roadmapData } from "@/lib/roadmap/data";
import { MainTopicCard } from "./main-topic-card";
import type { Subtopic, SubtopicStatus } from "@/lib/roadmap/types";
import { getProgress } from "@/lib/roadmap/progress";

interface ContentProps {
  onStatusChange: (subtopicId: string, status: SubtopicStatus) => void;
  onBookmarkToggle: (subtopicId: string) => void;
  onOpenDetail: (subtopic: Subtopic) => void;
  filter?: "all" | "in-progress" | "completed" | "bookmarked";
}

export function Content({
  onStatusChange,
  onBookmarkToggle,
  onOpenDetail,
  filter = "all",
}: ContentProps) {
  const progress = getProgress();

  const getFilteredTopics = () => {
    if (filter === "all") {
      return roadmapData.topics;
    }

    return roadmapData.topics
      .map((topic) => {
        const filteredSubtopics = topic.subtopics.filter((subtopic) => {
          const subtopicProgress = progress[subtopic.id];

          // Apply filter
          if (
            filter === "completed" &&
            subtopicProgress?.status !== "completed"
          ) {
            return false;
          }
          if (
            filter === "in-progress" &&
            subtopicProgress?.status !== "in-progress"
          ) {
            return false;
          }
          if (filter === "bookmarked" && !subtopicProgress?.bookmarked) {
            return false;
          }

          return true;
        });

        return {
          ...topic,
          subtopics: filteredSubtopics,
        };
      })
      .filter((topic) => topic.subtopics.length > 0);
  };

  const filteredTopics = getFilteredTopics();

  if (filteredTopics.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-muted-foreground text-lg mb-2">No topics found</p>
        <p className="text-muted-foreground/70 text-sm">
          {filter !== "all"
            ? `Try adjusting your filter or search query.`
            : "Try adjusting your search query."}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredTopics.map((topic) => (
        <MainTopicCard
          key={topic.id}
          topic={topic}
          onStatusChange={onStatusChange}
          onBookmarkToggle={onBookmarkToggle}
          onOpenDetail={onOpenDetail}
        />
      ))}
    </div>
  );
}
