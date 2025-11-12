import PageTransition from '@/components/common/PageTransition'
import Container from '@/components/ui/container'
import { RevealContainer, RevealItem } from '@/components/common/Reveal'

export const metadata = {
  title: 'Sambutan Kepala Sekolah',
  description:
    'Sambutan Kepala SMK Hutama Pondok Gede kepada peserta didik, orang tua, dan masyarakat.'
}

export default function SambutanPage () {
  return (
    <PageTransition>
      <Container className='py-10'>
        <RevealContainer>
          <RevealItem>
            <h1 className='text-2xl font-semibold text-slate-900'>
              Sambutan Kepala Sekolah
            </h1>
          </RevealItem>

          <RevealItem>
            <p className='mt-4 text-sm text-slate-700 leading-relaxed'>
              {/* Isi sambutan resmi di sini */}
              Assalamu&apos;alaikum warahmatullahi wabarakatuh...
            </p>
          </RevealItem>
        </RevealContainer>
      </Container>
    </PageTransition>
  )
}
