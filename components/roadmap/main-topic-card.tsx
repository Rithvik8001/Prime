"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SubtopicCard } from "./subtopic-card";
import type { MainTopic, Subtopic, SubtopicStatus } from "@/lib/roadmap/types";
import { getProgress } from "@/lib/roadmap/progress";

interface MainTopicCardProps {
  topic: MainTopic;
  onStatusChange: (subtopicId: string, status: SubtopicStatus) => void;
  onBookmarkToggle: (subtopicId: string) => void;
  onOpenDetail: (subtopic: Subtopic) => void;
}

export function MainTopicCard({
  topic,
  onStatusChange,
  onBookmarkToggle,
  onOpenDetail,
}: MainTopicCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const progress = getProgress();

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
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <CardTitle className="flex items-center gap-2">
              <span className="text-muted-foreground text-sm font-mono">
                {topic.order}
              </span>
              <span>{topic.title}</span>
            </CardTitle>
            {topic.description && (
              <p className="text-muted-foreground text-sm mt-1">
                {topic.description}
              </p>
            )}
          </div>
          <div className="flex items-center gap-3">
            {totalCount > 0 && (
              <div className="text-right">
                <div className="text-muted-foreground text-xs">
                  {completedCount}/{totalCount} completed
                </div>
                <div className="text-muted-foreground/70 text-xs">
                  {completionPercentage}%
                </div>
              </div>
            )}
            {isExpanded ? (
              <ChevronUp className="size-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="size-5 text-muted-foreground" />
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
        <CardContent>
          {topic.subtopics.length === 0 ? (
            <div className="text-muted-foreground text-sm py-8 text-center">
              No subtopics yet. Coming soon!
            </div>
          ) : (
            <div className="space-y-3">
              {topic.subtopics.map((subtopic) => (
                <SubtopicCard
                  key={subtopic.id}
                  subtopic={subtopic}
                  onStatusChange={onStatusChange}
                  onBookmarkToggle={onBookmarkToggle}
                  onOpenDetail={onOpenDetail}
                  isBlocked={isSubtopicBlocked(subtopic)}
                />
              ))}
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}

