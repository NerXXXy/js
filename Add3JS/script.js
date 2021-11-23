
// let mas = [];
//
// // Task 1
//
// function addEvenNumbers (n , m){
//     for (let i = 1 ; i < n*2+1; i++){
//         if (i % 2 === 0) {
//             mas.push(i);
//         }
//     }
// }
// function addOddNumbers (n , m){
//     for (let i = 1 ; i < n*2+1; i++){
//         if (i % 2 !== 0) {
//             mas.push(i);
//         }
//     }
// }
// function addRandomNumber (n , m){
//     for (let i = 0 ; i < n ; i++){
//         mas.push(Math.floor(Math.random() * 101) )
//     }
// }
// function addRandomFromToNumbers (n , m){
//     for (let i = 0 ; i < n; i++){
//         mas.push(Math.floor((Math.random()*733)+8));
//     }
// }
//
// addEvenNumbers(50, mas);
// addOddNumbers(50, mas);
// addRandomNumber(20, mas);
// addRandomFromToNumbers(20,mas);
//
// // Task 2
// console.log('Task 2');
// function getThirdElement (m){
//     for (let i = 0 ; i < m.length; i += 3){
//             console.log(m[i]);
//     }
// }
//
// getThirdElement(mas);
//
//
// // Task 3
// console.log('Task 3');
// function getThirdEvenElement (m){
//     for (let i = 0 ; i < m.length ; i+= 3){
//         if (m[i] % 2 === 0){
//             console.log(m[i])
//         }
//     }
// }
//
// getThirdEvenElement(mas);
//
//
// // Task 4
// console.log('Task4')
// let mas2 = [];
//
// function pushThirdEvenElement (m){
//     for (let i = 0 ; i < m.length ; i+= 3){
//         if (m[i] % 2 === 0){
//             mas2.push(m[i]);
//         }
//     }
// }
//
// pushThirdEvenElement(mas)
// console.log(mas2);
//
//
//
// //Task 5
// console.log('Task 5');
// let mas3 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// function nextEven  (m){
//     for (let i = 0 ; i < m.length; i++){
//         if( m[i+1] % 2 === 0){
//             console.log(m[i]);
//         }
//     }
// }
// nextEven(mas3);
//
//


// Task 6

// console.log('Task 6');
//
// let prices = [100,250,50,168,120,345,188];
// function getEverage (m){
//     let sum = 0;
//     let everage = 0;
//     for (let i = 0 ; i < m.length; i++ ){
//         sum += m[i]
//     }
//     everage = sum / m.length;
//     return everage;
// }
// console.log(`Середня вартість покупки складає ${Math.round(getEverage(prices))} гривні`);




// Task 7

// console.log('Task 7')
// let mas4 = [];
// let mas5 =[];
//
// function fillRandom (m, n){
//     for (let i = 0 ;i < n ; i++){
//         m.push(Math.floor(Math.random() * 11))
//     }
// }
// fillRandom(mas4,10);
// console.log(mas4)
//
// function multiplyToAnotherMas (fMas , sMas){
//     for (let i = 0  ; i < fMas.length ; i++){
//         sMas.push(fMas[i]*5);
//     }
// }
//
// multiplyToAnotherMas(mas4, mas5);
// console.log(mas5);



// Task 8

// console.log('Task 8');
// let awesomeMas1 = [4, 'h' , true , 'five' , 5 , 8 , false , 'lol' , 3 , 'lmao'];
// let awesomeMas2 = [];
//
// function getTypeFromMas (fMas , sMas , type){
//     for (let i = 0 ; i < fMas.length; i++){
//         if ( typeof fMas[i] === `${type}`){
//             sMas.push(fMas[i]);
//         }
//     }
// }
// getTypeFromMas(awesomeMas1,awesomeMas2, 'number');
// console.log(awesomeMas2);




// Task 9

// console.log('Task 9');
//  let usersWithId = [
//      {id: 1, name: 'vasya', age: 31, status: false},
//      {id: 2, name: 'petya', age: 30, status: true},
//      {id: 3, name: 'kolya', age: 29, status: true},
//      {id: 4, name: 'olya', age: 28, status: false}
//  ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// function connectObjects(fObj , sObj){
//     for(let i = 0; i < fObj.length; i++){
//         for(let j = 0 ; j < sObj.length; j++){
//             if(fObj[i].id == sObj[j].user_id){
//                 fObj[i]['Adress'] = sObj[j];
//
//             }
//         }
//     }
// }
//
// connectObjects(usersWithId , citiesWithId);
// console.log(usersWithId);


// Task 10,11

// let mas = [3,5,3,2,1,7,8,9,4,3];
// let masC = [];
//
//
// function getEven (m){
//     for (let i = 0 ; i < m.length; i++){
//         if ( m[i] % 2 === 0){
//             console.log(m[i]);
//         }
//     }
// }
// getEven(mas);
//
// function copyMas (m , mC){
//     for (let i = 0 ; i < m.length; i++){
//         mC[i] = m[i]
//     }
//     console.log(mC);
// }
//
// copyMas(mas, masC);



// Task 12,13,14

// let mas = [ 'a', 'b', 'c'];
//
// function makeWordFor (m){
//     let word = '';
//     for (let i = 0 ; i < m.length ; i++){
//         word += m[i];
//     }
//     return word;
// }
//
// console.log(makeWordFor(mas));
//
// function makeWordWhile (m){
//     let word = '';
//     let i = 0;
//     while (i < m.length){
//         word += m[i];
//         i++
//     }
//     return word;
// }
// console.log(makeWordWhile(mas));
//
// function makeWordForIn (m){
//     let word = '';
//     for ( let value of m){
//       word +=  value
//     }
//     return word
// }
// console.log(makeWordForIn(mas));









