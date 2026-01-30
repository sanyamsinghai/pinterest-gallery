import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import imagesData from '@/data/images.json'
import Link from 'next/link'

// Generate static params for all images
export async function generateStaticParams() {
  return imagesData.map((image) => ({
    id: image.id,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const image = imagesData.find((img) => img.id === params.id)

  if (!image) {
    return {
      title: 'Photo Not Found',
    }
  }

  return {
    title: image.title,
    description: image.description,
    keywords: image.tags,
    openGraph: {
      title: image.title,
      description: image.description,
      images: [
        {
          url: image.imageUrl,
          width: image.width || 800,
          height: image.height || 600,
          alt: image.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: image.title,
      description: image.description,
      images: [image.imageUrl],
    },
  }
}

export default function PhotoPage({ params }: { params: { id: string } }) {
  const image = imagesData.find((img) => img.id === params.id)

  if (!image) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-32 pb-16">
          <div className="container-custom text-center">
            <h1 className="font-display text-4xl font-bold mb-4">Photo Not Found</h1>
            <Link
              href="/"
              className="text-accent hover:underline"
            >
              Return to Gallery
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // Get related images (same category, excluding current)
  const relatedImages = imagesData
    .filter((img) => img.category === image.category && img.id !== image.id)
    .slice(0, 4)

  // Pinterest share URL
  const pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
    typeof window !== 'undefined' ? window.location.href : ''
  )}&media=${encodeURIComponent(image.imageUrl)}&description=${encodeURIComponent(
    image.title + ' - ' + image.description
  )}`

  return (
    <>
      <Header />

      <main className="min-h-screen pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="container-custom py-4">
          <nav className="text-sm text-muted">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal">{image.title}</span>
          </nav>
        </div>

        {/* Photo Detail Section */}
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image */}
              <div className="animate-scale-in">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="animate-slide-up">
                <div className="sticky top-32">
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                    {image.category}
                  </span>

                  <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
                    {image.title}
                  </h1>

                  <p className="text-lg text-muted leading-relaxed mb-8">
                    {image.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-charcoal mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {image.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-charcoal rounded-full text-sm hover:bg-accent/10 hover:text-accent transition-colors cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <a
                      href={pinterestShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pinterest-btn flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#E60023] text-white font-semibold rounded-full shadow-lg"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0a12 12 0 0 0-4.37 23.17c-.08-.75-.15-1.89.03-2.71.16-.74.98-4.14.98-4.14s-.25-.5-.25-1.24c0-1.16.67-2.03 1.51-2.03.71 0 1.06.54 1.06 1.18 0 .72-.46 1.79-.7 2.78-.2.84.42 1.53 1.25 1.53 1.5 0 2.66-1.58 2.66-3.86 0-2.02-1.45-3.43-3.52-3.43-2.4 0-3.81 1.8-3.81 3.66 0 .73.28 1.5.63 1.92.07.08.08.15.06.24-.07.28-.22.9-.25 1.03-.04.17-.13.21-.3.13-1.05-.49-1.71-2.03-1.71-3.27 0-2.66 1.93-5.1 5.57-5.1 2.93 0 5.2 2.08 5.2 4.87 0 2.91-1.84 5.25-4.38 5.25-.85 0-1.66-.44-1.93-.96l-.53 2.01c-.19.73-.7 1.64-1.04 2.2a12 12 0 1 0 16.37-11.17A12 12 0 0 0 12 0z" />
                      </svg>
                      Save to Pinterest
                    </a>

                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: image.title,
                            text: image.description,
                            url: window.location.href,
                          })
                        }
                      }}
                      className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-charcoal text-white font-semibold rounded-full hover:bg-opacity-90 transition-all"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                      Share
                    </button>
                  </div>

                  {/* Ad Space */}
                  <div className="mt-8 p-6 border-2 border-dashed border-muted/30 rounded-lg text-center">
                    <p className="text-sm text-muted">Advertisement Space</p>
                    <p className="text-xs text-muted mt-1">
                      (Monetization Ready)
                    </p>
                  </div>

                  {/* Affiliate Link Section */}
                  <div className="mt-6 p-6 bg-accent/5 rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2">
                      Shop Similar Prints
                    </h4>
                    <p className="text-sm text-muted mb-3">
                      Get high-quality prints of similar photography
                    </p>
                    <a
                      href="#"
                      className="inline-block px-4 py-2 bg-accent text-white text-sm font-medium rounded-full hover:bg-opacity-90 transition-all"
                    >
                      View Prints →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Images Section */}
        {relatedImages.length > 0 && (
          <section className="container-custom mt-20">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">
              Related Photos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedImages.map((relatedImage) => (
                <Link
                  key={relatedImage.id}
                  href={`/photo/${relatedImage.id}`}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={relatedImage.imageUrl}
                      alt={relatedImage.title}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="font-display text-white font-semibold">
                          {relatedImage.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
