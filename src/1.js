//3, 1000000000
//    999999999
//    1000000007

var n = 23;
var p = 277;
var d = 9;

//var n = 3;
//var p = 999999999;
//var d = 1000000007;

function evalRem(n, p, d, mul, step) {
    var mul = mul || 1;
    var step = step || 1;
    var flag = 0;
    var flag2 = 0;


    for (var i=0; i < 1000; i++) {

        console.log(n + ' - n');
        console.log(p + ' - p');
        console.log(mul + ' - mul');
        console.log('-----------------------------------');

        if (n > d) {
            n %= d;
            continue;
        }

        if (n === 1)
            return mul%d;
        if (p < 10 && mul*Math.pow(n, p) < 1e+20)
            return mul*Math.pow(n, p)%d;
        flag = 0;
        for (var j = 2; j <= p/2; j++)
            if ((p%j == 0) && (Math.pow(n, j) < 1e18)) {
                flag = 1;
                n = Math.round(Math.pow(n, j));
                p = Math.round(p/j);
                break;
            }
        if (flag)
            continue;
        flag2++;
        p--;
        mul *= n;
        if (mul > d)
            mul %= d;
        /*
        if (flag2 === 3) {

        for (var k = 2; k <= p/2; k++)
            if (n%k === 0 && step < 3) {
                n = evalRem(k, p, d, 1, step+1)*evalRem(n/k, p, d, 1, step+1);
                break;
            }
        }
        */
    }
}

//alert(evalRem(n, p, d));
//alert(evalRem(17, 332, 10));
//alert(evalRem(7, 222, 10));
//alert(evalRem(3,  999999999, 1000000007));
alert(evalRem(3, 999999999, 1000000007, 2));
//alert(evalRem(3, 1000000000, 1000000007));
//alert(evalRem(666, 777, 2014));