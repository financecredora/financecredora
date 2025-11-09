// Auto year
document.getElementById('year').textContent = new Date().getFullYear();

// WhatsApp link with pre-filled message
const phone = '919912239929'; // +91 with country code
const msg = encodeURIComponent('Hello Finance Credora! I need Card-to-Cash service. Please assist. — From: ');
const wa = `https://wa.me/${phone}?text=${msg}`;

['whatsapp-cta', 'wh-badge'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = wa;
});
