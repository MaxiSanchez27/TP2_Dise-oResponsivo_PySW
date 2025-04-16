$(document).ready(function () {
  // Animaciones del Hero
  $('.animated-title').hide().fadeIn(2000); // Efecto fadeIn para el título
  $('.animated-subtitle').hide().delay(500).slideDown(1500); // Efecto slideDown para el subtítulo

  // Mega menú solo en escritorio
  if ($(window).width() > 768) {
      $('.navbar .dropdown').hover(
          function () {
              $(this).find('.mega-menu').stop(true, true).slideDown(200);
          },
          function () {
              $(this).find('.mega-menu').stop(true, true).slideUp(200);
          }
      );
  }

  // Animación de hover para las cards
  $('.card-hover').hover(function(){
      // Animación al pasar el mouse
      $(this).animate({
          opacity: 0.8,
          marginTop: "-10px"
      }, 200);
  }, function(){
      // Volver al estado original
      $(this).animate({
          opacity: 1,
          marginTop: "0"
      }, 200);
  });

  function animateCounter(id, target, duration) {
    let current = 0;
    let increment = target / (duration / 50); // Incremento por intervalo
    let counter = setInterval(function () {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(counter); // Detener el contador cuando se llega al objetivo
        }
        $(id).text(Math.floor(current)); // Actualizar el texto del contador
    }, 50);
}

// Activar contadores al cargar la página
animateCounter('#clientes-satisfechos', 1200, 2000); // 1200 clientes satisfechos en 2 segundos
animateCounter('#clases-ofrecidas', 85, 2500); // 85 clases en 2.5 segundos
animateCounter('#anos-experiencia', 10, 3000); // 10 años de experiencia en 3 segundos
animateCounter('#equipos-modernos', 50, 2500); // 50 equipos modernos en 2.5 segundos

 // Pausar el carrusel cuando el mouse pasa por encima
 $('#carouselTestimonios').carousel({
  interval: 2000, // Tiempo de transición (2 segundos)
  ride: 'carousel' // Iniciar el carrusel automáticamente
});

// Pausar el carrusel al hacer hover
$('#carouselTestimonios').hover(
  function() {
      $(this).carousel('pause'); // Pausar cuando se pasa el mouse
  },
  function() {
      $(this).carousel('cycle'); // Reanudar cuando el mouse sale
  }
);
// Validación del formulario
$('#contact-form').on('submit', function(event) {
  event.preventDefault();
  
  // Ocultar el spinner y habilitarlo después de que se haya enviado el formulario
  $('#submit-btn .spinner-border').removeClass('d-none');
  $('#submit-btn').prop('disabled', true);

  // Validar los campos
  if (this.checkValidity() === false) {
      event.stopPropagation();
      $(this).addClass('was-validated');
  } else {
      setTimeout(function() {
          alert('Formulario enviado correctamente');
          $('#submit-btn .spinner-border').addClass('d-none');
          $('#submit-btn').prop('disabled', false);
          $('#contact-form')[0].reset(); // Limpiar formulario
      }, 2000);
  }
});

$(document).ready(function () {
    $('.filter-checkbox').on('change', function () {
      let checkedValues = $('.filter-checkbox:checked').map(function () {
        return this.value;
      }).get();
  
      $('.clase-item').each(function () {
        const item = $(this);
        const matches = checkedValues.some(val => item.hasClass(val));
        item.toggle(matches);
      });
    });
  });
  
  $(document).ready(function() {
    // Filtrar las clases según la categoría seleccionada
    $(".filter-btn").click(function() {
      var filterValue = $(this).attr("data-filter");
  
      if (filterValue == "all") {
        $(".clase-item").show();  // Muestra todas las clases
      } else {
        $(".clase-item").each(function() {
          if ($(this).hasClass(filterValue)) {
            $(this).show();  // Muestra las clases que coinciden
          } else {
            $(this).hide();  // Oculta las clases que no coinciden
          }
        });
      }
    });
  });
  
  $(document).ready(function() {
    // Inicializar Masonry
    var $grid = $('.gallery-grid').masonry({
      itemSelector: '.clase-item',
      columnWidth: '.clase-item',
      percentPosition: true
    });
  
    // Filtro de clases
    $('.filter-btn').on('click', function() {
      var filterValue = $(this).attr('data-filter');
      
      // Filtrado de elementos según la categoría
      if (filterValue === 'all') {
        $grid.masonry('layout');
        $('.clase-item').show();
      } else {
        $('.clase-item').each(function() {
          if ($(this).hasClass(filterValue)) {
            $(this).show();
          } else {
            $(this).hide();
          }
        });
        $grid.masonry('layout');
      }
    });
  });
  $('.zoom-card').hover(
    function () {
      $(this).find('.overlay').fadeIn(300);
    },
    function () {
      $(this).find('.overlay').fadeOut(300);
    }
  );
  
  $(document).ready(function(){
    $(".zoom-card").hover(
      function() {
        $(this).find(".overlay").fadeIn(300);
      }, 
      function() {
        $(this).find(".overlay").fadeOut(300);
      }
    );
  });
  
});
