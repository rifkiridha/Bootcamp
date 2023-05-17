function sumArray(array){
    sum=0
    for(i=0;i<array.length;i++){
        for(j=0;j<array[i].length;j++){
            sum+=array[i][j]
        }
    }
    return sum
}
const array = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

console.log(sumArray(array))