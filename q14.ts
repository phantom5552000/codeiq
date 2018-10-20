{
    const R = require('ramda');
    const { PerformanceObserver, performance } = require('perf_hooks');

    let countries = ["Brazil", "Croatia", "Mexico", "Cameroon",
            "Spain", "Netherlands", "Chile", "Australia",
            "Colombia", "Greece", "Cote d'Ivoire", "Japan",
            "Uruguay", "Costa Rica", "England", "Italy",
            "Switzerland", "Ecuador", "France", "Honduras",
            "Argentina", "Bosnia and Herzegovina", "Iran",
            "Nigeria", "Germany", "Portugal", "Ghana",
            "USA", "Belgium", "Algeria", "Russia",
            "Korea Republic"];

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
    let cc = R.map((s:string) => { return s.toLowerCase()}, countries);
    console.log(cc);

    let maxc=0;
    let make_combi = (e:Array<number>):Array<Array<number>> =>{
        let r:Array<Array<number>> = [];
        let com = (e:Array<number>, res:Array<number>):Array<number> =>{

            if(res.length >=2){
                for(let i=0;i<res.length-1;i++){
                    if(R.last(cc[res[i]]) != R.head(cc[res[i+1]])){
                        if(res.length>2){
                            let ccs = []
                            for(let j=0;j<res.length-1;j++){
                                ccs.push(cc[res[j]])
                            }
                            //console.log(ccs.join("-"))
                            if(res.length > maxc){
                                maxc = res.length;
                                console.log(ccs.length)
                                console.log(ccs.join("-"))
                            }

                        }
                        return [];
                    }
                }
            }

            if(e.length == 0) {
                r.push(res);
                return res;
            }
            for(let i=0;i<e.length;i++){
                let nth = R.nth(i, e);
                let rrr = R.clone(res);
                rrr.push(nth);
                let remain = R.remove(i, 1, e);
                //console.log(`${nth}, ${remain}`);
                com(remain, rrr);
            }
            return [];
        }
        com(e, []);
        return r;
    }

    const start = performance.now();

    let numC = countries.length;
    let c = make_combi(R.range(0,numC));
    console.log(`n:${numC}, n!: ${c.length}`);

    const end = performance.now();
    //console.log(found);    
    const elapsed = (end - start);
    const elapsedStr = elapsed.toPrecision(3);
    console.log(`index:${cc}, ${elapsedStr} mSec`);

}
