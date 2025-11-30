"use client";

import { useRoadmap } from "@/hooks/use-roadmap";
import type { Subtopic, SubtopicStatus } from "@/lib/roadmap/types";
import { useState } from "react";
import { SubtopicDetail } from "@/components/roadmap/subtopic-detail";
import { RoadmapSidebar } from "@/components/roadmap/roadmap-sidebar";
import { Content } from "@/components/roadmap/content";
import { Search } from "@/components/roadmap/search";
import { Timeline } from "@/components/roadmap/timeline";
import { Button } from "@/components/ui/button";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { LayoutGrid, List } from "lucide-react";

type ViewMode = "accordion" | "timeline";

export default function RoadmapPage() {
  const { handleStatusChange, handleBookmarkToggle, handleNotesUpdate } =
    useRoadmap();
  const [selectedSubtopic, setSelectedSubtopic] = useState<Subtopic | null>(
    null
  );
  const [filter, setFilter] = useState<
    "all" | "in-progress" | "completed" | "bookmarked"
  >("all");
  const [viewMode, setViewMode] = useState<ViewMode>("accordion");

  const handleOpenDetail = (subtopic: Subtopic) => {
    setSelectedSubtopic(subtopic);
  };

  const handleCloseDetail = () => {
    setSelectedSubtopic(null);
  };

  const handleSearchResultClick = (subtopic: Subtopic) => {
    handleOpenDetail(subtopic);
  };

  return (
    <SidebarProvider>
      <RoadmapSidebar filter={filter} onFilterChange={setFilter} />
      <SidebarInset>
        <div className="flex h-screen flex-col overflow-hidden">
          <div className="border-b p-4">
            <div className="flex items-center gap-2 mb-4">
              <SidebarTrigger />
              <div className="flex-1">
                <h1 className="text-3xl font-bold tracking-tight mb-2">
                  Roadmap
                </h1>
                <p className="text-muted-foreground">
                  Your essential roadmap to mastering full-stack engineering
                  with TypeScript.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "accordion" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("accordion")}
                  aria-label="Accordion view"
                >
                  <LayoutGrid className="size-4" />
                </Button>
                <Button
                  variant={viewMode === "timeline" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("timeline")}
                  aria-label="Timeline view"
                >
                  <List className="size-4" />
                </Button>
              </div>
            </div>
            <div className="max-w-md">
              <Search onResultClick={handleSearchResultClick} />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            {viewMode === "accordion" ? (
              <Content
                onStatusChange={handleStatusChange}
                onBookmarkToggle={handleBookmarkToggle}
                onOpenDetail={handleOpenDetail}
                filter={filter}
              />
            ) : (
              <Timeline onSubtopicClick={handleOpenDetail} filter={filter} />
            )}
          </div>
        </div>
      </SidebarInset>

      {selectedSubtopic && (
        <SubtopicDetail
          subtopic={selectedSubtopic}
          onClose={handleCloseDetail}
          onStatusChange={handleStatusChange}
          onBookmarkToggle={handleBookmarkToggle}
          onNotesUpdate={handleNotesUpdate}
        />
      )}
    </SidebarProvider>
  );
}
