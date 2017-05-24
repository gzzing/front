function flw(str) {
    //先按空格分隔字符串
    var arr = str.split(" ");
    console.log(arr);
    //遍历arr找最长的
    //先假定arr[0]时最长的元素，遍历找到比其更长的元素替换
    str = arr[0];
    for (var i = 0; i < arr.length; i++) {

        if (arr[i].length > str.length) str = arr[i];

    }
    console.log(str);

    return str.length;
}

function flw2(str) {
    //分割为数组后，按长度排序,取第一个元素长度
    return str.split(' ').sort((curr, next) => next.length - curr.length)[0].length;
}

console.log(flw2("The quick brown fox jumped over the lazy dog"));