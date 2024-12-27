import dynamic from 'next/dynamic'
import { GameCard } from '@/components/game-card'
import { LoginButton } from '@/components/login-button'

// Import the Background component dynamically to avoid SSR issues
const Background = dynamic(() => import('@/components/background'), { ssr: false })

export default function Home() {
  const games = [
    {
      title: "KRYPTOS",
      icon: "brain",
      rank: 0,
      href: "/kryptos"
    },
    {
      title: "WORDLE",
      icon: "letters",
      rank: 0,
      href: "/wordle"
    },
    {
      title: "DOODLE JUMP",
      icon: "gamepad",
      rank: 0,
      href: "/doodle-jump"
    }
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <Background />
      <div className="relative z-10">
        <header className="flex justify-between items-center p-6">
          <h1 className="text-4xl font-bold text-white">EXCEL PLAY</h1>
          <LoginButton />
        </header>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {games.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

