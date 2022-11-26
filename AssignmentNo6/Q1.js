// Perform the following operations to provide the implementation for a Rectangle class. The operations are:
// 1. Add an area() method to the Rectangle class.
// 2. Create a Square class that satisfies the following conditions:
// ○ It is a subclass of Rectangle.
// ○ It contains a constructor and no other methods.
// ○ It can use the Rectangle class' area method to print the area
// of a Square object.

class Rectangle {
	constructor(length, breadth) {
		this.length = length;
		this.breadth = breadth;
	}

	area() {
		// return this.length * this.breadth;
		console.log(`Area of Rectangle is: ${this.length * this.breadth}`);
	}
}

class Square extends Rectangle {
	constructor(length, breadth) {
		super(length, breadth);
        if(length == breadth) //it is square
		    console.log(`Area of Square is: ${this.length * this.length}`);
	}
}

let square1 = new Square(2, 2);
square1.area();
let square2 = new Square(3, 2);
square2.area();
// console.log(square.area());
