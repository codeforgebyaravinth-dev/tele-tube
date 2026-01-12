"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { videos } from "@/utils/mockVideos";
import { CheckCircle2, Filter, MoreVertical } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ResultsPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get("search_query") || "Coding";

    return (
        <div className="px-4 md:px-12 py-8">
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                <h2 className="text-lg font-bold text-white">Results for: <span className="text-purple-400">"{query}"</span></h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-white hover:bg-white/10 transition-all">
                    <Filter className="w-4 h-4" />
                    Filters
                </button>
            </div>

            <div className="max-w-4xl space-y-6">
                {videos.map((video) => (
                    <Link key={video.id} href={`/watch/${video.id}`}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex flex-col md:flex-row gap-6 group cursor-pointer mb-6"
                        >
                            <div className="w-full md:w-64 lg:w-80 aspect-video rounded-2xl overflow-hidden glass-card flex-shrink-0">
                                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>

                            <div className="flex-1 pt-1">
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2 leading-tight">
                                    {video.title}
                                </h3>
                                <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-4">
                                    <span>{video.views}</span>
                                    <span>•</span>
                                    <span>{video.timestamp}</span>
                                </div>

                                <div className="flex items-center gap-3 mb-3 hover:bg-white/5 w-fit pr-4 py-1 rounded-full transition-colors">
                                    <div className="w-6 h-6 rounded-full overflow-hidden border border-white/10">
                                        <img src={video.authorImage} alt={video.author} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{video.author}</span>
                                        <CheckCircle2 className="w-3 h-3 text-gray-500" />
                                    </div>
                                </div>

                                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                                    Building the next generation of web technologies. In this video, we explore the deep integration of Appwrite and Next.js.
                                </p>
                            </div>

                            <button className="p-2 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-white transition-all self-start mt-1">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
