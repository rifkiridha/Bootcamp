function filterLaptop(laptop, minHarga, maxHarga) {
    arr = [""]
    k = 0
    for(i=0;i<laptop.length;i++){
        if(laptop[i].harga>=minHarga && laptop[i].harga<=maxHarga){
            arr[k]=laptop[i]
            k++
        }
    }

 
    for(i=0;i<k;i++){
        for(j=i+1;j<k;j++){
        if(arr[i].harga>arr[j].harga){
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}
    return (arr)
}

const laptop = [
    { id: 1, nama: "Lenoboy", harga: 15000000 },
    { id: 2, nama: "Asu REOG", harga: 50000000 },
    { id: 3, nama: "De El", harga: 1000000 },
    { id: 4, nama: "MSG", harga: 30000000 },
    { id: 5, nama: "HD", harga: 25000000 }
]

minHarga = 15000000
maxHarga = 1000000000

console.log(filterLaptop(laptop, minHarga, maxHarga))
