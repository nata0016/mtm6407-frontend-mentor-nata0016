document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('menu-toggle');
    const nav = document.querySelector('.nav');
    const label = document.querySelector('.menu-btn');
  
    if (!checkbox || !nav || !label) return;
  
    const syncAria = () => {
      const expanded = checkbox.checked;
      label.setAttribute('aria-expanded', String(expanded));
      label.setAttribute('aria-label', expanded ? 'Close menu' : 'Open menu');
      document.body.classList.toggle('nav-open', expanded);
    };
  
    checkbox.addEventListener('change', syncAria);
    syncAria();
  });
  