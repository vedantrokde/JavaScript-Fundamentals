// this will write text into html dom
document.write("<h4>Hello World!</h4>");
document.write("<h4>External Script!</h4>");

// VARIABLES
// ==============

// loosely typed language
var num = 1;
var text = "string";
var flag = false;

// this will print in console of bowser
console.log("OUT1:", num, text, flag);

/*
    Naming convention for variable names:
    - should not be a keyword
    - first letter must be alpha or underscore(_) or pound($)
    - variables are case sensistive
*/

var a;
a = 1;
a = "dynamic";
const b = 2;
let c;
c = "def";

// other ways to display data by js
// alert(a);
// var response = confirm(b);
// console.log("Response: ", response);

// OPERATORS
// ==============

/*
operations are performed based on operator's precedence but for operators with same precidence operations are performed right to left
eg "a"+2+10 = a210, 2+10+"a" = 12a, "a"+(2+10) = a12
*/

// Arithmetic Operators:- + - * / % ++ --

// Comparison Operators:- == === != !== > < >= <=

// Logical or Relational Operators:- && || !

// Assignment Operators:-  = += -= *= /= %= <<= >>= >>>= &= ^= |= **=

// Conditional or ternary Operator:- <varible> = <condition> ? <statement1> : <statement2>

// String Operators:- +
// Type Operators:- typeof instanceof
// Bitwise Operators:- & | ~ ^ << >> >> !

// CONTROL STATEMENTS
// =====================

/*
    break - breaks out of the loop or function
    continue - skips current iteration and jumps to next
*/

// *conditional control statements
a = 2;
if (a > 0) {
	console.log("a is positive");
} else if (a < 0) {
	console.log("a is negative");
} else {
	console.log("a is zero");
}

switch (true) {
	case a == 0:
		console.log("a is zero");
		break;
	case a > 0:
		console.log("a is positive");
		break;
	case a <  0:
		console.log("a is negative");
		break;

	default:
		break;
}

// * looping control statements

for(i=1; i<4; i++) {
    console.log(i);
}

i=1; // is a global var
while(i<4){
    console.log(i);
    i+=1;
}

i=1
do {
    console.log(i);
    i+=1;
} while (i<4);


// FUNCTIONS
// =====================

/*
    break - breaks out of the loop or function
    continue - skips current iteration and jumps to next
*/

function add(a, b) {
    console.log(a + b);
}

add(1,3);
add("a", 4);
add(2*4, "qqe");


// Arrays
// =====================

var cars = ['Mercedes', 'BMW', 'Audi', 6, true];
cars.forEach(car => {
    console.log(car);
});


// Objects
// =====================

// little object way
var Car = {
    car_brand: 'Tesla',
    car_model: 'S2',
    price: 4300000,
    testAutoPilot: function () {
        console.log("this car has autopilot")    
    }
}

Car.fueltype = "Electric"
Car.checkFuel = function() {
    console.log("this is an " + this.fueltype + " car");
}
delete Car.price;
console.log(Car)
Car.testAutoPilot()
Car.checkFuel()

// constructor function way
function Cars(car_brand, car_model, price) {
    this.car_brand = car_brand;
    this.car_model = car_model;
    this.price = price;
    
    this.testAutoPilot = function () {
        console.log("this car has autopilot")    
    }
}


var car1 = new Cars("Audi", 'S8', 345000);
console.log(car1);
car1.testAutoPilot()