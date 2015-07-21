function factorial1 (num) {
    if(num === 0) {
        return 1;
    }
    var result = 1;
    for(var i = num; i > 0; i--) {
        result = result * i;
    }
    return result;
}       

function factorial2 (num) {
    if((num === 0) || (num === 1) ){
        return 1;
    }
    return num * factorial(num - 1);
} 

function factorial3 (num) {
    if(num <= 1) {
        return 1;
    }
    return num * arguments.callee(num - 1);
} 

// Testing
var factorial = factorial1;
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));