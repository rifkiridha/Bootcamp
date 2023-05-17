let smartphone = "aipon", harga = 1000000, jumlah=3, diskon=0
total=jumlah*harga

//console harga awal
console.log(
    `Anda membeli ${jumlah} ${smartphone} dengan harga ${harga} per smartphone. Total harga sebelum diskon adalah ${total}.`
    );

if(total>0){
    if(total>500000){
        if(total>1000000){
        diskon=0.1
    } else{
    diskon=0.05
} 
hargaSetelahDiskon=total*(1-diskon)
//console harga setelah diskon
console.log(`
Selamat Anda mendapatkan diskon sebesar ${diskon*100}%. Harga setelah diskon adalah ${hargaSetelahDiskon}.`);
} else{
//console harga normal(tidak diskon)
hargaSetelahDiskon=total
console.log(`
Maaf Anda tidak mendapatkan diskon. Harga total adalah ${hargaSetelahDiskon}.`);
}
} else{
    console.log(`
harga tidak valid`)
}




