{
    /*
    function assert(actual:any, expected:any) {
        console.log('.');
        console.assert(actual === expected, '\nact: ' + actual + '\nexp: ' + expected);
    }
    function TestSum() {    assert(1+2, 3);}
    */
    let reverse = function (s:string){
        return s.split("").reverse().join("");
    }

    let date = new Date(1964, 10 - 1, 10);
    let last_date = new Date(2020, 7 - 1, 24);

    for(let i=0;date <= last_date;i++){
        let n = date.getFullYear()*10000 + (date.getMonth()+1)*100 + date.getDate();
        if(n.toString(2) == reverse(n.toString(2))){
            console.log("%d %s %s", n, n.toString(2), reverse(n.toString(2)));
        }
        date.setDate(date.getDate() + 1);
        //if(i>10)break;
    }
}