import dynamic from 'next/dynamic'
import { GameCard } from '@/components/game-card'
import { LoginButton } from '@/components/login-button'

import logo from './assets/play2022.png'
import Image from 'next/image'
// import Loader from '@/components/loader';
// Import the Background component dynamically to avoid SSR issues
const Background = dynamic(() => import('@/components/background'), { ssr: false })
//   const starJedi = localFont({
//   src: "./fonts/Starjedi.ttf",
//   variable: "--font-star-jedi",
//   weight: "400",
// });
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
          <Image src={logo} alt="logo" width={100} height={100} />
          <LoginButton />
        </header>
        <div className="container   h-[80%]  mx-auto px-4 py-12 ">
         {/* <Image src={logo} alt="logo" width={200} height={200} /> */}
          <h1 className="text-6xl font-bold text-white text-center my-6">Excel Play</h1>
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

