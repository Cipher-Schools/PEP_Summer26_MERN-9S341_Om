
// const promise = new Promise((resolve, reject) => {

//     // let success = true;
//     let success = false;

//     setTimeout(() => {

//         if (success) {
//             resolve('Success');
//         } else {
//             reject('Failure');
//         }

//     }, 1000)
// });

// promise
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() => {
//     console.log('Final Message');
// })


// function login() {
//     console.log('1.Logging in..')

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('2.Logged in successfully')
//             resolve();
//         }, 5000)
//     })
// }

// function getUser() {
//     console.log('3.Getting user...');
    
//     return new Promise((resolve) => {
//         setTimeout(() =>{
//             console.log('4.User details loaded')
//             resolve();
//         }, 2000)
//     })
// }

// function getOrders() {
//     console.log('5.Getting orders...');
    
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('6.Orders loaded');
//             resolve();
//         }, 1000)
//     })
// }

// function getOrderDetails() {
//     console.log('7.Getting orders details...');
//     setTimeout(() => {
//         console.log('8.Order details loaded')
//     }, 3000)
// }


// login()
// .then(getUser)
// .then(getOrders)
// .then(getOrderDetails);


function getProducts() {
    return new Promise((resolve, reject) => {
        // let success = true;
        let success = false;

        setTimeout(() => {
            if(success) {
                resolve('Products Loaded');
            } else {
                reject('Product loading failed');
            }
        }, 3000)
    })
}

function getOffers() {
    return new Promise((resolve, reject) => {
        // let success = true;
        let success = false;
        setTimeout(() => {
            if(success) {
                resolve('Offers Loaded');
            } else {
                reject('Offers loading failed');
            }
        }, 1000)
    })
}

function getCategories() {
    return new Promise((resolve, reject) => {
        // let success = true;
        let success = false;
        setTimeout(() => {
            if(success) {
                resolve('Categories Loaded');
            } else {
                reject('Categories loading failed');
            }
        }, 2000)
    })
}


// Promise.all([
//     getProducts(),
//     getOffers(),
//     getCategories()
// ])
// .then(data => {
//     console.log('Success: ', data);
// })
// .catch(error => {
//     console.log('Error: ', error);
// })

// Promise.allSettled([
//     getProducts(),
//     getOffers(),
//     getCategories()
// ])
// .then(data => {
//     console.log('Success: ', data);
// })
// .catch(error => {
//     console.log('Error: ', error);
// })

// Promise.race([
//     getProducts(),
//     getOffers(),
//     getCategories()
// ])
// .then(data => {
//     console.log('Success: ', data);
// })
// .catch(error => {
//     console.log('Error: ', error);
// })


// Promise.any([
//     getProducts(),
//     getOffers(),
//     getCategories()
// ])
// .then(data => {
//     console.log('Success: ', data);
// })
// .catch(error => {
//     console.log('Error: ', error);
// })


// async function load() {
    // await login();
    // await getUser();
    // await getOrders();
    // await getOrderDetails()
// }

// load();

Promise.any([
    getProducts(),
    getOffers(),
    getCategories()
])
.then((data) => console.log('Data: ',data))
.catch(err => console.log('Error: ', err));