$(window).on("scroll", function(e) {
	if ($(window).scrollTop() >= $("#home").height()) $("#home").fadeOut(500);
	else $("#home").fadeIn(500);
});