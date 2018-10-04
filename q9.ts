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

    let perm = (remain:Array<Array<number>>, result:Array<number>) => {
        console.log("remain: ", remain);
        console.log("result: ", result);
        if(isAllEmpty(remain)){
            console.log(result);
            return true;
        }
        
        let res_copy = result.slice();
        for(let i=0;i<remain.length;i++){
            console.log("---%d", i);
            let remain_copy = remain.slice(); // deep copy
            if(remain_copy[i].length == 0)continue;

            let first = R.nth(0,remain_copy[i]);
            remain_copy[i].pop();
            res_copy.push(first);
            //console.log("remain_copy: ", remain_copy);
            //console.log("res_copy: ", res_copy);
    
            perm(remain_copy.slice(), res_copy.slice());

        }
        
        //=> [1, 2, 3]
        //console.log(x);
    }
    perm(all, result); //=> [1, 2, 3]

}