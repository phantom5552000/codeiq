{
    const R = require('ramda');
    const printf = require('printf');
    const { PerformanceObserver, performance } = require('perf_hooks');

    let number_male = 20;//parseInt(process.argv[2]);
    let number_female = 10;//parseInt(process.argv[3]);
    let count_f = 0;
    const factorial = R.memoize((n:number) => {
        count_f += 1;
        return R.product(R.range(1, n + 1));
        }
    );

    let combi = (q:number, r:number) =>{
        let p = q+r;
        let loop = p - q;
        let prd = 1;
        for(let i=0; i<loop; i++){
            prd = prd * (p - i);
        }
        let b = factorial(r);
        return prd/b;
    }
    let count = 0;
    
    const start = performance.now();
    console.log(`factorial(${number_male}) = ${factorial(number_male)}`);
    console.log(`factorial(${number_female}) = ${factorial(number_female)}`);
    //perm([makeCopy(0,number_male), makeCopy(1,number_female)], [] ,found); //=> [1, 2, 3]
    let c = combi(number_male, number_female);
    console.log(`n: ${number_male}, ${number_female}, combi: ${c}`);

    let sub_list = [];
    for(let m=number_male-1, f=number_female-1; f>=0;m--, f--){
        let c1 = combi(m, f);
        sub_list.push(c1);
        console.log(`  n: ${m}, ${f}, combi: ${c1}`);
    
    }

    const end = performance.now();
    //console.log(found);
    
    const elapsed = (end - start);
    const elapsedStr = elapsed.toPrecision(3);
    
    //console.log("result.len=%d", result.length);
    console.log(`n: ${number_male}, ${number_female}, combi: ${c}  ${elapsedStr} mSec`);
    let a = c - R.sum(sub_list);
    console.log(a);
}