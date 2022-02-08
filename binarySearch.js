let x = [2,4,5,7,8,12,22,24,27,45,55,56,58,66,67,68,90,100];

function binarySearch(arr,target,start,end) {

    let middle = Math.floor((start+end)/2);

    if (arr[middle]===target) {
        return true;
    }

    if (start===end && arr[middle] != target) {
        return false;
    }

    if (arr[middle]>target) {
        return binarySearch(arr,target,start,middle-1)
    }

    if (arr[middle]<target) {
        return binarySearch(arr,target,middle+1,end)
    }


}

console.log(binarySearch(x,12,0,x.length-1)) // true
console.log(binarySearch(x,50,0,x.length-1)) // false
