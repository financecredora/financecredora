// Update year automatically
document.getElementById('year').textContent = new Date().getFullYear();

// WhatsApp prefilled message setup
const phone = '919912239929'; // country code + number
const defaultMessage = encodeURIComponent('Hello Finance Credora! I need Card-to-Cash service. Please assist. — From: ');
const whatsappHref = `https://wa.me/${phone}?text=${defaultMessage}`;

// Apply to CTA buttons
['whatsapp-cta', 'wh-badge'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = whatsappHref;
});

// Check if poster image exists
function checkImage(name, selector) {
  const img = new Image();
  img.onload = () => {};
  img.onerror = () => {
    const btn = document.querySelector(selector);
    if (btn) btn.style.display = 'none';
  };
  img.src = name;
}
checkImage('poster-status.jpg', 'a[download="financecredora-status.jpg"]');
checkImage('poster-square.jpg', 'a[download="financecredora-square.jpg"]');
