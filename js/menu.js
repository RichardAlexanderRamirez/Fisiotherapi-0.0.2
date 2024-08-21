document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.nav__menu');
  const navMenu = document.querySelector('.nav__link--menu');
  const navClose = document.querySelector('.nav__close');

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => {
    navMenu.classList.remove('nav__link--show');
  };

  menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('nav__link--show');
  });

  navClose.addEventListener('click', function () {
    closeMenu();
  });

  // Desplazamiento suave al hacer clic en un enlace interno
  document.querySelectorAll('.nav__links').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });

      closeMenu(); // Cerrar el menú después de hacer clic en un enlace
    });
  });
});
  