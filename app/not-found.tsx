"use client";

import Link from "next/link";
import { Youtube, Search, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
            >
                <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center mb-8 mx-auto border border-white/10 shadow-2xl">
                    <Youtube className="w-12 h-12 text-gray-600" />
                </div>

                <h1 className="text-6xl font-black text-white mb-4 tracking-tighter">404</h1>
                <h2 className="text-2xl font-bold text-gray-400 mb-8">This page isn't available.</h2>

                <p className="max-w-md mx-auto text-gray-500 mb-12 font-medium">
                    Try searching for something else or return to the home page to discover new videos.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/">
                        <button className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all flex items-center gap-2">
                            <ArrowLeft className="w-5 h-5" />
                            Go Back Home
                        </button>
                    </Link>
                    <button className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2">
                        <Search className="w-5 h-5" />
                        Search TeleTube
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
