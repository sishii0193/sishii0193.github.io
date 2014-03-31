function showProduct(jewel){
	$(".overlay").show();
	$(".details").show();
var bot = Jewels[jewel];
$("#detail-title").text(bot.title);
	$("#detail-price").text("$" + bot.price);
	$("#detail-image").attr("src", bot.image);
	$("#detail-description").text(bot.description);
}


	function hideProduct(){
	$(".overlay").hide();
	$(".details").hide();
}



$(function() {
$(".product").click(function(){
		var jewel = $(this).data("product-id");
	showProduct(jewel);
});

$(".overlay").click(function(){
	hideProduct();
});




});