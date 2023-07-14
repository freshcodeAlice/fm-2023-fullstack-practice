const sum = (a,b) => a+b;
const sub = (a,b) => a-b;
const multy = (a,b) => a*b;
const div = (a,b) => a/b;
/*
function calculator(a,b,operator){
    switch(operator) {
        case 'sum':
            return sum(a,b);
        case 'sub': 
            return sub(a,b);
        case 'multy':
            return multy(a,b);
        case 'div':
            return div(a,b);
    }
}
*/

const calculator = {
    sum: sum,
    sub: sub,
    multy: multy,
    div: div
};


calculator[operator](a,b);
