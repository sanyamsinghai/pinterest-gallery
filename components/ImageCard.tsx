'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

interface ImageCardProps {
  id: string
  imageUrl: string
  title: string
  description: string
  tags: string[]
  index: number
}

export default function ImageCard({
  id,
  imageUrl,
  title,
  description,
  index,
}: ImageCardProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <Link href={`/photo/${id}`}>
      <div
        ref={imgRef}
        className="group relative overflow-hidden rounded-lg bg-gray-100 cursor-pointer animate-fade-in"
        style={{
          animationDelay: `${index * 50}ms`,
          animationFillMode: 'backwards',
        }}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden">
          {isVisible && (
            <img
              src={imageUrl}
              alt={title}
              className={`w-full h-auto transition-all duration-700 ${
                isLoaded
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105'
              } group-hover:scale-110`}
              onLoad={() => setIsLoaded(true)}
              loading="lazy"
            />
          )}

          {/* Loading skeleton */}
          {!isLoaded && (
            <div className="absolute inset-0 image-loading" />
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-display text-white text-lg font-semibold mb-1 line-clamp-2">
                {title}
              </h3>
              <p className="text-white/80 text-sm line-clamp-2">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
