function pd(str) {
    //思路：去掉字符串中的非字母，统一大小写
    //正则匹配替换掉多余字符
    str = str.replace(/\W/g, "").toLowerCase();
    console.log(str);
    var len = str.length;

    for (var i = 0; i < len/2; i++) {
        if (str[i] !== str[len - i -1 ]) return false;
    }
    return true;
}

function pd2(str) {
    //思路反转字符串相等
    // restr = str.replace(/\W/g,"").toLowerCase().split("").reverse().join("");
    // str = str.replace(/\W/g,"").toLowerCase();
    str = str.replace(/\W/g,"").toLowerCase();
    restr = str.split("").reverse().join("");
    // if (str == restr) return true;
    // return false;
    return restr === str;
}
console.log(pd2("eye"));
console.log(pd2('A man, a plan, a canal. Panama')); //true