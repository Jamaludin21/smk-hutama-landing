'use client'
import Link from 'next/link'
import Container from '@/components/ui/container'
import { news } from '@/constant/news'
import { RevealContainer, RevealCard } from '@/components/common/Reveal'

export default function HomeNewsPreview () {
  const items = news.slice(0, 3)
  return (
    <section className='bg-white'>
      <Container className='py-10'>
        <RevealContainer>
          <div className='flex items-baseline justify-between gap-4'>
            <h2 className='text-xl font-semibold text-slate-900'>
              Berita & Kegiatan Terbaru
            </h2>
            <Link
              href='/berita'
              className='text-[11px] text-blue-600 hover:text-blue-500'
            >
              Lihat semua berita →
            </Link>
          </div>
          <div className='mt-5 grid gap-4 md:grid-cols-3'>
            {items.map(item => (
              <RevealCard
                key={item.slug}
                className='rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-colors hover:bg-slate-100 group'
              >
                <Link
                  href={`/berita/${item.slug}`}
                  className='flex flex-col gap-1.5 h-full'
                >
                  <time className='text-[10px] text-slate-500 block mb-1'>
                    {item.date}
                  </time>
                  <h3 className='text-sm font-semibold text-slate-900 line-clamp-2 transition-colors group-hover:text-blue-700'>
                    {item.title}
                  </h3>
                  <p className='text-[10px] text-slate-600 line-clamp-3 mt-1'>
                    {item.excerpt}
                  </p>
                </Link>
              </RevealCard>
            ))}
          </div>
        </RevealContainer>
      </Container>
    </section>
  )
}
