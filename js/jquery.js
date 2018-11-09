    $(document).ready(function() {

    //Blur
      $("#scroll-inicio").click(function(){
      $('html, body').animate({scrollTop: $('main.intro').offset().top }, 'slow');
         return false;
      });

    });