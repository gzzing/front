/*

1   5   10  50  100 500 1000
I   V   X   L   C   D   M

*/

// Array.splice()
// Array.indexOf()
// Array.join()

function roman(num) {
    //123 叠加；4用5-1； 678用5+123； 9用10-1
    var res = '';
    var str = num.toString();
    var len = str.length;
    str = str.split('').reverse().join('');
    //个位数
    switch (parseInt(str[0])) {
        case 1: res = 'I'; break;
        case 2: res = 'II'; break;
        case 3: res = 'III'; break;
        case 4: res = 'IV'; break;
        case 5: res = 'V'; break;
        case 6: res = 'VI'; break;
        case 7: res = 'VII'; break;
        case 8: res = 'VIII'; break;
        case 9: res = 'IX'; break;
    }
    //十位数
    switch (parseInt(str[1])) {
        case 1: res = 'X' + res; break;
        case 2: res = 'XX' + res; break;
        case 3: res = 'XXX' + res; break;
        case 4: res = 'XL' + res; break;
        case 5: res = 'L' + res; break;
        case 6: res = 'LX' + res; break;
        case 7: res = 'LXX' + res; break;
        case 8: res = 'LXXX' + res; break;
        case 9: res = 'XC' + res; break;
    }
    //百位数
    switch (parseInt(str[2])) {
        case 1: res = 'C' + res; break;
        case 2: res = 'CC' + res; break;
        case 3: res = 'CCC' + res; break;
        case 4: res = 'CD' + res; break;
        case 5: res = 'D' + res; break;
        case 6: res = 'DC' + res; break;
        case 7: res = 'DCC' + res; break;
        case 8: res = 'DCCC' + res; break;
        case 9: res = 'CM' + res; break;
    }
    //千位数
    switch (parseInt(str[3])) {
        case 1: res = 'M' + res; break;
        case 2: res = 'MM' + res; break;
        case 3: res = 'MMM' + res; break;
    }

    return res;
}

function roman2(num) {
    // Create arrays with default conversion with matching indices.
    var decimalValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    var romanNumeral = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

    // Create a copy of num to work on and an empty string variable for the final roman number
    var numCopy = num;
    var romanized = '';

    // While the decimal number is greater than 0,
    while (numCopy > 0) {
        // Loop through the indices of the decimalValue array.
        for (var index = 0; index < decimalValue.length; index++) {
            // Get the maximum decimal number less or equal than the decimal number.
            if (+decimalValue[index] <= numCopy && +decimalValue[+index + 1] > numCopy) {
                // Add the Roman numeral & decrease numCopy by the decimal equivalent.
                romanized += romanNumeral[index];
                numCopy -= decimalValue[index];
            }
        }
    }
    return romanized;
}

var result = roman(3999);
console.log(result);