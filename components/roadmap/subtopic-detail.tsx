"use client";

import { Bookmark, ExternalLink, Lock, FileText, Play, BookOpen } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import type { Subtopic, SubtopicStatus, Resource } from "@/lib/roadmap/types";
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
  const isMobile = useIsMobile();
  const [allProgress, setAllProgress] = useState<Record<string, any>>({});
  const [progress, setProgress] = useState(getSubtopicProgress(subtopic.id));
  
  useEffect(() => {
    setAllProgress(getProgress());
    setProgress(getSubtopicProgress(subtopic.id));
  }, [subtopic.id]);

  const status = progress?.status || "not-started";
  const bookmarked = progress?.bookmarked || false;
  const [notes, setNotes] = useState(progress?.notes || "");

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

  // Categorize resources by type
  const categorizedResources = useMemo(() => {
    const categories: {
      docs: Resource[];
      videos: Resource[];
      articles: Resource[];
    } = {
      docs: [],
      videos: [],
      articles: [],
    };

    subtopic.resources.forEach((resource) => {
      if (resource.type === "doc") {
        categories.docs.push(resource);
      } else if (resource.type === "video") {
        categories.videos.push(resource);
      } else {
        categories.articles.push(resource);
      }
    });

    return categories;
  }, [subtopic.resources]);

  const ResourceIcon = ({ type }: { type: Resource["type"] }) => {
    switch (type) {
      case "doc":
        return <BookOpen className="size-4 text-muted-foreground flex-shrink-0" />;
      case "video":
        return <Play className="size-4 text-muted-foreground flex-shrink-0" />;
      default:
        return <FileText className="size-4 text-muted-foreground flex-shrink-0" />;
    }
  };

  const ResourceSection = ({
    title,
    resources,
    icon: Icon,
  }: {
    title: string;
    resources: Resource[];
    icon: React.ElementType;
  }) => {
    if (resources.length === 0) return null;

    return (
      <div>
        <h4 className="font-semibold text-sm mb-3 flex items-center gap-2 text-foreground">
          <Icon className="size-4" />
          {title}
        </h4>
        <div className="space-y-2.5">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent hover:border-accent-foreground/20 transition-all text-sm group"
            >
              <ResourceIcon type={resource.type} />
              <span className="flex-1 font-medium group-hover:text-primary transition-colors">
                {resource.title}
              </span>
              <ExternalLink className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Sheet open={true} onOpenChange={onClose}>
      <SheetContent
        side={isMobile ? "bottom" : "right"}
        className={cn(
          "overflow-y-auto p-0",
          isMobile
            ? "max-h-[90vh] w-full"
            : "w-full sm:max-w-2xl"
        )}
      >
        <SheetHeader className="px-6 pt-6 pb-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <SheetTitle className="flex items-center gap-2 text-xl md:text-2xl mb-4">
                {isBlocked && (
                  <Lock
                    className="size-5 text-destructive shrink-0"
                    aria-label="Blocked"
                  />
                )}
                {status === "completed" && (
                  <div className="size-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                    <div className="size-2.5 rounded-full bg-white" />
                  </div>
                )}
                {status === "in-progress" && (
                  <div className="size-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                    <div className="size-2.5 rounded-full bg-white animate-pulse" />
                  </div>
                )}
                <span className="break-words">{subtopic.title}</span>
              </SheetTitle>
              {subtopic.description && (
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  {subtopic.description}
                </p>
              )}
              {subtopic.difficulty && (
                <div>
                  <span className="inline-flex capitalize px-3 py-1 rounded-md bg-muted text-xs font-medium">
                    {subtopic.difficulty}
                  </span>
                </div>
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
        </SheetHeader>

        <div className="space-y-8 px-6 pb-6">

          {/* Prerequisites */}
          {subtopic.prerequisites.length > 0 && (
            <div>
              <h3 className="font-semibold text-base mb-3">Prerequisites</h3>
              <div className="space-y-2.5">
                {subtopic.prerequisites.map((prereqId) => {
                  const prereq = getPrerequisiteSubtopic(prereqId);
                  const isCompleted = isPrerequisiteCompleted(prereqId);
                  if (!prereq) return null;

                  return (
                    <div
                      key={prereqId}
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-lg border text-sm transition-colors",
                        isCompleted
                          ? "border-green-500/20 bg-green-500/5"
                          : "border-destructive/20 bg-destructive/5"
                      )}
                    >
                      {isCompleted ? (
                        <div className="size-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                          <div className="size-2 rounded-full bg-white" />
                        </div>
                      ) : (
                        <Lock className="size-5 text-destructive shrink-0" />
                      )}
                      <span
                        className={cn(
                          "font-medium",
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
            </div>
          )}

          {/* Resources - Categorized (Only show if prerequisites completed) */}
          {isBlocked ? (
            <div className="bg-muted/50 rounded-lg p-5 border border-destructive/20">
              <div className="flex items-start gap-3">
                <Lock className="size-5 text-destructive shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-2 text-destructive">
                    Resources Locked
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Complete all prerequisites to unlock learning resources for this subtopic. 
                    You can still bookmark this subtopic and add notes while you work on the prerequisites.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            subtopic.resources.length > 0 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-base mb-4">Learning Resources</h3>
                  <div className="space-y-6">
                    <ResourceSection
                      title="Official Documentation"
                      resources={categorizedResources.docs}
                      icon={BookOpen}
                    />
                    <ResourceSection
                      title="Videos"
                      resources={categorizedResources.videos}
                      icon={Play}
                    />
                    <ResourceSection
                      title="Articles & Tutorials"
                      resources={categorizedResources.articles}
                      icon={FileText}
                    />
                  </div>
                </div>
              </div>
            )
          )}

          {/* Notes */}
          <div>
            <h3 className="font-semibold text-base mb-3">Your Notes</h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              onBlur={handleNotesBlur}
              placeholder="Add your personal notes here..."
              className="w-full min-h-[140px] rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            />
          </div>

          {/* Actions */}
          <Separator className="my-2" />
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <div className="flex items-center gap-3">
              <Checkbox
                id="completed-checkbox"
                checked={status === "completed"}
                onCheckedChange={(checked) => {
                  if (isBlocked && checked) return; // Prevent checking if blocked
                  onStatusChange(
                    subtopic.id,
                    checked ? "completed" : "not-started"
                  );
                }}
                disabled={isBlocked && status !== "completed"}
              />
              <label
                htmlFor="completed-checkbox"
                className={cn(
                  "text-sm font-medium",
                  isBlocked && status !== "completed"
                    ? "cursor-not-allowed text-muted-foreground"
                    : "cursor-pointer"
                )}
              >
                Mark as completed
                {isBlocked && status !== "completed" && (
                  <span className="text-xs text-destructive ml-1.5">
                    (Complete prerequisites first)
                  </span>
                )}
              </label>
            </div>

            <div className="flex-1" />

            {status === "not-started" && (
              <Button
                variant="default"
                onClick={() => onStatusChange(subtopic.id, "in-progress")}
                disabled={isBlocked}
                className="w-full sm:w-auto"
              >
                Start Learning
              </Button>
            )}
            {status === "in-progress" && (
              <Button
                variant="outline"
                onClick={() => onStatusChange(subtopic.id, "not-started")}
                className="w-full sm:w-auto"
              >
                Mark as Not Started
              </Button>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
