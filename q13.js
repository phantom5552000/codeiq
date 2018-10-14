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
    //   eval_print("R.all(R.identity)([true, false])");
    var n = 5;
    if (process.argv.length >= 3) {
        n = parseInt(process.argv[2]);
    }
    console.log("n:" + n);
    //  read
    //+write
    //+ talk
    // skill
    // (d+e+k)%10 = l
    /*let check_combi = () => {
        
        //R.all(R.identity)([true, false]);
        R.forEach((d:number) => {
            console.log(d);
        }, R.range(0,10));
    };*/
    var meet_1 = function (str) {
        //console.log(`meet(${str})`);
        var r = str[0], e = str[1], a = str[2], d = str[3];
        var w = str[4], i = str[5], t = str[6], l = str[7];
        var k = str[8], s = str[9];
        if (r == "0" || w == "0" || t == "0")
            return;
        if ((Number(d) + Number(e) + Number(k)) % 10 != Number(l))
            return;
        var sub = Number(s) - Number(w);
        if (sub == 0)
            return;
        if (sub > 2)
            return;
        var sum_at = Number(a) + Number(t);
        if (sum_at != 8 && sum_at != 9 && sum_at != 10)
            return;
        var read = r + e + a + d;
        var write = w + r + i + t + e;
        var talk = t + a + l + k;
        var skill = s + k + i + l + l;
        var formula = read + "+" + write + "+" + talk + "==" + skill;
        if (eval(formula)) {
            console.log(formula);
        }
    };
    var cc = 0;
    var check_combi_1 = function (ee, count, rr) {
        // リストから一つ取り出す
        if (rr.length == count) {
            //if((rr[0]+rr[1]+rr[2]) % 10 == rr[3]){
            //    cc++;
            //    console.log(rr);
            //}
            // 文字列化して連結
            //let r2 = R.map(toString, rr);
            var r2 = R_1.map(R_1.toString, rr);
            var r3 = R_1.reduce(R_1.concat, "", r2);
            meet_1(r3);
            return [];
        }
        for (var i = 0; i < ee.length; i++) {
            var nth = R_1.nth(i, ee);
            var remain = R_1.remove(i, 1, ee);
            var rrr = R_1.clone(rr);
            //console.log(`${nth}, ${remain}`);
            rrr.push(nth);
            check_combi_1(remain, count, rrr);
        }
        return [];
    };
    var start = performance_1.now();
    check_combi_1(R_1.range(0, 10), 10, []);
    var end = performance_1.now();
    //console.log(found);    
    var elapsed = (end - start);
    var elapsedStr = elapsed.toPrecision(3);
    console.log("index:" + cc + ", " + elapsedStr + " mSec");
}
