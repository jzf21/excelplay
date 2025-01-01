"use client";
import dynamic from "next/dynamic";
import { GameCard } from "@/components/game-card";
import { LoginButton } from "@/components/login-button";

import logo from "./assets/play2022.png";
import Image from "next/image";
// import Loader from '@/components/loader';
// Import the Background component dynamically to avoid SSR issues
const Background = dynamic(() => import("@/components/background"), {
  ssr: false,
});
//   const starJedi = localFont({
//   src: "./fonts/Starjedi.ttf",
//   variable: "--font-star-jedi",
//   weight: "400",
// });
import { motion } from "framer-motion";

export default function Home() {
  const games = [
    {
      title: "KRYPTOS",
      icon: "brain",
      rank: 3,
      href: "/kryptos",
      idx: 0,
      imageUrl: "/kryptos.jpg",
    },
    {
      title: "NOVA DASH",
      icon: "letters",
      rank: 2,
      href: "/wordle",
      idx: 1,
      imageUrl: "/novadash.webp",
    },
    {
      title: "DOODLE JUMP",
      icon: "gamepad",
      rank: 1,
      href: "/doodle-jump",
      idx: 2,
      imageUrl: "/dalalbull.png",
    },
  ];

  return (
    <main className="relative min-h-screen pb-10 sm:pb-0 overflow-hidden bg-black font-rajdhani">
      <Background />
      <div className="relative z-10 h-full flex flex-col">
        {/* Header with reduced padding */}
        <header className="flex justify-between items-center p-4">
          <Image src={logo} alt="logo" width={80} height={80} />
          <LoginButton />
        </header>

        {/* Main content with flex-grow */}
        <div className="flex-grow container mx-auto px-4 flex flex-col justify-center">
          {/* Title section with reduced margin */}
          <div className="relative mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 blur-[100px] bg-gradient-to-r from-yellow-500/20 via-purple-500/20 to-blue-500/20 animate-pulse"
            ></motion.div>

            <div className="relative">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="font-cyber text-5xl md:text-5xl lg:text-6xl font-bold text-center mb-0 mt-12 sm:mt-0
                          bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400
                          animate-gradient-x tracking-wider uppercase"
              >
                Excel Play
              </motion.h1>

              {/* Decorative lines */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3 }}
                className="hidden md:block absolute -left-4 top-1/2 w-12 h-[2px] bg-gradient-to-r from-yellow-500/0 via-yellow-500 to-yellow-500/0"
              ></motion.div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3 }}
                className="hidden md:block absolute -right-4 top-1/2 w-12 h-[2px] bg-gradient-to-r from-yellow-500/0 via-yellow-500 to-yellow-500/0"
              ></motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-yellow-500/60 text-xs md:text-sm text-center mt-2 font-light tracking-[0.2em]"
              >
                ENTER THE NEXT LEVEL
              </motion.p>
            </div>
          </div>

          {/* Game cards grid with adjusted height */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto w-full">
            {games.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
