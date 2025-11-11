import Image from 'next/image'
import Container from '@/components/ui/container'
import { leaders, teachers } from '@/constant/teachers'

export const metadata = {
  title: 'Guru & Tendik',
  description: 'Daftar pendidik dan tenaga kependidikan SMK Hutama Pondok Gede.'
}

export default function GuruPage () {
  return (
    <Container className='py-10'>
      <h1 className='text-2xl font-semibold text-slate-900'>
        Guru & Tenaga Kependidikan
      </h1>

      <h2 className='mt-6 text-sm font-semibold text-slate-900'>
        Pimpinan & Manajemen
      </h2>
      <div className='mt-3 grid gap-4 md:grid-cols-3'>
        {leaders.map(p => (
          <div
            key={p.name}
            className='flex flex-col items-center gap-2 rounded-2xl border border-slate-100 bg-white p-3'
          >
            {p.photo && (
              <Image
                src={p.photo}
                alt={p.name}
                width={120}
                height={120}
                className='h-24 w-24 rounded-full object-cover'
              />
            )}
            <div className='text-sm font-semibold text-slate-900'>{p.name}</div>
            <div className='text-[10px] text-slate-600'>{p.role}</div>
          </div>
        ))}
      </div>

      {teachers.length > 0 && (
        <>
          <h2 className='mt-8 text-sm font-semibold text-slate-900'>
            Guru & Tendik
          </h2>
          <div className='mt-3 grid gap-3 md:grid-cols-4'>
            {teachers.map(t => (
              <div
                key={t.name}
                className='flex flex-col items-center gap-1 rounded-2xl border border-slate-100 bg-white p-3'
              >
                {t.photo && (
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={96}
                    height={96}
                    className='h-20 w-20 rounded-full object-cover'
                  />
                )}
                <div className='text-xs font-semibold text-slate-900'>
                  {t.name}
                </div>
                {t.subject && (
                  <div className='text-[9px] text-slate-600'>{t.subject}</div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </Container>
  )
}
