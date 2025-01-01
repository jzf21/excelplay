'use client'

import { LogIn } from 'lucide-react'
import Link from 'next/link'

export function LoginButton() {
  return (
    <Link
      href="/login"
      className="flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-200 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-yellow-300"
    >
      <LogIn className="h-4 w-4" />
      Login
    </Link>
  );
}

