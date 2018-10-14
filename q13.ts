{
    const R = require('ramda');
    //console.log(R);
    //const Math = require('Math');
    const { PerformanceObserver, performance } = require('perf_hooks');

    let eval_print = (s:string):any =>{
        //console.log(s);
        let r = eval(s);
        console.log(`${s} = ${r}`);
    }
    //   eval_print("R.all(R.identity)([true, false])");
    let n  = 5;
    if(process.argv.length >= 3){
        n  = parseInt(process.argv[2]);
    }
    console.log(`n:${n}`);
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
    let meet = (str:string) => {
        //console.log(`meet(${str})`);
        let r = str[0], e = str[1], a = str[2], d = str[3];
        let w = str[4], i = str[5], t = str[6], l = str[7];
        let k = str[8], s = str[9];
        if(r == "0" || w == "0" || t == "0") return;
        if((Number(d)+Number(e)+Number(k))%10 != Number(l)) return;
        let sub = Number(s) -  Number(w);
        if(sub == 0) return;
        if(sub > 2) return;
        let sum_at = Number(a)+Number(t);
        if (sum_at !=8 && sum_at != 9 && sum_at !=10) return;
    
        let read = r+e+a+d;
        let write = w+r+i+t+e;
        let talk = t+a+l+k;
        let skill = s+k+i+l+l;
        let formula = `${read}+${write}+${talk}==${skill}`;

        if(eval(formula)){
            console.log(formula);
        }
    }
    let cc = 0;
    let check_combi = (ee:Array<number>, count:number, rr:Array<number>):Array<number> =>{
        // リストから一つ取り出す
        if(rr.length == count) {
            //if((rr[0]+rr[1]+rr[2]) % 10 == rr[3]){
            //    cc++;
            //    console.log(rr);
            //}
            // 文字列化して連結
            //let r2 = R.map(toString, rr);
            let r2 = R.map(R.toString, rr);

            let r3 = R.reduce(R.concat, "", r2);
            meet(r3);
            return [];
        }
        for(let i=0;i<ee.length;i++){
            let nth = R.nth(i, ee);
            let remain = R.remove(i, 1, ee);
            let rrr = R.clone(rr);
            //console.log(`${nth}, ${remain}`);
            rrr.push(nth);
            check_combi(remain, count, rrr);
        }
        return [];
    }

    const start = performance.now();
    check_combi(R.range(0,10), 10, []);

    const end = performance.now();
    //console.log(found);    
    const elapsed = (end - start);
    const elapsedStr = elapsed.toPrecision(3);
    console.log(`index:${cc}, ${elapsedStr} mSec`);

}
