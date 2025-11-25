import Image from 'next/image'
import PageTransition from '@/components/common/PageTransition'
import Container from '@/components/ui/container'
import {
  RevealContainer,
  RevealItem,
  RevealImage
} from '@/components/common/Reveal'

export const metadata = {
  title: 'Sejarah',
  description: 'Sejarah singkat berdirinya SMK Hutama Pondok Gede.'
}

const SEJARAH_IMAGE =
  'https://a1epuokipdvggoec.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-11%20at%2014.17.57-Esb20t0Dje4P5XAfeduNeUHT5Aasfk.jpeg'

export default function SejarahPage () {
  return (
    <PageTransition>
      <Container className='py-10'>
        <RevealContainer>
          <RevealItem>
            <h1 className='text-2xl font-semibold text-slate-900'>
              Sejarah SMK Hutama
            </h1>
          </RevealItem>

          {/* Gambar sejarah */}
          <RevealImage className='mt-4'>
            <figure className='overflow-hidden rounded-2xl border border-slate-200 bg-white'>
              <Image
                src={SEJARAH_IMAGE}
                alt='Dokumentasi sejarah SMK Hutama'
                width={1200}
                height={700}
                className='h-64 w-full object-cover md:h-80'
                priority={false}
              />
              <figcaption className='px-3 py-2 text-[10px] text-slate-600'>
                Dokumentasi sejarah SMK Hutama.
              </figcaption>
            </figure>
          </RevealImage>

          <RevealItem>
            <p className='mt-4 text-sm text-slate-700 leading-relaxed'>
              {/* Tulis sejarah resmi sekolah di sini */}
            </p>
          </RevealItem>
        </RevealContainer>
      </Container>
    </PageTransition>
  )
}
