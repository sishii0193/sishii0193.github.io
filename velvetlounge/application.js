function showProduct(jewel){
	$(".overlay").show();
	$(".details").fadeIn("slow");
	$("#add-to-cart").click(function(){
			var quantity = parseInt($("#detail-quantity").val())
			addItem(jewel, quantity)
		});

var bot = Jewels[jewel];
$("#detail-title").text(bot.title);
	$("#detail-price").text("$" + bot.price);
	$("#detail-image").attr("src", bot.image);
	$("#detail-description").text(bot.description);

}

function addItem(jewel,quantity){
	if(!cart[jewel]) { cart[jewel] = 0; }
   cart[jewel] += quantity;
   updateCart()
}

	function hideProduct(){
	$(".overlay").fadeOut("slow");
	$(".details").fadeOut("slow");
	$("#add-to-cart").off("click");

}

function checkOut() {

  var stripeKey = 'pk_test_V0SJ6QOh3rXO9s6Ysw0eHzzE';

  var description = $("#cart").text();
  var amount = updateCart() * 100;

  var handler = StripeCheckout.configure({
    key: stripeKey,
    image: 'http://image.rakuten.co.jp/chromeworld/cabinet/vl/vl-logo.jpg',
    token: function(token, args) {
    }
  });


  handler.open({
    name: 'VELVETLOUNGE',
    description: description,
    amount: amount,
  });

}

var cart ={};

function updateCart(){
	var total = 0;

	for(var itemName in cart){
		var bot= Jewels[itemName];
		var quantity= cart[itemName];
		var itemPrice = bot.price*quantity;
		total += itemPrice;
	}
	$("#cart").text("Cart" + "($" + total.toFixed(2) + ")");
}



$(function() {
$(".product").click(function(){
		var jewel = $(this).data("product-id");
	showProduct(jewel);
});

$(".overlay").click(function(){
	hideProduct();
});
  $("#cart").click(function() {
    checkOut();
  });




});