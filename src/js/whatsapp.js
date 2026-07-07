// WhatsApp Integration
// ====================

import { formatRupiah, openWhatsApp, trackEvent } from './utils.js';

const WHATSAPP_NUMBER = '6283188878936';

/**
 * Initialize WhatsApp service buttons
 */
export function initWhatsApp() {
  const serviceButtons = document.querySelectorAll('.service-btn');

  serviceButtons.forEach(button => {
    button.addEventListener('click', handleServiceClick);
  });
}

/**
 * Handle service button click
 */
function handleServiceClick(event) {
  const serviceName = event.target.getAttribute('data-service');
  const servicePrice = parseInt(event.target.getAttribute('data-price') || '0');

  if (!serviceName) return;

  const formattedPrice = formatRupiah(servicePrice);
  const confirmMessage = `Order Service:\n\n${serviceName}\n${formattedPrice}\n\nContinue to WhatsApp?`;

  if (confirm(confirmMessage)) {
    const whatsappMessage = buildServiceMessage(serviceName, servicePrice);
    openWhatsApp(WHATSAPP_NUMBER, whatsappMessage);
    trackEvent('service_clicked', serviceName);
  }
}

/**
 * Build service inquiry message
 */
function buildServiceMessage(serviceName, price) {
  const formattedPrice = formatRupiah(price);

  return `Halo kak! 👋\n\nSaya tertarik dengan layanan *${serviceName}* (${formattedPrice}).\n\nBisa saya tanya-tanya dulu tentang layanan ini?\n\n*Yang ingin saya ketahui:*\n1. Waktu pengerjaan\n2. Fitur yang termasuk\n3. Metode pembayaran\n4. Garansi layanan\n\nTerima kasih! 🙏`;
}

/**
 * Initialize WhatsApp quick contact button
 */
export function initWhatsAppQuickContact() {
  const quickContactBtn = document.querySelector('[data-action="whatsapp-contact"]');

  if (quickContactBtn) {
    quickContactBtn.addEventListener('click', () => {
      const message = `Halo kak! Saya ingin berbicara tentang project baru. Bisa kita diskusi?`;
      openWhatsApp(WHATSAPP_NUMBER, message);
      trackEvent('quick_contact', 'whatsapp');
    });
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initWhatsApp();
  initWhatsAppQuickContact();
});
