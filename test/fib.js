// Write a function that accepts a number, n, and returns the nth Fibonacci number. Use a recursive solution to this problem; if you finish with time left over, implement an iterative solution.

function fib1(num) {
    if(num === 0 || num ===1) {
        return 1;
    }
    return fib1(num-2) + fib1(num-1);
}

function fib2(num) {
    if(num === 0 || num ===1) {
        return 1;
    }
    var arr = [1, 1];
    for(var i = 2; i <= num; i++) {
        arr.push(arr[i-2] + arr[i-1]);
    }
    return arr[num-1];
}



var nthFibonacci = fib2;
 console.log(nthFibonacci(3)); // => 2
 console.log(nthFibonacci(4)); // => 3
 console.log(nthFibonacci(5)); // => 5
 console.log(nthFibonacci(6)); // => 8
 console.log(nthFibonacci(7)); // => 13
 console.log(nthFibonacci(8)); // => 21
 console.log(nthFibonacci(9)); // => 34

//Fibonacci Sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34