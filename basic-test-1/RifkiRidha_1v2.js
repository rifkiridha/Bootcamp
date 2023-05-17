let n=7
teks=""
for(i=1;i<=n;i++){
    teks=""
    for(j=n-i;j>=1;j--){
        teks+=" "
    }
    for(k=1;k<=i;k++){
        teks+="* "
    }
    console.log(teks)
}