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
var newArray = [5,5,5,5,4,4,4,4,3,3,3,7,7,7,7,8,8,8,2,2,2,6,6,6,1,1]
console.log("array with duplicates", newArray)
function removeDup(arr){
    for(var i = 1; i<arr.length; i++){
        if(arr[i]==arr[i-1]){
            removeAt(arr,i)
            i--;
        }
    }
    return arr;
}
console.log("duplicates removed:", removeDup(newArray))

// Min to Front
function minToFront(arr){
    var minVal = arr[0]
    var minIdx = 0
    for (var i = 1; i<arr.length; i++){
        if (minVal>arr[i]){
            minVal = arr[i]
            minIdx = i
        }
    }
    for (var j = minIdx; j>0; j--){
        arr[j] = arr[j-1]
    }
    arr[0]= minVal
    return arr
}
console.log("min to front", minToFront(newArray))