{
    const R = require('ramda');
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

    let func = (start:number, n:number, options:Array<number>) =>{
        let result:Array<Array<number>> = []

        let func1 = (steps:Array<number>) =>{
            //console.log(steps)
            let last = 0;
            if(steps.length > 0) last = R.last(steps)

            if(last == n){
                //console.log(result, "ok", steps)
                result = R.append(steps, result)
                return
            }
            let diff = n - last
            R.forEach((x:number)=>{
                if(x<=diff){
                    func1(R.append(last+x, steps))
                }
            },options)
        }
        func1([start])
        return result;
    }

    const start = performance.now();

    let r = func(0, n, R.range(1,5));
    let cc = 0;
    R.forEach((x:Array<number>)=>{
        if(x.length%2 ==1) cc++;
    },r)
    //r = func(n, 0, R.range(-3,0));
    console.log(r)
    console.log(`n:${n}, combi: ${r.length}, result: ${cc}`);

    const end = performance.now();
    //console.log(found);    
    const elapsed = (end - start);
    const elapsedStr = elapsed.toPrecision(3);
    console.log(`index:${n}, ${elapsedStr} mSec`);

}
