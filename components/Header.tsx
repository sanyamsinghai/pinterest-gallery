'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="group">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-charcoal transition-colors group-hover:text-accent">
              Aethere
            </h1>
          </Link>

          <div className="flex items-center gap-6 md:gap-8">
            <Link
              href="/"
              className="text-sm md:text-base font-medium text-charcoal hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm md:text-base font-medium text-charcoal hover:text-accent transition-colors"
            >
              About
            </Link>
            <a
              href="https://in.pinterest.com/sanyamaethere/_created/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent text-white text-sm font-medium rounded-full hover:bg-opacity-90 transition-all hover:scale-105"
            >
              Follow
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
