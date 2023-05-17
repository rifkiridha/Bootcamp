// IF ELSE STATEMENT
let a = 100
if(a>70){
    console.log("a lebih besar dari 70")
} else {
    console.log("a lebih kecil dari 70")
}
if(a==100){
    console.log("Nilainya 100")
}
let classStatus = "close"
letminuteRemain = 5
if (classStatus="open"){
    console.log("Kelas sedang berjalan")
} else if(minuteRemain<=5){
    console.log("Kelas Bootcamp tersisa 5 menit lagi")
} else {
    console.log("Kelas bootcamp telah berakhir")
}

let grade = 83
if (grade>=70) {
    if (grade>=90){
        console.log("Nilai A")
    } else {
        console.log("Nilai B")
    }
} else {
    console.log("Nilai C")
}

//switch case
console.log("SWITCH CASE")

let tombol=1
switch(tombol){
    case 1:
        console.log("Turn on")
        break;
     case 2:
        console.log("Turn off")
        break;
     case 3:
        console.log("Menu Setting")
        break;
    default:
        console.log("Do Nothing")
}

//Ternary Operator
console.log("")
let x=3;
let hasil = x>5 ? "besar dari 5" : x===5 ? "sama dengan 5" : "kecil dari 5"
console.log(hasil)

//WHILE LOOP
console.log("")
test=3
while (test<10){
    console.log("while loop ke-"+test)
    test++
}

//BILANGAN PRIMA
console.log("")
let n=20, i=2
while(i<=n){
    let prima=true
    let j=2
    while(j<i){
        if(i%j===0){
            prima=false
            break;
        }
        j++
    }
if(prima){
    console.log(i)
}
i++
}

//FOR LOOP
//for(inisiasi;kondisi;incremental){eksekusi}
console.log("")
for(let i=1;i<5;i++){
    console.log("for loop ke-"+i)
}


