# 📸 Pinterest-Friendly Photo Gallery

A modern, fast, and SEO-optimized photo gallery website built with Next.js and Tailwind CSS. Perfect for showcasing your photography and driving traffic from Pinterest.

## ✨ Features

- 🎨 **Beautiful Masonry Gallery** - Pinterest-style responsive grid layout
- 🚀 **Lightning Fast** - Optimized with lazy loading and image optimization
- 📱 **Mobile First** - Fully responsive design for all devices
- 🔍 **SEO Optimized** - Dynamic meta tags, Open Graph, and Twitter Cards
- 📌 **Pinterest Integration** - One-click "Save to Pinterest" buttons
- 💰 **Monetization Ready** - Ad spaces and affiliate link sections built-in
- 🎯 **Individual Photo Pages** - Dedicated pages for each image with SEO
- 🏷️ **Tags & Categories** - Organized content with searchable tags
- ⚡ **Static Export** - Deploy anywhere (Vercel, Netlify, GitHub Pages)

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Fonts:** Playfair Display + DM Sans (Google Fonts)
- **Deployment:** Vercel / Netlify ready

## 📁 Project Structure

```
pinterest-gallery/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx             # Homepage with gallery
│   ├── globals.css          # Global styles
│   └── photo/
│       └── [id]/
│           └── page.tsx     # Individual photo pages
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer component
│   ├── ImageCard.tsx        # Gallery image card
│   └── MasonryGrid.tsx      # Masonry layout grid
├── data/
│   └── images.json          # Image database (EDIT THIS!)
├── public/
│   └── images/              # Local images folder
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Extract the project files** to your desired location

2. **Install dependencies:**
```bash
cd pinterest-gallery
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser** and visit: `http://localhost:3000`

That's it! Your gallery is now running locally.

## 📝 Adding Your Own Images

### Method 1: Using Online Images (Easiest)

1. Open `data/images.json`
2. Add your image data following this format:

```json
{
  "id": "9",
  "imageUrl": "https://your-image-url.com/photo.jpg",
  "title": "Your Photo Title",
  "description": "A detailed description of your photo for SEO",
  "tags": ["tag1", "tag2", "tag3"],
  "category": "Nature",
  "width": 800,
  "height": 1200
}
```

**Tips:**
- Use high-quality image URLs (Unsplash, your own CDN, etc.)
- Write descriptive titles and descriptions for SEO
- Add relevant tags (3-6 tags work best)
- Categories help organize related images

### Method 2: Using Local Images

1. Place your images in `public/images/` folder
2. Reference them in `images.json`:

```json
{
  "id": "10",
  "imageUrl": "/images/my-photo.jpg",
  "title": "My Amazing Photo",
  "description": "Description here",
  "tags": ["photography", "art"],
  "category": "Portfolio",
  "width": 800,
  "height": 600
}
```

### Image Requirements

- **Format:** JPG, PNG, or WebP
- **Recommended Size:** 800-1200px width
- **Aspect Ratio:** Any (masonry layout adapts)
- **File Size:** Keep under 500KB for faster loading

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  cream: '#FDFCFB',      // Background color
  charcoal: '#2C2C2C',   // Text color
  accent: '#D4A574',     // Accent/button color
  muted: '#8B8B8B',      // Secondary text
}
```

### Change Fonts

Edit `app/globals.css` and update the Google Fonts import:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

Then update `tailwind.config.js`:

```javascript
fontFamily: {
  display: ['Your Display Font', 'serif'],
  sans: ['Your Body Font', 'sans-serif'],
}
```

### Update Site Information

Edit `app/layout.tsx` to change:
- Site title and description
- Open Graph images
- Meta tags
- Social media links

## 🔍 SEO Optimization

The site is pre-configured for excellent SEO:

✅ Dynamic page titles
✅ Meta descriptions for each photo
✅ Open Graph tags for social sharing
✅ Twitter Card support
✅ Alt text on all images
✅ Clean, semantic HTML
✅ Fast loading speeds
✅ Mobile-friendly

### Adding Google Analytics

Add this to `app/layout.tsx` in the `<head>` section:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
```

## 💰 Monetization

The site includes designated spaces for monetization:

1. **Ad Spaces** - Pre-styled ad containers on:
   - Homepage CTA section
   - Individual photo pages (sidebar)

2. **Affiliate Links** - Section below each photo for:
   - Print shops
   - Photography equipment
   - Related products

Replace the placeholder content in these sections with your actual ads/links.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-github-repo-url
git push -u origin main
```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Done!** Your site will be live in ~2 minutes

### Deploy to Netlify

1. **Build the static site:**
```bash
npm run build
```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder
   - Or connect your GitHub repo

### Custom Domain

After deployment, add your custom domain in Vercel/Netlify settings.

## 📌 Pinterest Setup

### Getting Traffic from Pinterest

1. **Create a Pinterest Business Account**
2. **Claim Your Website** in Pinterest settings
3. **Add the Pinterest Tag** for analytics
4. **Create Pins** for your photos:
   - Use the "Save to Pinterest" button on your site
   - Create rich pins with descriptions
   - Include relevant keywords in titles

### Pinterest SEO Tips

- Use descriptive file names
- Write detailed descriptions (150-200 words)
- Add 5-10 relevant hashtags
- Create multiple pins for popular photos
- Join relevant group boards

## 🔧 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🐛 Troubleshooting

### Images not loading?
- Check image URLs are accessible
- Verify file paths for local images
- Check console for errors

### Build fails?
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Styling issues?
```bash
# Rebuild Tailwind
npm run dev
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Pinterest for Business](https://business.pinterest.com/)

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips for Success

1. **Quality Photos:** Use high-resolution, well-composed images
2. **Consistent Posting:** Add new photos regularly
3. **SEO Focus:** Write detailed descriptions with keywords
4. **Pinterest Strategy:** Pin regularly and join group boards
5. **Engagement:** Respond to comments and build community
6. **Analytics:** Track what works and adjust strategy

## 🎯 Next Steps

1. ✅ Add your own images to `data/images.json`
2. ✅ Customize colors and fonts
3. ✅ Update site metadata in `app/layout.tsx`
4. ✅ Deploy to Vercel or Netlify
5. ✅ Set up Pinterest Business account
6. ✅ Add Google Analytics
7. ✅ Create your first pins!

---

**Ready to showcase your photography?** Start by adding your images and deploy in minutes! 🚀

For questions or issues, check the documentation or reach out to the community.

Happy pinning! 📌
