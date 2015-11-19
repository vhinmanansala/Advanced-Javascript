(function () {
	'use strict';

	function Foo() {
		this.foo = "foo";
		this.bar = "bar";

		this.myFunction = function(){
			return "foo is " + this.foo + " while bar is " + this.bar;
		}
	}

	var foo = new Foo();
	console.log(foo);
	console.log(foo.myFunction());

	//create object without property
	var foo = Object.create(Foo);
	console.log(foo);


	var foo = Object.create(Foo.prototype, {
		foo: {value: "foo"}
	});
	console.log(foo);

	//not a function error in Object.Create
	//cannot call myFunction() using Object.Create
	//console.log(foo.myFunction()); 

	//user Object.Create to create empty object that inherits from another object
	var a = {
	   someFunction: function() {
	   		return "someFunction";
	   }
	};

	var b = Object.create(a);
	b.someOtherFunction = function(){
		return "someOtherFunction";
	}
	console.log(b.someFunction());
	console.log(b.someOtherFunction());
}());
