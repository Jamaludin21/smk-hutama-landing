import Link from 'next/link'
import Image from 'next/image'
import Container from '../ui/container'
import { majors } from '@/constant/majors'

export default function HomeMajorsPreview () {
  return (
    <section className='bg-slate-50'>
      <Container className='py-10'>
        <div className='flex items-baseline justify-between gap-4'>
          <div>
            <h2 className='text-xl font-semibold text-slate-900'>
              Program Keahlian Unggulan
            </h2>
            <p className='text-[11px] text-slate-600 mt-1'>
              Kurikulum link & match dengan kebutuhan industri.
            </p>
          </div>
          <Link
            href='/informasi/jurusan'
            className='text-[11px] text-blue-600 hover:text-blue-500'
          >
            Lihat semua jurusan →
          </Link>
        </div>
        <div className='mt-5 grid gap-4 md:grid-cols-3'>
          {majors.slice(0, 3).map(m => (
            <div
              key={m.slug}
              className='rounded-2xl border border-slate-100 bg-white p-4 flex flex-col gap-2'
            >
              {m.image && (
                <Image
                  src={m.image}
                  alt={m.name}
                  width={400}
                  height={240}
                  className='w-full h-32 object-cover rounded-xl'
                />
              )}
              <div className='text-sm font-semibold text-slate-900'>
                {m.name}
              </div>
              <div className='text-[11px] text-slate-600'>
                {m.shortDescription}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
