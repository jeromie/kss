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

	
	
	jQuery("#kss_hide-filter").click(function(){
	    jQuery(".kss_filter").removeClass("kss_filter_mobile");
	});


if($(window).width() < 767){

	$('.center').slick({
  centerMode: true,
  centerPadding: '10px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
}
})

jQuery(window).on("load", function(){
	jQuery('.slick-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
   		jQuery(".swipe-arrow").removeClass("swipe-arrow-visible");
      });
   jQuery.ready.then(function(){
     var imgDefer = document.getElementsByTagName('img');
   for (var i=0; i<imgDefer.length; i++) {
       if(imgDefer[i].getAttribute('data-imgsrc')) {
           imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-imgsrc'));
           imgDefer[i].removeAttribute('data-imgsrc');
       }
   }
   });

     jQuery(".mobile-fixed").addClass("visible");
     jQuery(".swipe-arrow").addClass("swipe-arrow-visible");

})


$('.kss_heart').on('click', function(){
  $(this).toggleClass('animated-heart');
});


$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade-on ").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});
