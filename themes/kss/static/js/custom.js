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
})


$('.kss_heart').on('click', function(){
  $(this).toggleClass('animated-heart');
});