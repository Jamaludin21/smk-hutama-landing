import { Loader } from 'lucide-react'
import React from 'react'

export default function ServerLoaderLanding ({ message = 'Memuat halaman...' }) {
  return (
    <div className='flex min-h-[70vh] flex-col items-center justify-center gap-2 text-slate-700'>
      <Loader className='w-6 h-6 animate-spin mb-2' />
      <p className='text-xs md:text-sm'>{message}</p>
    </div>
  )
}
