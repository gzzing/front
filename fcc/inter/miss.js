/**
 * 从传递进来的字母序列中找到缺失的字母并返回它。
 * 如果所有字母都在序列中，返回 undefined。
 */

function miss(str) {
    for (var i = 0; i < str.length; i++) {
        if (!isNaN(str.charCodeAt(i+1))) {
            if (str.charCodeAt(i+1) - str.charCodeAt(i) !== 1) {
                return String.fromCharCode(str.charCodeAt(i) + 1);
            }
        } else {
            return undefined;
        }
    }
}

var res = miss("abce");
console.log(res);