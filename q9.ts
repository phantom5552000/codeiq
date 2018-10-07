{
    const R = require('ramda');
    const printf = require('printf');
    const { PerformanceObserver, performance } = require('perf_hooks');

    let result:Array<number> = [];
    let all = [[0,0,0], [1,1]];
    console.log(all);

    let isAllEmpty = (ll:Array<Array<any>>) =>{
        for(let i=0; i<ll.length; i++){
            if(ll[i].length > 0) return false;
        }
        return true;
    }

    let sameNumber = (l:Array<number>):boolean => {
        if(l.length == 0) return false;
        if(l.length % 2 ==1){
            return false;
        }
        return l.length/2 == R.sum(l);
    }
    let perm = (remain:Array<Array<number>>, result:Array<number>, found:Array<number>) => {
        //console.log("remain: ", remain);
        //console.log("  result: ", result);
        //console.log(`count: ${count}`);
        if(sameNumber(result)){
            //console.log(`${result}, sum=${R.sum(result)}, ${sameNumber(result)}`);
            return 0;
        }
        if(isAllEmpty(remain)){
            if(found[0]%1000==0)console.log(`${result}, sum=${R.sum(result)}, ${sameNumber(result)}`);
             //console.log("*** ",result, R.sum(result), sameNumber(result));
            found[0]++;
            }
        
        for(let i=0;i<remain.length;i++){
            //console.log("---%d", i);
            let remain_copy = JSON.parse(JSON.stringify(remain)); // deep copy
            if(remain_copy[i].length == 0)continue;
            let res_copy = JSON.parse(JSON.stringify(result));
            let first = R.nth(0,remain_copy[i]);
            remain_copy[i].pop();
            res_copy.push(first);
            //console.log("  remain_copy: ", remain_copy);
            //console.log("   res_copy: ", res_copy);
    
            perm(remain_copy.slice(), res_copy.slice(), found);
        }
    }
    let    makeCopy = (obj:any, times:number) => {
        let l = [];
        for(let i=0;i<times;i++){
            l.push(obj);
        }
        return l;
    }
    let count = 0;
    let found:Array<number> =[0];
    perm([makeCopy(0,3), makeCopy(1,2)], [] ,found); //=> [1, 2, 3]
    console.log(found);
    
    found[0] = 0;
    perm([makeCopy(0,30), makeCopy(1,20)], [] ,found); //=> [1, 2, 3]
    console.log(found);
    //perm([makeCopy(0,15), makeCopy(1,10)], result); //=> [1, 2, 3]

}