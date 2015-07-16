var list = [0, 1, 2, 3, 4, 5];

function oThis(arr) {
    arr.forEach(function(elem, index, array) {
        if(elem % 2 !== 0) {
            array[index] = 'O';
        }
    });
    return arr;
    // var result = arr.map(function(elem) {
    //     return elem % 2!== 0 ? 'O': elem;
    // });
    // return result;

    // for(var i = 0; i < arr.length; i++) {
    //     if(arr[i] % 2 !== 0) {
    //         arr[i] = 'O';
    //     }
    // }
    // return arr;
}

console.log(oThis(list));
