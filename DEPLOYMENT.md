# 🚀 Deployment Guide

This guide will help you deploy your Pinterest Gallery to Vercel (recommended) or Netlify.

## Option 1: Deploy to Vercel (Recommended) ⭐

Vercel is built by the creators of Next.js and offers the best performance.

### Prerequisites
- GitHub account
- Your project pushed to GitHub

### Step-by-Step Instructions

#### 1. Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Pinterest Gallery"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

#### 2. Deploy to Vercel

**Method A: Using Vercel Website (Easiest)**

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" (use GitHub to sign in)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel automatically detects Next.js:
   - Framework Preset: **Next.js**
   - Build Command: `next build`
   - Output Directory: `out` (for static export)
6. Click "Deploy"
7. Wait 2-3 minutes ⏳
8. Your site is live! 🎉

**Method B: Using Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name? (your choice)
# - Which directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

#### 3. Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-30 minutes)

---

## Option 2: Deploy to Netlify

### Step-by-Step Instructions

#### 1. Prepare for Static Export

The project is already configured for static export in `next.config.js`:

```javascript
output: 'export'
```

#### 2. Build the Static Site

```bash
npm run build
```

This creates an `out` folder with your static site.

#### 3. Deploy to Netlify

**Method A: Drag & Drop (Easiest)**

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login
3. Drag the `out` folder to the upload area
4. Your site is live! 🎉

**Method B: Connect to GitHub**

1. Push your code to GitHub (see Vercel instructions)
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub
5. Select your repository
6. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
7. Click "Deploy site"

**Method C: Using Netlify CLI**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

---

## Option 3: Deploy to GitHub Pages

### Step-by-Step Instructions

1. **Update `next.config.js`** to include your base path:

```javascript
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name', // Add this line
  images: {
    unoptimized: true,
  },
}
```

2. **Build the site:**

```bash
npm run build
```

3. **Deploy to GitHub Pages:**

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d out"

# Deploy
npm run deploy
```

4. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Source: Select "gh-pages" branch
   - Save

Your site will be live at: `https://your-username.github.io/your-repo-name`

---

## Post-Deployment Checklist

After deploying, verify these items:

### ✅ Functionality Tests
- [ ] Homepage loads correctly
- [ ] Images are displaying
- [ ] Individual photo pages work
- [ ] Navigation works
- [ ] "Save to Pinterest" button works
- [ ] Mobile responsive layout

### ✅ SEO Setup
- [ ] Add Google Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Verify site with Pinterest
- [ ] Add meta tags verification codes
- [ ] Test Open Graph tags with [OpenGraph.xyz](https://www.opengraph.xyz/)

### ✅ Performance
- [ ] Test page speed with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Verify images are optimized
- [ ] Check mobile performance
- [ ] Test lazy loading

---

## Custom Domain Setup

### For Vercel:

1. Go to Vercel dashboard
2. Select your project
3. Go to "Settings" → "Domains"
4. Click "Add Domain"
5. Enter your domain name
6. Follow DNS instructions:

**If using Namecheap/GoDaddy:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For root domain:**
```
Type: A
Name: @
Value: 76.76.21.21
```

### For Netlify:

1. Go to "Site settings" → "Domain management"
2. Click "Add custom domain"
3. Follow DNS instructions:

```
Type: CNAME
Name: www
Value: your-site.netlify.app
```

---

## Environment Variables (If Needed)

If you add features requiring environment variables:

### Vercel:
1. Go to project settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy

### Netlify:
1. Go to "Site settings" → "Environment variables"
2. Add your variables
3. Trigger redeploy

Example variables you might need:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_PINTEREST_TAG=1234567890
```

---

## Continuous Deployment

Both Vercel and Netlify offer automatic deployments:

1. **Every git push triggers a deployment**
2. **Preview deployments for pull requests**
3. **Rollback to previous versions easily**

### To Trigger Manual Redeploy:

**Vercel:**
```bash
vercel --prod
```

**Netlify:**
```bash
netlify deploy --prod
```

---

## Troubleshooting

### Build Fails

**Error: Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Error: Out of memory**
```bash
# Increase Node memory (add to package.json scripts)
"build": "NODE_OPTIONS='--max-old-space-size=4096' next build"
```

### Images Not Loading

1. Check image URLs in `images.json`
2. Verify CORS settings for external images
3. Test URLs in browser directly

### 404 on Routes

For static export, ensure:
```javascript
// next.config.js
output: 'export',
trailingSlash: true, // Add this if needed
```

---

## Performance Optimization Tips

1. **Compress Images:**
```bash
npm install -g sharp-cli
sharp -i public/images/*.jpg -o public/images/optimized/
```

2. **Enable CDN:**
   - Both Vercel and Netlify use CDN automatically
   - Images are cached globally

3. **Add robots.txt:**
Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

4. **Generate Sitemap:**
Create `public/sitemap.xml` with all your photo URLs

---

## Monitoring & Analytics

### Add Google Analytics

Edit `app/layout.tsx`:

```typescript
<head>
  <script
    async
    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  />
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
      `,
    }}
  />
</head>
```

### Monitor Performance

- **Vercel Analytics:** Available in project dashboard
- **Netlify Analytics:** Available in site settings
- **Google Search Console:** For SEO monitoring

---

## Need Help?

- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Netlify Support: [netlify.com/support](https://netlify.com/support)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

---

## Quick Command Reference

```bash
# Development
npm run dev

# Build for production
npm run build

# Test production build locally
npm run start

# Deploy to Vercel
vercel --prod

# Deploy to Netlify
netlify deploy --prod

# Check for errors
npm run lint
```

---

**Congratulations!** 🎉 Your Pinterest Gallery is now live!

Remember to:
1. Set up Pinterest Business account
2. Verify your website with Pinterest
3. Start creating pins
4. Monitor analytics
5. Update content regularly

Happy pinning! 📌
