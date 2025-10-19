# Arsen Tomachenko Portfolio - Next.js Version

A modern, performant portfolio website built with Next.js 14, TypeScript, and Framer Motion. This is a complete rewrite of the original HTML/CSS/JS portfolio with improved performance, SEO, and maintainability.

## ✨ Features

- ⚡ **Next.js 14** with App Router
- 🎨 **TypeScript** for type safety
- 🎭 **Framer Motion** for smooth animations
- 🌓 **Dark/Light Mode** with persistent theme
- 🎯 **Custom Cursor** with hover effects
- 🎵 **Audio Player** with background music
- 📱 **Fully Responsive** design
- ♿ **Accessible** with ARIA labels
- 🚀 **Optimized Performance**
- 🎨 **CSS Modules** for scoped styling
- 📦 **No External CSS Dependencies**

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
cd nextjs-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Copy your assets:
```bash
# Copy the 'src' folder from the original portfolio to the public directory
cp -r ../src ./public/
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
nextjs-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx             # Home page
│   │   └── globals.css          # Global styles
│   └── components/
│       ├── Navbar.tsx           # Navigation bar
│       ├── Hero.tsx             # Hero section
│       ├── About.tsx            # About section
│       ├── Skills.tsx           # Skills section
│       ├── Projects.tsx         # Projects showcase
│       ├── Footer.tsx           # Footer with eye tracking
│       ├── CustomCursor.tsx     # Custom cursor component
│       ├── AudioPlayer.tsx      # Background music player
│       ├── Preloader.tsx        # Loading animation
│       ├── BackToTop.tsx        # Scroll to top button
│       ├── ThemeProvider.tsx    # Theme context
│       └── *.module.css         # Component styles
├── public/
│   └── src/                     # Original assets (images, fonts, etc.)
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🎯 Key Improvements Over Original

### Performance
- **Faster page loads** with Next.js optimizations
- **Code splitting** automatically handled
- **Optimized images** with lazy loading
- **Reduced JavaScript bundle** size

### Development Experience
- **TypeScript** for better code quality
- **Component-based architecture** for reusability
- **CSS Modules** for scoped styling
- **Hot Module Replacement** for faster development

### SEO & Accessibility
- **Server-side rendering** for better SEO
- **Metadata API** for proper meta tags
- **Semantic HTML** throughout
- **ARIA labels** for accessibility

### Code Quality
- **ESLint** configuration
- **Type checking** with TypeScript
- **Modern React patterns** with hooks
- **Clean component structure**

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Quality
npm run lint         # Run ESLint
npm run type-check   # Type check with TypeScript
```

## 📦 Dependencies

### Core
- `next` - React framework
- `react` & `react-dom` - UI library
- `typescript` - Type safety

### UI & Animation
- `framer-motion` - Animation library
- `react-intersection-observer` - Scroll animations

### Theme
- `next-themes` - Theme management

## 🎨 Customization

### Theme Colors
Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --color-purple: #8000ff;
  --color-light-blue: #6bc5f8;
  /* ... more colors */
}
```

### Components
Each component is modular and can be customized independently:
- Modify the component in `src/components/[ComponentName].tsx`
- Adjust styles in `src/components/[ComponentName].module.css`

### Content
Update your information in:
- `src/components/Hero.tsx` - Hero text
- `src/components/About.tsx` - About content
- `src/components/Skills.tsx` - Skills list
- `src/components/Projects.tsx` - Projects array

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Deploy!

### Other Platforms
```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Arsen Tomachenko**
- Website: [arsentomachenko.site](https://arsentomachenko.site)
- GitHub: [@arsentomachenko](https://github.com/arsentomachenko)
- LinkedIn: [Arsen Tomachenko](https://www.linkedin.com/in/arsen-tomachenko)
- Instagram: [@pexel_ui](https://www.instagram.com/pexel_ui/)

## 🙏 Acknowledgments

- Original portfolio design by Arsen Tomachenko
- Converted to Next.js for improved performance and maintainability
- Icons and images from the original portfolio

---

**Note:** Make sure to update the content with your own information before deploying!

