import { pipeline } from "stream";

{
    const R = require('ramda');
    const printf = require('printf');
    const { PerformanceObserver, performance } = require('perf_hooks');

    let boys  = 2;//parseInt(process.argv[2]);
    let girls = 1;//parseInt(process.argv[3]);
    if(process.argv.length > 3){
        boys  = parseInt(process.argv[2]);
        girls = parseInt(process.argv[3]);
    
    }
    class Position{
        x: number;
        y: number;
        v: number;
        constructor(x:number, y:number) {
            this.x = x;
            this.y = y;
            this.v = 0;
        }
    };
    let cnt = 1;
    let m: Array<number>[] = new Array(girls+2);
    for ( var i = 0; i < girls+2; i++ ) {
        m[i] = new Array(boys+2);  // （2）
        for(let j=0;j<boys+2;j++){
            m[i][j] = cnt++;
            if(i==0 || j==0){
                m[i][j] = 0;    
            }
        }
    }
    m[1][1] = 1;
    let route = (boys:number, girls:number) =>{
        for(let i=1;i<girls+2;i++){
            for(let j=1;j<boys+2;j++){
                //console.log(i,j);
                if(i==1 && j==1)    continue;
                if(i==j || boys-j==girls-i){
                    m[i][j] = 0;
                }else{
                    m[i][j] = m[i-1][j] + m[i][j-1];
                }
            }
        }
    }
    let print_route = () =>{
        for(let i=0;i<m.length;i++){
            let line = "";
            for(let j=0;j<m[i].length;j++){
                line += m[i][j].toString();
                line += " "
            }
            console.log(line);
        }

    }
    console.log(`boys:${boys}, girls:${girls}`);
    const start = performance.now();
    route(boys,girls);
    const end = performance.now();
    //console.log(found);    
    const elapsed = (end - start);
    const elapsedStr = elapsed.toPrecision(3);
    let ans = m[girls+1][boys-1] + m[girls-1][boys+1];
    //console.log("result.len=%d", result.length);
    print_route();
    console.log(`${boys}, ${girls}, combi: ${ans}  ${elapsedStr} mSec`);
}