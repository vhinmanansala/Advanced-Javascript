(function () {
  'use strict';

  function Shape2d(){
    return {
      type: this.constructor.name,
      sides: []
    };
  }

  function Rectangle(width, height, sample){
    var shape = Shape2d.call(this);

    shape.sides.push(width, height, width, height);

    shape.getArea = function() {
      return shape.sides[0] * shape.sides[1];
    }

    return shape;
  }


  function Square(sidesLength) {
    return Rectangle.call(this, sidesLength, 20);
  }

  var myRect = new Rectangle(5, 4);
  console.log(myRect);
  console.log(myRect.type);
  console.log(myRect.sides.length);
  console.log(myRect.getArea());

  var square = new Square(5);
  console.log(square);
  console.log(square.type);
  console.log(square.sides.length);
  console.log(square.getArea());
}());
