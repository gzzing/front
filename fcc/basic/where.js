function where(arr, num) {
    arr.push(num);
    console.log(arr);
    arr.sort((a, b) => a - b);
    console.log(arr);
    return arr.indexOf(num);
}

console.log(where([2, 20, 10 ], 19));