// Year
document.getElementById('year').textContent = new Date().getFullYear();

// WhatsApp links with prefilled message
const phone = '919912239929'; // +91 with country code
const msg = encodeURIComponent('Hello Finance Credora! I need Credit card withdrawal.');
const wa = `https://wa.me/${phone}?text=${msg}`;

['whatsapp-cta', 'wh-badge', 'wh-float'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = wa;
});

// Reveal-on-scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
