function filterLaptop(laptop, minHarga, maxHarga) {
    arr = [""]
    k = 0

    laptop.sort(function(a, b) { 
        return a.harga - b.harga  ||  a.nama.localeCompare(b.nama);
      });
    
    laptop.forEach(a => {
        if (a.harga >= minHarga && a.harga <= maxHarga) {
            arr[k++] = a
        }
    }
    );

    return (arr)
}

const laptop = [
    { id: 1, nama: "Lenoboy", harga: 15000000 },
    { id: 2, nama: "Asu REOG", harga: 50000000 },
    { id: 3, nama: "De El", harga: 1000000 },
    { id: 4, nama: "MSG", harga: 30000000 },
]

minHarga = 15000000
maxHarga = 1000000000

console.log(filterLaptop(laptop, minHarga, maxHarga))