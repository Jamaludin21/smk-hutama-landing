import PageTransition from '@/components/common/PageTransition'
import Container from '@/components/ui/container'
import { extracurriculars } from '@/constant/extracurricular'
import {
  RevealContainer,
  RevealItem,
  RevealCard
} from '@/components/common/Reveal'

export const metadata = {
  title: 'Ekstrakurikuler',
  description: 'Kegiatan ekstrakurikuler di SMK Hutama Pondok Gede.'
}

export default function EkstrakurikulerPage () {
  return (
    <PageTransition>
      <Container className='py-10'>
        <RevealContainer>
          <RevealItem>
            <h1 className='text-2xl font-semibold text-slate-900'>
              Ekstrakurikuler
            </h1>
          </RevealItem>
          <RevealItem>
            <p className='mt-2 text-sm text-slate-600'>
              Pengembangan minat, bakat, dan karakter siswa.
            </p>
          </RevealItem>
          <div className='mt-6 grid gap-4 md:grid-cols-2'>
            {extracurriculars.map(e => (
              <RevealCard
                key={e.slug}
                className='rounded-2xl border border-slate-200 bg-white p-4'
              >
                <div className='text-sm font-semibold text-slate-900'>
                  {e.name}
                </div>
                <div className='text-[11px] text-slate-600'>
                  {e.description}
                </div>
              </RevealCard>
            ))}
          </div>
        </RevealContainer>
      </Container>
    </PageTransition>
  )
}
