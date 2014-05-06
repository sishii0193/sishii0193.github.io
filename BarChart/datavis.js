$(function(){

for(var i=0;i<data.length;i++) {

	console.log(data);

	var person = $("<div>").text(data[i][8]);

    	var salary = $("<div>").text(data[i][18]);
    	var wrapper =$("<div>")
    	wrapper.append(salary,person);
        $("#names").append(wrapper);

    var num= parseFloat(data[i][18])/1000;
    			
    var sales = $("<div>").addClass("salary")
    						.css("width",num);
    						wrapper.append(sales);

}
});

