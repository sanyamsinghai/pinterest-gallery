'use client'

import { useState, useRef, useEffect } from 'react'

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

  // Pinterest Pin Creator URL with link to your profile in description
  const siteUrl = 'https://pinterest-gallery.vercel.app'
  const descriptionWithProfile = `${title} - ${description} | Follow me on Pinterest: https://in.pinterest.com/sanyamaethere/_created/`
  const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(siteUrl + '/photo/' + id)}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(descriptionWithProfile)}`

  return (
    <a 
      href={pinterestUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div
        ref={imgRef}
        className="group relative overflow-hidden rounded-lg bg-gray-100 cursor-pointer animate-fade-in shadow-md hover:shadow-xl transition-shadow duration-300"
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

          {/* Pinterest Badge - Top Right */}
          <div className="absolute top-3 right-3 bg-[#E60023] text-white p-2 rounded-full shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0a12 12 0 0 0-4.37 23.17c-.08-.75-.15-1.89.03-2.71.16-.74.98-4.14.98-4.14s-.25-.5-.25-1.24c0-1.16.67-2.03 1.51-2.03.71 0 1.06.54 1.06 1.18 0 .72-.46 1.79-.7 2.78-.2.84.42 1.53 1.25 1.53 1.5 0 2.66-1.58 2.66-3.86 0-2.02-1.45-3.43-3.52-3.43-2.4 0-3.81 1.8-3.81 3.66 0 .73.28 1.5.63 1.92.07.08.08.15.06.24-.07.28-.22.9-.25 1.03-.04.17-.13.21-.3.13-1.05-.49-1.71-2.03-1.71-3.27 0-2.66 1.93-5.1 5.57-5.1 2.93 0 5.2 2.08 5.2 4.87 0 2.91-1.84 5.25-4.38 5.25-.85 0-1.66-.44-1.93-.96l-.53 2.01c-.19.73-.7 1.64-1.04 2.2a12 12 0 1 0 16.37-11.17A12 12 0 0 0 12 0z" />
            </svg>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-display text-white text-lg font-semibold mb-1 line-clamp-2">
                {title}
              </h3>
              <p className="text-white/90 text-sm line-clamp-2 mb-3">
                {description}
              </p>
              
              {/* Pinterest Button */}
              <div className="flex items-center gap-2 bg-[#E60023] text-white px-4 py-2.5 rounded-full w-fit hover:bg-[#cc0018] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 0 0-4.37 23.17c-.08-.75-.15-1.89.03-2.71.16-.74.98-4.14.98-4.14s-.25-.5-.25-1.24c0-1.16.67-2.03 1.51-2.03.71 0 1.06.54 1.06 1.18 0 .72-.46 1.79-.7 2.78-.2.84.42 1.53 1.25 1.53 1.5 0 2.66-1.58 2.66-3.86 0-2.02-1.45-3.43-3.52-3.43-2.4 0-3.81 1.8-3.81 3.66 0 .73.28 1.5.63 1.92.07.08.08.15.06.24-.07.28-.22.9-.25 1.03-.04.17-.13.21-.3.13-1.05-.49-1.71-2.03-1.71-3.27 0-2.66 1.93-5.1 5.57-5.1 2.93 0 5.2 2.08 5.2 4.87 0 2.91-1.84 5.25-4.38 5.25-.85 0-1.66-.44-1.93-.96l-.53 2.01c-.19.73-.7 1.64-1.04 2.2a12 12 0 1 0 16.37-11.17A12 12 0 0 0 12 0z" />
                </svg>
                <span className="text-sm font-semibold">Save to Pinterest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}