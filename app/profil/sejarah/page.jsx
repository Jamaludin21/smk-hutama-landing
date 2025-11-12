import PageTransition from '@/components/common/PageTransition'
import Container from '@/components/ui/container'
import { RevealContainer, RevealItem } from '@/components/common/Reveal'

export const metadata = {
  title: 'Sejarah',
  description: 'Sejarah singkat berdirinya SMK Hutama Pondok Gede.'
}

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
