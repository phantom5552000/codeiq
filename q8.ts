{
let printf = require('printf');
const { PerformanceObserver, performance } = require('perf_hooks');

/*
function assert(actual:any, expected:any) {
    console.log('.');
    console.assert(actual === expected, '\nact: ' + actual + '\nexp: ' + expected);
}
function TestSum() {    assert(1+2, 3);}
*/

class Position {
    x: number;
    y: number;
    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }
    add(p:Position):Position{
        return new Position(this.x+p.x, this.y+p.y);
    }
    hit(list:Array<Position>){
        for(let i=0;i<list.length;i++){
            if(list[i].x == this.x
                && list[i].y == this.y) return true;
        }
        return false;
    }
}


let print_xy = (l:Array<Position>) =>{
    let s = "";
    for(let i=0;i<l.length;i++){
        s = s + printf("(%d, %d), ", l[i].x, l[i].y);
    }
    console.log(s);
};

let steps:Array<Position> = [new Position(1,0), new Position(0, -1), new Position(-1,0), new Position(0,1)];
let result:Array<Array<Position>> = [];

let go = (n:number, cur:Position, route:Array<Position>) =>{
    if(route.length == n+1){ // 3進む場合、配列要素は4
        //console.log(route);
        //print_xy(route);
        result.push(route);
        return;
    }
    //let r_org = route.slice();
    for(let s=0;s<steps.length;s++){
        let next = cur.add(steps[s]);
        //if(route.indexOf(next)>=0){
        if(next.hit(route)){
            // 存在した
            continue;
        }
        let r = route.slice();
        //cur = next;
        r.push(next);
        go(n, next, r);
    }
}
for (let i = 0; i < process.argv.length; i++) {
    console.log("argv[" + i + "] = " + process.argv[i]);
}
let n = 3;
if(process.argv.length >=2){ 
    n = parseInt(process.argv[2]);
}

let r:Array<Position> = [];
r.push(new Position(0,0));
r.push(new Position(1,0));


const start = performance.now();
go(n, new Position(1,0), r);
const end = performance.now();

const elapsed = (end - start);
const elapsedStr = elapsed.toPrecision(3);

//console.log("result.len=%d", result.length);
console.log(`n: ${n}, len: ${result.length*4}, elapsed: ${elapsedStr} mSec`);



}