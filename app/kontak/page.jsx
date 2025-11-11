import Container from '@/components/ui/container'
import { siteConfig } from '@/constant/siteConfig'

export const metadata = {
  title: 'Kontak',
  description: 'Kontak resmi dan lokasi SMK Hutama Pondok Gede.'
}

export default function KontakPage () {
  const wa = siteConfig.whatsapp.replace(/\D/g, '')

  return (
    <Container className='py-10'>
      <h1 className='text-2xl font-semibold text-slate-900'>
        Kontak SMK Hutama
      </h1>
      <div className='mt-4 grid gap-6 md:grid-cols-2'>
        <div className='space-y-2 text-sm text-slate-700'>
          <div>
            <div className='font-semibold text-slate-900'>Alamat</div>
            <div>{siteConfig.address}</div>
          </div>
          <div>
            <div className='font-semibold text-slate-900'>Telepon</div>
            <div>{siteConfig.phone}</div>
          </div>
          <div>
            <div className='font-semibold text-slate-900'>Email</div>
            <div>{siteConfig.email}</div>
          </div>
          <div>
            <div className='font-semibold text-slate-900'>WhatsApp</div>
            <div>{siteConfig.whatsapp}</div>
          </div>
          <div className='mt-3'>
            <iframe
              title='Lokasi SMK Hutama'
              src={siteConfig.mapEmbedUrl}
              className='w-full h-48 rounded-2xl border border-slate-200'
              loading='lazy'
            />
          </div>
        </div>

        <form className='space-y-3 text-sm'>
          <div>
            <label className='block text-slate-700 mb-1'>Nama</label>
            <input
              className='w-full rounded-xl border border-slate-300 px-3 py-2 text-sm'
              required
            />
          </div>
          <div>
            <label className='block text-slate-700 mb-1'>Email</label>
            <input
              type='email'
              className='w-full rounded-xl border border-slate-300 px-3 py-2 text-sm'
              required
            />
          </div>
          <div>
            <label className='block text-slate-700 mb-1'>Pesan</label>
            <textarea
              rows='4'
              className='w-full rounded-xl border border-slate-300 px-3 py-2 text-sm'
              required
            />
          </div>
          <a
            href={`https://wa.me/${wa}`}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex px-5 py-2.5 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-500 transition'
          >
            Kirim via WhatsApp
          </a>
          <p className='text-[9px] text-slate-500'>
            Form ini tampilan saja. Untuk respon cepat, gunakan tombol WhatsApp.
          </p>
        </form>
      </div>
    </Container>
  )
}
