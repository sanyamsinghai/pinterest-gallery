'use client'

import ImageCard from './ImageCard'

interface Image {
  id: string
  imageUrl: string
  title: string
  description: string
  tags: string[]
  category: string
}

interface MasonryGridProps {
  images: Image[]
}

export default function MasonryGrid({ images }: MasonryGridProps) {
  return (
    <div className="container-custom py-8">
      {/* CSS Grid Masonry Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <ImageCard
            key={image.id}
            id={image.id}
            imageUrl={image.imageUrl}
            title={image.title}
            description={image.description}
            tags={image.tags}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
