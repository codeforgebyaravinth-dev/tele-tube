"use client";

import React from "react";
import { Clock, History, ThumbsUp, ListVideo } from "lucide-react";
import { videos } from "@/utils/mockVideos";
import { VideoCard } from "@/components/VideoCard";
import { usePathname } from "next/navigation";

export default function LibraryListPage() {
    const pathname = usePathname();

    const getHeader = () => {
        if (pathname.includes("history")) return { title: "History", icon: History, color: "text-blue-400" };
        if (pathname.includes("watch-later")) return { title: "Watch Later", icon: Clock, color: "text-purple-400" };
        if (pathname.includes("liked")) return { title: "Liked Videos", icon: ThumbsUp, color: "text-green-400" };
        return { title: "Library", icon: ListVideo, color: "text-gray-400" };
    };

    const header = getHeader();

    return (
        <div className="px-4 md:px-12 py-8">
            <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/5">
                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${header.color}`}>
                    <header.icon className="w-6 h-6" />
                </div>
                <h1 className="text-3xl font-bold text-white tracking-tight">{header.title}</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {videos.map((video) => (
                    <VideoCard key={video.id} {...video} />
                ))}
            </div>
        </div>
    );
}
