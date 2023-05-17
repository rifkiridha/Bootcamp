function hitungKapital(string){
let hitung=0;
//jawab
let alfabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const kapital = alfabet.split("")
const huruf = string.split("")
for (let i=0;i<huruf.length;i++){
    for(let j=0;j<kapital.length;j++){
        if(huruf[i]==alfabet[j]){
            hitung++
        }
    }
}
return hitung
}


const string1="Hi MniEzzZ"
const string2="Owi Kun"

console.log(hitungKapital(string1))
console.log(string1[0])