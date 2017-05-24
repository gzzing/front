/**
 * DNA 链缺少配对的碱基。依据每一个碱基，为其找到配对的碱基，然后将结果作为第二个数组返回。
 * Base pairs（碱基对） 是一对 AT 和 CG，为给定的字母匹配缺失的碱基。
 * 例如，对于输入的 GCG，相应地返回 [["G", "C"], ["C","G"],["G", "C"]]
 */

function pair(str) {
    var arr = str.split("");

    arr = arr.map(function (e) {
        if (e === 'A') {
            return ['A', 'T'];
        } else if (e === 'T') {
            return ['T', 'A'];
        } else if (e === 'C') {
            return ['C', 'G'];
        } else if (e === 'G') {
            return ['G', 'C'];
        }
    }, this);

    return arr;
}

function pair2(str) {
    var paired = [];
    var search = function (char) {
        switch (char) {
            case 'A':
                paired.push(['A', 'T']);
                break;
            case 'T':
                paired.push(['T', 'A']);
                break;
            case 'C':
                paired.push(['C', 'G']);
                break;
            case 'G':
                paired.push(['G', 'C']);
                break;
        }
    };


    str.split("").forEach(function(element) {
        search(element);
    });

    return paired;
}

var res = pair2("GCG");
console.log(res);