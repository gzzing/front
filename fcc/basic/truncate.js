function t(str, num) {
    //当需要的生成的字符串长度<3时，...不计入长度
    if (num <= 3) {
        return str.substr(0, num) + '...';
    } else {
        return str.substr(0, num - 3) + "...";
    }


}

console.log(t("A-",1));
console.log(t("A-tisket a-tasker A green and yellow basket", 11))