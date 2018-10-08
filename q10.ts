{
    const R = require('ramda');
    const { PerformanceObserver, performance } = require('perf_hooks');

    let eu:Array<number> = [0,32,15,19,4,21,2,25,17,34,6,27,13,
                            36,11,30,8,23,10,5,24,16,33,1,20,14,
                            31,9,22,18,29,7,28,12,35,3,26];
    let us:Array<number> = [0,28,9,26,30,11,7,20,32,17,5,22,34,
                            15,3,24,36,13,1,0,27,10,25,29,12,8,
                            19,31,18,6,21,33,16,4,23,35,14,2];
    let sum = (ar:Array<number>, n:number):number =>{
        let loop = ar.length;
        let max = 0;
        for(let i=0;i<loop;i++){
            let s = 0;
            for(let j=0;j<n;j++){
                let index = (i+j) % loop;
                s += ar[index];
            }
            max = R.max(max, s);
        }
        return max;
    }
    let eval_print = (s:string):any =>{
        console.log(s);
        let r = eval(s);
        console.log(`${s} = ${r}`);
    }
    let n  = 2;
    if(process.argv.length >= 3){
        n  = parseInt(process.argv[2]);
    }
    console.log(`n:${n}`);
    const start = performance.now();
    //eval_print(`R.sum(eu);`);
    //console.log(R.sum(R.range(1, 37)));
    //console.log(`${sum(eu, n)}`);

    //console.log(`${sum(us, n)}`);
    let count=0;
    for(let n=2;n<=36;n++){
        let e = sum(eu, n);
        let u = sum(us, n);
        if(e < u){
            count++;
        }
    }
    const end = performance.now();
    //console.log(found);    
    const elapsed = (end - start);
    const elapsedStr = elapsed.toPrecision(3);
    console.log(`count:${count}, ${elapsedStr} mSec`);

}
