import Container from '@/components/ui/container'

export const metadata = {
  title: 'Sejarah',
  description: 'Sejarah singkat berdirinya SMK Hutama Pondok Gede.'
}

export default function SejarahPage () {
  return (
    <Container className='py-10'>
      <h1 className='text-2xl font-semibold text-slate-900'>
        Sejarah SMK Hutama
      </h1>
      <p className='mt-4 text-sm text-slate-700 leading-relaxed'>
        {/* Tulis sejarah resmi sekolah di sini */}
      </p>
    </Container>
  )
}
