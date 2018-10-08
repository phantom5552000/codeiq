"use strict";
exports.__esModule = true;
{
    var R = require('ramda');
    var printf = require('printf');
    var _a = require('perf_hooks'), PerformanceObserver_1 = _a.PerformanceObserver, performance_1 = _a.performance;
    var boys = 2; //parseInt(process.argv[2]);
    var girls = 1; //parseInt(process.argv[3]);
    if (process.argv.length > 3) {
        boys = parseInt(process.argv[2]);
        girls = parseInt(process.argv[3]);
    }
    var Position = /** @class */ (function () {
        function Position(x, y) {
            this.x = x;
            this.y = y;
            this.v = 0;
        }
        return Position;
    }());
    ;
    var cnt = 1;
    var m_1 = new Array(girls + 2);
    for (var i = 0; i < girls + 2; i++) {
        m_1[i] = new Array(boys + 2); // （2）
        for (var j = 0; j < boys + 2; j++) {
            m_1[i][j] = cnt++;
            if (i == 0 || j == 0) {
                m_1[i][j] = 0;
            }
        }
    }
    m_1[1][1] = 1;
    var route = function (boys, girls) {
        for (var i_1 = 1; i_1 < girls + 2; i_1++) {
            for (var j = 1; j < boys + 2; j++) {
                //console.log(i,j);
                if (i_1 == 1 && j == 1)
                    continue;
                if (i_1 == j || boys - j == girls - i_1) {
                    m_1[i_1][j] = 0;
                }
                else {
                    m_1[i_1][j] = m_1[i_1 - 1][j] + m_1[i_1][j - 1];
                }
            }
        }
    };
    var print_route = function () {
        for (var i_2 = 0; i_2 < m_1.length; i_2++) {
            var line = "";
            for (var j = 0; j < m_1[i_2].length; j++) {
                line += m_1[i_2][j].toString();
                line += " ";
            }
            console.log(line);
        }
    };
    console.log("boys:" + boys + ", girls:" + girls);
    var start = performance_1.now();
    route(boys, girls);
    var end = performance_1.now();
    //console.log(found);    
    var elapsed = (end - start);
    var elapsedStr = elapsed.toPrecision(3);
    var ans = m_1[girls + 1][boys - 1] + m_1[girls - 1][boys + 1];
    //console.log("result.len=%d", result.length);
    print_route();
    console.log(boys + ", " + girls + ", combi: " + ans + "  " + elapsedStr + " mSec");
}
