"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SubtopicCard } from "./subtopic-card";
import type { MainTopic, Subtopic, SubtopicStatus, RoadmapProgress } from "@/lib/roadmap/types";

interface MainTopicCardProps {
  topic: MainTopic;
  onStatusChange: (subtopicId: string, status: SubtopicStatus) => void;
  onBookmarkToggle: (subtopicId: string) => void;
  onOpenDetail: (subtopic: Subtopic) => void;
  progress: RoadmapProgress;
}

export function MainTopicCard({
  topic,
  onStatusChange,
  onBookmarkToggle,
  onOpenDetail,
  progress,
}: MainTopicCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getSubtopicStatus = (subtopicId: string) => {
    return progress[subtopicId]?.status || "not-started";
  };

  const isSubtopicBlocked = (subtopic: Subtopic) => {
    if (subtopic.prerequisites.length === 0) return false;
    return subtopic.prerequisites.some(
      (prereqId) => getSubtopicStatus(prereqId) !== "completed"
    );
  };

  const completedCount = topic.subtopics.filter(
    (st) => getSubtopicStatus(st.id) === "completed"
  ).length;

  const totalCount = topic.subtopics.length;
  const completionPercentage =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const allCompleted = totalCount > 0 && completedCount === totalCount;

  return (
    <Card
      className={cn(
        "transition-all",
        allCompleted && "border-green-500/20 bg-green-500/5"
      )}
    >
      <CardHeader
        className="cursor-pointer p-4 md:p-6"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start md:items-center justify-between gap-2 md:gap-3">
          <div className="flex-1 min-w-0">
            <CardTitle className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-muted-foreground text-xs sm:text-sm font-mono">
                {topic.order}
              </span>
              <span className="text-base sm:text-lg break-words">{topic.title}</span>
            </CardTitle>
            {topic.description && (
              <p className="text-muted-foreground text-xs sm:text-sm mt-1 break-words">
                {topic.description}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            {totalCount > 0 && (
              <div className="text-right hidden sm:block">
                <div className="text-muted-foreground text-xs">
                  {completedCount}/{totalCount} completed
                </div>
                <div className="text-muted-foreground/70 text-xs">
                  {completionPercentage}%
                </div>
              </div>
            )}
            {isExpanded ? (
              <ChevronUp className="size-4 md:size-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="size-4 md:size-5 text-muted-foreground" />
            )}
          </div>
        </div>

        {totalCount > 0 && (
          <div className="mt-3">
            <div className="bg-muted h-2 w-full rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full transition-all",
                  allCompleted ? "bg-green-500" : "bg-primary"
                )}
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        )}
      </CardHeader>

      {isExpanded && (
        <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
          {topic.subtopics.length === 0 ? (
            <div className="text-muted-foreground text-sm py-8 text-center">
              No subtopics yet. Coming soon!
            </div>
          ) : (
            <div className="space-y-2 md:space-y-3">
              {topic.subtopics.map((subtopic) => (
                <SubtopicCard
                  key={subtopic.id}
                  subtopic={subtopic}
                  onStatusChange={onStatusChange}
                  onBookmarkToggle={onBookmarkToggle}
                  onOpenDetail={onOpenDetail}
                  isBlocked={isSubtopicBlocked(subtopic)}
                  progress={progress}
                />
              ))}
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}
