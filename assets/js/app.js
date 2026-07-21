document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Logic
  const themeToggle = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });

  // Auth Tabs Logic (Login vs Trial)
  const tabTrial = document.getElementById('tab-trial');
  const tabLogin = document.getElementById('tab-login');
  const formTrial = document.getElementById('form-trial');
  const formLogin = document.getElementById('form-login');

  if (tabTrial && tabLogin) {
    tabTrial.addEventListener('click', () => {
      // Show Trial
      formTrial.classList.remove('d-none');
      formLogin.classList.add('d-none');
      
      // Update Tab Styles
      tabTrial.style.borderBottomColor = 'var(--color-primary)';
      tabTrial.style.color = 'var(--color-text)';
      tabLogin.style.borderBottomColor = 'transparent';
      tabLogin.style.color = 'var(--color-text-muted)';
    });

    tabLogin.addEventListener('click', () => {
      // Show Login
      formLogin.classList.remove('d-none');
      formTrial.classList.add('d-none');
      
      // Update Tab Styles
      tabLogin.style.borderBottomColor = 'var(--color-primary)';
      tabLogin.style.color = 'var(--color-text)';
      tabTrial.style.borderBottomColor = 'transparent';
      tabTrial.style.color = 'var(--color-text-muted)';
    });
  }
});
