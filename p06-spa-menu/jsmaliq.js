
$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".apapun").slideToggle("fast");

	$('nav ul li.mati').each(function(index, el) {
		var apapunID = el.id.split('_')[1];
		$('.apapun#' + apapunID).hide();
	});
});

$('nav').delegate('.mati', 'click', function(event) {
	var pilihIsi = this.id.split('_')[1];
	console.log(pilihIsi);
	document.location.hash = pilihIsi;

	$('.apapun:visible').fadeOut('fast', function() {
		$('.apapun#' + pilihIsi).fadeIn('fast');
	});

	var $this = $(this);
	$this.removeClass('mati').addClass("hidup");
    $this.siblings().addClass('mati').removeClass('hidup');

    });
});