function filterNama(nama,cari){
    let newname = nama.filter((nama)=>{
        return nama.includes(cari) 
    })
    return newname
}
    
const nama = ["danu","dini","deni","rizky","rifky","riki","rizzieq","ridwan"]
console.log(filterNama)