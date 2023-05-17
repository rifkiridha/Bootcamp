//NILAI RATA - RATA
let mtk=80
let fisika=80
let kimia=80
let nilai=(mtk+fisika+kimia)/3
if ((mtk>=0)&&(mtk<=100)&&(fisika>=0)&&(fisika<=100)&&(kimia>=0)&&(kimia<=100)){
    if(nilai>=80){
        console.log("Selamat, anda lulus dengan baik!")
    } else if(nilai>=60){
        console.log("Anda lulus")
    } else{
        console.log("Anda tidak lulus")
    }
    } else{
    console.log("Nilai Tidak valid")
}

//NILAI RATA - RATA CARA AWAL
let mtk1=mtk
let fisika1=fisika
let kimia1=kimia
let nilai1=(mtk1+fisika1+kimia1)/3
if ((mtk1>=0)&&(mtk1<=100)){
    if((fisika1>=0)&&(fisika1<=100)){
    if((kimia1>=0)&&(kimia1<=100)){
    if(nilai1>=80){
        console.log("Selamat, anda lulus dengan baik!")
    } else if(nilai1>=60){
        console.log("Anda lulus")
    } else{
        console.log("Anda tidak lulus")
    }
    } }}else{
        console.log("Nilai Tidak valid")
    }
