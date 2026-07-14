
// function hello() {

//     return Promise.resolve('Hello');
// }

// hello()
// .then(data => console.log(data));


// async function hello() {
//     return 'hello';
// }

// hello()
// .then(data => console.log(data));

function login() {
    console.log('1.Logging in..')

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2.Logged in successfully')
            resolve();
        }, 5000)
    })
}

function getUser() {
console.log('3.Getting user...');

return new Promise((resolve) => {
    setTimeout(() =>{
        console.log('4.User details loaded')
        resolve();
    }, 2000)
})
}

function getOrders() {
console.log('5.Getting orders...');

return new Promise((resolve) => {
    setTimeout(() => {
        console.log('6.Orders loaded');
        resolve();
    }, 1000)
})
}

function getOrderDetails() {
console.log('7.Getting orders details...');
setTimeout(() => {
    console.log('8.Order details loaded')
}, 3000)
}


async function loadData() {
    await login();
    await getUser();
    await getOrders();
    await getOrderDetails();
}

loadData();