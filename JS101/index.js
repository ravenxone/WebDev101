



var a = 42;
var b = "I am a string";
var c = true;



console.log(a+b); // 42I am a string
console.log(a+c);//  43

console.log(b+c);





//Math operator
//Prints are defaut as String.


var a = 2;
var b = 3;
var c = 4;
var d = 5;



console.log(a+b);
console.log(a+c);
console.log(a+b);//
console.log(a*b);
console.log(a/2);
console.log(a%b);// 


console.log(a++);
console.log(a--);

a += 4;
console.log(a);


var anotherA = "42";
var justtrue = "true";
var deeptrue = true;

a = 42;

console.log(Number(anotherA)+Number(deeptrue));
//shallow equality
console.log(a == anotherA);
console.log(justtrue == deeptrue);


//deep equality
console.log(a === anotherA);
console.log(justtrue === deeptrue);

//Constants in JS

var THIS_WILL_BE_A_CONSTANT_PROBABLY_BECAUSE_IT_SEEMS_ANGRY = 100;

//blocks

if(THIS_WILL_BE_A_CONSTANT_PROBABLY_BECAUSE_IT_SEEMS_ANGRY == 100){
    console.log("Kuch to kahenge log");
}
else{
    console.log("chalo console chale!");
}