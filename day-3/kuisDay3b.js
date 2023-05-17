function filterNama(nama,cari){
    let k=0
    const arr = [""]
    for (i=0;i<nama.length;i++){
    for(j=0;j<nama[i].length-cari.length+1;j++){
        parsial=nama[i].slice(j,j+cari.length)
        if(parsial===cari&&cari!=""){
            arr[k]=nama[i]
            k++
        }
    }
}
    return arr
}
const nama = ["danu","dini","deni","rizky","rifky","riki","rizzieq","ridwan"]
const cari = "dan"
console.log(filterNama(nama,cari))