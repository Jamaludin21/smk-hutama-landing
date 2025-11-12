import Image from 'next/image'
import Container from '@/components/ui/container'
import { majors } from '@/constant/majors'
import PageTransition from '@/components/common/PageTransition'
import {
  RevealContainer,
  RevealItem,
  RevealCard
} from '@/components/common/Reveal'

export const metadata = {
  title: 'Program Keahlian',
  description: 'Daftar program keahlian SMK Hutama Pondok Gede.'
}

export default function JurusanPage () {
  return (
    <PageTransition>
      <Container className='py-10'>
        <RevealContainer>
          <RevealItem>
            <h1 className='text-2xl font-semibold text-slate-900'>
              Program Keahlian SMK Hutama
            </h1>
          </RevealItem>
          <RevealItem>
            <p className='mt-2 text-sm text-slate-600'>
              Pilih program keahlian sesuai minat dan potensi Anda.
            </p>
          </RevealItem>
          <div className='mt-6 grid gap-4 md:grid-cols-2'>
            {majors.map(m => (
              <RevealCard
                key={m.slug}
                className='rounded-2xl border border-slate-200 bg-white p-4'
              >
                {m.image && (
                  <div className='overflow-hidden rounded-xl mb-2'>
                    <Image
                      src={m.image}
                      alt={m.name}
                      width={480}
                      height={260}
                      className='w-full h-32 object-cover'
                    />
                  </div>
                )}
                <div className='text-sm font-semibold text-slate-900'>
                  {m.name}
                </div>
                <div className='text-[11px] text-slate-600'>
                  {m.description}
                </div>
              </RevealCard>
            ))}
          </div>
        </RevealContainer>
      </Container>
    </PageTransition>
  )
}
