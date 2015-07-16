(function() { console.log("now")})();


function log(thing) {
    console.log(thing);
}

function plusOne(num) {
    var result = num + 1;

    console.log(result);
    return result;
}

log("hello");

plusOne(42);

log(plusOne);


// NEXT Wallmartt

var lucky = [7, 42, 11, 2, 37];

var total = 0;
function sum(num, index, array) {
    total += num;
    console.log(num, total);
}

function plusOne(num, index, array) {
    array[index] = num + 1;
}

lucky.forEach(sum);
console.log("total: ", total);

function myForEach(arr, fn) {
    var i;
    var item;
    for(i = 0; i < arr.length; i++) {
        item = arr[i];
        fn(item, i, arr);
    }
}

myForEach(lucky, sum);
console.log('total: ', total);

myForEach(lucky, plusOne);
console.log('lucky: ', lucky);


// NEXT 



