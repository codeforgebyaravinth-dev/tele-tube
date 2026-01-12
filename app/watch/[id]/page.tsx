"use client";

import React from "react";
import { useParams } from "next/navigation";
import {
    ThumbsUp,
    ThumbsDown,
    Share2,
    Download,
    MoreHorizontal,
    CheckCircle2,
    Send,
    MessageSquare
} from "lucide-react";
import { videos } from "@/utils/mockVideos";
import { VideoCard } from "@/components/VideoCard";

export default function WatchPage() {
    const params = useParams();
    const video = videos.find((v) => v.id === params.id) || videos[0];

    return (
        <div className="px-4 md:px-8 py-6 lg:flex gap-6">
            <div className="flex-1">
                {/* Main Video Player */}
                <div className="aspect-video bg-black rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl relative group mb-6">
                    <video
                        className="w-full h-full object-cover"
                        poster={video.thumbnail}
                        controls
                    >
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Video Info */}
                <div className="mb-8">
                    <h1 className="text-xl md:text-2xl font-bold text-white mb-4">{video.title}</h1>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                                <img src={video.authorImage} alt={video.author} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    <span className="font-bold text-white">{video.author}</span>
                                    <CheckCircle2 className="w-4 h-4 text-gray-500" />
                                </div>
                                <p className="text-xs text-gray-500 font-medium">1.5M subscribers</p>
                            </div>
                            <button className="ml-4 px-6 py-2.5 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all text-sm">
                                Subscribe
                            </button>
                        </div>

                        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                            <div className="flex items-center bg-white/5 border border-white/10 rounded-full">
                                <button className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 transition-all border-r border-white/10 text-white font-medium text-sm">
                                    <ThumbsUp className="w-5 h-5" />
                                    124K
                                </button>
                                <button className="px-4 py-2 hover:bg-white/10 transition-all text-white">
                                    <ThumbsDown className="w-5 h-5" />
                                </button>
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-white font-medium text-sm">
                                <Share2 className="w-5 h-5" />
                                Share
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-white font-medium text-sm">
                                <Download className="w-5 h-5" />
                                Download
                            </button>
                            <button className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-white">
                                <MoreHorizontal className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="glass-card bg-white/5 hover:bg-white/5 border-white/5 mb-8">
                    <p className="text-sm font-bold text-white mb-1">{video.views} • {video.timestamp}</p>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        In this video, we dive deep into the ultimate developer experience. Learn how to build world-class applications with TeleStack and Appwrite.
                        <br /><br />
                        🔥 Get the Source Code: github.com/telestack/teletube
                        <br />
                        🚀 Join the Community: discord.gg/telestack
                    </p>
                </div>

                {/* Comments Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-8">
                        <MessageSquare className="w-6 h-6 text-purple-400" />
                        <h3 className="text-lg font-bold text-white">452 Comments</h3>
                    </div>

                    <div className="flex gap-4 mb-8">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 overflow-hidden flex-shrink-0" />
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                placeholder="Add a comment..."
                                className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-purple-500 transition-all text-sm text-white"
                            />
                            <button className="absolute right-0 bottom-2 p-1 text-purple-500 hover:text-purple-400">
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 overflow-hidden flex-shrink-0">
                                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1 text-sm">
                                        <span className="font-bold text-white">Frontend Master</span>
                                        <span className="text-xs text-gray-500">2 hours ago</span>
                                    </div>
                                    <p className="text-sm text-gray-300 mb-2">This is the best YouTube clone UI I have ever seen. The glassmorphism is just perfect! Keep it up guys.</p>
                                    <div className="flex items-center gap-4">
                                        <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
                                            <ThumbsUp className="w-4 h-4" />
                                            14
                                        </button>
                                        <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
                                            <ThumbsDown className="w-4 h-4" />
                                        </button>
                                        <button className="text-xs text-gray-400 hover:text-white transition-colors font-bold">Reply</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recommended Videos Sidebar */}
            <div className="lg:w-96 flex-shrink-0">
                <h3 className="text-sm font-bold text-white mb-4">Recommended for you</h3>
                <div className="space-y-6">
                    {videos.filter(v => v.id !== params.id).map((v) => (
                        <VideoCard key={v.id} {...v} />
                    ))}
                </div>
            </div>
        </div>
    );
}
