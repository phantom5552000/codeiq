{
    //let b:BigInt;
    var bigInt_1 = require("big-integer");
    var R = require('ramda');
    var _a = require('perf_hooks'), PerformanceObserver_1 = _a.PerformanceObserver, performance_1 = _a.performance;
    var eval_print = function (s) {
        console.log(s);
        var r = eval(s);
        console.log(s + " = " + r);
    };
    var n = 5;
    if (process.argv.length >= 3) {
        n = parseInt(process.argv[2]);
    }
    console.log("n:" + n);
    var start = performance_1.now();
    //eval_print(`R.sum(eu);`);
    //console.log(R.sum(R.range(1, 37)));
    //console.log(`${sum(eu, n)}`);
    //console.log(`${sum(us, n)}`);
    var fib0 = function (n) {
        if (n == 0)
            return bigInt_1(1);
        else if (n == 1)
            return bigInt_1(1);
        else {
            return bigInt_1(fib_1(n - 2)).add(fib_1(n - 1));
        }
    };
    var fib_1 = R.memoize(fib0);
    var count = 0;
    for (var i = 2;; i++) {
        //let fib = fib_1 + fib_2;
        //console.log(fib(i));
        var f = fib_1(i);
        var s = R.sum(R.split("")(f.toString(10)));
        if (f.mod(s) == 0) {
            count++;
            console.log(f.toString(), s);
        }
        if (count >= n)
            break;
    }
    var end = performance_1.now();
    //console.log(found);    
    var elapsed = (end - start);
    var elapsedStr = elapsed.toPrecision(3);
    console.log("count:" + count + ", " + elapsedStr + " mSec");
}
