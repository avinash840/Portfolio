// small interactive helpers: theme toggle, contact mailto fallback, smooth scroll
document.getElementById('year').textContent = new Date().getFullYear();

const themeToggle = document.getElementById('themeToggle');
let dark = true;
themeToggle.addEventListener('click', () => {
  dark = !dark;
  if (!dark) {
    document.documentElement.style.setProperty('--bg', '#f8fafc');
    document.body.style.color = '#071428';
    alert('Light mode enabled (temporary). For full light theme modify CSS variables.');
  } else {
    location.reload(); // simple restore
  }
});

// smooth scroll for internal nav links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href === '#') return;
    const el = document.querySelector(href);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// contact form: open mailto
function submitContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent(`Contact from portfolio: ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  const mail = `mailto:avinashmehus9548@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mail;
  return false;
}
