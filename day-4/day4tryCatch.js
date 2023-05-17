function pembagian(angka1, angka2){
    try{
        if(angka2===0){
            throw "Gabisa dibagi cuy!"
        }
        return angka1/angka2
    } catch(error){
        console.error(error);
        return null;
    }
}

let pembagiun = pembagian(10,0);
console.log(pembagiun);
let pembagiun2=pembagian(10,2);
console.log(pembagiun2)