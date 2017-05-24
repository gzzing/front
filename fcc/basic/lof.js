/**自己的方法 */
// function lof(arr) {
//     //找出二维数组中每个子数组的最大元素，构造新数组
//     var newArr = new Array();
//     for (var i = 0; i < 4; i++) {
//         newArr[i] = arr[i][0];
//     }
//     arr.forEach(function(v, i) {
//         for (var j = 0; j < 4; j++) {
//             if (v[j] > newArr[i]) newArr[i] = v[j];
//         }
//     });
//     arr = newArr;
//     return arr
// }

//sort的compareFunction
//返回正数b排在前面，返回负数a排在前面
function order(a, b) {
    return b-a;//if b>a ba  /   if b<a  ab  即从大到小排
}

function lof(arr) {
    var newArr = new Array();
    for (var i = 0; i < 4; i++) {
        //将arr从打到小排序后取第一个为新数组元素
        newArr[i] = arr[i].sort(order)[0];
    }
    return newArr;
}

//Rafase282解法
function lof2 (arr) {
    return arr.map((list) => list.reduce((a, b) => a > b ? a : b));
}

console.log(lof2([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]]));