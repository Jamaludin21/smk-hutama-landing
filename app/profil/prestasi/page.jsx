import Image from 'next/image'
import Container from '@/components/ui/container'
import { achievements } from '@/constant/achievements'
import PageTransition from '@/components/common/PageTransition'
import {
  RevealContainer,
  RevealItem,
  RevealCard
} from '@/components/common/Reveal'

export const metadata = {
  title: 'Prestasi',
  description: 'Prestasi akademik dan non-akademik SMK Hutama Pondok Gede.'
}

export default function PrestasiPage () {
  return (
    <PageTransition>
      <Container className='py-10'>
        <RevealContainer>
          <RevealItem>
            <h1 className='text-2xl font-semibold text-slate-900'>
              Prestasi Siswa
            </h1>
          </RevealItem>

          {achievements.length === 0 && (
            <RevealItem>
              <p className='mt-4 text-sm text-slate-600'>
                Data prestasi akan segera ditampilkan.
              </p>
            </RevealItem>
          )}

          <div className='mt-5 grid gap-4 md:grid-cols-3'>
            {achievements.map(a => (
              <RevealCard
                key={a.title}
                className='rounded-2xl border border-slate-100 bg-white p-4 flex flex-col gap-2'
              >
                {a.image && (
                  <div className='overflow-hidden rounded-xl'>
                    <Image
                      src={a.image}
                      alt={a.title}
                      width={400}
                      height={240}
                      className='w-full h-28 object-cover'
                    />
                  </div>
                )}
                <div className='text-[10px] text-slate-500'>
                  {a.year} • {a.level}
                </div>
                <div className='text-sm font-semibold text-slate-900'>
                  {a.title}
                </div>
                <div className='text-[10px] text-slate-600'>
                  {a.description}
                </div>
              </RevealCard>
            ))}
          </div>
        </RevealContainer>
      </Container>
    </PageTransition>
  )
}
