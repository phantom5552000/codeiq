{
    var R_1 = require('ramda');
    //console.log(R);
    //const Math = require('Math');
    var _a = require('perf_hooks'), PerformanceObserver_1 = _a.PerformanceObserver, performance_1 = _a.performance;
    var eval_print = function (s) {
        //console.log(s);
        var r = eval(s);
        console.log(s + " = " + r);
    };
    //eval_print("R.all(R.identity)([true, false])");
    var n = 5;
    if (process.argv.length >= 3) {
        n = parseInt(process.argv[2]);
    }
    console.log("n:" + n);
    var start = performance_1.now();
    var hit = function (s) {
        var pos = -1;
        var a10 = R_1.repeat(false, 10);
        var idx_max = 0;
        for (var i = 0; i < 10; i++) {
            var idx = s.indexOf(i.toString());
            if (idx >= 0) {
                a10[i] = true;
                idx_max = R_1.max(idx, idx_max);
                if (R_1.all(R_1.identity)(a10)) {
                    return idx_max;
                }
            }
        }
        return -1;
    };
    //eval_print("R.all(R.identity)([true, false])");
    //eval_print("R.all(R.identity)([true, true])");
    var n_min = Number.MAX_VALUE;
    var tuple = [n_min, 0, ""];
    for (var i = 2; i <= n; i++) {
        var sq = Math.sqrt(i);
        var h = hit(sq.toString());
        if (h > 0) {
            //console.log(`sqrt(${i}): ${sq}, ${h} `);
            if (h < tuple[0]) {
                tuple[0] = h;
                tuple[1] = i;
                tuple[2] = sq;
            }
        }
        //if(hit(sq.toString())){
        //}
    }
    var end = performance_1.now();
    //console.log(found);    
    var elapsed = (end - start);
    var elapsedStr = elapsed.toPrecision(3);
    console.log("index:" + tuple + ", " + elapsedStr + " mSec");
}
