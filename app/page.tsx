import MasonryGrid from '@/components/MasonryGrid'
import { getPhotos } from '@/sanity/lib/client'

export default async function Home() {
  const images = await getPhotos()

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Discover Beauty
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            A curated collection of stunning photography.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-16 px-6 md:px-10 lg:px-16">
        <MasonryGrid images={images} />
      </section>

      {/* About / Ads section can stay here */}
    </>
  )
}
