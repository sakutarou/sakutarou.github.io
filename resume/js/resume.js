$(document).ready(function(){

	// header color change
	$(window).on("scroll",function(evt){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if( scrollDistance > 100){
			$header.addClass("header-colored");
		}else{
			$header.removeClass("header-colored");
		}
	})

	//wow
  	wow = new WOW({
	  boxClass:     'wow',      // default
	  animateClass: 'animated', // default
	  offset:       20,          // default
	  mobile:       true,       // default
	  live:         true        // default
	}
	)
	wow.init();

	//fancy box
	$("[data-fancybox]").fancybox({
		loop : true
	});

	// //stellar initialize
	// $(window).stellar();
});