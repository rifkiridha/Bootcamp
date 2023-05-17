function hitungRataRata(arr){
//jawaban
let hasil=0
for(i=0;i<arr.length;i++){
hasil+=arr[i]
}
hasil/=arr.length
return hasil
}

const arr=[2,4,6,8,10];
const rataRataArr = hitungRataRata(arr);
console.log(rataRataArr);