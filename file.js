const fs = require('fs');


// fs.writeFileSync('./test.txt', 'Hey There');

// async

// fs.writeFile('./test.txt', 'Hey There Async',(err) => {});

// const resuts = fs.readFileSync("./contacts.txt", 'utf-8');
// 
// console.log(resuts)

// fs.readFile("./contacts.txt", 'utf-8', (err,result) => {
    // if(err) {
        // console.log('Error', err)
    // }
    // else{
        // console.log(result)
    // }
// })


// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

// fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`)

// fs.cpSync('./test.txt', './copy.txt');

// fs.unlinkSync('./copy.txt')

// console.log(fs.statSync('./test.txt'));
fs.mkdirSync("./my-docs/a/b",{recursive:true});