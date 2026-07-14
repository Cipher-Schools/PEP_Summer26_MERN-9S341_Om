// // console.log('A');
// // console.log('B');
// // console.log('C');

// let a = 5;

// var b = 6;

// function sayHello() {
//     let c = 10;
//     console.log('Hello');
// }

// console.log(a);

// sayHello();


// scope

// function scope() {

//     if (true) {
//         // let num = 5;
//         // const num = 10;
//         var num = 20;
//         // console.log(num);
//     }
//     // console.log(num);
// }
// console.log(num);

// scope();


// Hoisting
// Hoisting means javascript moves variables and function declarations to 
// the top of their scope before running the code.

// console.log(num1);
// console.log(num2);
// console.log(num3);

// sayHi();

// function sayHi() {
//     console.log('Hi');
// }

// let num1 = 5;
// const num2 = 6;
// var num3 = 7

// let num1 = 8;
// const num2 = 8;
// var num3 = 10;

// console.log(num3);

// num1 = 10;
// console.log(num1);

// num2 = 10;
// console.log(num2);

// num3 = 10;
// console.log(num3);


// Closures:  A closure is when  an inner function remembers the variables from its outer
//                function, even when the execution of outer function has finished.


// function outer() {

//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }

// const counter = outer();
// counter();
// counter();


// function createBankAccount(initialBalance) {
//     let balance = initialBalance;

//     return {
//         deposit(amount) {
//             balance += amount;
//             console.log(`INR ${amount} is deposited. New Balance: INR ${balance}`)
//         },

//         withdraw(amount) {
//             if (amount > balance) {
//                 console.log('Insufficient funds!!');
//                 return;
//             }
//             balance -= amount
//             console.log(`INR ${amount} is withdrawn. Current Balance: INR ${balance}`)
//         },

//         getBalance() {
//             return balance;
//         }
//     }
// }

// const account = createBankAccount(100);
// // console.log(account.getBalance());
// account.deposit(50);
// // account.withdraw(30);
// account.withdraw(151);


console.log('Start');

setTimeout(() => {
    console.log('Hello')
}, 0);

console.log('End')

// setTimeout(() => console.log('Hi'), 1000);

// setInterval(() => console.log('Hello'), 1000);



console.log('1');
Promise.resolve().then(() => console.log('9'))
console.log('2');
setTimeout(() => console.log('3'), 3000);
console.log('4')
setTimeout(() => console.log('5'), 1000);
Promise.resolve().then(() => console.log('8'))
console.log('6')
setTimeout(() => console.log('7'), 2000);