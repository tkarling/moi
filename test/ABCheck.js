

// one way a -> b solution, does not accept as&bs between 4
var ABCheck1 = function(str) {
    var aindex = -1;
    var bindex = -1;
    for(var i = 0; i < str.length; i++) {
        // console.log(i, str[i], aindex, bindex);
        if(str[i] === "a") {
            aindex = i;
            bindex = -1;
        }
        else if(aindex !== -1 && str[i] === "b") {
            bindex = i;
            // console.log('minus', bindex - aindex);
            if(bindex - aindex === 4) {
                return true;
            } else {
                aindex = -1;
                bindex = -1;
            }
        }
    }
    return false;
}

// different problem
var ABCheck2 = function(str) {
    for(var i = 0; i < str.length; i++) {
        var aValue = str.lastIndexOf("a");
        var bValue = str.lastIndexOf("b");
        if((bValue - aValue === 4) && (aValue - bValue === 4)) {
            return true;
        } else {
            return false
        }
    }
}

// bothways solution, but can have as & bs between 4
var ABCheck3 = function(str) {
    for(var i = 0; i < str.length; i++) {
        if(str[i] === "a" || str[i] === "A") {
            if(str[i+4] === "b" || str[i+4] === "B") {
                return true;
            }
        } 
        if(str[i] === "b" || str[i] === "B") {
            if(str[i+4] === "a" || str[i+4] === "A") {
                return true;
            }
        }
    }
    return false;
}



var ABCheck = ABCheck3;

console.log(ABCheck("lane borrowed")); // true
console.log(ABCheck("laneborrowed")); // false
console.log(ABCheck("alane borrowed")); // true

console.log(ABCheck("abbbb")); // false
console.log(ABCheck("aaaab")); // false
console.log(ABCheck("bbba")); // false
console.log(ABCheck("aaaabacccbbba")); // true
console.log(ABCheck("a   b")); // true
console.log(ABCheck("bccca")); // true

