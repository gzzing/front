function ce(str, target) {
    //检查str是否以target结尾
//    var len =  target.length;
//    var end = str.slice(-len);
//    return end === target;
    return target === str.slice(-target.length);
}


//使用正则表达式
function ce2(str, target) {
    var reg = new RegExp(target + '$');
    return reg.test(str);
}

//ES6特性
function ce3(str, target) {
    return str.endsWith(target);
}


console.log(ce3("Bastian", 'n'));