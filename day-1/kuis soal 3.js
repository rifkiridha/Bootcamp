function findUserCountry(user) {
    //jawaban
    return user.country
}

let user1 = {
    name : "Puan Maharani",
    age:25,
    address:{
        city:"Jakarta",
        country:"Indonesia"
    }
}
let user2 = {
    name : "Mega Chan",
    age:30
}

console.log(findUserCountry(user1)) //output Indonesia
console.log(findUserCountry(user2)) //output unknown