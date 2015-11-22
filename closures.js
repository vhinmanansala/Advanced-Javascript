(function () {
    'use strict';

    //closures nothing more than a scope and function that remembers an information

    function Order() {
        var total = 0;

        return function addProduct(price){
            var salesTax = price * 0.17,
                fee = price * 0.05;

            total += price + salesTax + fee;

            return total;
        };
    }

    var myOrder = new Order();
    console.log(myOrder(100));
    console.log(myOrder(150));
}());
