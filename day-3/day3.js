//ARRAY find() dan findIndex()
const ages =[5,10,18,20,21,25,27,30]

function checkAge(age){
    return age > 18
}

console.log(ages.find(checkAge))
console.log(ages.findIndex(checkAge))
console.log(ages.filter(checkAge))
let arr = ages.filter(checkAge)
console.log(arr[0])
console.log(ages)

//ARRAY fill(), push(), slice(), pop(), sort(), reverse()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi",2,3); //mengganti elemen dari array
console.log(fruits)
fruits.push("Melon","Watermelon") //menambah elemen dari array
console.log(fruits)

fruits[2]="Salak"
console.log(fruits)
fruits[6]="Papaya"
console.log(fruits)

const barang = fruits.slice(0,4) //membuat array baru dari data sebagian/seluruh elemen array yang diambil
console.log(barang)
fruits.pop() //menghapus elemen terakhir dari array
console.log(fruits)
cobaPop=fruits.pop() //mereturn nilai terakhir dari array dan menghapus elemen terakhir array
console.log(cobaPop) 
console.log(fruits)

console.log(fruits.sort()) //sort array ascending sesuai urutan alfabet
console.log(fruits.reverse()) //sort array dalam arah reverse

//forEach()
fruits.forEach(daftarNama)

function daftarNama(a,b){
    console.log(`Buah ke-${b+1} adalah ${a}`)
}

//Array Tiga  Dimensi
let arrayTigaDimensi = 
[
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],
    [
        [10,20,30],
        [40,50,60],
        [70,80,90]
    ]
]

console.log(arrayTigaDimensi[0])
console.log(arrayTigaDimensi[0][1])
console.log(arrayTigaDimensi[0][1][2])

//ubah nilai pada elemen
arrayTigaDimensi[0][1][2]=100
console.log(arrayTigaDimensi[0][1][2])
console.log(arrayTigaDimensi)
console.log(arrayTigaDimensi[0])

//Ob
const person = {
    nama:"John Doe",
    umur:30,
    pekerjaan:"Pengembang Web",
    alamat:{
        jalan:"Jl. Raya No. 123",
        kota:"Jakarta",
        negara:"Indonesia",
    },
    hobi:["Olahraga","Musik","Membaca"]
}

console.log(person.hobi[1])
console.log(person.alamat.negara)

person.alamat.negara="Malaysia"
console.log(person.alamat.negara)

person.hobi.push("Menari")
console.log(person.hobi)

//Object.keys untuk membuat array berdasarkan properties
let ambilIdentitas = Object.keys(person)
console.log(ambilIdentitas)

//object to string
let objectToString = JSON.stringify(person)
console.log(objectToString)

//array menjadi string
console.log(fruits.toString())

//parse -> string to JSON (kebalikan dari stringify)
let stringToJSON=JSON.parse('{"nama":"John Doe","umur":30,"pekerjaan":"Pengembang Web","alamat":{"jalan":"Jl. Raya No. 123","kota":"Jakarta","negara":"Malaysia"},"hobi":["Olahraga","Musik","Membaca","Menari"]}')
console.log(stringToJSON.nama)

//waktu
let waktu = new Date()
console.log(waktu)
console.log(waktu.getDate())
console.log(waktu.getMonth())
console.log(waktu.getYear())
console.log(waktu.getHours())

//class
class Orang{
    constructor(nama,umur){
        this.nama = nama;
        this.umur = umur;
    }

getNama(){
    return this.nama
}

getUmur(){
    return this.umur
}

getAll(){
    return `Nama: ${this.nama}, Umur: ${this.umur}`
}
static inputData(nama){
    return new Orang(nama,0)
}
}

const siswa = new Orang("Owi Kun",50)
console.log(siswa.getAll())
const guru = Orang.inputData("Danu")
console.log(guru.getAll())

//class extends
class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  mycar = new Model("Ford", "Mustang");
console.log(mycar.show());