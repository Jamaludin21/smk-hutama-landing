'use client'
import Link from 'next/link'
import Container from '@/components/ui/container'
import { majors } from '@/constant/majors'
import {
  RevealContainer,
  RevealItem,
  RevealCard
} from '@/components/common/Reveal'

export default function HomeMajorsPreview () {
  return (
    <section className='bg-slate-50'>
      <Container className='py-10'>
        <RevealContainer>
          <RevealItem className='flex items-baseline justify-between gap-4'>
            <div>
              <h2 className='text-xl font-semibold text-slate-900'>
                Program Keahlian Unggulan
              </h2>
              <p className='text-[11px] text-slate-600 mt-1'>
                Link & match dengan kebutuhan industri dan perguruan tinggi.
              </p>
            </div>
            <Link
              href='/informasi/jurusan'
              className='text-[11px] text-blue-600 hover:text-blue-500'
            >
              Lihat semua jurusan →
            </Link>
          </RevealItem>

          <div className='mt-5 grid gap-4 md:grid-cols-3'>
            {majors.slice(0, 3).map(m => (
              <RevealCard
                key={m.slug}
                className='rounded-2xl border border-slate-100 bg-white p-4 flex flex-col gap-2'
              >
                <div className='text-sm font-semibold text-slate-900'>
                  {m.name}
                </div>
                <div className='text-[11px] text-slate-600'>
                  {m.shortDescription}
                </div>
              </RevealCard>
            ))}
          </div>
        </RevealContainer>
      </Container>
    </section>
  )
}
