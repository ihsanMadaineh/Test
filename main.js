document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  themeToggle.addEventListener('click', () => {
    const isDark = htmlElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      htmlElement.removeAttribute('data-theme');
      themeToggle.textContent = '🌙';
    } else {
      htmlElement.setAttribute('data-theme', 'dark');
      themeToggle.textContent = '☀️';
    }
  });

  const signupForm = document.getElementById('signup-form');
  const feedbackMsg = document.getElementById('form-feedback');

  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = signupForm.querySelector('input[type="email"]');
    feedbackMsg.textContent = `تم تسجيل البريد (${emailInput.value}) بنجاح! سنتواصل معك قريباً.`;
    emailInput.value = '';
  });
});