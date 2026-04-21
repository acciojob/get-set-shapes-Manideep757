//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	
	getArea(){
		console.log(this.width*this.height);
	}

class Square extends Rectangle {
	constructor(side){
		this.side = side
	}
	getPerimeter(){
		console.log(4 * this.side);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
