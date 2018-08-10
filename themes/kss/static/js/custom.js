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
})