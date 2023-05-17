// function nol(array){
function nol(array, i = 0, j = 0) {
    if (i < array.length) {
        if (j < array[i].length) {
            if (array[i][j] === 0) {
                console.log("(" + i + "," + j + ")");
            }
            // nol(array, i, j + 1)
        }
        // nol(array, i + 1, 0)
    }
    if(j<array[i].length){
        nol(array,i,j+1)
    } else if(i<array.length-1){
        nol(array,i+1,0)
    }
}

const arr =
    [
        [0, 1, 1, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 1, 1, 0],
    ]

nol(arr)