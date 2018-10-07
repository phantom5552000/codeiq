{
    var R_1 = require('ramda');
    var printf = require('printf');
    var _a = require('perf_hooks'), PerformanceObserver_1 = _a.PerformanceObserver, performance_1 = _a.performance;
    var number_male = 20; //parseInt(process.argv[2]);
    var number_female = 10; //parseInt(process.argv[3]);
    var count_f_1 = 0;
    var factorial_1 = R_1.memoize(function (n) {
        count_f_1 += 1;
        return R_1.product(R_1.range(1, n + 1));
    });
    var combi = function (q, r) {
        var p = q + r;
        var loop = p - q;
        var prd = 1;
        for (var i = 0; i < loop; i++) {
            prd = prd * (p - i);
        }
        var b = factorial_1(r);
        return prd / b;
    };
    var count = 0;
    var start = performance_1.now();
    console.log("factorial(" + number_male + ") = " + factorial_1(number_male));
    console.log("factorial(" + number_female + ") = " + factorial_1(number_female));
    //perm([makeCopy(0,number_male), makeCopy(1,number_female)], [] ,found); //=> [1, 2, 3]
    var c = combi(number_male, number_female);
    console.log("n: " + number_male + ", " + number_female + ", combi: " + c);
    var sub_list = [];
    for (var m = number_male - 1, f = number_female - 1; f >= 0; m--, f--) {
        var c1 = combi(m, f);
        sub_list.push(c1);
        console.log("  n: " + m + ", " + f + ", combi: " + c1);
    }
    var end = performance_1.now();
    //console.log(found);
    var elapsed = (end - start);
    var elapsedStr = elapsed.toPrecision(3);
    //console.log("result.len=%d", result.length);
    console.log("n: " + number_male + ", " + number_female + ", combi: " + c + "  " + elapsedStr + " mSec");
    var a = c - R_1.sum(sub_list);
    console.log(a);
}
