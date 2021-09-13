//Section 9 

//Function expression

function add(x,y){
    return x + y;
};

const sum = function(x,y){
    return x + y;
};

const product = function multiply(x,y){
    return x * y;
};

const subtract = function(x,y){
    return x -y;
}

const multiply = function(x,y){
    return x * y;
}
const divide = function (x,y){
    return x / y;
};

const operations = [add, subtract, multiply, divide];

for(let func of operations){
   let results = func(30,5);
   console.log(results);
}