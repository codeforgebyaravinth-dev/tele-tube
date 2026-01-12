"use client";

import React from "react";
import { Search, Bell, Video, User, Menu, Youtube } from "lucide-react";
import Link from "next/link";

export function Navbar() {
    return (
        <nav className="glass-nav px-4 md:px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                    <Menu className="w-6 h-6" />
                </button>
                <Link href="/" className="flex items-center gap-1 group">
                    <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                        <Youtube className="w-5 h-5 text-white fill-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tighter text-white hidden md:block">TeleTube</span>
                </Link>
            </div>

            <div className="flex-1 max-w-2xl px-4 flex items-center gap-3">
                <div className="flex-1 relative group">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-4 pr-12 text-sm outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all font-medium"
                    />
                    <button className="absolute right-0 top-0 bottom-0 px-4 bg-white/5 border-l border-white/10 rounded-r-full hover:bg-white/10 transition-colors group/btn">
                        <Search className="w-5 h-5 text-gray-400 group-hover/btn:text-purple-400 transition-colors" />
                    </button>

                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
                <Link href="/studio">
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                        <Video className="w-6 h-6" />
                    </button>
                </Link>
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-white relative">
                    <Bell className="w-6 h-6" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full border border-black"></span>
                </button>
                <Link href="/login">
                    <button className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center border border-white/20 ml-2">
                        <User className="w-6 h-6 text-white" />
                    </button>
                </Link>
            </div>

        </nav>
    );
}
