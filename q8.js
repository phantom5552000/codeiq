{
    var printf_1 = require('printf');
    var _a = require('perf_hooks'), PerformanceObserver_1 = _a.PerformanceObserver, performance_1 = _a.performance;
    /*
    function assert(actual:any, expected:any) {
        console.log('.');
        console.assert(actual === expected, '\nact: ' + actual + '\nexp: ' + expected);
    }
    function TestSum() {    assert(1+2, 3);}
    */
    var Position_1 = /** @class */ (function () {
        function Position(x, y) {
            this.x = x;
            this.y = y;
        }
        Position.prototype.add = function (p) {
            return new Position(this.x + p.x, this.y + p.y);
        };
        Position.prototype.hit = function (list) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].x == this.x
                    && list[i].y == this.y)
                    return true;
            }
            return false;
        };
        return Position;
    }());
    var print_xy = function (l) {
        var s = "";
        for (var i = 0; i < l.length; i++) {
            s = s + printf_1("(%d, %d), ", l[i].x, l[i].y);
        }
        console.log(s);
    };
    var steps_1 = [new Position_1(1, 0), new Position_1(0, -1), new Position_1(-1, 0), new Position_1(0, 1)];
    var result_1 = [];
    var go_1 = function (n, cur, route) {
        if (route.length == n + 1) { // 3進む場合、配列要素は4
            //console.log(route);
            //print_xy(route);
            result_1.push(route);
            return;
        }
        //let r_org = route.slice();
        for (var s = 0; s < steps_1.length; s++) {
            var next = cur.add(steps_1[s]);
            //if(route.indexOf(next)>=0){
            if (next.hit(route)) {
                // 存在した
                continue;
            }
            var r_1 = route.slice();
            //cur = next;
            r_1.push(next);
            go_1(n, next, r_1);
        }
    };
    for (var i = 0; i < process.argv.length; i++) {
        console.log("argv[" + i + "] = " + process.argv[i]);
    }
    var n = 3;
    if (process.argv.length >= 2) {
        n = parseInt(process.argv[2]);
    }
    var r = [];
    r.push(new Position_1(0, 0));
    r.push(new Position_1(1, 0));
    var start = performance_1.now();
    go_1(n, new Position_1(1, 0), r);
    var end = performance_1.now();
    var elapsed = (end - start);
    var elapsedStr = elapsed.toPrecision(3);
    //console.log("result.len=%d", result.length);
    console.log("n: " + n + ", len: " + result_1.length * 4 + ", elapsed: " + elapsedStr + " mSec");
}
