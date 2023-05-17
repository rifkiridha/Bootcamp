function updateSiswa(newData){
    if(newData.name!=null){
    siswa.name=newData.name
    }
    if(newData.age!=null){
        siswa.age=newData.age
    }
    if(newData.address!=null){
    siswa.address=newData.address
    }
}

const siswa = {
    name:"Eimi Fukada",
    age: 25,
    address:"Tokyo, Japan",
};

const newData = {
    name:"Uchiha Madara",
    age: 80,
}
updateSiswa(newData)
console.log(siswa)