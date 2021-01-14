function popup() {
	window.open('../HTML/gerant.html', 'popup', 'width=650, height= 300');
}
function index() {
	window.location.href = "/";
}
$(document).ready(function() {
	$('.tabPrep').addClass("table table-hover");
	$('.presContent').addClass('list-group ');
	$('.presContent > li').addClass('list-group-item');
	$('.headerCommande').addClass("text-center");
	$('.statutContent').addClass("media")
	$('.statutBody').addClass("media-body");	
	$('.statutImg').addClass("media-right")


});