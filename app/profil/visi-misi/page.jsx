import Container from '@/components/ui/container'

export const metadata = {
  title: 'Visi & Misi',
  description: 'Visi, misi, dan tujuan SMK Hutama Pondok Gede.'
}

export default function VisiMisiPage () {
  return (
    <Container className='py-10'>
      <h1 className='text-2xl font-semibold text-slate-900'>Visi & Misi</h1>

      <h2 className='mt-6 text-sm font-semibold text-slate-900'>Visi</h2>
      <p className='mt-2 text-sm text-slate-700'>{/* isi visi */}</p>

      <h2 className='mt-6 text-sm font-semibold text-slate-900'>Misi</h2>
      <ul className='mt-2 list-disc list-inside text-sm text-slate-700 space-y-1'>
        {/* isi misi */}
      </ul>
    </Container>
  )
}
