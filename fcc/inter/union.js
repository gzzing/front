/**
 * 写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。
 * 换句话说，所有数组中的所有值都应该以原始顺序被包含在内，但是在最终的数组中不包含重复值。
 * 非重复的数字应该以它们原始的顺序排序，但最终的数组不应该以数字顺序排序。
 */

function unite(arr1, arr2, arr3) {
  var arr = [];
  for (var i = 0; i < arguments.length; i++) {
    arr = arr.concat(arguments[i]);
  }
  // console.log(arr);
  var res = []
  res = arr.reduce(function(acc, val) {
    if (res.indexOf(val) === -1) res.push(val);
    return res;
  }, arr[0]);


  return res;
}

function unite2(arr1, arr2, arr3) {
  var finalArr = [];

  for (var i = 0; i < arguments.length; i++) {
    //遍历arguments对象，构造新数组
    var arrArgs = arguments[i];

    for (var j = 0; j < arrArgs.length; j++) {
      var indexVal = arrArgs[j];
      if (finalArr.indexOf(indexVal) < 0) {
        finalArr.push(indexVal);
      }
    }
  }

  return finalArr;
}

var res = unite2([1, 3, 2], [5, 2, 1, 4], [2, 1]); //[1,3,2,5,4]
console.log(res);

