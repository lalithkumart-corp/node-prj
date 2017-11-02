var fs = require('fs');
var sMyTemplate = {
    results : fs.readFileSync('../assets/templates/results.ejs', 'utf-8')
};