'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <nav className="flex h-32 items-center justify-between pl-4 pr-8 sm:pl-8 lg:pl-12">
        <Link href="/" className="shrink-0">
          <Image
            src="/img/logo.png"
            alt="Bella House Renovations"
            width={320}
            height={100}
            className="h-24 w-auto sm:h-28"
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#C8A97E]" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        <Link
          href="/quote"
          className="rounded-full px-6 py-2.5 text-sm font-medium text-white transition-all hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #D6B98C, #C8A97E)' }}
        >
          Get a Quote
        </Link>
      </nav>
    </header>
  )
}
