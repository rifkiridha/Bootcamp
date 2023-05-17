//Asynchronous
console.log("Mulai")
setTimeout(function(){
    console.log("baris ini akan diprint setelah 2 detik")
},2000);
console.log("selesai")

//Function 

//Function biasa
function greet(name) {
    console.log("Halo, "+name+"!")
}

//Function callback
function greetUser(name, callback){
    callback(name)
}

//Memanggil function callback
greetUser("Budi",greet)

//promise
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response) => response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error));

//Argumen input pada Javascript menggunakan 'process.argv'

//process.env = array yang berisi argumen - argumen yang diketik di CLI
if(process.argv.length == 2){
//jika panjang datanya sama dengan 2 maka akan dicetak log
    console.log("Expected at least one argument bro!");
    process.exit(404); //setelah program akan diakhiri dengan exit
}

const custom = process.argv[2] || "Default";

console.log(`Argument.text : ${process.argv[0]} ${process.argv[1]} ${process.argv[2]} ${process.argv[3]} ${process.argv[4]} ${process.argv[5]}`);