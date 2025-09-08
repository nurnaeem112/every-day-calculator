<script>
document.addEventListener('DOMContentLoaded', () => {
  // highlight active sidebar link
  document.querySelectorAll('.sidebar a').forEach(a => {
    if (a.href === location.href) a.classList.add('active');
  });

  // update year(s)
  document.querySelectorAll('#year,#year2,#year3,#year4').forEach(e => {
    if (e) e.textContent = new Date().getFullYear();
  });

  // sidebar toggle button
  const menuBtn = document.querySelector('.menu-btn');
  const sidebar = document.querySelector('.sidebar');
  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  // optional: auto-close sidebar when link clicked (on mobile)
  document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
    });
  });
});
</script>
