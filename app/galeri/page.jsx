import Image from 'next/image'
import Container from '@/components/ui/container'
import { gallery } from '@/constant/gallery'
import PageTransition from '@/components/common/PageTransition'
import { RevealContainer, RevealCard } from '@/components/common/Reveal'

export const metadata = {
  title: 'Galeri',
  description: 'Galeri foto kegiatan dan fasilitas SMK Hutama Pondok Gede.'
}

export default function GaleriPage () {
  return (
    <PageTransition>
      <Container className='py-10'>
        <RevealContainer>
          <h1 className='text-2xl font-semibold text-slate-900'>Galeri</h1>
          <div className='mt-6 grid gap-4 md:grid-cols-3'>
            {gallery.map((g, idx) => (
              <RevealCard
                key={idx}
                className='rounded-2xl overflow-hidden border border-slate-100 bg-white'
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={600}
                  height={400}
                  className='w-full h-40 object-cover'
                />
                <figcaption className='px-3 py-2 text-[10px] text-slate-600'>
                  {g.alt}
                </figcaption>
              </RevealCard>
            ))}
          </div>
        </RevealContainer>
      </Container>
    </PageTransition>
  )
}
