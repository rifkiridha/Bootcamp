class persegi{
    constructor(lebar,tinggi){
        this.lebar=lebar
        this.tinggi=tinggi
    }
    luas(){
        return this.lebar*this.tinggi
    }
}
luasPersegi = new persegi(5,5)
console.log(luasPersegi.luas())