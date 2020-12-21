// we will talk closures on monday and hoisting as well
// nested funtions

{
  //IIFE immediately invoked function expression
  function namemy(a, b) {
    console.log(a + b);
  }
  // namemy(3,4);
  // declare and call without instances
  // () -> life is inside this
  // remove this it becomes a general function
  // where you have a quick logic and only single use logic
  // () => {} -> function () => {}

  // ((a,b)=>{console.log(a+b);})(2,5);
  // (function (a,b){console.log(a+b)})(2,5);

  // using a function from a library (var a, var b, function)
  // you only want that function to be called once
  // IIFE and get done with it ->  anonymous fn
  // if age < 18

  const taxRate = [10, 12, 12, 15];

  for (var i = 0; i < taxRate.length; i++) {
      // i -> 4 already
      // taxRate[i] -> taxRate[0] 
    setTimeout(function () {console.log(taxRate[i-4]+" "+i)}, 1000);
  }

}
