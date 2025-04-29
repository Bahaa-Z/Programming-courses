// 🌙 Dark Mode Umschalter
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('bg-dark');
  document.body.classList.toggle('text-white');
  document.querySelectorAll('.card').forEach(c => {
    c.classList.toggle('bg-dark');
    c.classList.toggle('text-white');
  });
  toggleBtn.textContent = document.body.classList.contains('bg-dark') ? '☀️' : '🌙';
});
