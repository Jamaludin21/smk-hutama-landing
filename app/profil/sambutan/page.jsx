import Container from '@/components/ui/container'

export const metadata = {
  title: 'Sambutan Kepala Sekolah',
  description:
    'Sambutan Kepala SMK Hutama Pondok Gede kepada peserta didik, orang tua, dan masyarakat.'
}

export default function SambutanPage () {
  return (
    <Container className='py-10'>
      <h1 className='text-2xl font-semibold text-slate-900'>
        Sambutan Kepala Sekolah
      </h1>
      <p className='mt-4 text-sm text-slate-700 leading-relaxed'>
        {/* Isi sambutan resmi di sini */}
        Assalamu&apos;alaikum warahmatullahi wabarakatuh...
      </p>
    </Container>
  )
}
