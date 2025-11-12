import PageTransition from '@/components/common/PageTransition'
import Container from '@/components/ui/container'
import { RevealContainer, RevealItem } from '@/components/common/Reveal'

export const metadata = {
  title: 'Visi & Misi',
  description: 'Visi, misi, dan tujuan SMK Hutama Pondok Gede.'
}

export default function VisiMisiPage () {
  return (
    <PageTransition>
      <Container className='py-10'>
        <RevealContainer>
          <RevealItem>
            <h1 className='text-2xl font-semibold text-slate-900'>
              Visi &amp; Misi
            </h1>
          </RevealItem>

          <RevealItem>
            <h2 className='mt-6 text-sm font-semibold text-slate-900'>Visi</h2>
            <p className='mt-2 text-sm text-slate-700'>{/* isi visi */}</p>
          </RevealItem>

          <RevealItem>
            <h2 className='mt-6 text-sm font-semibold text-slate-900'>Misi</h2>
            <ul className='mt-2 list-disc list-inside text-sm text-slate-700 space-y-1'>
              {/* isi misi */}
            </ul>
          </RevealItem>
        </RevealContainer>
      </Container>
    </PageTransition>
  )
}
