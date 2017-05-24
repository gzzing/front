/**
 * 将字符串转换为 spinal case。
 * Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，
 * 也就是以连字符连接所有小写单词。
 */

function spinalCase(str) {
    var reg = /[\s_]/g;
    if (reg.test(str)) {
        return str.toLowerCase().replace(reg, '-');
    }
    var creg = /[A-Z]/g;
    var arr = str.split("");
    arr.forEach(function (cur, index, arr) {
        if (creg.test(cur)) arr.splice(index, 0, ' ');
    });
    str = arr.join("");
    return str.toLowerCase().replace(reg, '-');
}

function spinalCase2(str) {
    var reg = /\s+|_+/g;
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    return str.replace(reg, '-').toLowerCase();
}

var res = spinalCase2('thisIsSpinalTap');
console.log(res);