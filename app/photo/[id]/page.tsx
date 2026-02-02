import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface PageProps {
  params: { id: string }
}

export default async function PhotoPage({ params }: PageProps) {
  const photo = await client.fetch(
    `*[_type == "photo" && _id == $id][0]{
      title,
      description,
      "imageUrl": image.asset->url
    }`,
    { id: params.id },
    { cache: 'no-store' }
  )

  if (!photo) return notFound()

  return (
    <main className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      <Image
        src={photo.imageUrl}
        alt={photo.title}
        width={1200}
        height={1600}
        className="rounded-xl"
      />
      <h1 className="text-3xl font-bold mt-6">{photo.title}</h1>
      <p className="text-muted mt-2">{photo.description}</p>
    </main>
  )
}
