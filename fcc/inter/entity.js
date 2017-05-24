/**
 * 将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。
 * https://dev.w3.org/html5/html-author/charref
 * &amp; &lt; &gt; &quot; &apos;
 */

function convert(str) {
    var newStr = str;
    var reg = /[&<>"']/g;
    var mapper = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&apos;",
        '"': "&quot;"
    };

    /**
     * 注意：不要把正则表达式字面量（或者正则表达式构造器）放在 while 条件表达式里。
     * 由于每次迭代时 lastIndex 的属性都被重置，如果匹配，将会造成一个死循环。
     */
    var myArr;
    while ((myArr = reg.exec(str)) !== null) {
        //如果此处replace中使用reg，会更新lastIndex
        newStr = newStr.replace(myArr[0], mapper[myArr[0]]);
    }

    return newStr;
}

function convert2(str) {
    var mapper = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&apos;",
        '"': "&quot;"
    };

    return str.split("").map(function (e) {
        return mapper[e] || e;
    }).join("");

}

// var res = convert("Hamburgers < Pizza < Tacos");
var res = convert2("<> ' \"")
console.log(res);


