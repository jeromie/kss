$(document).ready(function(){
	$(".xzoom, .xzoom-gallery").xzoom({
		position: 'inside',
		mposition: 'fullscreen',
		openOnSmall: false
	});

	$('.xzoom').bind('click', function(event) {
	    var xzoom = $(this).data('xzoom');
	    xzoom.closezoom();
	    $.fancybox.open(xzoom.gallery().cgallery, {padding: 0, helpers: {overlay: {locked: false}}});
	    event.preventDefault();
	});

	jQuery("#filter").click(function(){
	    jQuery(".kss_filter").addClass("kss_filter_mobile");
	});

	jQuery("#kss_hide-filter").click(function(){
	    jQuery(".kss_filter").removeClass("kss_filter_mobile");
	});
})
