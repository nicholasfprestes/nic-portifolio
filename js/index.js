$(document).on('click', 'a[href^="#"]', function(e) {
    
    //set offset
  
    var offset = 95;
  
  
    // close toggler
    if($('.navbar-toggler').css('display') !='none'){
            $(".navbar-toggler").trigger( "click" );
            offset = 295;
        }
    // target element id
    var id = $(this).attr('href');
    
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    
    // top position relative to the document
    var pos = $id.offset().top - offset;
    
     
    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
    
    
  
});