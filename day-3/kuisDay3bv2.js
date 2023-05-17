function filterNama(nama){
    
    return nama.includes("dan")
}
    
const nama = ["danu","dini","deni","rizky","rifky","riki","rizzieq","ridwan"]
console.log(nama.filter(filterNama))