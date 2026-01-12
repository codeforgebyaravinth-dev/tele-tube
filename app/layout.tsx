import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TeleTube - Premium Video Sharing",
  description: "A high-fidelity YouTube clone powered by TeleStack and Appwrite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#030303] text-foreground`}>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 min-w-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

