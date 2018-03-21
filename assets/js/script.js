

$( document ).ready(function() {
    $(function() {                       //run when the DOM is ready
        $(".hamburger--collapse").click(function() {  //use a class, since your ID gets mangled
          $(this).toggleClass("is-active");      //add the class to the clicked element
          $(".fs-menu").toggleClass("fs-menu-active");
          $('section').toggle(); 
        });
      });


      //TEAM BG SCRIPT

      $(".worker-list li").hover(function() {
        $this = $(this);
        $(".about-us-section").css("background-image", "url(" + $(this).data("bg") + ")");
      });

      //SWIPER

      var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        centeredSlides:true,
        spaceBetween:20,
        grabCursor:true,
        speed:800,

        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },

        //FADE
        fadeEffect: {
          crossFade: true
        },
    
      })

      


      //STICKY HEADER 

      $(window).scroll(function(){
        if ($(window).scrollTop() >= 200) {
          $('.sticky-header').addClass('fixed');
        }
        else {
        $('.sticky-header').removeClass('fixed');
        }
      });
});




