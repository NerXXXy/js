let mas = [2,17,13,6,22,31,45,66,100,-18];


// Task 1
//
function cWhile(m) {
    let mas2 = [];
    let i = 0;
    while (i < m.length) {
        mas2.push(m[i]);
        i++
    }
    return mas2
}
console.log(cWhile(mas));



// Task 2
//
function cFor(m){
    let mas2 = [];
    for (let i = 0 ; i < m.length; i++){
        mas2.push(m[i])
    }
    return mas2;
}

console.log(cFor(mas));


// Task 3
//
function cWhileOdd (m){
    let mas2 = [];
    let i = 0;
    while (i < m.length){
        if (m[i] % 2 !== 0){
           mas2.push(m[i]);
        }
        i++
    }
    return mas2;
}
console.log(cWhileOdd(mas));


// Task 4
//
function cForOdd (m){
    let mas2 = []
    for (let i = 0 ; i < m.length; i++){
        if (m[i] % 2 !== 0){
            mas2.push(m[i]);
        }
    }
    return mas2;
}
console.log(cForOdd(mas));



// Task 5
//
function cWhileEven (m){
    let mas2 = [];
    let i = 0;
    while (i < m.length){
        if (m[i] % 2 === 0){
            mas2.push(m[i]);
        }
        i++
    }
    return mas2;
}

console.log(cWhileEven(mas));


// Task 6
//
function cForEven (m){
    let mas2 = [];
    for (let i = 0 ; i < m.length; i++){
           if (m[i] % 2 === 0){
            mas2.push(m[i]);
            }
        }
    return mas2;
    }
console.log(cForEven(mas));



// Task 7
//
function cOkten (n,m){
    let mas2 = []
     for (let i = 0 ; i < m.length; i++){
            if (m[i] % n === 0){
             mas2.push(m[i] = 'okten');
             }
            else {
                mas2.push(m[i]);
            }
         }
     return (mas2);
     }
 console.log(cOkten(3,mas));


// Task 8
//
function mReverse(m){
    console.log(m.reverse());
}
mReverse(mas);


// ------------- Reverse All----------
// Вже як зробив - побачив, що треба було в зворотньому циклі , віднімаючи і ( тобто i--)
// якщо критично - можу переробити кожне завдання окремо пыд зворотній цикл
console.log('--------------All Reverse----------------')

function allReverse (f){
    return console.log(f.reverse());
}

allReverse(cWhile(mas));
allReverse(cFor(mas));
allReverse(cWhileOdd(mas));
allReverse(cForOdd(mas));
allReverse(cWhileEven(mas));
allReverse(cForEven(mas));
allReverse(cOkten(3,mas));











