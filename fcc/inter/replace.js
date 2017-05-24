// 使用给定的参数对句子执行一次查找和替换，然后返回新句子。

// 第一个参数是将要对其执行查找和替换的句子。

// 第二个参数是将被替换掉的单词（替换前的单词）。

// 第三个参数用于替换第二个参数（替换后的单词）。

// 注意：替换时保持原单词的大小写。例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。

function rep(str, before, after) {


    if (/[A-Z]/.test(before[0])) {
        after = after[0].toUpperCase() + after.slice(1);
    }

    str = str.replace(before, after);

    return str;
}

var res = rep("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log(res);
