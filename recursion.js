function rSigma(x){
    if (x <= 0){
        return 0;
    }
    return rSigma(x-1) + Math.floor(x);
}
// console.log(rSigma(5))

function rFact(x){
    if (x<= 1){ // set to 1 for rounding issue
        return 1;
    }
    return rFact(x-1)* Math.floor(x);
}
// console.log(rFact(3))

function floodFill(matrix, startXY, newColor, oldColor){
    const x = startXY[0];
    const y = startXY[1];
    const currentColor = matrix[y][x];

    if (oldColor == undefined){
        oldColor = currentColor;
    }
    if (oldColor != currentColor){
        return matrix;
    }
    matrix[y][x] = newColor;
    console.log(oldColor, newColor, currentColor)
    console.log(matrix)
    if(y-1 >= 0){
        floodFill(matrix, [x,y-1], newColor, oldColor);
    }
    if(y+1 < matrix.length){
        floodFill(matrix, [x,y+1], newColor,oldColor);
    }
    if(x-1>=0){
        floodFill(matrix, [x-1,y], newColor, oldColor);
    }
    if(x+1<= matrix[y].length){

    }
}

const canvas = [
    [3,2,3,4,3],
    [2,3,3,4,0],
    [7,3,3,5,3],
    [6,5,3,4,1],
    [1,2,3,3,3]
];
// console.log(floodFill(canvas, [2,2], 9));

function rFib(num){
    if(num <= 0){
        return 0;
    }
    if(num == 1){
        return 1;
    }
    return rFib(num-2) + rFib(num -1);
}
// console.log(rFib(7))

function rBinarySearch(arr,val,i){
    if (i == undefined){
        i=0;
    }
    if (i == arr.length){
        return false;
    }
    if(arr[i] == val){
        return true;
    }
    return rBinarySearch(arr, val, i+1);

}
// console.log(rBinarySearch([1,3,5,6],4));
// console.log(rBinarySearch([4,5,6,8,12],5));

function rGCF(num1, num2){
    if(num1 == num2){
        return num1;
    }
    if (num1>num2){
        if(num1%num2==0){
            return num2;
        } else {
            return rGCF(num1-num2, num2);
        }
    }
    if(num1<num2){
        if(num2%num1==0){
            return num1;
        } else{
            return rGCF(num1, num2-num1);
        }
    }
}
// console.log(rGCF(44, 11));
// console.log(rGCF(30, 50));
// console.log(rGCF(123456,987654))
// console.log(rGCF(987654,123456))
