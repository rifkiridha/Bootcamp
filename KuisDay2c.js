function hurufKapital(kalimat){
let alfabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const kapital = alfabet.split("")
const huruf = kalimat.split("")
let sum=0
for (let i=0;i<huruf.length;i++){
    for(let j=0;j<kapital.length;j++){
        if(huruf[i]==alfabet[j]){
            sum++
        }
    }
}
return sum
}

console.log(hurufKapital("Selamat Siang!"))
