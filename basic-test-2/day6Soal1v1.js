//input panjang track
//min dan max kecepatan masing2 mobil
//gunakan kaidah OOP
//output mobil sbg icon

// input : track, jumlah mobil -> masing2 mobil : icon,min kec, max kec


class Mobil {
    constructor(icon, min, max, track) {
        this.icon = icon;
        this.min = min;
        this.max = max;
        this.track = track;
        this.step = Math.floor(track / this.kec()) + 1
    }

    kec() {
        if (Math.floor(this.min + (this.max - this.min) * (Math.random())) < this.min) {
            return this.min
        }
        else if (Math.floor(this.min + (this.max - this.min) * (Math.random())) > this.max) {
            return this.max;
        }
        else {
            return Math.floor(this.min + (this.max - this.min) * (Math.random()))
        }
    }
}

pos = 0

function cetak(mobil, c, kec) {
    string = ""
    for (i = 0; i <= mobil.track; i++) {
        pos = 1 + c * kec
        if (pos === (i + 1)) {
            string += mobil.icon
        } else {
            string += "="
        }
    }
    console.log(string)
}



console.log("Balapan Mobil")

simbol = []
vMin = []
vMax = []
vr = []

//BACA
// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// create empty user input
let userInput = "";

// question
rl.question("Masukkan jumlah mobil : ", function (number) {
    cars = number;
    console.log();

    rl.question("Masukkan jumlah track : ", function (number) {
        track = number;
        console.log();

        for (i = 0; i < cars; i++) {
            rl.question(`Masukkan simbol mobil ke-${i} :`, function (string) {
                simbol[i] = string;
                console.log();
                rl.question(`Masukkan kec min mobil ke-${i} :`, function (number) {
                    vMin[i] = number;
                    console.log();
                    rl.question(`Masukkan kec max mobil ke-${i} :`, function (number) {
                        vMax[i] = number;
                        console.log();
                        rl.close();

                        //START CODE
                        const mobil = []
                        const mobil1 = new Mobil(simbol[i], vMin[i], vMax[i], track);
                        mobil.push(mobil1)
                        vr[i] = mobil[i].kec()

                        stepTotal = Math.min(15)

                        for (k = 0; k <= stepTotal; k++) {
                            console.log("step ke" + (k + 1))
                            for(i=0;i<mobil.length;i++){
                            cetak(mobil[i], k, kec[i])
                            }
                            console.log('\n', '\n', '\n', '\n', '\n', '\n')
                        }
                    })
                })
            })
        }
    })
})

// rl.question("Masukkan simbol mobil pertama : ", function (string) {
//     simbol1 = string;
//     console.log();
//     rl.question("Masukkan kec min mobil pertama : ", function (number) {
//         vMin1 = number;
//         console.log();
//         rl.question("Masukkan kec max mobil pertama : ", function (number) {
//             vMax1 = number;
//             console.log();

//             rl.question("Masukkan simbol mobil kedua : ", function (string) {
//                 simbol2 = string;
//                 console.log();
//                 rl.question("Masukkan kec min mobil kedua : ", function (number) {
//                     vMin2 = number;
//                     console.log();
//                     rl.question("Masukkan kec max mobil kedua : ", function (number) {
//                         vMax2 = number;
//                         console.log();

//                         rl.question("Masukkan simbol mobil ketiga : ", function (string) {
//                             simbol3 = string;
//                             console.log();
//                             rl.question("Masukkan kec min mobil ketiga : ", function (number) {
//                                 vMin3 = number;
//                                 console.log();
//                                 rl.question("Masukkan kec max mobil ketiga : ", function (number) {
//                                     vMax3 = number;
//                                     console.log();

//                                     // close input stream
//                                     rl.close();

//                                     //START CODE
//                                     const mobil1 = new Mobil(simbol1, vMin1, vMax1, track);
//                                     const mobil2 = new Mobil(simbol2, vMin2, vMax2, track);
//                                     const mobil3 = new Mobil(simbol3, vMin3, vMax3, track);

//                                     kec1 = mobil1.kec()
//                                     kec2 = mobil2.kec()
//                                     kec3 = mobil3.kec()

//                                     stepTotal = Math.min((track / kec1), (track / kec2), (track / kec3))


//                                     for (k = 0; k <= stepTotal; k++) {
//                                         console.log("step ke" + (k + 1))
//                                         cetak(mobil1, k, kec1)
//                                         cetak(mobil2, k, kec2)
//                                         cetak(mobil3, k, kec3)
//                                         console.log('\n', '\n', '\n', '\n', '\n', '\n')
//                                     }
//                                     //END CODE

//                                     //
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })
// })



