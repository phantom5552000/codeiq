{
    var R_1 = require('ramda');
    var printf = require('printf');
    var _a = require('perf_hooks'), PerformanceObserver_1 = _a.PerformanceObserver, performance_1 = _a.performance;
    var result = [];
    var all = [[0, 0, 0], [1, 1]];
    console.log(all);
    var isAllEmpty_1 = function (ll) {
        for (var i = 0; i < ll.length; i++) {
            if (ll[i].length > 0)
                return false;
        }
        return true;
    };
    var perm_1 = function (remain, result) {
        console.log("remain: ", remain);
        console.log("result: ", result);
        if (isAllEmpty_1(remain)) {
            console.log(result);
            return true;
        }
        for (var i = 0; i < remain.length; i++) {
            console.log("---%d", i);
            var remain_copy = remain.slice();
            var res_copy = result.slice();
            if (remain_copy[i].length == 0)
                continue;
            var first = R_1.nth(0, remain_copy[i]);
            remain_copy[i].pop();
            res_copy.push(first);
            //console.log("remain_copy: ", remain_copy);
            //console.log("res_copy: ", res_copy);
            perm_1(remain_copy.slice(), res_copy.slice());
        }
        //=> [1, 2, 3]
        //console.log(x);
    };
    perm_1(all, result); //=> [1, 2, 3]
}
