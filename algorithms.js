// all sorting algorithms written in javascript
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

// algorithm to merge two sorted arrays, this is a helper function for merge sort algorithm

function mergeSortedArrays (l,r,a) {
    var leftArraySize = l.length;
    var rightArraySize = r.length;
    var i=0;j=0;k=0;
    
    while(i<leftArraySize && j<rightArraySize){
        if(l[i] < r[j]){
            a[k] = l[i];k++; i++;
        } else {
            a[k] = r[j]; k++;j++;
        }
    }
    
    while(i<leftArraySize){
        a[k] = l[i];k++; i++;
    }

    while(j<rightArraySize){
        a[k] = r[j];k++; j++;
    }
    return a; 
}

// mergeSortedArrays([1,2,4,6], [3,5,7,8], [])

// mergeSort([2,4,1,6,8,5,3,7])
// [2,4,1,6,8,5,3,7] -> [2,4,1,6] -> [2,4] -> [2][4] 
function mergeSort (array) {
    if(array.length < 2) {return;} // stop condition for recursion 
    var mid = array.length/2;
    var left = array.slice(0,mid);
    var right =  array.slice(mid,array.length);
    mergeSort(left); // after this line left will be [2] (only first time its excuted)
    mergeSort(right);// after this line right will be [4] (only first time its excuted)
    mergeSortedArrays(left,right, array); 
    return array;
}



// Quick sort -> Pivot 
// var arr = [7,2,1,6,8,5,3,4]; 
// arragePivotPartition(arr, 0, arr.length-1) -> arrange arr like this [2, 1, 3, 4, 8, 5, 7, 6]
// helper function: arrange an array where all elements smaller than the last element are before the last element 
// and all elemnts grater than the pivot are after 
// returns the index of partetion
function arragePivotPartition (A, start, end){
    var pivot = A[end];
    var indexPartition = start;
    for(var i=start; i<=end;i++){
        if(A[i] < pivot){
            var temp = A[indexPartition];
            A[indexPartition] = A[i];
            A[i] = temp;
            indexPartition++;
        }
    }
    A[end] = A[indexPartition];
    A[indexPartition] = pivot;
    
    return indexPartition;
}
function quickSort(arr, start, end) {
    if(start < end) {
        var partitionIndex = arragePivotPartition(arr, start, end);
        console.log(partitionIndex)
        quickSort(arr, start, partitionIndex-1)
        quickSort(arr, partitionIndex+1, end)
    }     
    return arr;
}

//  not a sorting algorithm 
//  binary search 

var arr = [1,2,4,5,6,9,12,16,17,18,20,30,33,35,36,39,44,47];

var binarySearch = function(a, x, left, right) {
    if (left > right) return false;
    var mid = Math.ceil((left+right)/2)

    if(a[mid] === x) {
        console.log("mid: ", mid)
        return mid;
    }
    
    if(a[mid] > x){
        binarySearch(a, x, left, mid - 1);
    }

    if(a[mid] < x){
        binarySearch(a, x, mid + 1, right);
    }
};


