'use client'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/ui/container'
import { heroContent } from '@/constant/heroContent'
import {
  RevealContainer,
  RevealItem,
  RevealImage
} from '@/components/common/Reveal'
import { Button } from '@/components/ui/button'

export default function HomeHero () {
  return (
    <section className='bg-gradient-to-b from-blue-900 to-blue-700 text-white'>
      <Container className='py-14 md:py-16'>
        <RevealContainer className='flex flex-col md:flex-row items-center gap-8'>
          <RevealItem className='flex-1 space-y-3'>
            <p className='text-[10px] tracking-[0.25em] uppercase text-blue-200'>
              {heroContent.badge}
            </p>
            <h1 className='text-3xl md:text-4xl font-semibold leading-tight'>
              {heroContent.title}
            </h1>
            <p className='text-sm md:text-base text-blue-100'>
              {heroContent.subtitle}
            </p>
            <div className='flex flex-wrap gap-3 pt-1'>
              <Button asChild>
                <Link href={heroContent.primaryCta.href}>
                  {heroContent.primaryCta.label}
                </Link>
              </Button>
              <Button variant='outline' asChild>
                <Link href={heroContent.secondaryCta.href}>
                  {heroContent.secondaryCta.label}
                </Link>
              </Button>
            </div>
          </RevealItem>

          <RevealImage className='flex-1 max-w-md w-full'>
            <div className='rounded-3xl bg-white/5 border border-white/15 p-3'>
              <Image
                src={heroContent.image.src}
                alt={heroContent.image.alt}
                width={640}
                height={400}
                className='h-56 md:h-64 w-full rounded-2xl object-cover'
                priority
              />
              <p className='mt-2 text-[9px] text-blue-100'>
                Dokumentasi kegiatan siswa SMK Hutama.
              </p>
            </div>
          </RevealImage>
        </RevealContainer>
      </Container>
    </section>
  )
}
