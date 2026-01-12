"use client";

import React, { useState } from "react";
import { Upload, X, FileVideo, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StudioPage() {
    const [isUploading, setIsUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [file, setFile] = useState<File | null>(null);

    const simulateUpload = () => {
        setIsUploading(true);
        let p = 0;
        const interval = setInterval(() => {
            p += 5;
            setProgress(p);
            if (p >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    setIsUploading(false);
                    setFile(null);
                    setProgress(0);
                }, 1000);
            }
        }, 100);
    };

    return (
        <div className="px-4 md:px-8 py-8 animate-in fade-in duration-700">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Channel Content</h1>
                    <p className="text-gray-400 mt-1 text-sm font-medium">Upload and manage your videos.</p>
                </div>
                <button
                    onClick={() => document.getElementById("file-upload")?.click()}
                    className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 transition-all font-bold text-white rounded-xl shadow-lg shadow-purple-600/20 flex items-center gap-2"
                >
                    <Upload className="w-5 h-5" />
                    Create
                </button>
            </div>

            <input
                id="file-upload"
                type="file"
                accept="video/*"
                className="hidden"
                onChange={(e) => {
                    if (e.target.files?.[0]) {
                        setFile(e.target.files[0]);
                        simulateUpload();
                    }
                }}
            />

            <div className="glass-card min-h-[500px] flex flex-col items-center justify-center p-12 text-center border-dashed border-2 border-white/5">
                <AnimatePresence mode="wait">
                    {!isUploading ? (
                        <motion.div
                            key="idle"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="group cursor-pointer"
                            onClick={() => document.getElementById("file-upload")?.click()}
                        >
                            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-purple-500/10 transition-colors border border-white/5 group-hover:border-purple-500/30">
                                <Upload className="w-10 h-10 text-gray-500 group-hover:text-purple-400 transition-colors" />
                            </div>
                            <h2 className="text-xl font-bold text-white mb-2">Select files to upload</h2>
                            <p className="text-sm text-gray-500 mb-8 font-medium">Your videos will be private until you publish them.</p>

                            <div className="flex flex-col gap-3 items-center">
                                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-600">
                                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> 4K Quality</span>
                                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> Fast CDN</span>
                                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> Unlimited Bandwidth</span>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="uploading"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="w-full max-w-sm"
                        >
                            <div className="w-20 h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto relative overflow-hidden">
                                <FileVideo className="w-10 h-10 text-purple-400 z-10" />
                                <motion.div
                                    initial={{ y: "100%" }}
                                    animate={{ y: `${100 - progress}%` }}
                                    className="absolute inset-0 bg-purple-500/30"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-white font-bold">{progress === 100 ? "Processing..." : "Uploading..."}</span>
                                    <span className="text-purple-400 font-bold">{progress}%</span>
                                </div>

                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progress}%` }}
                                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_20px_rgba(147,51,234,0.5)]"
                                    />
                                </div>

                                <p className="text-xs text-gray-500 font-medium">
                                    File: <span className="text-gray-300">{file?.name}</span> • {((file?.size || 0) / 1024 / 1024).toFixed(1)} MB
                                </p>

                                <div className="flex items-center gap-2 p-3 bg-blue-500/10 rounded-lg text-blue-400 text-xs border border-blue-500/20">
                                    <AlertCircle className="w-4 h-4" />
                                    Do not close the tab while the upload is in progress.
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Uploaded Videos Table Placeholder */}
            <div className="mt-12">
                <h3 className="text-lg font-bold text-white mb-6">Recent Uploads</h3>
                <div className="glass-card overflow-hidden">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-white/5 text-[10px] uppercase font-bold text-gray-500 tracking-widest">
                                <th className="px-6 py-4">Video</th>
                                <th className="px-6 py-4">Visibility</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Views</th>
                                <th className="px-6 py-4">Comments</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-sm">
                            {[1, 2].map((i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4 flex items-center gap-4">
                                        <div className="w-24 aspect-video bg-white/5 rounded-lg overflow-hidden border border-white/10" />
                                        <span className="font-medium text-white group-hover:text-purple-400 transition-colors">Amazing New Tutorial #{i}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded text-[10px] font-bold uppercase tracking-widest">Public</span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-400">Jan 12, 2026</td>
                                    <td className="px-6 py-4 text-gray-400">1.2K</td>
                                    <td className="px-6 py-4 text-gray-400">45</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
