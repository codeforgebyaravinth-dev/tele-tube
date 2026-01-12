"use client";

import React, { useState } from "react";

const categories = [
    "All",
    "Music",
    "Gaming",
    "Live",
    "Programming",
    "Appwrite",
    "Next.js",
    "Design",
    "Lo-Fi",
    "Technology",
    "Recently Uploaded",
];

export function CategoryPills() {
    const [active, setActive] = useState("All");

    return (
        <div className="flex gap-3 overflow-x-auto pb-4 premium-scrollbar no-scrollbar">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`category-pill transition-all active:scale-95 ${active === cat ? "active-pill" : ""}`}
                >

                    {cat}
                </button>
            ))}
        </div>
    );
}
