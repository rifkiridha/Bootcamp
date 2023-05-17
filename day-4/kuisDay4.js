const fs = require('fs');
const input = fs.readFileSync('teks.txt', 'utf8');
console.log(input)

dataString="["+input+"]"
dataArray=JSON.parse(dataString)
arrayBaru=dataArray.sort(function(a, b){return a-b})
outputString=JSON.stringify(arrayBaru)
finalString=outputString.slice(1,outputString.length-1)


const fs1 = require('fs');
const content=finalString
fs1.writeFileSync('teksHasil.txt', content);

const data1 = fs.readFileSync('teksHasil.txt', 'utf8');
console.log(data1)
