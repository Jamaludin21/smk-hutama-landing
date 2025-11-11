import Container from '@/components/ui/Container'
import { siteConfig } from '@/constant/siteConfig'

export const metadata = {
  title: 'PPDB Online',
  description:
    'Informasi resmi PPDB SMK Hutama Pondok Gede: persyaratan, alur, jadwal, dan link pendaftaran.'
}

export default function PPDBPage () {
  const wa = siteConfig.whatsapp.replace(/\D/g, '')

  return (
    <Container className='py-10'>
      <h1 className='text-2xl font-semibold text-slate-900'>
        Informasi PPDB SMK Hutama
      </h1>
      <p className='mt-3 text-sm text-slate-600'>
        Halaman ini berisi persyaratan, jadwal, dan tautan resmi pendaftaran
        peserta didik baru SMK Hutama Pondok Gede.
      </p>
      <ul className='mt-4 text-sm text-slate-700 list-disc list-inside space-y-1'>
        <li>Fotokopi Ijazah/SKL</li>
        <li>Fotokopi rapor SMP/MTs</li>
        <li>Fotokopi KK & Akta Kelahiran</li>
        <li>Pas foto berwarna terbaru</li>
      </ul>
      <div className='mt-6 flex flex-wrap gap-3'>
        <a
          href='https://smkhutama.sch.id/ppdb'
          target='_blank'
          rel='noopener noreferrer'
          className='px-5 py-2.5 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-500 transition'
        >
          Pendaftaran Online
        </a>
        <a
          href={`https://wa.me/${wa}`}
          target='_blank'
          rel='noopener noreferrer'
          className='px-5 py-2.5 border border-slate-300 text-sm rounded-full hover:bg-slate-50 transition'
        >
          Hubungi Admin PPDB
        </a>
      </div>
    </Container>
  )
}
