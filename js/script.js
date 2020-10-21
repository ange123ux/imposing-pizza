
function Ipizza(crust, size, toppings = []) {
    this.crust = crust;
    this.size = size;
    this.toppings = toppings;
}
Ipizza.prototype.Pizza = function () {
    var sizeprice;
    var crustprice;
    var toppingsprice = [];
    var priceTomatoes=1500;
    var priceBeef=1700;
    var priceChicken=2000;
if (this.size=='small'){
    sizeprice=1000;
}
else if(this.size=='medium'){
    sizeprice=2000;
}
else {
    sizeprice=3000;
}
if (this.crust==crispy){
    crustprice=1050;
}
else if(this.crust==stuffed){
    crustprice=2050;
}
else {
    crustprice=3050;
}
for (var i = 0; i < this.toppings.length; i++) {
    if (this.toppings[i] == "tomatoes") {
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

var priceTotal = pricesize + pricecrust + totalToppings;
return priceTotal;
}
