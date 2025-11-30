"use client";

import { useRoadmap } from "@/hooks/use-roadmap";
import type { Subtopic, SubtopicStatus } from "@/lib/roadmap/types";
import { useState } from "react";
import { SubtopicDetail } from "@/components/roadmap/subtopic-detail";
import { RoadmapSidebar } from "@/components/roadmap/roadmap-sidebar";
import { Content } from "@/components/roadmap/content";
import { Search } from "@/components/roadmap/search";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Bookmark } from "lucide-react";

export default function BookmarksPage() {
  const { progress, handleStatusChange, handleBookmarkToggle, handleNotesUpdate } =
    useRoadmap();
  const [selectedSubtopic, setSelectedSubtopic] = useState<Subtopic | null>(
    null
  );

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
        filter="all"
        onSubtopicClick={handleOpenDetail}
        progress={progress}
      />
      <SidebarInset>
        <div className="flex h-screen flex-col overflow-hidden">
          <div className="border-b p-3 md:p-4">
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-2 mb-3 md:mb-4">
              <div className="flex items-center gap-2">
                <SidebarTrigger />
                <div className="flex-1 md:flex-none">
                  <div className="flex items-center gap-2 mb-1 md:mb-2">
                    <Bookmark className="size-6 md:size-7 text-yellow-500" />
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                      Bookmarks
                    </h1>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Your saved learning topics
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:max-w-md">
              <Search onResultClick={handleSearchResultClick} />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 md:p-6">
            <Content
              onStatusChange={handleStatusChange}
              onBookmarkToggle={handleBookmarkToggle}
              onOpenDetail={handleOpenDetail}
              filter="bookmarked"
              progress={progress}
            />
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

