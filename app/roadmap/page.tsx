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
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { LayoutGrid, List } from "lucide-react";

type ViewMode = "accordion" | "timeline";

export default function RoadmapPage() {
  const { progress, handleStatusChange, handleBookmarkToggle, handleNotesUpdate } =
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
      <RoadmapSidebar
        filter={filter}
        onFilterChange={setFilter}
        onSubtopicClick={handleOpenDetail}
        progress={progress}
      />
      <SidebarInset>
        <div className="flex h-screen flex-col overflow-hidden">
          <div className="border-b p-3 md:p-4 relative">
            <div className="grid grid-cols-3 items-center gap-3 md:gap-4">
              <div className="flex justify-start">
                <SidebarTrigger />
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-2xl">
                  <Search onResultClick={handleSearchResultClick} />
                </div>
              </div>
              <div className="flex justify-end items-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={viewMode === "accordion" ? "default" : "outline"}
                      size="icon"
                      onClick={() => setViewMode("accordion")}
                      aria-label="Accordion view"
                    >
                      <LayoutGrid className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Accordion view</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={viewMode === "timeline" ? "default" : "outline"}
                      size="icon"
                      onClick={() => setViewMode("timeline")}
                      aria-label="Timeline view"
                    >
                      <List className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Timeline view</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
            {viewMode === "accordion" ? (
              <Content
                onStatusChange={handleStatusChange}
                onBookmarkToggle={handleBookmarkToggle}
                onOpenDetail={handleOpenDetail}
                filter={filter}
                progress={progress}
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
