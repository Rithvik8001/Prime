"use client";

import { CheckCircle2, Circle, Loader2, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { roadmapData } from "@/lib/roadmap/data";
import { getProgress } from "@/lib/roadmap/progress";
import type { Subtopic, SubtopicStatus } from "@/lib/roadmap/types";
import { Button } from "@/components/ui/button";

interface TimelineProps {
  onSubtopicClick: (subtopic: Subtopic) => void;
  filter?: "all" | "in-progress" | "completed" | "bookmarked";
}

export function Timeline({ onSubtopicClick, filter = "all" }: TimelineProps) {
  const progress = getProgress();

  const getAllSubtopics = () => {
    const allSubtopics: Array<{
      subtopic: Subtopic;
      topicTitle: string;
      topicOrder: number;
    }> = [];

    roadmapData.topics.forEach((topic) => {
      topic.subtopics.forEach((subtopic) => {
        allSubtopics.push({
          subtopic,
          topicTitle: topic.title,
          topicOrder: topic.order,
        });
      });
    });

    return allSubtopics.sort((a, b) => {
      if (a.topicOrder !== b.topicOrder) {
        return a.topicOrder - b.topicOrder;
      }
      return a.subtopic.order - b.subtopic.order;
    });
  };

  const getStatus = (subtopicId: string): SubtopicStatus => {
    return progress[subtopicId]?.status || "not-started";
  };

  const isBlocked = (subtopic: Subtopic) => {
    if (subtopic.prerequisites.length === 0) return false;
    return subtopic.prerequisites.some(
      (prereqId) => getStatus(prereqId) !== "completed"
    );
  };

  const filteredSubtopics = getAllSubtopics().filter(({ subtopic }) => {
    const subtopicProgress = progress[subtopic.id];

    if (filter === "all") return true;
    if (filter === "completed" && subtopicProgress?.status !== "completed")
      return false;
    if (filter === "in-progress" && subtopicProgress?.status !== "in-progress")
      return false;
    if (filter === "bookmarked" && !subtopicProgress?.bookmarked) return false;

    return true;
  });

  const getStatusIcon = (subtopic: Subtopic) => {
    const status = getStatus(subtopic.id);
    const blocked = isBlocked(subtopic);

    if (blocked) {
      return <Lock className="size-5 text-destructive" />;
    }

    switch (status) {
      case "completed":
        return <CheckCircle2 className="size-5 text-green-500" />;
      case "in-progress":
        return <Loader2 className="size-5 text-blue-500 animate-spin" />;
      default:
        return <Circle className="size-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (subtopic: Subtopic) => {
    const status = getStatus(subtopic.id);
    const blocked = isBlocked(subtopic);

    if (blocked) return "border-destructive/50";
    if (status === "completed") return "border-green-500/50";
    if (status === "in-progress") return "border-blue-500/50";
    return "border-muted";
  };

  if (filteredSubtopics.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-muted-foreground text-lg mb-2">No subtopics found</p>
        <p className="text-muted-foreground/70 text-sm">
          Try adjusting your filter.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-8">
        {filteredSubtopics.map(({ subtopic, topicTitle, topicOrder }) => {
          const blocked = isBlocked(subtopic);

          return (
            <div key={subtopic.id} className="relative flex gap-4">
              {/* Status icon */}
              <div
                className={cn(
                  "relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-background",
                  getStatusColor(subtopic)
                )}
              >
                {getStatusIcon(subtopic)}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="mb-1">
                  <span className="text-muted-foreground text-xs font-mono">
                    {topicOrder}.{subtopic.order}
                  </span>
                  <span className="text-muted-foreground text-xs mx-2">•</span>
                  <span className="text-muted-foreground text-xs">
                    {topicTitle}
                  </span>
                </div>
                <h3
                  className={cn(
                    "font-medium mb-1",
                    blocked && "text-muted-foreground"
                  )}
                >
                  {subtopic.title}
                </h3>
                {subtopic.description && (
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {subtopic.description}
                  </p>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onSubtopicClick(subtopic)}
                  disabled={blocked}
                >
                  View Details
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
