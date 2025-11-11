import { siteConfig } from '@/constant/siteConfig'
import Container from '../ui/container'

export default function Footer () {
  return (
    <footer className='mt-10 border-t border-slate-200 bg-white'>
      <Container className='py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-slate-600'>
        <div>
          <div className='font-semibold text-slate-800'>{siteConfig.name}</div>
          <div>{siteConfig.address}</div>
          <div>Telp: {siteConfig.phone}</div>
          <div>Email: {siteConfig.email}</div>
        </div>
        <div className='text-right'>
          <div>PPDB & Informasi: {siteConfig.whatsapp}</div>
          <div>
            © {new Date().getFullYear()} {siteConfig.shortName}
          </div>
          <div className='text-[9px]'>
            Dibangun dengan Next.js & Tailwind. Static landing, mudah
            dikembangkan.
          </div>
        </div>
      </Container>
    </footer>
  )
}
