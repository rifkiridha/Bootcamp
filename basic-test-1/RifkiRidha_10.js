teks1 = "(coder)(byte))"
teks2 = "(c(oder)) b(yte)"

function bracket(teks){
sum=0
nilai=true
for(i=0;i<teks.length;i++){
    if(teks[i]=="("){
        sum++
    } else if(teks[i]==")"){
        sum--
    }
    if (sum<0){
        nilai=false
    }
}
    if(sum<0){
        return 0
    }
    if(sum==0 && nilai==true){
        return 1
    } else{
        return 0
    }
}
console.log(`
Input  : "${teks1}"
Output : "${bracket(teks1)}"

Input  : "${teks2}"
Output : "${bracket(teks2)}"
`)