//Q1
const Q1 = function() {
    let a = 'Ans to Q1'
    console.log(a)
}()

//Q2
const add = function(a, b) {
    return a + b
}
console.log("Sum of 3,4", "is", 3 + 4);

//Q3
const div = (a, b) => a / b;
const result = div(50, 5);
console.log(result);

//Q4
var x = 21;
var girl = function() {
    console.log(x);
    var x = 20;
};
girl();

//Q5
var x = 21;
girl();
console.log(x)

function girl() {
    console.log(x);
    var x = 20;
};



//Q6
var x = 21;
a();
b();

function a() {

    x = 20;
    console.log(x);
};

function b() {

    x = 40;
    console.log(x);
};
console.log(x);


//Q7.
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
let num = 6;
console.log(factorial(num))


function factorialize(n) {
    if (n === 0 || n === 1)
        return 1;
    for (var i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}
// console.log(factorialize(5));
function facto() {
    var n = document.getElementById("numbers").value;
    var f = factorialize(n);
    document.getElementById("ans").innerHTML = "The Factorial of the" + n + "is :" + f;

}





//Day 2						

//Q1
function FindSum(a, b) {
    return a + b;
}

function DisplayData(data, batch) {
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 9));



//Q2
// Abc();
// const Abc = function(){
//     let value = 20;
//     console.log(value);
// }




//Q3
var a = 10;
(function() {
    console.log(a);
    var a = 20;
})();


//Q4
const greet = function(name) {
    return function(m) {

        console.log(`Hi!! ${name}, ${m}`);
    }
}

const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")