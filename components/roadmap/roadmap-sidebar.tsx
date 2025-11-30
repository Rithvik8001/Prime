"use client";

import { Bookmark, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { roadmapData } from "@/lib/roadmap/data";
import { getProgress, getCompletionStats } from "@/lib/roadmap/progress";
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
}

export function RoadmapSidebar({
  selectedTopicId,
  onTopicSelect,
  filter = "all",
  onFilterChange,
}: RoadmapSidebarProps) {
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());
  const progress = getProgress();
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

    const allProgress = getProgress();
    switch (filter) {
      case "completed":
        return topic.subtopics.filter(
          (st) => allProgress[st.id]?.status === "completed"
        ).length;
      case "in-progress":
        return topic.subtopics.filter(
          (st) => allProgress[st.id]?.status === "in-progress"
        ).length;
      case "bookmarked":
        return topic.subtopics.filter((st) => allProgress[st.id]?.bookmarked)
          .length;
      default:
        return topic.subtopics.length;
    }
  };

  const filteredTopics = roadmapData.topics.filter((topic) => {
    if (filter === "all") return true;
    return getSubtopicCount(topic.id) > 0;
  });

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
