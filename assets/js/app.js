document.addEventListener('DOMContentLoaded', () => {
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
      tabTrial.classList.add('active');
      tabLogin.classList.remove('active');
    });

    tabLogin.addEventListener('click', () => {
      // Show Login
      formLogin.classList.remove('d-none');
      formTrial.classList.add('d-none');
      
      // Update Tab Styles
      tabLogin.classList.add('active');
      tabTrial.classList.remove('active');
    });
  }
});
