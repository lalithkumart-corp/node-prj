// var myTemplate = {
//     results : '/public/assets/templates/results.ejs',
// }

var fs = require('fs');
var sMyTemplate = {
    results : fs.readFileSync('results.ejs', 'utf-8')
};