jQuery(document).ready(function ($) {
//=============scrollingPage================
    $(window).scroll(function () {
        if($(this).scrollTop()>40){
            $('#me').addClass('cro');
            
        }else{
            $('#me').removeClass('cro');
        }
    });
    
//================activeclass==================

    $(document).on('click', 'ul li', function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
//===============add div after slickder========

    // $('.slider>.your-class>.slick-dots>li').append('<div></div>');
});

function myFunction(x) {
    x.classList.toggle("change");
  }