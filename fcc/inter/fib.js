/**
 * 给一个正整数num，返回小于或等于num的斐波纳契奇数之和。
 * 斐波纳契数列中的前几个数字是 1、1、2、3、5 和 8，随后的每一个数字都是前两个数字之和。
 * 例如，sumFibs(4)应该返回 5，因为斐波纳契数列中所有小于4的奇数是 1、1、3。
 * 提示：此题不能用递归来实现斐波纳契数列。因为当num较大时，内存会溢出，推荐用数组来实现。
 */

function sumOdd(num) {
    var IterMemoFib = function () {
        var cache = [1, 1];
        return function (n) {
            if (n >= cache.length) {
                for (var i = cache.length; i < n; i++) {
                    cache[i] = cache[i - 2] + cache[i - 1];
                }
            }
            return cache[n - 1];
        };
    }();

    var sum = 0;
    for (var i = 1; IterMemoFib(i) <= num; i++) {
        if (IterMemoFib(i) % 2 === 1) sum += IterMemoFib(i);
    }
    return sum;
}

function sumOdd2(num) {
    var result = 0;
    var prevNum = 0;
    var currNum = 1;
    
    while (currNum <= num) {
        if (currNum % 2 !== 0) {
            result += currNum;
        }

        var added = currNum + prevNum;
        prevNum = currNum;
        currNum = added;
    }

    return result;
}

console.log(sumOdd2(75025));

//递归实现
function Fib(n) {
    return n < 2 ? n : (Fib(n - 1) + Fib(n - 2));
}

//数组缓存
var IterMemoFib = function () {
    var cache = [1, 1];
    return function (n) {
        if (n >= cache.length) {
            for (var i = cache.length; i < n; i++) {
                cache[i] = cache[i - 2] + cache[i - 1];
            }
        }
        return cache[n - 1];
    }
}()

// console.log(IterMemoFib(25));
//直接实现1, 1, 2, 3, 5, 8, 13
function fib(n) {
    if (n <= 2) {
        return 1;
    }
    var a = 1, b = 1;
    for (var i = 2; i < n - 1; i++) {
        b = a + b;
        a = b - a;
    }
    return a + b;
}
// console.log(fib(60));

// var n = 100;
// var t1 = new Date().getTime();
// console.log(Fib(n));
// var dt1 = new Date().getTime() - t1;
// console.log(dt1);

// var t2 = new Date().getTime();
// console.log(IterMemoFib(n));
// var dt2 = new Date().getTime() - t2;
// console.log(dt2);