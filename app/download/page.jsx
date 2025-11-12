import PageTransition from '@/components/common/PageTransition'
import Container from '@/components/ui/container'
import { downloads } from '@/constant/download'
import {
  RevealContainer,
  RevealItem,
  RevealCard
} from '@/components/common/Reveal'

export const metadata = {
  title: 'Download',
  description: 'Dokumen resmi yang dapat diunduh dari SMK Hutama Pondok Gede.'
}

export default function DownloadPage () {
  return (
    <PageTransition>
      <Container className='py-10'>
        <RevealContainer>
          <RevealItem>
            <h1 className='text-2xl font-semibold text-slate-900'>Download</h1>
          </RevealItem>
          <RevealItem>
            <p className='mt-2 text-sm text-slate-600'>
              Silakan unduh dokumen resmi berikut:
            </p>
          </RevealItem>
          <div className='mt-6 space-y-3'>
            {downloads.map(d => (
              <RevealCard key={d.slug}>
                <a
                  href={d.fileUrl}
                  className='flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm hover:border-blue-400 hover:bg-blue-50 transition'
                >
                  <div>
                    <div className='font-semibold text-slate-900'>
                      {d.title}
                    </div>
                    <div className='text-[10px] text-slate-600'>
                      {d.description}
                    </div>
                  </div>
                  <div className='text-[10px] text-blue-600'>Unduh</div>
                </a>
              </RevealCard>
            ))}
          </div>
        </RevealContainer>
      </Container>
    </PageTransition>
  )
}
