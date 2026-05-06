// components/sections/HomeHero.jsx
'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

import Container from '@/components/ui/container'
import { heroContent } from '@/constant/heroContent'
import {
  RevealContainer,
  RevealItem,
  RevealImage
} from '@/components/common/Reveal'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'

export default function HomeHero () {
  // Setup plugin Autoplay dengan jeda 3 detik (3000 ms)
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))

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
              {/* Carousel Section */}
              <Carousel
                plugins={[plugin.current]}
                className='w-full'
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                opts={{
                  loop: true // Mengulang ke gambar pertama setelah gambar terakhir
                }}
              >
                <CarouselContent>
                  {heroContent.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={640}
                        height={400}
                        className='h-56 md:h-64 w-full rounded-2xl object-cover'
                        priority={index === 0} // Hanya prioritaskan gambar pertama untuk LCP
                        sizes='(max-width: 768px) 100vw, 450px'
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <p className='mt-2 text-[9px] text-blue-100 text-center'>
                Dokumentasi SMK Hutama.
              </p>
            </div>
          </RevealImage>
        </RevealContainer>
      </Container>
    </section>
  )
}
