/** 自己的方法 */
// function tc(str) {
//     var arr = str.split(" ");
//     console.log(arr);
//     for (var i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].toLowerCase().split("");
//         arr[i][0] = arr[i][0].toUpperCase();
//         arr[i] = arr[i].join("");
//     }
//     str = arr.join(" ");

//     return str;
// }

function tc(str) {
    // str = str.toLowerCase();
    // var arr = str.split(" ");
    var arr = str.toLowerCase().split(" ");
    var newArr = new Array();
    arr.forEach(function(word) {
        var cap = word.charAt(0).toUpperCase() + word.substring(1);
        newArr.push(cap);
    });
    str = newArr.join(" ");
    return str;
}

console.log(tc("I'm a lIttle tEa pot"));