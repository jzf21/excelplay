'use client'

import { LogIn } from 'lucide-react'
import Link from 'next/link'

export function LoginButton() {
  return (
    <Link
      href="/login"
      className="flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-500"
    >
      <LogIn className="h-4 w-4" />
      Login
    </Link>
  )
}

