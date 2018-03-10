//3, 1000000000
//    999999999
//    1000000007
/*
var n = 23;
var p = 277;
var d = 9;
*/
var n = 3;
var p = 999999999;
var d = 1000000007;

function evalRem(n, p, d) {
    var cur = n;
    for (var i = 1; i < p; i++) {
        if (cur >= d)
            break;
        cur *= n;
    }
    console.log(i + ' - minp');
    var minp = i;
    for (var i = minp; i < p; i++) {
        if (p % i === 0)
            break;
    }
    console.log(i + ' - p kratn');

    var pLow = i;
    p = p / i;
    console.log(p + ' - pHigh');
    n = Math.pow(n, pLow) % d;
    console.log(i + ' - n');
    if (Math.pow(n, p) > d)
        return evalRem(n, p, d);
    return Math.pow(n, p);
}

alert(evalRem(n, p, d));