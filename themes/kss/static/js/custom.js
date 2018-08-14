$(document).ready(function(){
	$(".xzoom, .xzoom-gallery").xzoom({
		position: 'inside',
		mposition: 'fullscreen',
		openOnSmall: false
	});

	// $('.xzoom').bind('click', function(event) {
	//     var xzoom = $(this).data('xzoom');
	//     xzoom.closezoom();
	//     $.fancybox.open(xzoom.gallery().cgallery, {padding: 0, helpers: {overlay: {locked: false}}});
	//     event.preventDefault();
	// });

	jQuery("#filter").click(function(){
	    jQuery(".kss_filter").addClass("kss_filter_mobile");
	});

	
	
	jQuery(".center img").click(function(){
	   jQuery(".swipe-arrow").removeClass("swipe-arrow-visible");
	});

	jQuery("#kss_hide-filter").click(function(){
	    jQuery(".kss_filter").removeClass("kss_filter_mobile");
	});


})
$(document).ready(function(){
if($(window).width() < 790){

	$('.center').slick({
 		arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
  });

	$(window).scroll(function() {

    if ($(this).scrollTop()>200)
     {
        $('.mobile-fixed').show();
           jQuery(".mobile-fixed").addClass("visible");
     }
    else
     {
      $('.mobile-fixed').hide();
     }
 });
}

});

document.addEventListener('DOMContentLoaded',function(){
  new SmartPhoto(".js-smartphoto");
});

if ($(window).width() < 790) {
    $('.kss_zoom a').addClass('js-smartphoto');
} else {
    $('.kss_zoom a').removeClass('js-smartphoto');
}


jQuery(function(){
	jQuery('.slick-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
   		jQuery(".swipe-arrow").removeClass("swipe-arrow-visible");
      });
})


jQuery(window).on("load", function(){
	
     jQuery.ready.then(function(){
     var imgDefer = document.getElementsByTagName('img');
   for (var i=0; i<imgDefer.length; i++) {
       if(imgDefer[i].getAttribute('data-imgsrc')) {
           imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-imgsrc'));
           imgDefer[i].removeAttribute('data-imgsrc');
       }
   }
   });

  
     jQuery(".swipe-arrow").addClass("swipe-arrow-visible");

})


$('.kss_heart').on('click', function(){
  $(this).toggleClass('animated-heart');
});




$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.fade-on').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });
    
});


