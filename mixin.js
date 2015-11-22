(function () {
  'use strict';

  function mixin() {
    var prop,
        newPrototype = {},
        args = Array.prototype.slice.call(arguments),
        baseObject = args[0],
        prototypes = args.slice(1);

    prototypes.forEach(function (item) {
      for(prop in item) {
        if(item.hasOwnProperty(prop)) {
          newPrototype[prop] = item[prop];
        }
      }
    });

    baseObject.prototype = newPrototype;
    baseObject.prototype.constructor = baseObject;
  }

  function Shape2d() {}
  Shape2d.prototype.getArea = function () {
    return this.sides[0] * this.sides[1];
  }

  function Position() {}
  Position.prototype.getCoords = function () {
    return this.coords.join(', ');
  }

  function Rectangle(width, height, top, left) {
    this.sides = [width, height];
    this.coords = [top, left];
  }

  mixin(Rectangle, Shape2d.prototype, Position.prototype);

  var rectangle = new Rectangle(5, 6, 100, 200);
  console.log(rectangle.constructor.name);
  console.log(rectangle.sides.length);
  console.log(rectangle.getArea());
  console.log(rectangle.getCoords());
}());
