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

    //console.log(R);
    //const Math = require('Math');

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
    let make_combi = (e:Array<number>):Array<Array<number>> =>{
        let r:Array<Array<number>> = [];
        let com = (e:Array<number>, res:Array<number>):Array<number> =>{
            // リストから一つ取り出す
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

    let c = make_combi(R.range(0,n));
    console.log(`n:${n}, n!: ${c.length}`);

    const end = performance.now();
    //console.log(found);    
    const elapsed = (end - start);
    const elapsedStr = elapsed.toPrecision(3);
    console.log(`index:${cc}, ${elapsedStr} mSec`);

}
