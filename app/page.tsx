import MasonryGrid from '@/components/MasonryGrid'
import { getPhotos } from '@/sanity/lib/client'

export default async function Home() {
  const images = await getPhotos()

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Discover Beauty
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          A curated collection of stunning photography.
        </p>
      </section>

      {/* Gallery */}
      <section className="pb-16 px-6 md:px-10 lg:px-16">
        <MasonryGrid images={images} />
      </section>

      {/* About / Ads section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="max-w-xl mx-auto opacity-80">
          Photography isn’t always about places or people—it’s about moments.

This gallery explores light, silence, structure, and emotion in everyday surroundings.

Every image here is intentionally minimal, allowing shadows, lines, and atmosphere to tell their own story.

Updated regularly, this space evolves as new perspectives are captured.
        </p>
      </section>
    </>
  )
}
