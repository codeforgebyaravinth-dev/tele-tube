"use client";

import React from "react";
import { PlaySquare } from "lucide-react";
import { videos } from "@/utils/mockVideos";
import { VideoCard } from "@/components/VideoCard";

export default function SubscriptionsPage() {
    return (
        <div className="px-4 md:px-12 py-8">
            <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-purple-400">
                    <PlaySquare className="w-6 h-6" />
                </div>
                <h1 className="text-3xl font-bold text-white tracking-tight">Subscriptions</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {videos.map((video) => (
                    <VideoCard key={video.id} {...video} />
                ))}
            </div>
        </div>
    );
}
