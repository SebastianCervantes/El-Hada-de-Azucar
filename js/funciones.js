$(  function()
    {
    $('#este').bind('click',function()
                            {
                                $('#overlay').fadeIn(100, 
                                                        function()
                                                        {
                                                            $('#dialogo').fadeIn();
                                                        });
                            });

    
    
    


    $('#cerrar').bind('click',  function()
                                {
                                    $('#overlay, #dialogo').fadeOut();
                                });
});







$(  function()
    {
    $('#mapb').bind('click',function()
                            {
                                $('#sucursal').fadeOut(400,
                                                        function()
                                                        {
                                                            $('iframe').fadeIn();
                                                        });
                            });

});





$(function() {
  
// Dropdown toggle
$('.dropdown-toggle').click(function(){
  $(this).next('.dropdown').toggle();
});

$(document).click(function(e) {
  var target = e.target;
  if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
    $('.dropdown').hide();
  }
});

});
    
    
