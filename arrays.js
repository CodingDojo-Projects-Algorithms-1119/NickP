var array = [1,2,3,4,5]

// Push Front
function pushFront(arr, x){
    return insertAt(arr,0,x)
}
console.log("insert value at front", pushFront(array, 100))

// Pop Front
function popFront(arr){
    return removeAt(arr,0)
}
console.log(popFront(array))

// Insert At
function insertAt(arr,idx,val){
    arr.push(0);
    for(var i =arr.length-1; i>idx; i--){
        arr[i]=arr[i-1]
    }
    arr[idx]=val;
    return arr;
}
console.log("insert value at custom index", insertAt(array,3,500))

// Remove At
function removeAt(arr,idx){
    var removed = arr[idx];
    for(var i = idx; i<arr.length; i++){
        arr[i] = arr[i+1]
    }
    arr.pop()
    // console.log("remove index", arr)
    return removed;
}
console.log("remove", removeAt(array,3), array)

// Swap Pairs
function swapPairs(arr){
    var temp;
    if (arr.length%2 ==0){
        iLength = arr.length-1
    }
    else{
        iLength = arr.length
    }
    console.log("before swap:", arr)
    for(var i = 0; i<iLength-1; i+=2){
        temp = arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=temp
        // console.log(arr)
    }
    return arr;
}
console.log("after swap", swapPairs(["Brendan", true, 42]))
console.log("after swap", swapPairs(array))

// Remove Duplicates
var array2 = [5,5,5,5,4,4,4,4,3,3,3,9,9,8,8,8,2,2,2,6,6,6,1,1,7,7,7,7]
console.log("array with duplicates", array2)
function removeDup(arr){
    for(var i = 1; i<arr.length; i++){
        if(arr[i]==arr[i-1]){
            removeAt(arr,i)
            i--;
        }
    }
    return arr;
}
console.log("duplicates removed:", removeDup(array2))

// Min to Front
function minToFront(arr){
    var minIdx = 0
    for (var i = 1; i<arr.length; i++){
        if (arr[minIdx]>arr[i]){
            minIdx = i
        }
    }
    console.log(arr)
    return pushFront(arr,removeAt(arr, minIdx))
}
console.log("min to front", minToFront(array2))

// Reverse
function Reverse(arr){
    for(var i = 0; i<=arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
console.log("reversed", Reverse(array2))

// Rotate
function Rotate(arr, shiftBy){
    if(shiftBy < 0){
        shiftBy = arr.length + shiftBy;
    }
    console.log("array before rotate:", arr)
    var count = 0
    while( count < shiftBy){
        pushFront(arr, removeAt(arr,arr.length-1))
        count++
    }
    return arr;
}
console.log("rotated array: ", Rotate(array,-4))

// Filter
function filter(arr, min, max){
    for(var i = 0; i<arr.length;i){
        if(min>=arr[i] || max<=arr[i]){
            removeAt(arr,i)
        }
        else{
            i++
        }
    }
    return arr;
}
console.log("filtered array:",filter(array2, 2,7)) // expected [6,3,4,5] 

// Concat
array3 = []
function pushToNew(arr){
    for(var i =0; i<arr.length; i++){
        array3.push(arr[i])
    }
    return arr;
}
function arrConcat(arr1, arr2){
    pushToNew(arr1);
    pushToNew(arr2);    
    return array3;
}
console.log("both arrays concat:", arrConcat(array, array2))

// Skyline Heights
function findMax(arr){
    var max = arr[0]
    for(var i = 0; i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
    }
    return max;
}
var array4 = [-1,1,1,7,3]
var array5 = [0,4]
function skylineHeights(arr){
    if(arr[0]<1){
        removeAt(arr,0)
    }
    removeDup(arr)
    filter(arr,arr[0]-1,findMax(arr)+1)
    return arr;
}
console.log("skyline w/ array4:", skylineHeights(array4))
console.log("skyline w/ array5:", skylineHeights(array5))