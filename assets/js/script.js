

$( document ).ready(function() {
    $(function() {                       //run when the DOM is ready
        $(".hamburger--collapse").click(function() {  //use a class, since your ID gets mangled
          $(this).toggleClass("is-active");      //add the class to the clicked element
          $(".fs-menu").toggleClass("fs-menu-active");
        });
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
});




