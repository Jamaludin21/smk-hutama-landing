import Image from 'next/image'
import Container from '@/components/ui/container'
import { majors } from '@/constant/majors'

export const metadata = {
  title: 'Program Keahlian',
  description: 'Daftar program keahlian SMK Hutama Pondok Gede.'
}

export default function JurusanPage () {
  return (
    <Container className='py-10'>
      <h1 className='text-2xl font-semibold text-slate-900'>
        Program Keahlian SMK Hutama
      </h1>
      <p className='mt-2 text-sm text-slate-600'>
        Pilih program keahlian sesuai minat dan potensi Anda.
      </p>
      <div className='mt-6 grid gap-4 md:grid-cols-2'>
        {majors.map(m => (
          <div
            key={m.slug}
            className='rounded-2xl border border-slate-200 bg-white p-4 flex flex-col gap-2'
          >
            {m.image && (
              <Image
                src={m.image}
                alt={m.name}
                width={480}
                height={260}
                className='w-full h-32 object-cover rounded-xl'
              />
            )}
            <div className='text-sm font-semibold text-slate-900'>{m.name}</div>
            <div className='text-[11px] text-slate-600'>{m.description}</div>
          </div>
        ))}
      </div>
    </Container>
  )
}
