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
    
    let check_combi = () =>{
        let d,e,k:number;
        R.forEach((d:number) => {
            R.forEach((e:number) => {
                R.forEach((k:number) => {
                    R.forEach((l:number) => {

                        console.log(d*1000+e*100+k*10+l);
                    }, R.range(0,10))
                }, R.range(0,10))
            }, R.range(0,10))
        }, R.range(0,10));
    }

    const start = performance.now();
    check_combi();

    const end = performance.now();
    //console.log(found);    
    const elapsed = (end - start);
    const elapsedStr = elapsed.toPrecision(3);
    console.log(`index:${n}, ${elapsedStr} mSec`);

}
