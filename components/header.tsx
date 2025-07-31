//global header

'use client'

import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'

import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  // Optional: close menu after click
  const closeMenu = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="container flex display: flex max-w-3xl items-center justify-between mx-auto px-4">
        <Link href="/" className="text-2xl font-bold">
          Iris Liu
        </Link>

        {/* Hamburger icon (shows below sm, hidden on sm+) */}
        <button
          className="sm:hidden flex items-center px-2 py-1 rounded hover:bg-accent ml-auto"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {/* A basic hamburger SVG */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>


        {/* Desktop nav: visible sm+, hidden below sm */}
        <ul className="hidden sm:flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10 ml-auto">
          <li className="transition-colors hover:text-foreground">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/investments">Investments</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile dropdown: visible if 'open', hidden on sm+ */}
      {open && (
        <div className="sm:hidden absolute left-0 right-0 top-full bg-background/95 shadow-lg border-t border-border">
          <ul className="flex flex-col items-center gap-4 py-4 text-base font-light text-muted-foreground">
            <li className="w-full text-center transition-colors hover:text-foreground">
              <Link href="/posts" onClick={closeMenu}>Posts</Link>
            </li>
            <li className="w-full text-center transition-colors hover:text-foreground">
              <Link href="/projects" onClick={closeMenu}>Projects</Link>
            </li>
            <li className="w-full text-center transition-colors hover:text-foreground">
              <Link href="/investments" onClick={closeMenu}>Investments</Link>
            </li>
            <li className="w-full text-center transition-colors hover:text-foreground">
              <Link href="/contact" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
