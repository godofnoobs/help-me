module.exports = function count(s, pairs) {
    var n = evalN(pairs);
    if (n == Infinity)
        return 0;
    var count = 0;
    var memo = [];
    var gcd;
    var len = s.length;

    if (n > 100000000)
        return 0;
    if (s.length == 1) {
        for (var i = 0; i <= n; i++) {
            for (var j = 0; j < s.length; j++) {
                var t = +s[j];
                gcd = evalGCDLight(i + j, pairs);
                if (gcd == 0)
                    continue;
                if ((t == 1 && gcd == 1) || (t == 0 && gcd != 1))
                count++;
            }
        }
        return count%1000000007;
    }

    for (var i = 0; i <= n;  i++) {
        var f = 0;
        for (var j = 0; j < s.length; j++) {
            var t = +s[j];
            gcd = evalGCDLight(i + j, pairs);
            if (gcd == 0)
                continue;
            if (t == 1 && gcd == 1)
                f++;
            else if (t == 0 && gcd != 1)
                f++
            if (f > 1) {
                count++;
                break;
            }
        }
    }
    return count%1000000007;
}

function evalN (arr) {
    var len = arr.length;
    res = 1;
    for (var i=0; i < len; i++) {
        var temp = Math.pow(arr[i][0], arr[i][1]);
        res *= temp;
    }
    console.log(res);
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
function evalGCDLight(a, arr) {
    if (a == 0)
        return 0;
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        if (a%arr[i][0] == 0)
            return arr[i][0];
    }
    return 1;
}