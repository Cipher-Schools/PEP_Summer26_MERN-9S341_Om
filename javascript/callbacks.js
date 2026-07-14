
// function one() {
//     console.log('This is one');
// }

// function two(fn) {
//     fn()
// }

// // one();
// two(one);

// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// function callGreet(callback) {
//     // callback('Tom');
//     console.log('Start')
//     callback();
//     console.log('End');
// }

// callGreet(greet);
// callGreet(greet('Jerry')); we can't do this

// callGreet(() => {
//     greet('Harry');
// })

// setTimeout(() => {
//     console.log('Hello');
// }, 1000)

// function login() {
//     console.log('1.Logging in..')

//     setTimeout(() => {
//         console.log('2.Logged in successfully')
//     }, 5000)
// }

// function getUser() {
//     console.log('3.Getting user...');
//     setTimeout(() =>{
//         console.log('4.User details loaded')
//     }, 2000)
// }

// function getOrders() {
//     console.log('5.Getting orders...');
//     setTimeout(() => {
//         console.log('6.Orders loaded')
//     }, 1000)
// }

// function getOrderDetails() {
//     console.log('7.Getting orders details...');
//     setTimeout(() => {
//         console.log('8.Order details loaded')
//     }, 3000)
// }

// login();
// getUser();
// getOrders();
// getOrderDetails();



function login(callback) {
    console.log('1.Logging in..')

    setTimeout(() => {
        console.log('2.Logged in successfully')
        callback()
    }, 5000)
}

function getUser(callback) {
    console.log('3.Getting user...');
    setTimeout(() =>{
        console.log('4.User details loaded')
        callback()
    }, 2000)
}

function getOrders(callback) {
    console.log('5.Getting orders...');
    setTimeout(() => {
        console.log('6.Orders loaded');
        callback();
    }, 1000)
}

function getOrderDetails() {
    console.log('7.Getting orders details...');
    setTimeout(() => {
        console.log('8.Order details loaded')
    }, 3000)
}


// login(() => {
//     getUser(() => {
//         getOrders(() => {
//             getOrderDetails()
//         })
//     })
// })


function one(callback) {
    console.log('1')
    callback();
}

function two(callback) {
    console.log('2');
    callback();
}

function three(callback) {
    console.log('3');
    callback();
}

function ten() {
    console.log('10');
    // callback();
}

function four(callback) {
    console.log('4');
    callback();
}

function five(callback) {
    console.log('5');
    callback();
}

function six(callback) {
    console.log('6');
    callback();
}

function seven(callback) {
    console.log('7');
    callback();
}

function eight(callback) {
    console.log('8');
    callback();
}

function nine(callback) {
    console.log('9');
    callback();
}

one(() => {
    two(() => {
        three(() => {
            four(() => {
                five(() => {
                    six(() => {
                        seven(() => {
                            eight(() => {
                                nine(() => {
                                    ten();
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})