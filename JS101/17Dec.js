// // Let's create Mac D drive thru with the js we learnt

function takeOrder(a) {
  return a * 10;
}
// single parameter
function isPlacedOrder(total) {
  if (total > 0) {
    return true;
  }
  return false;
}
// multiple return and parameters
function canDrive(orderAmmount, ammountpaid) {
  if (orderAmmount == ammountpaid) {
    return true;
  }
  return "Pay your bills you filthy human!";
}
// no parameters and no return types
function greetingMessage() {
  console.log("Welcome to code MacD well which is weird!");
}

//greetingMessage();
// console.log(takeOrder(4));
// console.log(isPlacedOrder(takeOrder(4)));
// console.log(canDrive(40,40));

// scope
{
  function canDriveCar(age) {
    if (age >= 18) {
      var str = "wow you can drive!";
      console.log(age + "is good!" + str);
    } else {
      str = "yay";
      // var str -> block scope
      // a, b , str -> global variable for
      // no declaration and you used straight definition thus it had to create a global scope
      console.log(age + "is good" + str);
    }
    console.log("well i didn't expect that" + str); // undefined or what?
    // yay
    // you want to use your variable declare, define use and well don't be stupid
  }

  //   canDriveCar(18);
  //   canDriveCar(12);
}

// value and type of

{
  var a = "str";
  var b = 1;
  var c = true;
  var d = null;
  var e = undefined;

  // console.log(typeof(a));
  // console.log(typeof(b));
  // console.log(typeof(c));
  // console.log(typeof(d));
  // console.log(typeof(e));

  // console.log(d==e); vvimp
  // console.log(d===e);
  // console.log(d== null);
  // console.log(e== undefined);

  var obj1 = {
    attr1: 1,
    attr2: "two",
    attr3: false,
  };

  obj1["anotherAttribute"] = "yay"; // '' and "" is same in js
  // console.log(obj1)
  var array = [1, "two", true, obj1];

  // console.log(typeof(array)); // obj

  // console.log(array);

  //array[3]["attr1"] // logcially looks as 2D array

  // use [] for arrays and . for objects
}

// standard funtions of strings arrays and numbers!

{
  var starwars = [
    "Episode 4: A New Hope",
    "Episode 5: The Empire Strikes Back",
    "Episode 6: Return of the Jedi",
    "Episode 1: The Phantom Menace",
    "Episode 2: Attack of the Clones",
    "Episode 3: Revenge of the Sith",
    "Episode 7: The Force Awakens",
  ];

  // console.log(starwars.indexOf("Episode 4: A New Hope"));
  // console.log(starwars.lastIndexOf("Episode 4: A New Hope"));
  // console.log(starwars.length);

  //slice and splice
  // section of array without removing the content
  // splice deletes the content
  // console.log(starwars.slice(0,2)); // starting index ending index [include the first one, not the last)
  // console.log(starwars[starwars.indexOf('Episode 4: A New Hope')]);
  var newStarWars = starwars.splice(0, 1); // starting index and count -> number of element you want to delete
  // third argument which is replacements
  // splice gives you a section of removed array
  // console.log(starwars.indexOf('Episode 4: A New Hope'));
  // console.log(newStarWars)

  // console.log(starwars.splice(2,2, "yay","nays"));
  // console.log(starwars);
}
// function scopes
{
  function sum(x, y) {
    return x + y;
  }

  function nestedFunc1(a, b) {
    console.log(a);
    console.log(z); // expected here?
    {
      var z = 5;
      console.log(a + b);
    }
  }

  // sum(2,3);
  // nestedFunc1(2,3);

  function func1() {
    console.log("I am func 1");
    return function fun2() {
      return function fun3() {
        console.log("here i am");
      };
    };
  }
  // console.log(typeof(func1));
  // func1() // call for execution
  //  // returns after
  // var x = func1();
  // x -> return from function func1
  // and since x itself is  a function
  // x -> func => func();
  // console.log(typeof func1());
  // var fun = func1;
  var x = func1();
  // calculate tax
  function calculateTax(a, b) {
    return function calculateNum() {
      return a * b;
    };
  }
  // 5 parameters
  // soda machine
  // -> load soda and dispense soda

  // ATM
  // var x = calculateTax(18,12);
  // console.log(x());
  // console.log(x());
  // console.log(x());
  // var y = calculateTax(19,12);
  // console.log(y());
  // console.log(y());
  // console.log(y());
  // console.log(calculateTax(12,12)());

  // closure
  function calculateTax(a) {
    // a is the property of calculate tax not exactly calculate num
    // but a will be accessible to calculate num even after calculate tax is done
    return function calculateNum(b) {
      return a * b;
    };
  } // java as soon as you return a function it's scope is over isn't it?
  // how does internal function get a
  // a is present with parent
  // question scope of parent is over?
  // closure
  // even after the parent scope is over the child function will be able to access them
  var a = calculateTax(12);
  // console.log(a(5)); // 60?
}
