var SmartShoe = function(size, color, type){
  this.size = size;
  this.color = color;
  this.type = type;
  this.battery = 20;
}

SmartShoe.prototype.recharge = function(powerIncrease) {
  this.battery += powerIncrease;
  // (this.battery > 100) && this.battery = 100;
}

SmartShoe.prototype.paint = function(color) {
  this.color = color;
}

var nikeShoe = new SmartShoe(10, 'gray', 'sport edition');
var adidas = new SmartShoe(12, 'black', 'comfortable');

nikeShoe.paint(["blue", "pink", "white"]);
nikeShoe.recharge(50);
// console.log(nikeShoe);
adidas.recharge(15);
adidas.recharge(-3);
adidas.paint(["orange", "black"])
// console.log(adidas);



var Jacket = function(size, color, season, cost) {
  this.size = size;
  this.color = color;
  this.season = season;
  this.cost = cost;
  this.usuability = 100;
}

Jacket.prototype.depreciation = function(wearAndTear) {
  this.usuability -= wearAndTear;
}

Jacket.prototype.addSeason = function(season) {
  this.season.push(season);
}

var rainJacket = new Jacket("med", "purple", ["summer", "spring", "fall"], 68.00);
var winterJacket = new Jacket("lrg", "black", ["fall", "winter"], 169.00);

rainJacket.addSeason("Winter")
rainJacket.depreciation(10);
console.log(rainJacket);
winterJacket.depreciation(40);
console.log(winterJacket);








