function sumAll(arr) {
    var newArr = [];
    newArr[0] = arr[0] < arr[1] ? arr[0] : arr[1];
    arrMax = arr[0] < arr[1] ? arr[1] : arr[0];
    for (var i = newArr[0] + 1; i <= arrMax; i++) {
        newArr.push(i);
    }
    // console.log(newArr);
    // return newArr.reduce(function(a, b) {return a + b;});
    return newArr.reduce((a, b) => a + b);
}

function sumAll1(arr) {
    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);
    // return (max + min) * (max - min + 1) / 2;
    var newArr = [];
    for (var i = min; i <= max; i++) {
        newArr[i] = i;
    }
    return newArr.reduce((a, b) => a + b);
}


console.log(sumAll1([1, 4]));
console.log(sumAll1([5, 1]));