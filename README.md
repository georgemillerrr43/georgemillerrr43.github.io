# 🎨 Joji Portfolio - v2.0 (Modernized)

**Freelance Digital Designer & IT Support Professional**

A modern, clean, and fully optimized portfolio website built with vanilla JavaScript, modular CSS, and Vite build tool.

---

## ✨ What's New (v2.0)

### 🧹 Cleanup & Organization
- ✅ Removed duplicate files (`about copy.html`)
- ✅ Deleted unnecessary test files
- ✅ Renamed all files with spaces to kebab-case
- ✅ Removed unused dependencies

### 🏗️ Modern Architecture
- ✅ Modular folder structure (`src/components`, `src/layouts`, `src/css`, `src/js`)
- ✅ Reusable header/footer components
- ✅ Separated concerns (CSS tokens, base styles, components)
- ✅ Clean CSS with custom properties (design tokens)

### ⚡ Performance & Technology
- ✅ Vanilla JavaScript (removed jQuery dependency)
- ✅ Vite build tool for fast development & optimized builds
- ✅ ESLint & Prettier for code quality
- ✅ Environment configuration management
- ✅ Ready for image optimization & lazy loading

### 🔒 Security
- ✅ API keys moved to `.env` file (not hardcoded)
- ✅ Improved accessibility (ARIA labels, semantic HTML)
- ✅ Better error handling

---

## 📁 Project Structure

```
joji-portfolio/
├── src/
│   ├── components/          # Reusable HTML components
│   │   ├── header.html
│   │   └── footer.html
│   ├── layouts/             # Page layouts
│   ├── pages/               # Static pages
│   ├── css/                 # Modular stylesheets
│   │   ├── tokens.css       # Design tokens
│   │   ├── base.css         # Base styles
│   │   ├── components.css   # Component styles
│   │   └── main.css         # Imports all CSS
│   └── js/                  # JavaScript modules
│       ├── main.js          # Main app logic
│       ├── contact.js       # EmailJS integration
│       ├── whatsapp.js      # WhatsApp integration
│       └── utils.js         # Utility functions
├── html/                    # Original HTML files (to be migrated)
├── assets/                  # Images, videos, icons
├── dist/                    # Built output (generated)
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies & scripts
├── .env.example             # Environment variables template
├── .eslintrc.json          # ESLint configuration
├── .prettierrc.json        # Prettier configuration
└── README.md               # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm 8+

### Installation

```bash
# Install dependencies
npm install

# Create .env file from template
cp .env.example .env
```

### Development

```bash
# Start development server
npm run dev

# This will open http://localhost:3000 in your browser
```

### Build & Deploy

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
git push origin main
```

---

## 📝 Configuration

### Environment Variables (`.env`)

```env
VITE_WHATSAPP_NUMBER=6283188878936
VITE_EMAIL_ADDRESS=georgemillerrr43@gmail.com
VITE_EMAILJS_SERVICE_ID=service_ore50kh
VITE_EMAILJS_TEMPLATE_ID=template_if0xekz
VITE_EMAILJS_PUBLIC_KEY=bN0YwhatRG6k7sR6m
```

### Design Tokens

All colors, spacing, and typography are defined in `src/css/tokens.css` as CSS custom properties:

```css
:root {
  --color-primary: #C1FF72;
  --color-secondary: #1f2a2e;
  --font-family: "Manrope", sans-serif;
  --spacing-md: 1rem;
  /* ... more tokens */
}
```

---

## 🎯 Features

### Core Features
- 📱 Fully responsive design
- ⚡ Fast page load with Vite
- 🎨 Modern UI with smooth animations (AOS)
- 📧 Email contact form (EmailJS)
- 💬 WhatsApp integration
- 📊 Portfolio carousel (Owl Carousel)

### Accessibility
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Screen reader friendly

---

## 🛠️ Development Scripts

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
npm run format    # Format code with Prettier
```

---

## 📦 Dependencies

### Production
- **aos** - Animate on scroll library
- **owl-carousel2** - Carousel component

### Development
- **vite** - Build tool & dev server
- **eslint** - Code quality
- **prettier** - Code formatter
- **autoprefixer** - CSS vendor prefixes
- **postcss** - CSS processing

---

## 🔄 Migration Guide (from v1.0)

If you're updating from v1.0, follow these steps:

1. **Update image references** ✅ (Already done!)
   - Old: `assets/images/Proyek/instalasi server.jpg`
   - New: `assets/images/Proyek/instalasi-server.jpg`

2. **Use new components**
   - Import `src/components/header.html` instead of duplicating
   - Import `src/components/footer.html` instead of duplicating

3. **Use new CSS**
   - Link `src/css/main.css` instead of old `assets/css/styles.css`
   - Use CSS custom properties for colors/spacing

4. **Use new JavaScript**
   - Replace jQuery with vanilla JS from `src/js/main.js`
   - Import utilities from `src/js/utils.js`

---

## 🎨 Customization

### Change Colors
Edit `src/css/tokens.css`:

```css
:root {
  --color-primary: #C1FF72;      /* Change primary color */
  --color-secondary: #1f2a2e;    /* Change secondary color */
}
```

### Change Fonts
Edit `src/css/tokens.css`:

```css
:root {
  --font-family: "Your Font", sans-serif;
}
```

### Add New Component
1. Create `src/components/YourComponent.html`
2. Import it in your pages
3. Add styles in `src/css/components.css`
4. Add logic in `src/js/main.js` if needed

---

## 📊 Performance Tips

- 🖼️ Optimize images (use WebP/AVIF formats)
- 💾 Enable gzip compression on server
- 🔄 Use lazy loading for below-fold images
- ⚙️ Minimize CSS/JS with build tool (Vite does this automatically)
- 🚀 Deploy to CDN for faster global access

---

## 🐛 Troubleshooting

### Dev server won't start
```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install
npm run dev
```

### Build fails
```bash
# Check for syntax errors
npm run lint

# Clear cache and rebuild
npm run build
```

### Styles not applying
- Check if `src/css/main.css` is imported
- Verify CSS custom properties are defined in `tokens.css`
- Check browser console for CSS errors

---

## 📝 License

MIT © 2026 Joji

---

## 🤝 Contact

- 📧 Email: georgemillerrr43@gmail.com
- 💬 WhatsApp: +62-831-8887-8936
- 📍 Location: Indonesia, Karawang

---

## 🎓 Learn More

- [Vite Documentation](https://vitejs.dev)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Vanilla JavaScript](https://javascript.info)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Made with ❤️ by Joji**
