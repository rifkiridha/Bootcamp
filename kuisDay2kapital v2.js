function hitungKapital(string){
let hitung=0;
//jawab
let alfabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
for (let i=0;i<string.length;i++){
    for(let j=0;j<alfabet.length;j++){
        if(string[i]==alfabet[j]){
            hitung++
        }
    }
}
return hitung
}

const string1="Hi MniEzzZ"
const string2="Owi Kun"

console.log(hitungKapital(string1))