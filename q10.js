{
    var R_1 = require('ramda');
    var _a = require('perf_hooks'), PerformanceObserver_1 = _a.PerformanceObserver, performance_1 = _a.performance;
    var eu = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13,
        36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14,
        31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];
    var us = [0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34,
        15, 3, 24, 36, 13, 1, 0, 27, 10, 25, 29, 12, 8,
        19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2];
    var sum = function (ar, n) {
        var loop = ar.length;
        var max = 0;
        for (var i = 0; i < loop; i++) {
            var s = 0;
            for (var j = 0; j < n; j++) {
                var index = (i + j) % loop;
                s += ar[index];
            }
            max = R_1.max(max, s);
        }
        return max;
    };
    var eval_print = function (s) {
        console.log(s);
        var r = eval(s);
        console.log(s + " = " + r);
    };
    var n = 2;
    if (process.argv.length >= 3) {
        n = parseInt(process.argv[2]);
    }
    console.log("n:" + n);
    var start = performance_1.now();
    //eval_print(`R.sum(eu);`);
    //console.log(R.sum(R.range(1, 37)));
    //console.log(`${sum(eu, n)}`);
    //console.log(`${sum(us, n)}`);
    var count = 0;
    for (var n_1 = 2; n_1 <= 36; n_1++) {
        var e = sum(eu, n_1);
        var u = sum(us, n_1);
        if (e < u) {
            count++;
        }
    }
    var end = performance_1.now();
    //console.log(found);    
    var elapsed = (end - start);
    var elapsedStr = elapsed.toPrecision(3);
    console.log("count:" + count + ", " + elapsedStr + " mSec");
}
