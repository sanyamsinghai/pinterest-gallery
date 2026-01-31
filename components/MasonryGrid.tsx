'use client'

import ImageCard from './ImageCard'

interface MasonryGridProps {
  images: any[]
}

export default function MasonryGrid({ images }: MasonryGridProps) {
  return (
    <div
      className="
        columns-2
        sm:columns-2
        md:columns-3
        lg:columns-4
        gap-4
        space-y-4
      "
    >
      {images.map((image, index) => (
        <div key={image.id} className="break-inside-avoid mb-4">
          <ImageCard {...image} index={index} />
        </div>
      ))}
    </div>
  )
}
