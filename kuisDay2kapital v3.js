function hitungKapital(string){
let hitung=0, hitung1=0;
//jawab
for (let i=0;i<string.length;i++){
    if((string[i]>="A")&&(string[i]<="Z"))
    hitung++
}
for (let i=0;i<string.length;i++){
    if((string[i]>="a")&&(string[i]<="z"))
    hitung1++
}
return (`Kapital = ${hitung} dan kecil = ${hitung1}`)
}


const string1="Hi MniEzzZ!"
const string2="Owi Kun"

console.log(hitungKapital(string1))
console.log(string1.length)