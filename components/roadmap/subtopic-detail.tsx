"use client";

import { Bookmark, Clock, ExternalLink, Lock } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { Subtopic, SubtopicStatus } from "@/lib/roadmap/types";
import { getSubtopicProgress, getProgress } from "@/lib/roadmap/progress";
import { roadmapData } from "@/lib/roadmap/data";

interface SubtopicDetailProps {
  subtopic: Subtopic;
  onClose: () => void;
  onStatusChange: (subtopicId: string, status: SubtopicStatus) => void;
  onBookmarkToggle: (subtopicId: string) => void;
  onNotesUpdate: (subtopicId: string, notes: string) => void;
}

export function SubtopicDetail({
  subtopic,
  onClose,
  onStatusChange,
  onBookmarkToggle,
  onNotesUpdate,
}: SubtopicDetailProps) {
  const progress = getSubtopicProgress(subtopic.id);
  const status = progress?.status || "not-started";
  const bookmarked = progress?.bookmarked || false;
  const [notes, setNotes] = useState(progress?.notes || "");

  const allProgress = getProgress();

  const isPrerequisiteCompleted = (prereqId: string) => {
    return allProgress[prereqId]?.status === "completed";
  };

  const isBlocked = subtopic.prerequisites.some(
    (prereqId) => !isPrerequisiteCompleted(prereqId)
  );

  const getPrerequisiteSubtopic = (prereqId: string) => {
    for (const topic of roadmapData.topics) {
      const found = topic.subtopics.find((st) => st.id === prereqId);
      if (found) return found;
    }
    return null;
  };

  const handleNotesBlur = () => {
    onNotesUpdate(subtopic.id, notes);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="flex items-center gap-2">
                {isBlocked && (
                  <Lock
                    className="size-5 text-destructive"
                    aria-label="Blocked"
                  />
                )}
                {status === "completed" && (
                  <div className="size-5 rounded-full bg-green-500 flex items-center justify-center">
                    <div className="size-2.5 rounded-full bg-white" />
                  </div>
                )}
                {status === "in-progress" && (
                  <div className="size-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <div className="size-2.5 rounded-full bg-white animate-pulse" />
                  </div>
                )}
                <span>{subtopic.title}</span>
              </DialogTitle>
              {subtopic.description && (
                <DialogDescription className="mt-2">
                  {subtopic.description}
                </DialogDescription>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onBookmarkToggle(subtopic.id)}
              className={cn(
                "shrink-0",
                bookmarked && "text-yellow-500 hover:text-yellow-600"
              )}
              aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
            >
              <Bookmark
                className={cn("size-5", bookmarked && "fill-current")}
              />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Metadata */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {subtopic.estimatedTime && (
              <div className="flex items-center gap-1.5">
                <Clock className="size-4" />
                <span>{subtopic.estimatedTime}</span>
              </div>
            )}
            {subtopic.difficulty && (
              <span className="capitalize">{subtopic.difficulty}</span>
            )}
          </div>

          {/* Prerequisites */}
          {subtopic.prerequisites.length > 0 && (
            <div>
              <h3 className="font-medium text-sm mb-2">Prerequisites</h3>
              <div className="space-y-2">
                {subtopic.prerequisites.map((prereqId) => {
                  const prereq = getPrerequisiteSubtopic(prereqId);
                  const isCompleted = isPrerequisiteCompleted(prereqId);
                  if (!prereq) return null;

                  return (
                    <div
                      key={prereqId}
                      className={cn(
                        "flex items-center gap-2 p-2 rounded-md border text-sm",
                        isCompleted
                          ? "border-green-500/20 bg-green-500/5"
                          : "border-destructive/20 bg-destructive/5"
                      )}
                    >
                      {isCompleted ? (
                        <div className="size-4 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                          <div className="size-1.5 rounded-full bg-white" />
                        </div>
                      ) : (
                        <Lock className="size-4 text-destructive shrink-0" />
                      )}
                      <span
                        className={cn(
                          isCompleted
                            ? "text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {prereq.title}
                      </span>
                    </div>
                  );
                })}
              </div>
              {isBlocked && (
                <p className="text-destructive text-sm mt-2">
                  Complete all prerequisites to unlock this subtopic.
                </p>
              )}
            </div>
          )}

          {/* Resources */}
          {subtopic.resources.length > 0 && (
            <div>
              <h3 className="font-medium text-sm mb-2">Resources</h3>
              <div className="space-y-2">
                {subtopic.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-md border hover:bg-accent transition-colors text-sm"
                  >
                    <ExternalLink className="size-4 text-muted-foreground shrink-0" />
                    <span className="flex-1">{resource.title}</span>
                    <span className="text-muted-foreground text-xs capitalize">
                      {resource.type}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Notes */}
          <div>
            <h3 className="font-medium text-sm mb-2">Your Notes</h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              onBlur={handleNotesBlur}
              placeholder="Add your personal notes here..."
              className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-4 border-t">
            <div className="flex items-center gap-2">
              <Checkbox
                id="completed-checkbox"
                checked={status === "completed"}
                onCheckedChange={(checked) => {
                  onStatusChange(
                    subtopic.id,
                    checked ? "completed" : "not-started"
                  );
                }}
                disabled={isBlocked}
              />
              <label
                htmlFor="completed-checkbox"
                className="text-sm font-medium cursor-pointer"
              >
                Mark as completed
              </label>
            </div>

            <div className="flex-1" />

            {status === "not-started" && !isBlocked && (
              <Button
                variant="default"
                onClick={() => onStatusChange(subtopic.id, "in-progress")}
              >
                Start Learning
              </Button>
            )}
            {status === "in-progress" && (
              <Button
                variant="outline"
                onClick={() => onStatusChange(subtopic.id, "not-started")}
              >
                Mark as Not Started
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
