function faktorial(number){
    if(number>0){
        return number*faktorial(number-1)
    } else if(number==0){
        return 1
    } return "input salah"
    }

console.log(faktorial(process.argv[2]))