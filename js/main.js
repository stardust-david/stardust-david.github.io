// ============================================================
// Personal Homepage - 交互脚本
// 功能：移动端菜单、滚动导航高亮、滚动淡入动画、页脚年份
// ============================================================

/* ---------- 1. 移动端菜单开关 ---------- */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// 点击菜单项后关闭移动端菜单
document.querySelectorAll('#navMenu a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

/* ---------- 2. 滚动时高亮当前导航项 ---------- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#navMenu a');

function highlightNav() {
  const scrollPos = window.scrollY + 120;
  let currentId = '';

  sections.forEach((section) => {
    if (scrollPos >= section.offsetTop) {
      currentId = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      'active',
      link.getAttribute('href') === '#' + currentId
    );
  });
}
window.addEventListener('scroll', highlightNav);
highlightNav();

/* ---------- 3. 滚动淡入动画 ---------- */
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // 进入视口后不再重复观察
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((item) => observer.observe(item));

/* ---------- 4. 页脚动态年份 ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
