import dynamic from 'next/dynamic'
import { GameCard } from '@/components/game-card'
import { LoginButton } from '@/components/login-button'
import localFont from 'next/font/local';
// import Loader from '@/components/loader';
// Import the Background component dynamically to avoid SSR issues
const Background = dynamic(() => import('@/components/background'), { ssr: false })
  const starJedi = localFont({
  src: "./fonts/Starjedi.ttf",
  variable: "--font-star-jedi",
  weight: "400",
});
export default function Home() {

  const games = [
    {
      title: "KRYPTOS",
      icon: "brain",
      rank: 0,
      href: "/kryptos",
      idx: 0,
    },
    {
      title: "WORDLE",
      icon: "letters",
      rank: 0,
      href: "/wordle",
      idx: 1
    },
    {
      title: "DOODLE JUMP",
      icon: "gamepad",
      rank: 0,
      href: "/doodle-jump",
      idx:2
    }
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* <Loader/> */}
      <Background />
      <div className="relative z-10">
        <header className="flex justify-between items-center p-6">
          <h1 className={`text-4xl font-bold text-white ${starJedi.variable} italic`}>EXCEL PLAY</h1>
          <LoginButton />
        </header>
        <div className="container   h-[80%]  mx-auto px-4 py-12 ">
          <h1 className="text-7xl font-bold text-white text-center md:my-8 my-4  --font-star-jedi tracking-wide ">EXCEL PLAY</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto ">
            {games.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

