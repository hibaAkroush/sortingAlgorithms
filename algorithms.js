
var arr = [7,2,4,1,5,3]

function insertionSort (arr) {
    for(i=1; i<=arr.length-1; i++){
        var hole = i;
        var value = arr[i];
        while(hole>0 && (arr[hole-1] > value)){
            arr[hole] = arr[hole-1]
            hole--;    
        }
        arr[hole] = value 
        console.log("array", arr)
   }
    return arr; 
}


function selectionSort (arr) {
    for(i=0; i<=arr.length-2; i++){
        var indexMin = i;
        var min = arr[i];
        for(var j=i+1; j<= arr.length -1; j++){
            if(arr[j] < min){
                min = arr[j];
                indexMin = j;
            }
        }
        arr[indexMin] = arr[i];
        arr[i] = min;
    }
    return arr; 
}

