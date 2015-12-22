$(document).ready(function(){
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".toggle_mnu").on('click', function() {
		if ($(".main-menu").is(":visible")) {
			$(".main-menu").fadeOut(600);
			$(".main-menu li a").removeClass("fadeInUp animated");
		} else {
			$(".main-menu").fadeIn(600);
			$(".main-menu li a").addClass("fadeInUp animated");
		};
	});
});