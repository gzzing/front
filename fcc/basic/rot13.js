/**
 * rot-13
 * A B C D E F G H I J K L M 
 * N O P Q R S T U V W X Y Z
*/
function rot(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        arr[i] = str.charCodeAt(i);
    }

    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 65 && arr[i] <= 77) arr[i] += 13;
        else if(arr[i] >= 78 && arr[i] <= 90) arr[i] -= 13;
    }
    console.log(arr);
    var str = "";
    // for (var i = 0; i < arr.length; i++) {
    //     str += String.fromCharCode(arr[i]);
    // }
    // arr.forEach(function(value) {
    //     str += String.fromCharCode(value);
    // });
    arr.map(function(value) {
        str += String.fromCharCode(value);
    });
    return str;
}

console.log(rot("SERR PBQR PNZC!"));