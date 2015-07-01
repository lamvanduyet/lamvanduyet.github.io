var main = function() {

    /* Open Menu*/
  $('.open-nav').click(function() {
    $('.main-nav').animate( { left: "0rem"
    }, 200);
    $('body').animate({
      left: "15.625rem"
    }, 200);
 
  
  });
  
  /* Close Menu*/
  $('.icon-close').click(function() {
      $('.main-nav').animate({ left: "-15.625rem"
    }, 200);
    $('body').animate( {
      left: "0rem"
    }, 200);
    
  });

    /*  Open User Menu  */
    $('.user').click(function () {
        $('.user-nav').show();
        
    });
    $('.user-nav').mouseleave( function() {
        $('.user-nav').hide();
    });
    
}
$(document).ready(main);