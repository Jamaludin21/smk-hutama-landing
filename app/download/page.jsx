import Container from '@/components/ui/container'
import { downloads } from '@/constant/download'

export const metadata = {
  title: 'Download',
  description: 'Dokumen resmi yang dapat diunduh dari SMK Hutama Pondok Gede.'
}

export default function DownloadPage () {
  return (
    <Container className='py-10'>
      <h1 className='text-2xl font-semibold text-slate-900'>Download</h1>
      <p className='mt-2 text-sm text-slate-600'>
        Silakan unduh dokumen resmi berikut:
      </p>
      <div className='mt-6 space-y-3'>
        {downloads.map(d => (
          <a
            key={d.slug}
            href={d.fileUrl}
            className='flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm hover:border-blue-400 hover:bg-blue-50 transition'
          >
            <div>
              <div className='font-semibold text-slate-900'>{d.title}</div>
              <div className='text-[10px] text-slate-600'>{d.description}</div>
            </div>
            <div className='text-[10px] text-blue-600'>Unduh</div>
          </a>
        ))}
      </div>
    </Container>
  )
}
