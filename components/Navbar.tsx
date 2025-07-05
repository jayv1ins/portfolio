'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
  ]

  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center border-b">
      <Link href="/" className="font-bold text-xl text-[#800000]">
      </Link>

      <div className="space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={clsx(
              'transition-colors duration-200 border-b-2 pb-1',
              pathname === item.path
                ? 'text-[#800000] border-[#800000]'
                : 'text-black border-transparent hover:text-[#800000] hover:border-[#800000]'
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
