// Utility Functions
// =================

/**
 * Format number as Rupiah currency
 * @param {number} amount - The amount to format
 * @returns {string} Formatted Rupiah string
 */
export function formatRupiah(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(amount);
}

/**
 * Open WhatsApp with pre-filled message
 * @param {string} phoneNumber - WhatsApp number (with country code, no +)
 * @param {string} message - Message text
 */
export function openWhatsApp(phoneNumber, message) {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, '_blank');
}

/**
 * Track event in localStorage
 * @param {string} key - Event key
 * @param {*} value - Event value
 */
export function trackEvent(key, value) {
  try {
    const events = JSON.parse(localStorage.getItem('events') || '{}');
    events[key] = (events[key] || 0) + 1;
    localStorage.setItem('events', JSON.stringify(events));
    console.log(`✓ Tracked: ${key} = ${events[key]}`);
  } catch (error) {
    console.error('Storage error:', error);
  }
}

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

/**
 * Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit) {
  let lastRun = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastRun >= limit) {
      func(...args);
      lastRun = now;
    }
  };
}

/**
 * Check if element is in viewport
 * @param {Element} element - Element to check
 * @returns {boolean} True if in viewport
 */
export function isInViewport(element) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0 &&
    rect.left < window.innerWidth &&
    rect.right > 0
  );
}

/**
 * Add smooth scroll behavior
 * @param {string} selector - CSS selector of target element
 */
export function smoothScroll(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Get URL query parameter
 * @param {string} param - Parameter name
 * @returns {string|null} Parameter value or null
 */
export function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

/**
 * Lazy load images
 */
export function initLazyLoad() {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      observer.observe(img);
    });
  }
}
