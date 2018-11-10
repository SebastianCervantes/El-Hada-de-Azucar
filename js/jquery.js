    $(document).ready(function() {

    //Blur
      $("#scroll-inicio").click(function(){
      $('html, body').animate({scrollTop: $('main.intro').offset().top }, 'slow');
         return false;
      });

      var scroll_pos = 0;
            $(document).scroll(function() {
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 600) {
                    $(".indx-nav a").css({"color":"#000"});
                    $(".indx-nav").css("background-color", "#fff");
                    //$("#home").attr("src", "../images/luna-negra.png");
                    return true;
                } else {
                    $(".indx-nav a").css("color", "#fff");
                    $(".indx-nav").css("background-color", "rgba(0,0,0,0)");
                    //$("#home").attr("src", "../images/Luna-Logo-02.png");
                }
            });



    });