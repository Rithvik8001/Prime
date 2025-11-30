"use client";

import { Search as SearchIcon } from "lucide-react";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { roadmapData } from "@/lib/roadmap/data";
import type { Subtopic } from "@/lib/roadmap/types";

interface SearchProps {
  onResultClick: (subtopic: Subtopic) => void;
}

export function Search({ onResultClick }: SearchProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo(() => {
    if (!query.trim() || query.length < 2) return [];

    const searchTerm = query.toLowerCase();
    const matches: Array<{ subtopic: Subtopic; topicTitle: string }> = [];

    roadmapData.topics.forEach((topic) => {
      topic.subtopics.forEach((subtopic) => {
        const matchesTitle = subtopic.title.toLowerCase().includes(searchTerm);
        const matchesDescription = subtopic.description
          .toLowerCase()
          .includes(searchTerm);

        if (matchesTitle || matchesDescription) {
          matches.push({ subtopic, topicTitle: topic.title });
        }
      });
    });

    return matches.slice(0, 10); // Limit to 10 results
  }, [query]);

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search subtopics..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => {
            // Delay closing to allow clicks on results
            setTimeout(() => setIsOpen(false), 200);
          }}
          className="pl-9"
        />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-popover border rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.map(({ subtopic, topicTitle }) => (
            <button
              key={subtopic.id}
              onClick={() => {
                onResultClick(subtopic);
                setIsOpen(false);
                setQuery("");
              }}
              className="w-full text-left px-4 py-2 hover:bg-accent transition-colors border-b last:border-b-0"
            >
              <div className="font-medium text-sm">{subtopic.title}</div>
              <div className="text-muted-foreground text-xs mt-0.5">
                {topicTitle}
              </div>
            </button>
          ))}
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-popover border rounded-md shadow-lg z-50 p-4 text-center text-muted-foreground text-sm">
          No results found
        </div>
      )}
    </div>
  );
}
