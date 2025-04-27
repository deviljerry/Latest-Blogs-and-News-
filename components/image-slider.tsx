"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface SlideItem {
  id: string
  title: string
  image: string
  category: string
  slug: string
}

export default function ImageSlider({ slides }: { slides: SlideItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  // Auto-play functionality
  useEffect(() => {
    let slideInterval: NodeJS.Timeout

    if (isAutoPlaying) {
      slideInterval = setInterval(() => {
        goToNext()
      }, 5000)
    }

    return () => clearInterval(slideInterval)
  }, [currentIndex, isAutoPlaying])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <div
      className="relative h-[500px] w-full overflow-hidden rounded-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slide container */}
      <div className="h-full w-full relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute top-0 left-0 h-full w-full transition-opacity duration-1000",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === currentIndex}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="mb-2">
                <span className="inline-block bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded">
                  {slide.category}
                </span>
              </div>
              <Link href={`/news/${slide.slug}`}>
                <h2 className="text-2xl md:text-4xl font-bold mb-4 hover:underline">{slide.title}</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Left/Right Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentIndex ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
