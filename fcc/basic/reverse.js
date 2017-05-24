function reverseString(str) {
    //将传入的字符串拆分为一个数组
    //不传参数会返回一整个字符串为一个元素的数组
    // var arr = str.split('');
    //倒转数组
    // arr.reverse();
    //join不会改变数组，
    //不传参数会用逗号连接
    // str = arr.join('');

    str = str.split("").reverse().join("");
    
    return str;
}

console.log(reverseString("hello"));