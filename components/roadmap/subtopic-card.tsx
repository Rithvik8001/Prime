"use client";

import { Bookmark, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { Subtopic, SubtopicStatus } from "@/lib/roadmap/types";
import { getSubtopicProgress } from "@/lib/roadmap/progress";

interface SubtopicCardProps {
  subtopic: Subtopic;
  onStatusChange: (subtopicId: string, status: SubtopicStatus) => void;
  onBookmarkToggle: (subtopicId: string) => void;
  onOpenDetail: (subtopic: Subtopic) => void;
  isBlocked?: boolean;
}

export function SubtopicCard({
  subtopic,
  onStatusChange,
  onBookmarkToggle,
  onOpenDetail,
  isBlocked = false,
}: SubtopicCardProps) {
  const progress = getSubtopicProgress(subtopic.id);
  const status = progress?.status || "not-started";
  const bookmarked = progress?.bookmarked || false;

  const getStatusColor = () => {
    if (isBlocked) return "border-destructive/50 bg-destructive/5";
    switch (status) {
      case "completed":
        return "border-green-500/50 bg-green-500/5";
      case "in-progress":
        return "border-blue-500/50 bg-blue-500/5";
      default:
        return "border-border";
    }
  };

  const getStatusIcon = () => {
    if (isBlocked) {
      return <Lock className="size-4 text-destructive" />;
    }
    if (status === "completed") {
      return (
        <div className="size-4 rounded-full bg-green-500 flex items-center justify-center">
          <div className="size-2 rounded-full bg-white" />
        </div>
      );
    }
    if (status === "in-progress") {
      return (
        <div className="size-4 rounded-full bg-blue-500 flex items-center justify-center">
          <div className="size-2 rounded-full bg-white animate-pulse" />
        </div>
      );
    }
    return (
      <div className="size-4 rounded-full border-2 border-muted-foreground/30" />
    );
  };

  return (
    <div
      className={cn(
        "group relative rounded-lg border p-4 transition-all hover:shadow-md",
        getStatusColor()
      )}
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0 pt-0.5">
          <Checkbox
            checked={status === "completed"}
            onCheckedChange={(checked) => {
              onStatusChange(
                subtopic.id,
                checked ? "completed" : "not-started"
              );
            }}
            disabled={isBlocked}
            aria-label={`Mark ${subtopic.title} as ${
              status === "completed" ? "completed" : "not started"
            }`}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                {getStatusIcon()}
                <h3 className="font-medium text-sm leading-tight">
                  {subtopic.title}
                </h3>
              </div>
              {subtopic.description && (
                <p className="text-muted-foreground text-xs mt-1 line-clamp-2">
                  {subtopic.description}
                </p>
              )}
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => onBookmarkToggle(subtopic.id)}
                className={cn(
                  "size-7",
                  bookmarked && "text-yellow-500 hover:text-yellow-600"
                )}
                aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
              >
                <Bookmark
                  className={cn("size-4", bookmarked && "fill-current")}
                />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
            {subtopic.difficulty && (
              <span className="capitalize">{subtopic.difficulty}</span>
            )}
            {subtopic.prerequisites.length > 0 && (
              <span className="text-muted-foreground/70">
                {subtopic.prerequisites.length} prerequisite
                {subtopic.prerequisites.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 mt-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onOpenDetail(subtopic)}
              className="text-xs"
            >
              View Details
            </Button>
            {status === "not-started" && !isBlocked && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onStatusChange(subtopic.id, "in-progress")}
                className="text-xs"
              >
                Start Learning
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
