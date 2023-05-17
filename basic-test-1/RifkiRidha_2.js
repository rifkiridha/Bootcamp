function palindrome(kata){
    console.log("Check Palindrome")
    console.log("---")
    console.log("Masukkan kata : "+kata)
    console.log("---")
    console.log( )
    nilai=true
    k=0
    if(kata.length%2==0){
        k=kata.length/2
    } else{
        k=(kata.length-1)/2
    }
    for(i=0;i<=k;i++){
        if(kata[i]!==kata[kata.length-i-1])
        nilai=false
    }
    if (nilai){
        console.log("Kata yang anda masukkan adalah Palindrome.")
    } else{
        console.log("Kata yang anda masukkan bukan Palindrome")
    }
}
kata="kasur rusak"
palindrome(kata)