const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const readFile=("HelloWorld.txt") => {
    return new Promise ((resolve, reject)=> {
        fs.readFile('Hello World.txt', 'utf-8', function (err, data) {
            if (err) {
                reject(err)
                return
            }
            resolve('File written successfully');
        }
});
});
};

fs.writeFile('test.txt', 'Hello World!', function (err) { 
    if (err){ 
        console.log(err);
    }
    else{
        console.log('Write operation complete.');
    }
});