function chunk(arr, size) {
    //创建一个新数组准备盛放二维数组
    var newArr = new Array();
    for (var i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i+size));
    }
    return newArr;
}

console.log(chunk(['a', 'b', 'c', 'd', 1, 4, 8], 3));