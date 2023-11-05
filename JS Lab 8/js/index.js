var output = document.getElementById('output');

//Create a hamburger object
function Hamburger(bun, veggie, cheese, sauce, meatType, pattyAmount, sides) {
        this.bun = bun;
        this.veggie = veggie;
        this.cheese = cheese;
        this.sauce = sauce;
        this.meatType = meatType;
        this.pattyAmount = pattyAmount;
        this.sides = sides;
        this.bio = function () {
            output.innerHTML = "Bun: " + this.bun + '<br>' +
                "Veggie: " + this.veggie + '<br>' +
                "Cheese: " + this.cheese + '<br>' +
                "Sauce: " + this.sauce + '<br>' +
                "Meat Type: " + this.meatType + '<br>' +
                "Patty Amount: " + this.pattyAmount + '<br>' +
                "Sides: " + this.sides;
        };
    }

//Create a hamburger with specific options
var burger1 = new Hamburger('Sesame Seed',['Lettuce', 'Tomato', 'Red Onion'], 'Swiss', 'Ketchup', 'Beef', 'Double', 'Fries');

burger1.bio();
