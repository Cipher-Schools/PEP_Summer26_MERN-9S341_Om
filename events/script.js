const grandparent = document.querySelector('#grandParent');
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const body = document.querySelector('body');

grandparent.addEventListener('click', () => {
    console.log('grandparent - event bubbling');
})

parent.addEventListener('click', () => {
    console.log('Parent - event bubbling')
})

child.addEventListener('click', () => {
    console.log('Child - event bubbling')
})

grandparent.addEventListener('click', () => {
    console.log('grandparent - event capturing');
}, true)

parent.addEventListener('click', () => {
    console.log('Parent - event capturing')
}, true)

child.addEventListener('click', () => {
    console.log('Child - event capturing')
}, true)

body.addEventListener('click', () => {
    console.log('body - event bubbling')
})

body.addEventListener('click', () => {
    console.log('body - event capturing')
}, true)