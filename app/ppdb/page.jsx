import PageTransition from '@/components/common/PageTransition'
import Container from '@/components/ui/container'
import { siteConfig } from '@/constant/siteConfig'
import { RevealContainer, RevealItem } from '@/components/common/Reveal'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'PPDB Online',
  description:
    'Informasi resmi PPDB SMK Hutama Pondok Gede: persyaratan, alur, jadwal, dan link pendaftaran.'
}

export default function PPDBPage () {
  const wa = siteConfig.whatsapp.replace(/\D/g, '')

  return (
    <PageTransition>
      <Container className='py-10'>
        <RevealContainer>
          <RevealItem>
            <h1 className='text-2xl font-semibold text-slate-900'>
              Informasi PPDB SMK Hutama
            </h1>
          </RevealItem>

          <RevealItem>
            <p className='mt-3 text-sm text-slate-600'>
              Halaman ini berisi persyaratan, jadwal, dan tautan resmi
              pendaftaran peserta didik baru SMK Hutama Pondok Gede.
            </p>
          </RevealItem>

          <RevealItem>
            <ul className='mt-4 text-sm text-slate-700 list-disc list-inside space-y-1'>
              <li>Fotokopi Ijazah/SKL</li>
              <li>Fotokopi rapor SMP/MTs</li>
              <li>Fotokopi KK &amp; Akta Kelahiran</li>
              <li>Pas foto berwarna terbaru</li>
            </ul>
          </RevealItem>

          <RevealItem>
            <div className='mt-6 flex flex-wrap gap-3'>
              <Button asChild>
                <a
                  href='https://smkhutama.sch.id/ppdb'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Pendaftaran Online
                </a>
              </Button>
              <Button asChild variant='outline'>
                <a
                  href={`https://wa.me/${wa}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Hubungi Admin PPDB
                </a>
              </Button>
            </div>
          </RevealItem>
        </RevealContainer>
      </Container>
    </PageTransition>
  )
}
