/*Write a JavaScript program to get the volume of a Cylinder, Sphere and Cone with four decimal places using objects and classes. Create classes for volumes for each geometric shape which returns the output using the getVolume() method.*/
// eg- to get volume of cylinder-
// let obj= new Cylinder(radius,height);
// obj.getVolume();
// Formulas for volumes of the shapes-
// 1) Cylinder- Volume = πr^2h where r is the radius and h is the height of the cylinder.
// 2)Sphere- Volume= 4/3πr^3 where r is the radius
// 3) Cone- Volume= πr^2h/3 where r is the radius and h is the height of the cone.

const pi = 3.14;
class Cylinder {
	constructor(r, h) {
		this.r = r;
		this.h = h;
	}
	getVolume() {
		let result = pi * this.r * this.r * this.h;
		return result;
	}
}
class Sphere {
	constructor(r) {
		this.r = r;
	}
	getVolume() {
		let result = (4 / 3) * pi * this.r ** 3;
		return result;
	}
}
class Cone {
	constructor(r, h) {
		this.r = r;
		this.h = h;
	}
	getVolume() {
		let result = (pi * this.r ** 2 * this.h) / 3;
		return result;
	}
}
let cy = new Cylinder(2,4);
console.log(`Volume of Cylinder is ${cy.getVolume()}`)

let sp = new Sphere(2);
console.log(`Volume of Sphere is ${sp.getVolume()}`)

let co = new Cone(2,4);
console.log(`Volume of Cone is ${co.getVolume()}`)