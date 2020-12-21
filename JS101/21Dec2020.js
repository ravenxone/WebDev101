// nested func
// steps are like this

// addTwoNumbers -> a = 5;
// execute the declaration and return that declaration
// well you returned it
function addTwoNumbers(a) {
  // do something here
  return function addSecondNumber(b) {
    return a + b;
  };
  // returned another func
}

var add5ToAnyNumber = addTwoNumbers(5); // function addSecondNumber(b){
// return 5+b;
// }
//console.log(add5ToAnyNumber);
// function addTwoNumber(b){
//return 5+b
//}
// add5ToAnyNumber holds a function!
// called it
//console.log(add5ToAnyNumber(10)); // addTwoNumbers(5)(10); any nesting! 5+b -> 5+10

// declaration and definition
function add(a, b) {
  return a + b;
}
// func declaration definition and call

// give an error?
//add();
// this will give error

// now it's a normal call

// var add5ToAnyNumber = addTwoNumbers(5); assigning func to a variable

function funca() {
  // non strict block;
  a = 1;
  //console.log(a);
}

function funcb() {
  // strict block
  "use strict";
  var z;
  z = 1;
  //console.log(z);
}
funca();
funcb();

// IIFE()
{
  function calculateTotal(a) {
    'use strict';
    var sum = 0;
    a.forEach((element) => {
      sum += element;
      (function addLogo() {
        console.log("added logo!");
      })();
    });
    // item and adding the store logo on it!
  }
  var vegetables =[10,20,30,40];
  //calculateTotal(vegetables);
}
// closure a blessing in disguise

{
    function outerCode(){
        var a=10, b=20,c=30;
        var str ="hello"
        function innerCode(){
            var d=40;

            console.log(a+" "+b+" "+c);
            console.log(str);
        }
        return innerCode;
    }
    var outerCodeEx = outerCode(); // returns you inner code
    console.dir(outerCodeEx) // structure called as closure
    

}
