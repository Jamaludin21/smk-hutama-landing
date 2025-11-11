import Container from '@/components/ui/container'
import { extracurriculars } from '@/constant/extracurricular'

export const metadata = {
  title: 'Ekstrakurikuler',
  description: 'Kegiatan ekstrakurikuler di SMK Hutama Pondok Gede.'
}

export default function EkstrakurikulerPage () {
  return (
    <Container className='py-10'>
      <h1 className='text-2xl font-semibold text-slate-900'>Ekstrakurikuler</h1>
      <p className='mt-2 text-sm text-slate-600'>
        Pengembangan minat, bakat, dan karakter siswa melalui berbagai kegiatan.
      </p>
      <div className='mt-6 grid gap-4 md:grid-cols-2'>
        {extracurriculars.map(e => (
          <div
            key={e.slug}
            className='rounded-2xl border border-slate-200 bg-white p-4'
          >
            <div className='text-sm font-semibold text-slate-900'>{e.name}</div>
            <div className='text-[11px] text-slate-600'>{e.description}</div>
          </div>
        ))}
      </div>
    </Container>
  )
}
