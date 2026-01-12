"use client";

import React from "react";
import { CategoryPills } from "@/components/CategoryPills";
import { VideoCard } from "@/components/VideoCard";
import { videos } from "@/utils/mockVideos";

export default function Home() {
  return (
    <div className="px-4 md:px-8 py-6">
      {/* Category Selection */}
      <div className="sticky top-16 z-40 bg-[#030303]/80 backdrop-blur-md pt-2">
        <CategoryPills />
      </div>

      <div className="flex items-center justify-between mt-8 mb-4 px-1">
        <h2 className="text-xl font-bold text-white tracking-tight">Featured Videos</h2>
      </div>

      {/* Video Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            {...video}
          />
        ))}
      </div>

      {/* Load More Link */}
      <div className="mt-12 flex justify-center pb-12">
        <button className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 font-bold hover:bg-white/10 hover:text-white transition-all">
          Show more
        </button>
      </div>
    </div>
  );
}
