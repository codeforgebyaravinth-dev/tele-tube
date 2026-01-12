"use client";

import React from "react";
import { useParams } from "next/navigation";
import { CheckCircle2, Search, Bell, Filter } from "lucide-react";
import { videos } from "@/utils/mockVideos";
import { VideoCard } from "@/components/VideoCard";

export default function ChannelPage() {
    const params = useParams();
    const creator = videos[0]; // Mocking creator from first video

    return (
        <div className="animate-in fade-in duration-700">
            {/* Cover Photo */}
            <div className="h-48 md:h-64 bg-gradient-to-r from-purple-900 via-blue-900 to-black relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] opacity-30 bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] to-transparent" />
            </div>

            {/* Profile Header */}
            <div className="px-4 md:px-12 -mt-12 relative z-10 flex flex-col md:flex-row items-end gap-6 mb-12">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#030303] overflow-hidden shadow-2xl bg-[#030303]">
                    <img src={creator.authorImage} alt={creator.author} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 pb-2">
                    <div className="flex items-center gap-2 mb-1">
                        <h1 className="text-3xl font-bold text-white tracking-tight">{creator.author}</h1>
                        <CheckCircle2 className="w-6 h-6 text-gray-500 fill-transparent" />
                    </div>
                    <div className="text-sm font-medium text-gray-400 flex items-center gap-2">
                        <span>@TeleStack_Dev</span>
                        <span>•</span>
                        <span>1.5M subscribers</span>
                        <span>•</span>
                        <span>452 videos</span>
                    </div>
                    <p className="mt-3 text-sm text-gray-400 max-w-2xl line-clamp-2">
                        Building the next generation of web technologies. Join our community of developer wizards and learn how to create world-class apps.
                    </p>
                </div>

                <div className="flex items-center gap-3 pb-2">
                    <button className="px-6 py-2.5 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all text-sm">
                        Subscribe
                    </button>
                    <button className="p-2.5 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-all">
                        <Bell className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Channel Tabs */}
            <div className="px-4 md:px-12 border-b border-white/5 mb-8">
                <div className="flex items-center gap-8 overflow-x-auto no-scrollbar py-2">
                    {["Home", "Videos", "Shorts", "Playlists", "Community", "About"].map((tab) => (
                        <button
                            key={tab}
                            className={`text-sm font-bold pb-4 relative transition-colors ${tab === "Videos" ? "text-white" : "text-gray-500 hover:text-white"
                                }`}
                        >
                            {tab}
                            {tab === "Videos" && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Videos Section */}
            <div className="px-4 md:px-12 pb-20">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-white hover:bg-white/10 transition-all">
                            <Filter className="w-4 h-4" />
                            Latest
                        </button>
                    </div>
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search channel"
                            className="bg-transparent border-b border-white/5 py-1.5 pl-9 pr-4 text-xs text-white outline-none focus:border-white/20 transition-all"
                        />
                    </div>
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
