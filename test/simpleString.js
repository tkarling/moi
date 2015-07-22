function isLetter1(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

function isLetter2(str) {
    var code = str.charCodeAt(0);
    return (code >=65 && code <=90) || (code >=97 && code <=122);
}

var isLetter = isLetter2;

function simpleSymbols1(str) {
    var result = str.length > 2;
    for(var i = 1; i < str.length; i++) {
        if(isLetter(str[i])) {
            result = (str[i-1] === '+') && (str[i+1] === '+');
            if(!result) {
                return result;
            }
        }
    }
    return result;
}

function simpleSymbols2(str) {
    for(var i = 1; i < str.length; i++) {
        if(isLetter(str[i])) {
            var result = (str[i-1] === '+') && (str[i+1] === '+');
            if(!result) {
                return result;
            }
        }
    }
    return str.length > 2;
}

var simpleSymbols = simpleSymbols2;

// falses
console.log(simpleSymbols(''));
console.log(simpleSymbols('+'));
console.log(simpleSymbols('+a'));
console.log(simpleSymbols('++d++==+a=+'));
console.log(simpleSymbols('++d++==a+=+'));
console.log(simpleSymbols('++d++==a=+'));
console.log(simpleSymbols('++d++==+a'));

// trues
console.log(simpleSymbols('+d++==+a+=+'));
console.log(simpleSymbols('++d++==+a+=++'));
console.log(simpleSymbols('++d++==+a+'));
console.log(simpleSymbols('+d++==+a+'));
console.log(simpleSymbols('+a+'));