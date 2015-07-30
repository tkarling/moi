function foundInString(char, str) {
    for(var i = 0; i < str.length; i++) {
        if(char === str[i]) {
            return true
        }
    }
    return false;
}

function firstNonRepeatCharacter1(str) {
    if(str.length > 0) {
        for(var i = 0; i < str.length; i++) {
            if (! foundInString(str[i], str.slice(i+1))) {
                return str[i];
            }
        }
    }
    return "No";
}


function firstNonRepeatCharacter2 (str) {
    var strArr = str.split('');
    for(var i = 0; i < strArr.length; i++) {
        if(strArr.lastIndexOf(str[i]) === i) {
            return strArr[i];
        }
    }
}

function firstNonRepeatCharacter3 (str) {
    for(var i = 0; i < str.length; i++) {
        if(str.lastIndexOf(str[i]) === i) {
            return str[i];
        }
    }
}

// DOES NOT WORK NOW
function firstNonRepeatCharacter4 (str) {
    for(var i = 0; i < str.length; i++) {
        var char = str.charAt[i];
        if((str.indexOf(char) === 1) && (str.indexOf(char, i+1) === -1)) {
            return char;
        }
    }
    return "No";
}

var firstNonRepeatCharacter = firstNonRepeatCharacter1;

console.log(firstNonRepeatCharacter(''));
console.log(firstNonRepeatCharacter('A'));
console.log(firstNonRepeatCharacter('ABA'));
console.log(firstNonRepeatCharacter('AABCABD'));