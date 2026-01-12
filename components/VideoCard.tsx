"use client";

import React from "react";
import { motion } from "framer-motion";
import { MoreVertical, CheckCircle2 } from "lucide-react";
import Link from "next/link";


interface VideoCardProps {
    id: string;
    title: string;
    thumbnail: string;
    author: string;
    views: string;
    timestamp: string;
    authorImage: string;
}

export function VideoCard({
    id,
    title,
    thumbnail,
    author,
    views,
    timestamp,
    authorImage
}: VideoCardProps) {
    return (
        <Link href={`/watch/${id}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
            >
                <div className="relative aspect-video rounded-2xl overflow-hidden glass-card mb-4">
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-2 right-2 flex gap-1.5 items-center">
                        <div className="px-1.5 py-0.5 bg-red-600 rounded text-[9px] font-black text-white uppercase tracking-tighter">
                            LIVE
                        </div>
                        <div className="px-1.5 py-0.5 bg-black/80 backdrop-blur-md rounded text-[10px] font-bold text-white">
                            12:45
                        </div>
                    </div>

                </div>

                <div className="flex gap-3 px-1">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
                        <img src={authorImage} alt={author} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-white line-clamp-2 leading-tight group-hover:text-purple-400 transition-colors">
                            {title}
                        </h3>
                        <div className="mt-1 flex flex-col">
                            <div className="flex items-center gap-1 group/author">
                                <span className="text-xs text-gray-400 group-hover/author:text-white transition-colors">{author}</span>
                                <CheckCircle2 className="w-3 h-3 text-gray-500" />
                            </div>
                            <p className="text-[10px] text-gray-500 font-medium">
                                {views} • {timestamp}
                            </p>
                        </div>
                    </div>
                    <button className="p-1 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-white transition-all">
                        <MoreVertical className="w-4 h-4" />
                    </button>
                </div>
            </motion.div>
        </Link>
    );
}

