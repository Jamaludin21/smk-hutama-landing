import PageTransition from '@/components/common/PageTransition'
import Container from '@/components/ui/container'
import { RevealContainer, RevealItem } from '@/components/common/Reveal'
import YouTubeEmbed from '@/components/common/YoutubeEmbed'

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
            <h1 className='mb-4 text-2xl font-semibold text-slate-900'>
              Sambutan Kepala Sekolah
            </h1>
          </RevealItem>

          <RevealItem>
            <YouTubeEmbed
              urlOrId='https://youtu.be/pzcajgImgOY'
              title='Sambutan Kepala Sekolah SMK Hutama'
            />
          </RevealItem>
        </RevealContainer>
      </Container>
    </PageTransition>
  )
}
