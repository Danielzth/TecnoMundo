// Encapsulado para seguridad
(function () {
  // Desplazamiento suave para enlaces con data-scroll o en el menú de navegación
  document.querySelectorAll('[data-scroll], .site-header nav a').forEach(el => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const selector = this.getAttribute('data-scroll') || this.getAttribute('href');
      if (!selector) return;
      const target = document.querySelector(selector);
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Simulación de envio de formulario de contacto
  const contactForm = document.querySelector('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      if (btn) {
        const original = btn.innerHTML;
        btn.innerHTML = 'Enviando...';
        btn.disabled = true;
        setTimeout(() => {
          btn.innerHTML = 'Enviado';
          btn.classList.add('sent');
          setTimeout(() => {
            btn.innerHTML = original;
            btn.disabled = false;
            contactForm.reset();
          }, 1200);
        }, 900);
      }
    });
  }

  // Animaciones al aparecer elementos con clase .hidden
  const observeHiddenElements = () => {
    const hidden = document.querySelectorAll('.hidden');
    if (!hidden.length) return;
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { // elemento visible
          const el = entry.target;
          // Retraso basado en el índice para efecto escalonado
          const idx = Array.from(hidden).indexOf(el);
          setTimeout(() => el.classList.add('show'), idx * 90);
          obs.unobserve(el); // dejar de observar
        }
      });
    }, { threshold: 0.16 });
    hidden.forEach(h => observer.observe(h));
  };
// Iniciar observación al cargar el DOM
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', observeHiddenElements);
  else observeHiddenElements();



  // Video fallback para pantallas pequeñas o modo ahorro de datos
  (function videoFallback(){
    const hero = document.querySelector('.hero-video');
    const vid = hero ? hero.querySelector('.hero-video-el') : null;
    function preferImage(){
      return window.innerWidth < 720 || navigator.connection?.saveData === true;
    }
    // Inicializar estado
    if (vid && preferImage()){
      vid.pause();
      vid.style.display = 'none';
      hero.classList.add('hero-image-fallback'); // aplicar clase de fallback
    }
    // Escuchar cambios de tamaño de ventana
    window.addEventListener('resize', () => {
      if (!vid) return;
      if (preferImage()){ // Mostrar imagen
        vid.pause(); vid.style.display='none'; hero.classList.add('hero-image-fallback');
      } else {
        // Reproducir video
        vid.style.display='block'; try{ vid.play(); }catch(e){}; hero.classList.remove('hero-image-fallback');
      }
    });
  })();

})(); // fin del encapsulado