document.getElementById('year').textContent = new Date().getFullYear();
const menuBtn = document.getElementById('menu');
const header = document.querySelector('.nav');
menuBtn?.addEventListener('click', () => header.classList.toggle('open'));

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      header.classList.remove('open');
    }
  });
});
