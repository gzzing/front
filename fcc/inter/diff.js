// Array.slice()
// Array.filter()
// Array.indexOf()
// Array.concat()

function diff(arr1, arr2) {
    //在arr1中找arr2的元素
    arr3 = arr1.filter(function (value) {
       if (arr2.indexOf(value) === -1) {
           return true;
       } else {
           return false;
       }
     });

     var arr4 = arr2.filter(function (value) {
         if (arr1.indexOf(value) === -1) {
             return true;
         } else {
             return false;
         }
     });

     return arr3.concat(arr4);
}

function diff2(arr1, arr2) {
    var arr3 = arr1.concat(arr2);

    function check(item) {
        //item为arr3中每一个元素
        if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
            return item;
        }
    }

    return arr3.filter(check);
}

var result = diff2([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(result);
