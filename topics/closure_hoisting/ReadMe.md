What is Hoisting?

    Hoisting is a default behaviour of javascript where all the variable and function declarations are moved on the top.

    example:
        log("hello")

        function log(text){
            console.log(text)
        }
    here function log will move to the top.
    This is done internally by storing everything into the memory and then executed.

    Tricky parts of Hoisting:
        in early versions of js var was the only way to create a variable in javascript. let/const were added later on.
        Hence, js DOES NOT hoist const/let variables

        Arrow functions:
            log("hello");
            const log = (text) => {
                console.log(text)
            }
        These arrow functions are not hoisted. Hence the above code leads to an error.

        Initializations are not hoisted in javascript.

What is closure?

    Closure is an ability of a function to remember the variables and functions that are declared in it's outer scope.

    Closures can do more than just read their outer functions' varaibles they can overwrite them too.


        Example:

            const fname = "ravenX";

            var test = "one";

            function printName(){
                console.log(fname+test);
            }

            printName();

    Here the output will be

    ravenXone

    This is because the function pulls variables that were declared before the function itself.
