const fs = require('fs');

// fs.readFile('hello.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log('Error: ', err);
//         return;
//     }
//     console.log(data);
// })

try {
    const data = fs.readFileSync('hello.txt', 'utf-8');
    console.log(data);
} catch(err) {
    console.log('Error: Error while reading');
}

console.log('Hello');

// fs.writeFile(
//     'hello1.txt',
//     'This is node class',
//     (err) => {
//         if(err) {
//             console.log('Error while writing.')
//         }
//         console.log('Written!')
//     }
// )

// fs.appendFile('hello2.txt', '\nFirst Class', (err) => {
//     if (err) {
//         console.log('Unable to append');
//         return;
//     }
//     console.log('Appended')
// })


// fs.unlink('hello2.txt', (err) => {
//     if(err) {
//         console.log('delete failed');
//         return;
//     }
//     console.log('Deleted');
// })


