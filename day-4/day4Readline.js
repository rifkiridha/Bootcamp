// readline pada node.js
/* readline sama kek argumen input

*/ 
const readline=require('readline').createInterface({
    input:process.stdin, //buat nerima input
    output:process.stdout, //buat output
});

//function buat minta inputan dari user
function input(prompt){
    return new Promise((callback,error)=>{
        //buat nampilin prompt di console
        readline.question(prompt,(inputnya)=>{
        //buat close interface readline setelah user nginput
            readline.close();
        //panggil callback dengan 
            callback(inputnya);
        });
    });
}
(async()=>{
    try{
        const name = await input("Masukkan nama : ");
        console.log(`Halo, ${name}`);
    } catch (err) {
        console.error(err);
    }
}
)();