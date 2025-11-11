import Container from '../ui/container'

export default function HomeStats () {
  const stats = [
    { label: 'Akreditasi', value: 'A' },
    { label: 'Program Keahlian', value: '6+' },
    { label: 'Siswa Aktif', value: '1000+' },
    { label: 'Mitra DU/DI', value: '20+' }
  ]

  return (
    <section className='bg-white'>
      <Container className='py-8 grid grid-cols-2 md:grid-cols-4 gap-4'>
        {stats.map(s => (
          <div
            key={s.label}
            className='rounded-2xl border border-slate-100 bg-slate-50 px-3 py-3 text-center'
          >
            <div className='text-lg font-semibold text-blue-700'>{s.value}</div>
            <div className='text-[11px] text-slate-600'>{s.label}</div>
          </div>
        ))}
      </Container>
    </section>
  )
}
