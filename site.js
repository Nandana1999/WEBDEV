
function toExcel() {

    var XLSX = require('xlsx'),
request = require('request');
var fs = require('fs');
var jsonfile = require('jsonfile')

var file = 'data.json'

var buf = fs.readFileSync("toExcel.xlsx");
var wb = XLSX.read(buf, {type:'buffer'});

console.log(wb.Sheets);

jsonfile.writeFile(file, wb.Sheets, function (err) {
  console.error(err)
})
    }