/** A function called pizzaOven that returns a Javascript Object called Pizza*/

function pizzaOven(crust,sauce,cheese,toppings){
    var pizza = {
        crustType: crust,
        sauceType: sauce,
        cheeses: cheese,
        toppings: toppings
    };
    return pizza;
}

var deepDishPizza = pizzaOven("deep dish","traditional",["mozzarella"], ["pepperoni", "sausage"]);

console.log("Deep Dish Pizza", deepDishPizza);

var handToast = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);

console.log("Hand toast Pizza", handToast);

var italianPizza = pizzaOven("Traditional","Marinara","Mozzarella","Pepperoni");

console.log("Italian Pizza", italianPizza); 

var VegetarianPizza = pizzaOven("Thin","Garlic Ranch Sauce","Provolone","Hummus");

console.log("Vegetarian Pizza", VegetarianPizza); 