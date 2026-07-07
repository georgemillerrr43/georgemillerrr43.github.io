// EmailJS Contact Form Handler
// =============================

const EMAIL_SERVICE_ID = 'service_ore50kh';
const EMAIL_TEMPLATE_ID = 'template_if0xekz';
const EMAIL_PUBLIC_KEY = 'bN0YwhatRG6k7sR6m';

// Initialize EmailJS
if (typeof emailjs !== 'undefined') {
  emailjs.init(EMAIL_PUBLIC_KEY);
}

// Handle Contact Form Submission
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        contactForm
      );

      // Success message
      alert('✅ Message sent successfully! I will get back to you soon.');
      contactForm.reset();

    } catch (error) {
      console.error('Email send error:', error);
      alert('❌ Error sending message. Please try again or contact via WhatsApp.');
    }
  });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
});
