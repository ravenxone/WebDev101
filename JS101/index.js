var a = 42;
var b = "I am a string";
var c = true;



console.log(a + b); // 42I am a string
console.log(a + c); //  43

console.log(b + c);





//Math operator
//Prints are defaut as String.


var a = 2;
var b = 3;
var c = 4;
var d = 5;



console.log(a + b);
console.log(a + c);
console.log(a + b);
console.log(a * b);
console.log(a / 2);
console.log(a % b);


console.log(a++);
console.log(a--);

a += 4;
console.log(a);


var anotherA = "42";
var justtrue = "true";
var deeptrue = true;

a = 42;

console.log(Number(anotherA) + Number(deeptrue));
//shallow equality
console.log(a == anotherA);
console.log(justtrue == deeptrue);


//deep equality
console.log(a === anotherA);
console.log(justtrue === deeptrue);

//Constants in JS

var THIS_WILL_BE_A_CONSTANT_PROBABLY_BECAUSE_IT_SEEMS_ANGRY = 100;

//blocks and conditionals

if (THIS_WILL_BE_A_CONSTANT_PROBABLY_BECAUSE_IT_SEEMS_ANGRY == 100) {
    console.log("Kuch to kahenge log");
} else {
    console.log("chalo console chale!");
}


//functions

function takeOrder(a) {
    return a * 10;
}

function isPlacedOrder(total) {
    if (total > 0) {
        return true;
    }
    return false;
}

function canDrive(orderAmmount, ammountpaid) {
    if (orderAmmount == ammountpaid) {
        return true;
    }
    return "pay the bills maaan!";

}

//no parameters or return types required in js
function greetingMessage() {
    console.log("welcome welcome!");
}

greetingMessage(); //?
console.log(takeOrder(4));
console.log(isPlacedOrder(takeOrder(4)));
console.log(canDrive(takeOrder(4), takeOrder(4)));


var test = 10;
var zoom = test + 10;

console.log(zoom);

//interesting thing to note
console.log(null == undefined);

//objects in java
random = {
    somekey: 10,
    otherkey: 20,
    someotherkey: 100,
};


student = {
    name: "divyansh",
    age: 22,
    gender: "male",
};
//object.attribute.name

console.log(student.name);

// Arrays in JS
//no need to define type of "array"
random = ["divyansh", 22, "male"];
console.log(random[0]);
console.log(random[1]);
console.log(random[2]);

// string weapper goes like String 
// number wrapper goes like Number
// these wrappers enable new functions.

//declaring wrapper objects.

// naam = new String("divyansh"); // using string as a constructor works but should not be done 
console.log(typeof (naam));
//see the change?
naam = String("divyansh");
console.log(typeof (naam));
//the functions can be used with either declaration of string or object
console.log(naam.length);
console.log(naam.toUpperCase());


//Truthy & Falsy

// Whenever you have a non boolean expression and you
// want to convert it into a boolean expression
// the concept of truthy and falsy comes into the picture 

// an empty string a = "" will result in a false expression
// when checked for value as a bool.
// example if(a){
//                   }
// the if statement will result a false and not initiate the
// block.

//Hence anything that is converted to bool and results in 
// ture is called truthy 
// anything that is converted to bool and results in
// false is called falsy.


// THINGS WHICH USUALLY RESULT IN FALSY

// EMPTY STRINGS a = "" ;
// NaN or Not a Number example -0 is not a number 
// Null/Undefined 
// False 

// APART FROM THESE VALUES EVERYTHING IS USUALLY TRUTHY


//scope in java


function anotherFunction(age) {
    if (age >= 18) {
        var str = "something something";
        console.log(age + " you're fine" + " " + str);
    } else {
        console.log(age + "!??" + " you're fined!" + " " + str);
    }

}
anotherFunction(20);
anotherFunction(12); // HERE the output is like 12!?? you're fined! undefined
// this is because str is not defined in else block scope and is limited to if


function yetanotherFunction(age) {

    var str = "something something";
    if (age >= 18) {
        console.log(age + " you're fine" + " " + str);
    } else {
        console.log(age + "!??" + " you're fined!" + " " + str);
    }

}

yetanotherFunction(12);
//here the scope was the whole function.

//The above is only true if the variable is declared with var. Which leads the variable to take a block scope.
function aahShitHereWeGoAgain(age) {

    if (age >= 18) {
        var str = "something something";
        console.log(age + " you're fine" + " " + str);
    } else {
        str = "wut wut!?";
        // Here str is reinitialised as a string.
        console.log(age + "!??" + " you're fined!" + " " + str);
    }
    //hence, even if str was not defined in the scope of the function the console.log took the str to a global scope and printed it.
    console.log(str);

}

aahShitHereWeGoAgain(12);

//Aah but even though we assumed str was global it was only limited to the function and not the whole code.
// This is how js treats blocks and scope.

// console.log(str);

//values and type of 

{
    var a = "str";
    var b = 1;
    var c = true;
    var d = null;
    var e = undefined;

    console.log(typeof (a));
    console.log(typeof (b));
    console.log(typeof (c));
    console.log(typeof (d));
    console.log(typeof (e));


    var obj1 = {
        attr1: 1,
        attr2: "two"
    };

    obj1["someattr"] = "what's happening?";
    console.log(obj1.someattr);
    obj1.newattr = "this is new";
    console.log(obj1.newattr);
    ///MAJOR NOTE : USE [] FOR ARRAYS AND . FOR OBJECTS.
}

//Standard functions of string arrays and numbers!


{
    var starwars = [
        'Episode 4: A new Hope',
        'Episode 5: The Empire Strikes back',
        'Episode 6: Return of the Jedi',
        'Episode 1: The Phantom Menace',
        'Episode 2: Attack of the Clones',
        'Episode 3: Revenge of the Sith',
        'Episode 7: The force Awakens'
    ];

    console.log(starwars.indexOf("Episode 4: A new Hope"));
    console.log(starwars.lastIndexOf("Episode 4: A new Hope"));
    console.log(starwars.length);


    console.log(starwars.slice(0, 2));
    console.log(starwars.length);////////////splice changes length by removing the mentioned elements.

    var newStarWars = starwars.splice(0, 2);
    console.log(newStarWars);
    console.log(starwars);
    console.log(starwars.length);//////////even if they are assigned to another variable


    starwars.splice(0,2);
    console.log(starwars.length);
    console.log(starwars);


}

// Function scopes


    // function sum(x,y){
    //     return x+y;
    // }

    // function nestedFunc1(a,b){
    //     console.log(a);
    //     console.log(b);
    //     var z = a+b;
    //     console.log("function 1");
    //     return function nestedFunc2(z){
    //         console.log(z);
    //     };
    // }

// nestedFunc1(2,3);
// nestedFunc2(2);

function func1(){
    console.log("I am a func 1");
    return function func2() {
        return function func3() {
            console.log("here I am");
        }
    }
}

func1()()();

//setting reference for nested functions

function newfunc(a,b){
    return function newnestfunc(b){
        return a*b;
    }
}

//set reference using outer function

var x = newfunc(12);
//now 10 is set as a reference for a 

console.log(x(5));
//make sure to include all the required variables in the first function's input.
//**** in js as soon as you return a function it's scope is over.
// Internal functions gets a because a is returned to parent and scope of parent is over
// this means any variables inside the parent are void and the values are void as well.
// any external function will not be able to access the parent
// However, the child function still has access to the retured function.
//This is called Closure. 
//BUT the variables declared inside the function using var will not be accessible to the children
//This is because, as soon as a function is declared even inside a function it becomes a local variable to the outer scope.
//SIDENOTE: Arrays are global variables hence, accessible to all. Hence they don't give closure.

//CLOSURES

//Arrays and Closure
function randomArrayAccess(){
    var someRandomArray = [1,2,3];
    
    return function iterateThroughArray(x){
        for(var i=0; i<x; i++){
            console.log(someRandomArray[i]);
        }
    }
}
randomArrayAccess()(2);

//Strings and Closure
function anotherrandomArrayAccess(){
    var someRandomString = "0 2 4 6 8 10";
    
    return function anotheriterateThroughArray(x){
        for(var i=0; i<x; i++){
            console.log(someRandomString.charAt[i]);
        }
    }
}


anotherrandomArrayAccess()(4);


//Numbers and Closure

function yetAnotherRandomArrayAccess(){
    var someRandomNumber = 4;
    
    return function yetAnotherIterateThroughArray(someRandomNumber){
            return console.log(someRandomNumber);
        }
    }



yetAnotherRandomArrayAccess()(); // will return undefined.
yetAnotherRandomArrayAccess()(4); // will return 4 when accessed from outside the parent scope.

//NEW TOPIC : IIFE aka Immediately Invoked Function Expressions.

//Essentially declaring and feeding i/p directly to get the o/p.

//The function format is a bit different here.

(function calculateSum(a,b) {console.log(a+b)})(2,3);

function calculateSum(a,b) {console.log(a+b)}
calculateSum(3,4);

// the function will be inside () and before closing the statement we'll have the inputs in ()
//declare and call without instances.
//This function will be available in the single block only i,e ()

// () => { } Anonymous functions don't have names but functions like the above one do.

//The one below is anonymous function.
(function (a,b) {console.log(a+b)})(2,3);
 //The one below is also an anonymous function but using ES6 wrapper.
((a,b) => {console.log(a+b);})(2,3);



