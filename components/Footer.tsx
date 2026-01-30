export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-cream py-12 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Gallery</h3>
            <p className="text-muted text-sm leading-relaxed">
              Curating beautiful photography from around the world. Discover,
              share, and get inspired.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a href="/" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="mailto:sanyamaethere@gmail.com" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://in.pinterest.com/sanyamaethere/_created/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Pinterest"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0a12 12 0 0 0-4.37 23.17c-.08-.75-.15-1.89.03-2.71.16-.74.98-4.14.98-4.14s-.25-.5-.25-1.24c0-1.16.67-2.03 1.51-2.03.71 0 1.06.54 1.06 1.18 0 .72-.46 1.79-.7 2.78-.2.84.42 1.53 1.25 1.53 1.5 0 2.66-1.58 2.66-3.86 0-2.02-1.45-3.43-3.52-3.43-2.4 0-3.81 1.8-3.81 3.66 0 .73.28 1.5.63 1.92.07.08.08.15.06.24-.07.28-.22.9-.25 1.03-.04.17-.13.21-.3.13-1.05-.49-1.71-2.03-1.71-3.27 0-2.66 1.93-5.1 5.57-5.1 2.93 0 5.2 2.08 5.2 4.87 0 2.91-1.84 5.25-4.38 5.25-.85 0-1.66-.44-1.93-.96l-.53 2.01c-.19.73-.7 1.64-1.04 2.2a12 12 0 1 0 16.37-11.17A12 12 0 0 0 12 0z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/aethere.s/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-muted/20 pt-8 text-center">
          <p className="text-sm text-muted">
            © {currentYear} Photo Gallery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
