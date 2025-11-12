'use client'
import { motion, useReducedMotion } from 'framer-motion'

export const inView = { once: true, amount: 0.2 } // 20% terlihat baru animasi

export function RevealContainer ({
  children,
  className = '',
  stagger = 0.15,
  delayChildren = 0.1
}) {
  const shouldReduce = useReducedMotion()
  const variants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: stagger, delayChildren }
        }
      }

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={inView}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem ({
  children,
  className = '',
  y = 18,
  dur = 0.28,
  delay = 0
}) {
  const shouldReduce = useReducedMotion()
  const variants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: dur, ease: 'easeOut', delay }
        }
      }

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  )
}

// Card siap pakai (fade + lift kecil)
export function RevealCard ({ children, className = '' }) {
  return (
    <RevealItem className={className} y={14} dur={0.24}>
      {children}
    </RevealItem>
  )
}

// Image wrapper (sedikit scale-in agar enak dilihat)
export function RevealImage ({ children, className = '' }) {
  const variants = {
    hidden: { opacity: 0, scale: 0.96, y: 8 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.25, 0.25, 0, 1] }
    }
  }
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  )
}
