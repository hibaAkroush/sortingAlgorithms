
var arr = [7,2,4,1,5,3]

//  assume index at 0 is a sorted array
// loop over unsorted array 
// take first element in unsorted arrray and assume there is a hole in its place
//  compare element with sorted array, if sorted array element is bigger put the bigger number in place of hole
// else the hole would be the perfect place for the value
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


// loop looking for the min value
// take the min value and put it at the begining 
function selectionSort (arr) {
    for(i=0; i<=arr.length-2; i++){
        //safe value and its index         
        var indexMin = i;
        var min = arr[i];
        for(var j=i+1; j<= arr.length -1; j++){
            if(arr[j] < min){
                min = arr[j];
                indexMin = j;
            }
        }
        //swap 
        arr[indexMin] = arr[i];
        arr[i] = min;
    }
    return arr; 
}

