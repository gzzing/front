function des(arr) {
    // console.log(arr);
    // console.log(arguments.length);
    var arg = arguments;
    // return arr.filter(function(value) {
    //     for (var i = 1; i < arguments.length; i++) {
    //         //这里使用arguments是callback的参数
    //         if (value === arguments[i]) return false;
    //     }
    //     return true;
    // });  
    return arr.filter(function(value) {
        for (var i = 1; i < arg.length; i++) {
            if (value === arg[i]) return false;
        }
        return true;
    });
}

function des2(arr) {
    //from方法将一个类似数组的可迭代对象转为数组
    var arg = Array.from(arguments).splice(1);
    //在后面的参数中找arr中的元素，返回找不到的。
    return arr.filter((value) => arg.indexOf(value) === -1);
}

function des3(arr) {
    var args = Array.prototype.slice.call(arguments);
    console.log(args);
}


console.log(des3([1,2,3,4,5],2, 4));