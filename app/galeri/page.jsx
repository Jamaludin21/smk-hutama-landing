'use client'

import Image from 'next/image'
import Container from '@/components/ui/container'
import { GALLERIES, GALLERY_CATEGORIES } from '@/constant/gallery'
import PageTransition from '@/components/common/PageTransition'
import {
  RevealContainer,
  RevealCard,
  RevealItem
} from '@/components/common/Reveal'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export default function GaleriPage () {
  // State untuk filter kategori, default menampilkan "semua"
  const [activeCategory, setActiveCategory] = useState('semua')

  // Logika filter data galeri
  const filteredGalleries =
    activeCategory === 'semua'
      ? GALLERIES
      : GALLERIES.filter(item => item.category === activeCategory)

  return (
    <PageTransition>
      <Container className='py-10'>
        <div className='container mx-auto px-4 min-h-screen'>
          {/* Header Section */}
          <RevealItem y={20} dur={0.4}>
            <div className='text-center mb-10'>
              <h1 className='text-3xl md:text-5xl font-bold tracking-tight mb-4 text-primary'>
                Galeri SMK Hutama
              </h1>
              <p className='text-muted-foreground max-w-2xl mx-auto'>
                Dokumentasi fasilitas, sarana prasarana, serta berbagai kegiatan
                inspiratif yang ada di lingkungan SMK Hutama.
              </p>
            </div>
          </RevealItem>

          {/* Filter Categories Section */}
          <RevealItem delay={0.1} y={20}>
            <div className='flex flex-wrap justify-center gap-2 mb-10'>
              <button
                onClick={() => setActiveCategory('semua')}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                  activeCategory === 'semua'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                )}
              >
                Semua
              </button>
              {GALLERY_CATEGORIES.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                    activeCategory === category.id
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </RevealItem>

          {/* Gallery Grid Section */}
          {filteredGalleries.length > 0 ? (
            <RevealContainer
              key={activeCategory}
              className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
            >
              {filteredGalleries.map((item, index) => (
                <RevealCard key={item.id}>
                  <Card className='overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/50 h-full flex flex-col'>
                    <div className='relative w-full aspect-video bg-muted overflow-hidden'>
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className='object-cover transition-transform duration-500 group-hover:scale-110'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                        // Prioritaskan loading untuk 4 gambar pertama
                        priority={index < 4}
                      />
                    </div>
                    <CardContent className='p-4 flex flex-col items-start flex-grow'>
                      <h3
                        className='font-semibold text-base line-clamp-1 mb-2'
                        title={item.title}
                      >
                        {item.title}
                      </h3>
                      <div className='mt-auto'>
                        <Badge
                          variant='outline'
                          className='text-xs font-normal text-muted-foreground'
                        >
                          {GALLERY_CATEGORIES.find(c => c.id === item.category)
                            ?.label || item.category}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </RevealCard>
              ))}
            </RevealContainer>
          ) : (
            // Empty State
            <RevealItem delay={0.2}>
              <div className='text-center py-20 bg-muted/30 rounded-xl border border-dashed'>
                <p className='text-muted-foreground'>
                  Belum ada foto untuk kategori ini.
                </p>
              </div>
            </RevealItem>
          )}
        </div>
      </Container>
    </PageTransition>
  )
}
