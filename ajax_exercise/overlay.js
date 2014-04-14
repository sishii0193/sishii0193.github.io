function showProduct(){
	$(".overlay").show();
	$(".details").fadeIn("slow");
		});
	function hideProduct(){
	$(".overlay").fadeOut("slow");
	$(".details").fadeOut("slow");
});

$(function() {
	$("#shots").click(function(){
			showProduct();
			});
	$(".overlay").click(function(){
	hideProduct();
});