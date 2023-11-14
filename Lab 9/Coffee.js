var output = document.getElementById('output');

// Coffee Constructor
function Coffee(size, isDecaf, qtyCream, qtySugar) {
    this.size = size;
    this.isDecaf = isDecaf;
    this.qtyCream = qtyCream;
    this.qtySugar = qtySugar;
    this.decaf = (this.isDecaf === true ? 'decaffeinated' : 'caffeinated');
    this.description = 'A ' + this.size + ' ' + this.decaf + ' coffee with ' + this.qtyCream + ' cream and ' + this.qtySugar + ' sugar.';
}

// Coffee serveIt method
Coffee.prototype.serveIt = function() {
    output.innerHTML = ''; // Clear the previous content
    var cup = document.createElement("img");
    cup.setAttribute('title', this.description);
    cup.setAttribute('src', 'images/coffee.bmp');
    var cupSize;
    switch (this.size) {
        case 'small':
            cupSize = '200px';
            break;
        case 'medium':
            cupSize = '250px';
            break;
        case 'large':
            cupSize = '300px';
            break;
        default:
            cupSize = '200px';
    }
    cup.setAttribute('height', cupSize);
    output.appendChild(cup);
};

// Add getDescription method to Coffee prototype
Coffee.prototype.getDescription = function() {
    return this.description;
};

// Americano Constructor
function Americano(size, isDecaf, qtyCream, qtySugar, waterLevel) {
    Coffee.call(this, size, isDecaf, qtyCream, qtySugar);
    this.waterLevel = waterLevel;
    this.description = 'A ' + this.size + ' ' + this.decaf + ' Americano with water level: ' + this.waterLevel + ', ' + this.qtyCream + ' cream, and ' + this.qtySugar + ' sugar.';
}

// Inherit from Coffee
Americano.prototype = Object.create(Coffee.prototype);
Americano.prototype.constructor = Americano;

// Americano serveIt method
Americano.prototype.serveIt = function() {
    output.innerHTML = ''; // Clear the previous content
    var cup = document.createElement("img");
    cup.setAttribute('title', this.description);
    cup.setAttribute('src', 'images/coffee-blue.bmp');
    var cupSize;
    switch (this.size) {
        case 'small':
            cupSize = '200px';
            break;
        case 'medium':
            cupSize = '250px';
            break;
        case 'large':
            cupSize = '300px';
            break;
        default:
            cupSize = '200px';
    }
    cup.setAttribute('height', cupSize);
    output.appendChild(cup);
};

// Add getDescription method to Americano prototype
Americano.prototype.getDescription = function() {
    return this.description;
};

// Creating and serving a Coffee
//var myCoffee = new Coffee('large', true, 1, 1);
//myCoffee.serveIt();
//console.log(myCoffee.getDescription());

// Creating and serving an Americano
 var myAmericano = new Americano('medium', false, 1, 2, 'medium');
 myAmericano.serveIt();
 console.log(myAmericano.getDescription()); // Description in console log.
