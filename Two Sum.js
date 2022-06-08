/*
Write a function that takes an array of numbers (integers for the tests) and a target number. 
It should find two different items in the array that, when added together, give the target value.
The indices of these items should then be returned in a tuple / list (depending on your language) like so: 
(index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
The input will always be valid (numbers will be an array of length 2 or greater, 
    and all of the items will be numbers; 
    target will always be the sum of two different items from that array).
    Based on: http://oj.leetcode.com/problems/two-sum/
*/

function twoSum(numbers, target) {
    // ...
    let copyArray = numbers.slice();
    mergeSort(copyArray);
    let value1;
    let value2;
    let index = []
    let leftPointer = 0;
    let rightPointer = copyArray.length - 1;
    while (leftPointer < copyArray.length && rightPointer >= 0) {
        let temp = copyArray[leftPointer] + copyArray[rightPointer];
        if (temp < target) {
            leftPointer++;
        }
        if (temp > target) {
            rightPointer--; 
        }
        if (temp == target && leftPointer !== rightPointer) {
            value1 = copyArray[leftPointer];
            value2 = copyArray[rightPointer];
            break;
        }
    }
    index.push(numbers.indexOf(value1));
    index.push(numbers.indexOf(value2));
    if(index[0]==index[1]){
        index[1]=numbers.indexOf(value2,index[0]+1);
    }
    console.log(index)
    return index;
}

const mergeSort = (arrayList) => {
  if (arrayList.length < 2) {
    return;
  }
  let mid = Math.floor(arrayList.length / 2);
  let leftArray = arrayList.slice(0, mid);
  let rightArray = arrayList.slice(mid, arrayList.length);

  mergeSort(leftArray);
  mergeSort(rightArray);
  merge(leftArray, rightArray, arrayList);
};

const merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
      k++;
    } else {
      arr[k] = right[j];
      j++;
      k++;
    }
  }
  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
};

// console.log(twoSum([1, 2, 4, 3], 7));