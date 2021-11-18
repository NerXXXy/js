// Task 1
//
// let mas1 = [4,7,3,4,9];
// let mas2 = ['h','e','l','l','o'];
// let mas3 = [4,'x',5,'y',true];
//
// console.log(mas1);
// console.log(mas2);
// console.log(mas3);


// Task 2
//
// let emptyMas = [];
// emptyMas[0] = 10;
// emptyMas[2] = 20;
// emptyMas[1] = 30;
// console.log(emptyMas);


// Task 3
//
// function addDiv (n){
//     for(let i = 0 ; i < n; i++){
//         document.write(`<div>Hello Okten</div>`);
//     }
// }
// addDiv(10);



// Task 4
//
// function addDivId (n){
//     for(let i = 0 ; i < n; i++){
//         document.write(`<div>Hello Okten</div>` + (i+1));
//     }
// }
// addDivId(10);


// Task 5
//
// function addH1 (n){
//     let i = 0;
//     while(i < n){
//         document.write(`<h1>Hello Okten!</h1>`);
//         i++;
//     }
// }
//
// addH1(10);



// Task 6
//
// function addH1Id (n){
//     let i = 0;
//     while(i < n){
//         document.write(`<h1>Hello Okten!</h1>` + (i+1));
//         i++;
//     }
// }
//
// addH1Id(10);



// Task 7
//
// function numMas (n){
//     let mas = [];
//     for(let i = 0 ; i < n;i++){
//         mas.push(Math.floor(Math.random() * (100 + 100 + 1)) - 100)
//     }
//     return mas;
// }
//
// console.log(numMas(10));



// Task 8
//
// function strMas (n){
//     let mas = [];
//     for (let i = 0 ; i < n; i++){
//         mas.push(Math.random().toString(36).substring(7));
//     }
//     return mas;
// }
// console.log(strMas(10));



// Task 9
//
// function anyMas (n){
//     let mas = [];
//     let rand = 0;
//     for (let i = 0 ; i < n ; i++){
//         rand = Math.floor(Math.random() * (10 + 10 + 1)) - 10;
//         if (rand > 0){
//             mas.push(Math.floor(Math.random() * (100 + 100 + 1)) - 100);
//         }
//         else {
//             mas.push(Math.random().toString(36).substring(7))
//         }
//     }
//     return mas;
// }
// console.log(anyMas(10));



//  Task 10
//
// function takeBool (n){
//     let mas = [];
//     let mas2 = [];
//     let rand = 0;
//     for (let i = 0 ; i < n ; i++){
//         rand = Math.floor(Math.random() * (10 + 10 + 1)) - 10;
//         if (rand < -3 ){
//             mas.push(Math.floor(Math.random() * (100 + 100 + 1)) - 100);
//         }
//         else if (rand > 3) {
//             mas.push(Math.random().toString(36).substring(7))
//         }
//         else {
//             mas.push(true);
//         }
//     }
//     for (let j = 0; j < mas.length ; j++){
//         if (typeof(mas[j]) === 'boolean'){
//             mas2.push(mas[j]);
//         }
//     }
//     return mas2;
// }
// console.log(takeBool(10));



// Task 11
//
// function takeNum (n){
//     let mas = [];
//     let mas2 = [];
//     let rand = 0;
//     for (let i = 0 ; i < n ; i++){
//         rand = Math.floor(Math.random() * (10 + 10 + 1)) - 10;
//         if (rand < -3 ){
//             mas.push(Math.floor(Math.random() * (100 + 100 + 1)) - 100);
//         }
//         else if (rand > 3) {
//             mas.push(Math.random().toString(36).substring(7))
//         }
//         else {
//             mas.push(true);
//         }
//     }
//     for (let j = 0; j < mas.length ; j++){
//         if (typeof(mas[j]) === 'number'){
//             mas2.push(mas[j]);
//         }
//     }
//     return mas2;
// }
// console.log(takeNum(10));



// Task 12
//
// function takeStr (n){
//     let mas = [];
//     let mas2 = [];
//     let rand = 0;
//     for (let i = 0 ; i < n ; i++){
//         rand = Math.floor(Math.random() * (10 + 10 + 1)) - 10;
//         if (rand < -3 ){
//             mas.push(Math.floor(Math.random() * (100 + 100 + 1)) - 100);
//         }
//         else if (rand > 3) {
//             mas.push(Math.random().toString(36).substring(7))
//         }
//         else {
//             mas.push(true);
//         }
//     }
//     for (let j = 0; j < mas.length ; j++){
//         if (typeof(mas[j]) === 'string'){
//             mas2.push(mas[j]);
//         }
//     }
//     return mas2;
// }
// console.log(takeStr(10));



// Task 13
//
// let mas = [];
// mas[0]= 1;
// mas[1] = 'h';
// mas[2] = false;
// mas[3] = 4;
// mas[4] = {name :'vasya'};
// mas[5] = 0;
// mas[6] = [2,5,7];
// mas[7] = 3;
// mas[8] = true;
// mas[9] = 'b';
//
// function showMasEl(m){
//     for (let i = 0; i < m.length; i++){
//         console.log(m[i]);
//     }
// }
// showMasEl(mas);


// Task 13 - Task 16  (було питання)
//
// function steps (number,step) {
//
//     for (let i = 0 ; i < number; i += step){
//         if (step >= 1){
//             document.write(`<p>${i+1}</p>`)
//             console.log(i+1);
//         }
//         else {
//             return console.log('Вічний цикл');
//         }
//     }
// }
// steps(10,2);


// Task 17
//
// function returnEven(n){
//     for (let i = 0 ; i < n ; i++){
//         if ( i % 2 == 0){
//             document.write(`<p>${i}</p>`);
//             console.log(i);
//         }
//         else{
//             continue;
//         }
//     }
// }
// returnEven(10);


// Task 18
//
// function returnOdd (n){
//     for (let i = 0 ; i < n ; i++){
//         if ( i % 2 !== 0){
//             document.write(`<p>${i}</p>`);
//             console.log(i);
//         }
//        else{
//              continue;
//         }
//     }
// }
// returnOdd(10);



















