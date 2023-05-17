let n=7
teks=""
for(i=1;i<=n;i++){
    teks=""
    j=n-i
    while(j>=1){
        teks+=" "
        j--
    }
    k=1
    while(k<=i){
    teks+="* "
    k++
    }
    console.log(teks)
}