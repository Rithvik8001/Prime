"use client";

import { Bookmark, ChevronDown, ChevronRight, Lock } from "lucide-react";
import { useState, useEffect } from "react";
import { roadmapData } from "@/lib/roadmap/data";
import { getCompletionStats } from "@/lib/roadmap/progress";
import { cn } from "@/lib/utils";
import type { Subtopic, RoadmapProgress } from "@/lib/roadmap/types";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuBadge,
  SidebarSeparator,
} from "@/components/ui/sidebar";

interface RoadmapSidebarProps {
  selectedTopicId?: string;
  onTopicSelect?: (topicId: string) => void;
  filter?: "all" | "in-progress" | "completed" | "bookmarked";
  onFilterChange?: (
    filter: "all" | "in-progress" | "completed" | "bookmarked"
  ) => void;
  onSubtopicClick?: (subtopic: Subtopic) => void;
  progress: RoadmapProgress;
}

export function RoadmapSidebar({
  selectedTopicId,
  onTopicSelect,
  filter = "all",
  onFilterChange,
  onSubtopicClick,
  progress,
}: RoadmapSidebarProps) {
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());

  const stats = getCompletionStats(progress);

  const toggleTopic = (topicId: string) => {
    const newExpanded = new Set(expandedTopics);
    if (newExpanded.has(topicId)) {
      newExpanded.delete(topicId);
    } else {
      newExpanded.add(topicId);
    }
    setExpandedTopics(newExpanded);
  };

  const getSubtopicCount = (topicId: string) => {
    const topic = roadmapData.topics.find((t) => t.id === topicId);
    if (!topic) return 0;

    switch (filter) {
      case "completed":
        return topic.subtopics.filter(
          (st) => progress[st.id]?.status === "completed"
        ).length;
      case "in-progress":
        return topic.subtopics.filter(
          (st) => progress[st.id]?.status === "in-progress"
        ).length;
      case "bookmarked":
        return topic.subtopics.filter((st) => progress[st.id]?.bookmarked)
          .length;
      default:
        return topic.subtopics.length;
    }
  };

  const filteredTopics = roadmapData.topics.filter((topic) => {
    if (filter === "all") return true;
    return getSubtopicCount(topic.id) > 0;
  });

  const getSubtopicStatus = (subtopicId: string) => {
    return progress[subtopicId]?.status || "not-started";
  };

  const isSubtopicBlocked = (subtopic: Subtopic) => {
    if (subtopic.prerequisites.length === 0) return false;
    return subtopic.prerequisites.some(
      (prereqId) => getSubtopicStatus(prereqId) !== "completed"
    );
  };

  const getStatusIcon = (subtopic: Subtopic) => {
    const status = getSubtopicStatus(subtopic.id);
    const blocked = isSubtopicBlocked(subtopic);
    const bookmarked = progress[subtopic.id]?.bookmarked || false;

    if (blocked) {
      return <Lock className="size-3 text-destructive" />;
    }
    if (status === "completed") {
      return (
        <div className="size-3 rounded-full bg-green-500 flex items-center justify-center">
          <div className="size-1.5 rounded-full bg-white" />
        </div>
      );
    }
    if (status === "in-progress") {
      return (
        <div className="size-3 rounded-full bg-blue-500 flex items-center justify-center">
          <div className="size-1.5 rounded-full bg-white animate-pulse" />
        </div>
      );
    }
    return (
      <div className="size-3 rounded-full border-2 border-sidebar-foreground/30" />
    );
  };

  const getFilteredSubtopics = (topicId: string) => {
    const topic = roadmapData.topics.find((t) => t.id === topicId);
    if (!topic) return [];

    if (filter === "all") return topic.subtopics;

    return topic.subtopics.filter((subtopic) => {
      const subtopicProgress = progress[subtopic.id];
      if (filter === "completed" && subtopicProgress?.status !== "completed") {
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
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="px-2 py-1.5">
          <h2 className="font-semibold text-sm">Progress</h2>
        </div>
        <div className="px-2 space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-sidebar-foreground/70">Completed</span>
            <span className="font-medium">{stats.completed}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sidebar-foreground/70">In Progress</span>
            <span className="font-medium">{stats.inProgress}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sidebar-foreground/70">Total</span>
            <span className="font-medium">{stats.total}</span>
          </div>
          <div className="pt-2">
            <div className="bg-sidebar-accent h-2 w-full rounded-full overflow-hidden">
              <div
                className="h-full bg-sidebar-primary transition-all"
                style={{ width: `${stats.percentage}%` }}
              />
            </div>
            <div className="text-sidebar-foreground/70 text-xs mt-1">
              {stats.percentage}% complete
            </div>
          </div>
        </div>
      </SidebarHeader>

      {onFilterChange && (
        <>
          <SidebarSeparator className="mx-0" />
          <SidebarGroup>
            <SidebarGroupLabel>Filters</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {(
                  [
                    { id: "all", label: "All" },
                    { id: "in-progress", label: "In Progress" },
                    { id: "completed", label: "Completed" },
                    { id: "bookmarked", label: "Bookmarked" },
                  ] as const
                ).map((f) => (
                  <SidebarMenuItem key={f.id}>
                    <SidebarMenuButton
                      isActive={filter === f.id}
                      onClick={() => onFilterChange(f.id)}
                    >
                      {f.id === "bookmarked" && <Bookmark className="size-4" />}
                      <span>{f.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </>
      )}

      <SidebarSeparator className="mx-0" />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Topics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredTopics.map((topic) => {
                const isExpanded = expandedTopics.has(topic.id);
                const isSelected = selectedTopicId === topic.id;
                const subtopicCount = getSubtopicCount(topic.id);
                const filteredSubtopics = getFilteredSubtopics(topic.id);

                return (
                  <SidebarMenuItem key={topic.id}>
                    <SidebarMenuButton
                      isActive={isSelected}
                      onClick={() => {
                        toggleTopic(topic.id);
                        onTopicSelect?.(topic.id);
                      }}
                    >
                      {topic.subtopics.length > 0 ? (
                        isExpanded ? (
                          <ChevronDown className="size-4" />
                        ) : (
                          <ChevronRight className="size-4" />
                        )
                      ) : (
                        <div className="size-4" />
                      )}
                      <span className="text-sidebar-foreground/70 text-xs font-mono">
                        {topic.order}
                      </span>
                      <span className="flex-1 text-left truncate">
                        {topic.title}
                      </span>
                      {subtopicCount > 0 && (
                        <SidebarMenuBadge>{subtopicCount}</SidebarMenuBadge>
                      )}
                    </SidebarMenuButton>
                    {isExpanded && filteredSubtopics.length > 0 && (
                      <SidebarMenu>
                        {filteredSubtopics.map((subtopic) => {
                          const status = getSubtopicStatus(subtopic.id);
                          const blocked = isSubtopicBlocked(subtopic);
                          const bookmarked = progress[subtopic.id]?.bookmarked || false;

                          return (
                            <SidebarMenuItem key={subtopic.id}>
                              <SidebarMenuButton
                                onClick={() => onSubtopicClick?.(subtopic)}
                                className="pl-8"
                              >
                                {getStatusIcon(subtopic)}
                                <span className="flex-1 text-left truncate text-xs">
                                  {subtopic.title}
                                </span>
                                {bookmarked && (
                                  <Bookmark className="size-3 text-yellow-500 fill-current shrink-0" />
                                )}
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          );
                        })}
                      </SidebarMenu>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
