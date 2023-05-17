function filterNama(nama,cari){
    arr=[""]
    k=0
    for(i=0;i<nama.length;i++){
        if(nama[i].includes(cari)){
            arr[k]=nama[i]
            k++
        }
}
return arr
}
    
const nama = ["danu","dini","deni","rizky","rifky","riki","rizzieq","ridwan"]
const cari="dan"
console.log(filterNama(nama,cari))