// =========================================================
// Footer year
// =========================================================
document.getElementById('year').textContent = new Date().getFullYear();

// =========================================================
// Hero "typing" effect — types out a code-style intro
// =========================================================
(function typeHero(){
  const el = document.getElementById('typedCode');
  if(!el) return;

  const lines = [
    { text: 'const developer = {', cls: '' },
    { text: '  name: "Abhay Gond",', cls: '' },
    { text: '  role: "B.Tech CSE Student",', cls: '' },
    { text: '  focus: "Full-Stack (MERN)",', cls: '' },
    { text: '  based_in: "Jalandhar, India",', cls: '' },
    { text: '  status: "open_to_opportunities"', cls: '' },
    { text: '};', cls: '' }
  ];

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if(prefersReduced){
    el.textContent = lines.map(l => l.text).join('\n');
    return;
  }

  let lineIndex = 0, charIndex = 0;
  let output = '';

  function tick(){
    if(lineIndex >= lines.length){
      el.innerHTML = output + '<span class="cursor"></span>';
      return;
    }
    const currentLine = lines[lineIndex].text;
    if(charIndex <= currentLine.length){
      const soFar = output + currentLine.slice(0, charIndex);
      el.innerHTML = soFar + '<span class="cursor"></span>';
      charIndex++;
      setTimeout(tick, 18 + Math.random() * 22);
    } else {
      output += currentLine + '\n';
      lineIndex++;
      charIndex = 0;
      setTimeout(tick, 90);
    }
  }
  tick();
})();

// =========================================================
// Mobile menu toggle
// =========================================================
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if(menuToggle && mobileMenu){
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open menu');
    });
  });
}

// =========================================================
// Active-section highlighting in the nav (desktop tabs + mobile menu)
// =========================================================
const sections = document.querySelectorAll('main section[id], main.hero, #home');
const allSectionEls = [document.getElementById('home'), ...document.querySelectorAll('main .section[id]')];
const tabLinks = document.querySelectorAll('.tab, .mobile-menu a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const id = entry.target.getAttribute('id');
      tabLinks.forEach(link => {
        link.classList.toggle('is-active', link.dataset.section === id);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

allSectionEls.forEach(sec => { if(sec) observer.observe(sec); });

// =========================================================
// Image fallback handling (profile photo, project images)
// =========================================================
const FALLBACK_CONTENT = {
  profile:   { icon: 'fa-user', label: 'add assets/profile.jpg' },
  project2:  { icon: 'fa-image', label: 'add assets/project2.jpg' },
  project3:  { icon: 'fa-image', label: 'add assets/project3.jpg' },
  project4:  { icon: 'fa-image', label: 'add assets/project4.jpg' },
  project5:  { icon: 'fa-image', label: 'add assets/project5.jpg' }
};

function handleImgError(imgEl, key){
  const info = FALLBACK_CONTENT[key] || { icon: 'fa-image', label: 'image not found' };
  const wrapper = imgEl.parentElement;
  wrapper.classList.add('is-fallback');
  wrapper.innerHTML = `<i class="fa-solid ${info.icon}"></i><span>${info.label}</span>`;
}

// =========================================================
// Certificate links — friendly toast if the image hasn't been added yet
// =========================================================
function checkCertLink(event, anchorEl){
  const href = anchorEl.getAttribute('href');
  const testImg = new Image();

  event.preventDefault();
  testImg.onload = () => window.open(href, '_blank', 'noopener');
  testImg.onerror = () => showToast(`Add "${href.split('/').pop()}" to assets/certificates/ to open this file.`);
  testImg.src = href;

  return false;
}

// =========================================================
// Toast helper
// =========================================================
let toastTimer = null;
function showToast(message){
  const toast = document.getElementById('toast');
  if(!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3200);
}
