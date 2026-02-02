import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />

        {/* Page content grows */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer always visible */}
        <Footer />
      </body>
    </html>
  )
}
