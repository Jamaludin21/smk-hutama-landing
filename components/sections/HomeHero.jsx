import Link from 'next/link'
import Image from 'next/image'
import Container from '../ui/container'

export default function HomeHero () {
  return (
    <section className='bg-gradient-to-b from-blue-900 to-blue-700 text-white'>
      <Container className='py-16 flex flex-col md:flex-row items-center gap-8'>
        <div className='flex-1'>
          <p className='text-xs uppercase tracking-[0.2em] text-blue-200'>
            SMK HUTAMA PONDOK GEDE
          </p>
          <h1 className='mt-2 text-3xl md:text-4xl font-semibold leading-tight'>
            Mempersiapkan Generasi Siap Kerja, Siap Kuliah, Siap Wirausaha.
          </h1>
          <p className='mt-3 text-sm md:text-base text-blue-100'>
            Lingkungan belajar yang religius, disiplin, dan modern dengan
            kompetensi keahlian sesuai kebutuhan industri.
          </p>
          <div className='mt-5 flex flex-wrap gap-3'>
            <Link
              href='/ppdb'
              className='px-5 py-2.5 bg-amber-400 text-slate-900 text-sm font-semibold rounded-full hover:bg-amber-300 transition'
            >
              Informasi PPDB
            </Link>
            <Link
              href='/informasi/jurusan'
              className='px-5 py-2.5 border border-blue-200 text-sm rounded-full hover:bg-blue-800 transition'
            >
              Lihat Program Keahlian
            </Link>
          </div>
        </div>

        <div className='rounded-3xl bg-white/5 border border-white/10 p-4'>
          <Image
            src='https://a1epuokipdvggoec.public.blob.vercel-storage.com/galler3-o5kwiisYRp4uvnXsCgLwwPTh33ciMD.jpg'
            alt='Kegiatan siswa SMK Hutama'
            width={800}
            height={480}
            className='w-full h-56 md:h-64 object-cover rounded-2xl'
          />
        </div>
      </Container>
    </section>
  )
}
