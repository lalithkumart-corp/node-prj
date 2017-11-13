var express = require('express');
var app = express();
var fs = require('fs');

// console.log('hi');
// console.log(process.argv)
console.log(process.env.BASE_URL);

printCurrTime();


/*
 * Write Stream. Here we write contents to a file (as well as it might create a new file, if not present)
*/
/*
const file = fs.createWriteStream('./big.file');
for(var i=0; i<= 30000; i++) {
  file.write(i+1 +'- This is a new line in this file... \n');
}
file.end();

*/


/*
 * Here the contents of a file is read and passed to the client.
 * Two ways:
    * with ReadStream
    * With readFile (methods of 'fs' module)
*/ 
/* 
app.get('/bigfile', function(request,response){
    
    // --------- WAY-1 -----------
    // const src = fs.createReadStream('./big.file');
    // src.pipe(response);
    
    // --------- WAY-2 -----------
    fs.readFile('./big.file', function(err, content){
        response.end(content);
    });
});

*/


/*
 * Reading contents of a file and printing in server console.
 */
/*
fs.readFile('./big.file', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log(data);
});
*/


/*
 * Reading contents of a file in synchronoous way and printing in server console.
 */
/*
 try {  
    var data = fs.readFileSync('./big.file', 'utf8');
    console.log(data);    
} catch(e) {
    console.log('Error:', e.stack);
}
*/

// const src = fs.createReadStream('./big.file');
// src.pipe(process.stdout);

printCurrTime();
app.listen(8080);

function printCurrTime(){
    var aDate = new Date();
    console.log('\n \n \n \n \n --------------------------------------------------------------------')
    console.log(aDate.getMinutes() + ' : ' + aDate.getSeconds());
}