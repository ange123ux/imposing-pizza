
function Ipizza(number,crust, size, toppings = []) {
    this.number = number;
    this.crust = crust;
    this.size = size;
    this.toppings = toppings;
}
Ipizza.prototype.price = function () {
    var sizeprice;
    var crustprice;
    var toppingsprice = [];
    var priceTomatoes=300;
    var priceBeef=1000;
    var priceChicken=2000;
if (this.size=='small'){
    sizeprice=1;
}
else if(this.size=='medium'){
    sizeprice=2;
}
else{
    sizeprice=3;
}
if (this.crust=='Crispy'){
    crustprice=1050;
}
else if(this.crust=='Stuffed'){
    crustprice=2050;
}
else {
    crustprice=3050;
}
for (var i = 0; i < this.toppings.length; i++) {
    if (this.toppings[i] == "tomato") {
        toppingsprice.push(priceTomatoes);
    }
}
for (var i = 0; i < this.toppings.length; i++) {
    if (this.toppings[i] == "beef") {
        toppingsprice.push(priceBeef);
    }
}
for (var i = 0; i < this.toppings.length; i++) {
    if (this.toppings[i] == "chicken") {
        toppingsprice.push(priceChicken);
    }
}
var totalToppings = 0;
var i = 0;
while (i < toppingsprice.length) {
    totalToppings += toppingsprice[i];
    i++;
}

var priceTotal = sizeprice * (crustprice + totalToppings) * this.number;
return priceTotal;

}
$("#amount").click(function(event){
    event.preventDefault();
    var pizzasize= $("input[name='type']:checked").val();
    var pizzacrust= $(".types").val();
    var pizzanumber=$(".numb").val();
    var pizzatoppings=[];
    $('.topping :checkbox:checked').each(function(i){
        pizzatoppings[i]=$(this).val();  
    });
    var pizza=new Ipizza(pizzanumber, pizzacrust, pizzasize);
    Array.prototype.push.apply(pizza.toppings, pizzatoppings);
    var price, totalPrice=0;
    price=pizza.price();
    totalPrice +=price;
    $("ul#range").append("<li>"+pizza.number + " " + pizza.size + " " + pizza.crust + " " + " "+price+"$</li>")
    $("#total").text("total:" + totalPrice);
});
$("#order-now").click(function(event){
    event.preventDefault();
    if($("#deliver").is(":checked")){
    alert("thanks for ordering. your pizza(s) will be delivered")
    }else{
      alert("thanks for ordering")
    }
  });
  function reload(){
    location.reload();
  }

    


  





