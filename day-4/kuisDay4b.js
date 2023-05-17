async function sortir() {
    //baca data
    const fs = require('fs');
    const input = await fs.readFileSync('teks.txt', 'utf8');

    //mengubah data
    dataString = "[" + input + "]"
    dataArray = JSON.parse(dataString)
    arrayBaru = dataArray.sort(function (a, b) { return a - b })
    outputString = JSON.stringify(arrayBaru)
    finalString = outputString.slice(1, outputString.length - 1)


    //hasil hitung
    const fs1 = require('fs');
    const content = finalString
    await fs1.writeFileSync('teksHasil.txt', content);

    const data1 = fs.readFileSync('teksHasil.txt', 'utf8');
    //hasil eksekusi
    console.log(input)
    console.log(data1)
}

console.log("mulai");
sortir();
console.log("akhir");