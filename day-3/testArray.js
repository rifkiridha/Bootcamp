const orang0={
    namaDepan:"Sasuke",
    namaBelakang:"Uchiha",
    umur:26,
    alamat:"Konoha"
}

const orang1={
    namaDepan:"Sasuke",
    namaBelakang:"Uchiha",
    umur:26,
    alamat:"Konoha"
}

arr = [orang0,orang1]
console.log(testArray(orang0,orang1))

function testArray(orang0,orang1){
arr1=['']
arr1[0]=orang0
arr1[1]=orang1
return arr1
}
