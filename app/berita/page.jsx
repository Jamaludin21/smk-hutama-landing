import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/container'
import { news } from '@/constant/news'
import PageTransition from '@/components/common/PageTransition'
import {
  RevealContainer,
  RevealItem,
  RevealCard
} from '@/components/common/Reveal'

export const metadata = {
  title: 'Berita',
  description: 'Berita dan informasi kegiatan SMK Hutama Pondok Gede.'
}

export default function BeritaPage () {
  return (
    <PageTransition>
      <Container className='py-10'>
        <RevealContainer>
          <RevealItem>
            <h1 className='text-2xl font-semibold text-slate-900'>Berita</h1>
          </RevealItem>
          {news.length === 0 && (
            <RevealItem>
              <p className='mt-4 text-sm text-slate-600'>
                Belum ada berita yang ditampilkan.
              </p>
            </RevealItem>
          )}
          <div className='mt-6 grid gap-4 md:grid-cols-3'>
            {news.map(item => (
              <RevealCard
                key={item.slug}
                className='rounded-2xl border border-slate-100 bg-white p-4 flex flex-col gap-2'
              >
                {item.image && (
                  <div className='overflow-hidden rounded-xl'>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={220}
                      className='w-full h-28 object-cover'
                    />
                  </div>
                )}
                <div className='text-[10px] text-slate-500'>
                  {item.date} • {item.category}
                </div>
                <h2 className='text-sm font-semibold text-slate-900'>
                  {item.title}
                </h2>
                <p className='text-[10px] text-slate-600'>{item.excerpt}</p>
                <Link
                  href='#'
                  className='mt-1 text-[10px] text-blue-600 hover:text-blue-500'
                >
                  Selengkapnya
                </Link>
              </RevealCard>
            ))}
          </div>
        </RevealContainer>
      </Container>
    </PageTransition>
  )
}
