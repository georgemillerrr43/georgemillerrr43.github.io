// Inisialisasi EmailJS
emailjs.init("bN0YwhatRG6k7sR6m");

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // biar page nggak reload

  emailjs.sendForm('service_ore50kh', 'template_if0xekz', this)
    .then(() => alert('Message sent!'))
    .catch((err) => alert('Error: ' + err));
});
