{
    const R = require('ramda');
    const { PerformanceObserver, performance } = require('perf_hooks');

    let eval_print = (s:string):any =>{
        console.log(s);
        let r = eval(s);
        console.log(`${s} = ${r}`);
    }
    let n  = 5;
    if(process.argv.length >= 3){
        n  = parseInt(process.argv[2]);
    }
    console.log(`n:${n}`);
    const start = performance.now();
    //eval_print(`R.sum(eu);`);
    //console.log(R.sum(R.range(1, 37)));
    //console.log(`${sum(eu, n)}`);

    //console.log(`${sum(us, n)}`);
    let fib0 = (n:number):number => {
        if (n == 0) return 0;
        else if (n ==1) return 1;
        else {
            return fib(n-2) + fib(n-1);
        }
    };
    const fib = R.memoize(fib0);
    let count=0;
    for(let i=2;;i++){

        //let fib = fib_1 + fib_2;
        //console.log(fib(i));
        let f = fib(i);
        //if(f > Number.MAX_VALUE){
        // overflowを検知したいがこれはダメ
        if(f > 2**53 ){
            console.log(`overflow detected. fib(${i})=${fib(i)} fib(${i-1})=${fib(i-1)}  `);
            break;
        }
        let s = R.sum(R.split("")(f.toString(10)));
        if (f%s == 0){
            count++;
            console.log(f, s);
        }
        if(count >= n) break;
    }

    const end = performance.now();
    //console.log(found);    
    const elapsed = (end - start);
    const elapsedStr = elapsed.toPrecision(3);
    console.log(`count:${count}, ${elapsedStr} mSec`);

}
