/**
 * 检查一个值是否是基本布尔类型，并返回 true 或 false。
 */

function foo(bool) {
    if (bool === false || bool === true) {
        return true;
    } else {
        return false;
    }
}

function foo(bool) {
    return typeof bool === 'boolean';
}

var res = foo(1) // false
console.log(res);