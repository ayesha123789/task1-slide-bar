const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');
const overlay = document.getElementById('overlay');

toggleBtn.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
  } else {
    sidebar.classList.toggle('collapsed');
  }
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});
