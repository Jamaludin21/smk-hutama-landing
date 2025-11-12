'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useClientReady } from '@/hooks/useClientReady'
import { useIsLargeScreen } from '@/hooks/useIsLargeScreen'
import ServerLoaderLanding from './ServerLoaderLanding'

export default function PageTransition ({ children }) {
  const pathname = usePathname()
  const isReady = useClientReady(60) // kecil, biar smooth tanpa kedip
  const isLarge = useIsLargeScreen(1024)

  // Saat belum siap (hydration / first load) -> tampilkan loader ringan
  if (!isReady) {
    return <ServerLoaderLanding />
  }

  // Variasi animasi sedikit beda di layar besar & kecil
  const initialY = isLarge ? 16 : 10
  const exitY = isLarge ? -10 : -6

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: initialY }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: exitY }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className='h-full'
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
