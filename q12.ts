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
    //eval_print("R.all(R.identity)([true, false])");
    let n  = 5;
    if(process.argv.length >= 3){
        n  = parseInt(process.argv[2]);
    }
    console.log(`n:${n}`);
    const start = performance.now();

    let hit = (s:string):number =>{
        let pos = -1;
        let a10 = R.repeat(false, 10);
        let idx_max = 0;

        for(let i=0;i<10;i++){
            let idx = s.indexOf(i.toString());
            if(idx >= 0){
                a10[i] = true;
                idx_max = R.max(idx, idx_max);
                if(R.all(R.identity)(a10)){
                    return idx_max;
                }
            }
        }
        return -1;
    }
    //eval_print("R.all(R.identity)([true, false])");
    //eval_print("R.all(R.identity)([true, true])");

    let n_min = Number.MAX_VALUE;
    let tuple = [n_min, 0, ""];
    for(let i=2;i<=n;i++){
        let sq = Math.sqrt(i);
        let h = hit(sq.toString());
        if(h > 0){
            //console.log(`sqrt(${i}): ${sq}, ${h} `);
            if(h < tuple[0]){
                tuple[0] = h;
                tuple[1] = i;
                tuple[2] = sq;
            }
        }    
        //if(hit(sq.toString())){

        //}
        
    }

    const end = performance.now();
    //console.log(found);    
    const elapsed = (end - start);
    const elapsedStr = elapsed.toPrecision(3);
    console.log(`index:${tuple}, ${elapsedStr} mSec`);

}
