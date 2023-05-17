nama = "RIFKI"
const a =
[
    [P,Z,W,Q,I],
    [R,S,F,K,D],
    [O,I,D,W,A],
    [N,N,V,A,N],
    [Z,I,A,N,U]
]

const s = [
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1],
]

function cek(i0,j0){
    let i=i0,j=j0;
    while(i<a.length){
        while(j<a[i].length){
            if(nama[c]==a[i][j] && s[i][j]==1){
            s[i][j]=0;
            c++;  
            } //checkpoint
        }
// for(i=0;i<a.length;i++){
//     for(j=0;a[i].length;j++){
//         if(nama[c]==a[i][j] && s[i][j]==1){
//             s[i][j]=0;
//             c++;
//         }
//     }
// }
}}