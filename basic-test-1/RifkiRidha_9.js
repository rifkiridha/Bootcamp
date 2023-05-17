function longest(input){
    arr=input.split(" ")
    sum=[0]
    hasil=""
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr[i].length;j++){
        if((arr[i][j]>="a" && arr[i][j]<="z") || (arr[i][j]>="A" && arr[i][j]<="Z")){
            sum[i]++
        }
    }
    }
        for(i=0;i<sum.length-1;i++){
        if (sum[i]>sum[i+1]){
            hasil=arr[i]
        } else{
            hasil=arr[i+1]
        }
    }
    return hasil
}
let input1 = "fun&!! time"
let input2 = "I love dogs"
console.log(`
Input  : "${input1}"
Output : "${longest(input1)}"

Input  : "${input2}"
Output : "${longest(input2)}"
`)