import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MasonryGrid from '@/components/MasonryGrid'
import imagesData from '@/data/images.json'

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container-custom text-center animate-slide-up">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-charcoal mb-6">
              Discover Beauty
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              A curated collection of stunning photography from around the world.
              Find inspiration, save your favorites, and explore the art of visual storytelling.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="pb-16 px-4 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <MasonryGrid images={imagesData} />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-charcoal text-cream">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                About This Gallery
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                We curate the most stunning photography from talented artists worldwide.
                Each image tells a story, captures a moment, and inspires creativity.
                Browse, discover, and save your favorites to Pinterest.
              </p>
              {/* <div className="flex flex-wrap justify-center gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">
                    {imagesData.length}+
                  </div>
                  <div className="text-muted">Photos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">10K+</div>
                  <div className="text-muted">Views</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">5K+</div>
                  <div className="text-muted">Saves</div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* CTA Section - Ad Space Ready */}
        <section className="py-20">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Love These Photos?
              </h2>
              <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
                Follow us on Pinterest to see more stunning photography and get daily inspiration.
              </p>
              <a
                href="https://in.pinterest.com/sanyamaethere/_created/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg"
              >
                Follow on Pinterest
              </a>
              
              {/* Ad Space Placeholder */}
              <div className="mt-12 p-8 border-2 border-dashed border-muted/30 rounded-lg">
                <p className="text-sm text-muted">Advertisement Space</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
