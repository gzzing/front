function b(arr) {
    //false, null, 0, "", undefined, NaN
    // return arr.filter(function(value) {
    //     return value!=null && !isNaN(value) && value !== undefined && value;
    // });
    return arr.filter(Boolean);
}

console.log(b([1, null, 0, NaN, 2, undefined, false, 3]));