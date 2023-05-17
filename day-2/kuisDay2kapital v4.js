function hitungKapital(string){
let hitung=0;
//jawab
for (let i=0;i<string.length;i++){
    if((string[i]===string[i].toUpperCase())&&(string[i]!==string[i].toLowerCase()))
    hitung++
}
return hitung
}

const string1="Hi MniEzzZ!!"
const string2="Owi Kun"

console.log(hitungKapital(string1))