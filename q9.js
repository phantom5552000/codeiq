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
    var sameNumber_1 = function (l) {
        if (l.length == 0)
            return false;
        if (l.length % 2 == 1) {
            return false;
        }
        return l.length / 2 == R_1.sum(l);
    };
    var perm_1 = function (remain, result, found) {
        //console.log("remain: ", remain);
        //console.log("  result: ", result);
        //console.log(`count: ${count}`);
        if (sameNumber_1(result)) {
            //console.log(`${result}, sum=${R.sum(result)}, ${sameNumber(result)}`);
            return 0;
        }
        if (isAllEmpty_1(remain)) {
            if (found[0] % 1000 == 0)
                console.log(result + ", sum=" + R_1.sum(result) + ", " + sameNumber_1(result));
            //console.log("*** ",result, R.sum(result), sameNumber(result));
            found[0]++;
        }
        for (var i = 0; i < remain.length; i++) {
            //console.log("---%d", i);
            var remain_copy = JSON.parse(JSON.stringify(remain)); // deep copy
            if (remain_copy[i].length == 0)
                continue;
            var res_copy = JSON.parse(JSON.stringify(result));
            var first = R_1.nth(0, remain_copy[i]);
            remain_copy[i].pop();
            res_copy.push(first);
            //console.log("  remain_copy: ", remain_copy);
            //console.log("   res_copy: ", res_copy);
            perm_1(remain_copy.slice(), res_copy.slice(), found);
        }
    };
    var makeCopy = function (obj, times) {
        var l = [];
        for (var i = 0; i < times; i++) {
            l.push(obj);
        }
        return l;
    };
    var count = 0;
    var found = [0];
    perm_1([makeCopy(0, 3), makeCopy(1, 2)], [], found); //=> [1, 2, 3]
    console.log(found);
    found[0] = 0;
    perm_1([makeCopy(0, 30), makeCopy(1, 20)], [], found); //=> [1, 2, 3]
    console.log(found);
    //perm([makeCopy(0,15), makeCopy(1,10)], result); //=> [1, 2, 3]
}
