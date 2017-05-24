function translate(str) {

    if ('aeiou'.indexOf(str[0]) !== -1) {
        str = str + 'way';
    } else {
        while ('aeiou'.indexOf(str[0]) === -1) {
            str = str.slice(1) + str[0];
        }
        str = str + "ay"
    }

    return str;
}

function translate2(str) {
    var reg = /[aeiou]/ig;

    if (str[0].match(reg)) {
        str = str + "way";
    } else {
        var vowelIndice = str.indexOf(str.match(reg)[0]);

        str = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
    }
    return str;
}

var res = translate2("glove"); //oveglay
console.log(res);
