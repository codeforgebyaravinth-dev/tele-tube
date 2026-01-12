"use client";

import React from "react";
import { TrendingUp, Music, Gamepad2, Trophy, Newspaper, Clapperboard, Flame } from "lucide-react";
import { videos } from "@/utils/mockVideos";
import { VideoCard } from "@/components/VideoCard";

const exploreItems = [
    { icon: Flame, label: "Trending", color: "text-orange-500", bg: "bg-orange-500/10" },
    { icon: Music, label: "Music", color: "text-blue-500", bg: "bg-blue-500/10" },
    { icon: Gamepad2, label: "Gaming", color: "text-purple-500", bg: "bg-purple-500/10" },
    { icon: Newspaper, label: "News", color: "text-yellow-500", bg: "bg-yellow-500/10" },
    { icon: Trophy, label: "Sports", color: "text-green-500", bg: "bg-green-500/10" },
    { icon: Clapperboard, label: "Movies", color: "text-red-500", bg: "bg-red-500/10" },
];

export default function ExplorePage() {
    return (
        <div className="px-4 md:px-8 py-8">
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-white tracking-tight mb-8">Explore</h1>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {exploreItems.map((item) => (
                        <div key={item.label} className="glass-card group cursor-pointer hover:bg-white/10 transition-all flex flex-col items-center justify-center py-6 border-white/5">
                            <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                <item.icon className={`w-6 h-6 ${item.color}`} />
                            </div>
                            <span className="text-sm font-bold text-white uppercase tracking-widest">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div className="flex items-center gap-2 mb-6">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                    <h2 className="text-xl font-bold text-white">Trending Videos</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {videos.map((video) => (
                        <VideoCard key={video.id} {...video} />
                    ))}
                </div>
            </div>
        </div>
    );
}
