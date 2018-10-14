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
    let r:number,e:number,a:number,d:number, w:number, i:number, t:number, l:number, k:number, s:number;
    let meat = () => {
        let read = r*1000+e*100+a*10+d;
        let write = w*10000+r*1000+i*100+t*10+e;
        let talk = t*1000+a*100+l*10+k;
        let skill = s*10000+k*1000+i*100+l*10+l;

        return (read+write+talk) == skill;

    }
    let cc = 0;
    let check_combi = (ee:Array<number>, count:number, rr:Array<number>):Array<number> =>{
        // リストから一つ取り出す
        if(rr.length == count) {
            if((rr[0]+rr[1]+rr[2]) % 10 == rr[3]){
                cc++;
                console.log(rr);
            }
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
    check_combi(R.range(0,10), 4, []);

    const end = performance.now();
    //console.log(found);    
    const elapsed = (end - start);
    const elapsedStr = elapsed.toPrecision(3);
    console.log(`index:${cc}, ${elapsedStr} mSec`);

}
