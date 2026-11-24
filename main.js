document.addEventListener('DOMContentLoaded', () => {
  // 1. تبديل الوضع الليلي وحفظ التفضيل
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  const savedTheme = localStorage.getItem('ufug-theme');

  if (savedTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
  }

  themeToggle.addEventListener('click', () => {
    const isDark = htmlElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      htmlElement.removeAttribute('data-theme');
      themeToggle.textContent = '🌙';
      localStorage.setItem('ufug-theme', 'light');
    } else {
      htmlElement.setAttribute('data-theme', 'dark');
      themeToggle.textContent = '☀️';
      localStorage.setItem('ufug-theme', 'dark');
    }
  });

  // 2. قائمة الجوال المتجاوبة
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // 3. عداد الإحصائيات المتحرك
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach((el) => {
    const target = Number(el.getAttribute('data-target'));
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target.toLocaleString('en-US');
        clearInterval(timer);
      } else {
        el.textContent = current.toLocaleString('en-US');
      }
    }, 30);
  });

  // 4. تبديل الفوترة الشهرية والسنوية
  const billingSwitch = document.getElementById('billing-switch');
  const priceElements = document.querySelectorAll('.price');

  billingSwitch.addEventListener('change', () => {
    const isYearly = billingSwitch.checked;
    priceElements.forEach((priceEl) => {
      const monthly = priceEl.getAttribute('data-monthly');
      const yearly = priceEl.getAttribute('data-yearly');
      if (monthly === '0') return;
      const value = isYearly ? yearly : monthly;
      priceEl.innerHTML = `${value}$ <span>/ شهرياً</span>`;
    });
  });

  // 5. الأسئلة الشائعة التفاعلية (Accordion)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      faqItems.forEach((other) => {
        if (other !== item) other.classList.remove('active');
      });
      item.classList.toggle('active');
    });
  });

  // 6. نموذج الاشتراك التفاعلي
  const signupForm = document.getElementById('signup-form');
  const feedbackMsg = document.getElementById('form-feedback');

  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('user-name');
    const emailInput = document.getElementById('user-email');
    feedbackMsg.textContent = `أهلاً بك يا ${nameInput.value}! تم تسجيل (${emailInput.value}) بنجاح.`;
    signupForm.reset();
  });

  // 7. زر العودة للأعلى
  const scrollTopBtn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});