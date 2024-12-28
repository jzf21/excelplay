'use client';

import { Brain, Gamepad, CaseSensitive as LetterCaseCapital } from 'lucide-react';
import Link from 'next/link';

//type IconType = "brain" | "gamepad" | "letters";

interface GameCardProps {
  title: string;
  icon: 'brain' | 'gamepad' | 'letters'; // Restrict to valid keys
  rank: number;
  href: string;
}

export function GameCard({ title, icon, rank, href }: GameCardProps) {
  const iconMap = {
    brain: Brain,
    gamepad: Gamepad,
    letters: LetterCaseCapital,
  };

  // Select the appropriate icon or provide a fallback
  const Icon = iconMap[icon] ?? (() => <span className="text-red-500">Invalid Icon</span>);

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/10 p-6 backdrop-blur-sm transition-all hover:from-purple-500/30 hover:to-purple-500/20 hover:scale-105 transform duration-200"
    >
      <div className="flex flex-col items-start gap-4">
        <div className="rounded-full bg-purple-900/50 p-3">
          <Icon className="h-6 w-6 text-purple-200" />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-purple-50">{title}</h3>
          <p className="text-sm text-purple-200">RANK {rank}</p>
        </div>
        <button className="rounded-full bg-purple-600 px-4 py-1 text-sm font-medium text-white transition-colors hover:bg-purple-500">
          Play Now
        </button>
      </div>
    </Link>
  );
}

