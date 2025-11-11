'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { mainNav } from '@/constant/siteConfig'

export default function MobileNav ({ open, onClose }) {
  const pathname = usePathname()
  if (!open) return null

  return (
    <div className='md:hidden bg-white border-t border-slate-200 shadow-sm'>
      <div className='mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2'>
        {mainNav.map(item =>
          item.children ? (
            <div key={item.label} className='flex flex-col gap-1'>
              <div className='text-[10px] font-semibold text-slate-500'>
                {item.label}
              </div>
              {item.children.map(child => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClose}
                  className={`pl-3 py-1.5 text-sm rounded-md ${
                    pathname === child.href
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`py-1.5 text-sm rounded-md ${
                pathname === item.href
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </Link>
          )
        )}
      </div>
    </div>
  )
}
