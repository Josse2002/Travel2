 
  $(document).ready(function () {
    // Array que contiene las imágenes a mostrar con sus rutas respectivas
    var img_bg = new Array("img/pexels-photo-753626.jpeg", "img/pexels-photo-450441.jpeg", "img/pexels-photo-772665.jpeg");

    // Variable que sirve que control para saber cuál es la imagen a mostrar
    var imgpos = 0;

    var prev = $("#prev");
    var next = $("#next");

    
      setInterval(function(){ nest() }, 5000);
    

    // No hay imagen de fondo. Se asigna la primera imagen al div que contiene
    // la clase imgchange.
    // Nótese que el primer elemento del array comienza con cero
    $('.imgchange').css({"background" : "url('" + img_bg[0] + "')","background-size" : "cover", "background-position" : "center" });

    // Al hacer click en prev
    prev.click(function () { 
        // Utilizamos un operador ternario para actualizar cual será la imagen
        // a mostrar. Se utiliza un decremento en 1 hasta que llegue al primer             
        // elemento del array img_bg. 
        imgpos = imgpos > 0 ? --imgpos : 2;
       
        nez(imgpos);
    });

    // Al hacer click en next
    next.click(function sds () { 
      
      nest()
  });

  function nest() {
    imgpos = imgpos < 2 ? ++imgpos : 0;
      
      nez(imgpos);
    }

    

    function nez(imgpos) {
        // Asigna la imagen del array de acuerdo a la posicion actual de imgpos
        var image = img_bg[imgpos];
        
        // Cambia el fondo del div
        $('.imgchange').css({"background" : "url('" + image + "')", "background-size" : "cover", "background-position" : "center"});
        
    }     

    var masDetalles = $('#moredatils .contenido').hide();
    var oferta = $('.offers .offer');
   
   
    

    oferta.click(function (e) { 
      var clicF = $(this).index();
      var NumeroD = masDetalles[clicF];

      
      $(NumeroD).slideToggle(500);
      var flecha = $('.description .arrow h2 i');
      NumeroFlecha = flecha[clicF];
      $(NumeroFlecha).toggleClass('fa-chevron-up');
     
      
    });



    var input = $('.buscarr');
    var lupa = $('#submit');

    input.hide();

    lupa.click(function (e) { 
      e.preventDefault();
      input.toggle('fast');
      $('#icono').toggleClass('fa-times').fadeIn('fast');;
      
      
      input.addClass('anim');

    });



    


    
});
