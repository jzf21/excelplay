"use client";

import Link from "next/link";
import Image from "next/image";

interface GameCardProps {
  title: string;
  rank: number;
  href: string;
  idx: number;
  imageUrl: string;
}

export function GameCard({ title, rank, href, imageUrl }: GameCardProps) {
  return (
    <Link
      href={href}
      className="group relative h-[30rem] md:h-[30rem] w-full overflow-hidden rounded-xl transition-all duration-500 hover:scale-105 hover:z-10"
    >
      {/* Animated Border Gradient */}
      <div
        className="absolute inset-[1px] rounded-xl bg-gradient-to-r from-yellow-500/20 via-zinc-900 to-yellow-500/20 z-0 
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-yellow-500/20 before:to-transparent
        before:animate-border-flow"
      ></div>

      {/* Inner Card Content */}
      <div className="absolute inset-[2px] rounded-xl bg-zinc-900 overflow-hidden">
        {/* Game Image Area */}
        <div className="relative w-full h-[60%] overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>

          {/* Cyber Corner Decorations */}
          <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-yellow-500/50 rounded-tl-lg"></div>
          <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-yellow-500/50 rounded-tr-lg"></div>

          {/* Scanning Line Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 animate-scan"></div>
        </div>

        {/* Content Area */}
        <div className="relative p-6 h-[40%]">
          {/* Title with Tech Effect */}
          <div className="mb-4 relative">
            <h3 className="font-rajdhani font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 tracking-wider">
              {title}
            </h3>

            {/* Rank Indicators */}
            <div className="flex items-center gap-3 mt-3">
              {/* Rank number with cyber effect */}
              <div className="relative flex items-center justify-center w-8 h-8">
                <div className="absolute inset-0 border border-yellow-500/30 rotate-45"></div>
                <div className="absolute inset-[2px] bg-gradient-to-br from-zinc-900 to-zinc-800 rotate-45"></div>
                <span className="relative font-rajdhani font-bold text-yellow-500 text-sm z-10">
                  {rank}
                </span>
              </div>

              {/* Rank text with scan line effect */}
              <div className="relative">
                <p className="font-rajdhani text-sm text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                  RANK
                </p>
                <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent animate-border-flow"></div>
              </div>
            </div>
          </div>

          {/* Futuristic Play Button */}
          <button
            className="w-full px-4 py-3 bg-gradient-to-r from-zinc-900 to-zinc-800 relative
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-500/0 before:via-yellow-500/10 before:to-yellow-500/0
            before:translate-x-[-200%] before:hover:translate-x-[200%] before:transition-transform before:duration-1000
            border border-yellow-500/30 hover:border-yellow-400
            rounded font-rajdhani font-bold text-yellow-500 uppercase tracking-widest
            transition-all duration-300 hover:text-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]
            overflow-hidden"
          >
            <span className="relative z-10">PLAY</span>
          </button>
        </div>
      </div>

      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(transparent_1px,transparent_1px),linear-gradient(90deg,#fcd34d10_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>
    </Link>
  );
}
