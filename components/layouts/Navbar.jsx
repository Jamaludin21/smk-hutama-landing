'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import { mainNav, siteConfig } from '@/constant/siteConfig'
import MobileNav from './MobileNav'

function NavLink ({ href, label, isActive }) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-sm font-medium transition ${
        isActive
          ? 'text-blue-600 border-b-2 border-blue-600'
          : 'text-slate-700 hover:text-blue-600'
      }`}
    >
      {label}
    </Link>
  )
}

export default function Navbar () {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className='fixed inset-x-0 top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-4 py-3'>
        {/* Logo + Title */}
        <Link href='/' className='flex items-center gap-2'>
          <Image
            src={siteConfig.logo}
            alt={siteConfig.shortName}
            className='h-9 w-9 object-contain'
            width={36}
            height={36}
          />
          <div className='leading-tight'>
            <div className='text-xs uppercase text-slate-500'>
              Sekolah Menengah Kejuruan
            </div>
            <div className='text-sm font-semibold text-slate-900'>
              {siteConfig.shortName}
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-1'>
          {mainNav.map(item =>
            item.children ? (
              <div key={item.label} className='relative group'>
                <button
                  type='button'
                  className='px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 flex items-center gap-1'
                >
                  {item.label}
                  <span className='text-xs'>▾</span>
                </button>
                <div
                  className='invisible opacity-0 group-hover:visible group-hover:opacity-100
                    absolute left-0 mt-2 min-w-[220px] rounded-xl border border-slate-200 bg-white shadow-lg
                    transition'
                >
                  {item.children.map(child => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block px-4 py-2 text-sm hover:bg-slate-50 ${
                        pathname === child.href
                          ? 'text-blue-600'
                          : 'text-slate-700'
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={pathname === item.href}
              />
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className='md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 px-2 py-1'
          onClick={() => setOpen(!open)}
          aria-label='Toggle navigation'
        >
          ☰
        </button>
      </nav>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
