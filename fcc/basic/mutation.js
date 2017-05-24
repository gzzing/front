function m(arr) {
    var s1 = arr[0].toLowerCase();
    var s2 = arr[1].toLowerCase();
    console.log("s1:" + s1 + ", s2: " + s2);
    for (var i = 0; i < s2.length; i++) {
        if (s1.indexOf(s2[i]) < 0) return false;
    }
    return true;
}

console.log(m(["hello",'HLgoo']));//true