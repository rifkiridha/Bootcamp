class siswa {
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    getData(){
        return` 
    Nama : ${this.name},
    Umur : ${this.age}, 
    Gender : ${this.gender}`
    }
}

class nomorId extends siswa {
    constructor(name,age,gender,idSiswa) {
      super(name,age,gender);
      this.idSiswa = idSiswa;
    }
    getStudentInfo() {
        return` 
    Nama : ${this.name},
    Umur : ${this.age}, 
    Gender : ${this.gender}
    ID Siswa : ${this.idSiswa}`
    }
}

const siswa1 = new siswa("Diki Slebew",25,"Male");
console.log(siswa1.getData());

const newSiswa = new nomorId("Lucinta noona",20,"Female","12345");
console.log(newSiswa.getStudentInfo());