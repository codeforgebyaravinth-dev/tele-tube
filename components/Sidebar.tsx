"use client";

import React from "react";
import {
    Home,
    Compass,
    PlaySquare,
    Clock,
    ThumbsUp,
    User,
    History,
    TrendingUp,
    Music,
    Gamepad2,
    Trophy
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Compass, label: "Explore", href: "/explore" },
    { icon: TrendingUp, label: "Trending", href: "/trending" },
];

const libraryItems = [
    { icon: History, label: "History", href: "/history" },
    { icon: PlaySquare, label: "Your Videos", href: "/studio" },
    { icon: Clock, label: "Watch Later", href: "/watch-later" },
    { icon: ThumbsUp, label: "Liked Videos", href: "/liked" },
];

const categories = [
    { icon: Music, label: "Music" },
    { icon: Gamepad2, label: "Gaming" },
    { icon: Trophy, label: "Sports" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 h-[calc(100vh-4rem)] hidden lg:flex flex-col border-r border-white/10 bg-black/40 backdrop-blur-xl sticky top-16 overflow-y-auto premium-scrollbar px-4 py-6">
            <div className="space-y-6">
                <div>
                    <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-4 mb-3">Main</h3>
                    <nav className="space-y-1">
                        {mainItems.map((item) => (
                            <Link key={item.label} href={item.href}>
                                <div className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${pathname === item.href ? "bg-white/10 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }`}>
                                    <item.icon className="w-5 h-5 group-hover:text-purple-400" />
                                    <span className="font-medium">{item.label}</span>
                                </div>
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="h-[1px] bg-white/5 mx-4"></div>

                <div>
                    <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-4 mb-3">Library</h3>
                    <nav className="space-y-1">
                        {libraryItems.map((item) => (
                            <Link key={item.label} href={item.href}>
                                <div className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all group">
                                    <item.icon className="w-5 h-5 group-hover:text-blue-400" />
                                    <span className="font-medium">{item.label}</span>
                                </div>
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="h-[1px] bg-white/5 mx-4"></div>

                <div>
                    <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-4 mb-3">Categories</h3>
                    <nav className="space-y-1">
                        {categories.map((item) => (
                            <button key={item.label} className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all group">
                                <item.icon className="w-5 h-5 group-hover:text-purple-400" />
                                <span className="font-medium">{item.label}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </aside>
    );
}
