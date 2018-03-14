

$( document ).ready(function() {
    $(function() {                       //run when the DOM is ready
        $(".hamburger--collapse").click(function() {  //use a class, since your ID gets mangled
          $(this).toggleClass("is-active");      //add the class to the clicked element
        });
      });

});




