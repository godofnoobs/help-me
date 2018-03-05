module.exports = function count(s, pairs) {
    var n = evalN(pairs);
    var count = 0;

    for (var i = 0; i <= n; i++) {
        for (var j=0; j < s.length; j++) {
            var t = parseInt(s[j]);
            var gcd = evalGCD(i+j, n);
            console.log(i+j +' : '+ gcd  +' : '+ t);
            if (t == 1 && gcd == 1)
                count++;
            else if (t = 0 && gcd!=0)
                count++;
        }
    }
    console.log(count);
    console.log(count%1000000007);
    return count;
}

function evalN (arr) {
    var len = arr.length;
    res = 1;
    for (var i=0; i < len; i++) {
        var temp = Math.pow(arr[i][0], arr[i][1]);
        res *= temp;
    }
    res = res/Math.pow(arr[len-1][0], arr[len-1][1]);
    return res;
}

function evalGCD(a, b) {
    if ((a == 0) || (b == 0))
        return 0;
    while (b !=0) {
        var t = a%b;
        a = b;
        b = t;
    }
    return a;
}