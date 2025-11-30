"use client";

import { useRoadmap } from "@/hooks/use-roadmap";
import type { Subtopic, SubtopicStatus } from "@/lib/roadmap/types";
import { useState } from "react";
import Link from "next/link";
import { SubtopicDetail } from "@/components/roadmap/subtopic-detail";
import { RoadmapSidebar } from "@/components/roadmap/roadmap-sidebar";
import { Content } from "@/components/roadmap/content";
import { Search } from "@/components/roadmap/search";
import { Button } from "@/components/ui/button";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ArrowLeft } from "lucide-react";

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
        showOnlyBookmarked={true}
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
              <div className="flex justify-end">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/roadmap">
                    <ArrowLeft className="size-4 mr-2" />
                    <span className="hidden sm:inline">Back to Roadmap</span>
                    <span className="sm:hidden">Back</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
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

