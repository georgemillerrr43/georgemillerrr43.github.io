# Changelog

All notable changes to the Joji Portfolio project will be documented in this file.

## [2.0.0] - 2026-07-07

### Major Upgrade ✨

#### Added
- 🏗️ New modular folder structure (`src/components`, `src/layouts`, `src/css`, `src/js`)
- 📦 Vite build tool setup for fast development and optimized production builds
- 🎨 Design tokens system using CSS custom properties
- 📄 Reusable header and footer components
- 🛠️ Utility functions library (`utils.js`)
- 📧 Modular contact form handler with EmailJS
- 💬 Dedicated WhatsApp integration module
- 📋 Configuration files:
  - `.env.example` - Environment variables template
  - `.eslintrc.json` - ESLint configuration
  - `.prettierrc.json` - Prettier configuration
  - `postcss.config.js` - PostCSS configuration
  - `vite.config.js` - Vite build configuration
- 🔒 Security improvements:
  - Environment variables for sensitive data
  - Better error handling
  - Improved accessibility (ARIA labels)
- 📚 Comprehensive documentation:
  - Updated README.md
  - Created CHANGELOG.md
  - Added migration guide
- 🧹 Code quality tools:
  - ESLint for code linting
  - Prettier for code formatting

#### Changed
- ⚡ Removed jQuery dependency - migrated to vanilla JavaScript
- 🖼️ Renamed all image files with spaces to kebab-case:
  - `instalasi server.jpg` → `instalasi-server.jpg`
  - `pemasangan ap.jpg` → `pemasangan-ap.jpg`
  - `pembenaran kabel.jpg` → `pembenaran-kabel.jpg`
  - `penarikan kabel vo.jpg` → `penarikan-kabel-vo.jpg`
  - `pengecekan bios.jpg` → `pengecekan-bios.jpg`
  - `pengecekan jaringan.jpg` → `pengecekan-jaringan.jpg`
  - `pengecekan server.jpg` → `pengecekan-server.jpg`
  - `Perbaikan laptop.jpg` → `perbaikan-laptop.jpg`
  - `perbaikan server.jpg` → `perbaikan-server.jpg`
  - `Promosi dan persentasi projek.jpg` → `promosi-presentasi-projek.jpg`
  - `foto bareng.jpg` → `foto-bareng.jpg`
- 🎨 Reorganized CSS into modular files:
  - `tokens.css` - Design system tokens
  - `base.css` - Base element styles
  - `components.css` - Component styles
  - `main.css` - Main import file
- 📝 Updated all HTML files with new image paths
- 🏷️ Improved semantic HTML with better ARIA attributes

#### Removed
- 🗑️ Deleted duplicate files:
  - `html/about copy.html`
- 🧪 Removed Bootstrap test files
- 📝 Removed SVG comment files
- ❌ Deprecated jQuery dependency from HTML imports
- 🚫 Removed hardcoded API keys from JavaScript

#### Fixed
- 🔗 Fixed broken email link in footer (typo: "geoergemillerrr43")
- ⚠️ Improved error handling in EmailJS integration
- 🔐 Fixed security issue with exposed API keys

### Performance Improvements
- ✅ Vite provides faster development server startup
- ✅ Automatic code splitting and minification
- ✅ Better caching strategies with content hashing
- ✅ Removed jQuery overhead (45KB reduction)
- ✅ Optimized build output size

### Breaking Changes
- ⚠️ jQuery is no longer available - use vanilla JavaScript instead
- ⚠️ Old CSS file structure changed - update link references
- ⚠️ Environment variables now required for EmailJS integration

### Migration Guide
See `README.md` for complete migration instructions from v1.0 to v2.0.

---

## [1.0.0] - Previous Release

### Features (Original)
- Portfolio website with projects showcase
- Blog section
- Services listing
- Contact form
- WhatsApp integration
- Mobile responsive design
- Smooth animations with AOS
- Carousel with Owl Carousel

---

## Version Format

Follows [Semantic Versioning](https://semver.org/):
- MAJOR version for incompatible API changes
- MINOR version for new functionality (backwards compatible)
- PATCH version for bug fixes
