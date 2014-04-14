function showProduct(){
  $(".overlay").show();
  $(".details").fadeIn("slow");
}
    function hideProduct(){
  $(".overlay").fadeOut("slow");
  $(".details").fadeOut("slow");
}
    function createShot(shot) {
      var img = $("<img>").attr("src",shot.image_teaser_url);
      
      $("#shots").append(img);

      img.on("click",function() {

       var title = $("<div>").text(shot.title);
        $("#detail").empty().append(title);
        var name=$("<div>").text(shot.player.name);
        $("#name").empty().append(name);
        showProduct();
      });

        $(".overlay").click(function(){
  hideProduct();
});
    }
        
    $.getJSON("http://api.dribbble.com/shots/popular?callback=?",function(data) {
      for(var i=0;i<data.shots.length;i++) {
        // We need to save the current shot for later 
        createShot(data.shots[i]);        
      }
    });


