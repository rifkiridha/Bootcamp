//Recursive

function cetak(name,number){
    if(number!==0){
        console.log(name)
        cetak(name,number-1)
    }
}

cetak("rifki",5);