let mas = [2,17,13,6,22,31,45,66,100,-18];

function allReverse (f){
    return console.log(f.reverse() , '---------------------reverse');
}

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
allReverse(cWhile(mas));



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
allReverse(cFor(mas));


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
allReverse(cWhileOdd(mas));


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
allReverse(cForOdd(mas));



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
allReverse(cWhileEven(mas));


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
allReverse(cForEven(mas));



// Task 7
//
function cOkten (n,m){
    let mas2 = []
    for (let i = 0 ; i < m.length; i++){
        if (m[i] % n === 0){
            mas2.push('okten');
        }
        else {
            mas2.push(m[i]);
        }
    }
    return (mas2);
}
console.log(cOkten(3,mas));
allReverse(cOkten(3,mas));


// Task 8
//
allReverse(mas);
