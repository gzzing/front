// 写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。
// 如果返回的数组中包含 source 对象的属性-值对，那么此对象的每一个属性-值对都必须存在于 collection 的对象中。

// 例如，如果第一个参数是 [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]，
// 第二个参数是 { last: "Capulet" }，那么你必须从数组（第一个参数）返回其中的第三个对象，因为它包含了作为第二个参数传递的属性-值对。

function where(collection, source) {
    var arr = [];

    var keys = Object.keys(source);

    arr = collection.filter(function(obj) {
        //对包含source的obj返回true
        for (var i = 0; i < keys.length; i++) {
            if (obj.hasOwnProperty(keys[i]) && obj[keys[i]] === source[keys[i]]) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    })

    return arr;
}

function where2(collection, source) {
    var arr = [];
    var keys = Object.keys(source);

    arr = collection.filter(function(obj) {
        return keys.every(function(key) {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        })
    })

}

// var res = where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
// { last: "Capulet" });

var res = where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })

console.log(res);

// where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) 应该返回 [{ first: "Tybalt", last: "Capulet" }]。
// where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) 应该返回 [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]。
// where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) 应该返回 [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]。
// where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) 应该返回 [{ "a": 1, "b": 2, "c": 2 }]。

