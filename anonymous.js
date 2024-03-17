//1)Print odd numbers in an array anonymous :
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var odd=[];

let result = function (){
  for (var i = 0 ; i< arr.length ; i++) { 
     if (arr [i]%2!=0)  // 0 is even number , Non 0 is add number
      {
       odd.push(arr[i])
    } 
  }
  return odd;

}

//console.log(result());



//2.Convert all the strings to title caps in a string array :

let str = "welcome to my git";
let strname = function () {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }
 // console.log(strname());



  //3.Sum of all numbers in an array:
   var arr=[3,6,8,9,10,15,25];

  let add = function(){
    var sum = 0;
    for(var i = 0 ; i< arr.length ; i++){
       sum = sum + arr[i];
     }
     return sum;
  }
  //console.log(add());

//4.Return all the prime numbers in an array:
// Define the isPrime function
let isPrime = function(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

// Use an anonymous function to return prime numbers in the array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primes = (function(arr) {
    let primeArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primeArray.push(arr[i]);
        }
    }

    return primeArray;
})(numbers);

console.log(primes); 


//5.Return all the palindromes in an array:
// Define the isPalindrome function
let isPalindrome = function(word) {
    return word === word.split('').reverse().join('');
};

// Use an anonymous function to return palindromes in the array
let words = ["radar", "level", "apple", "banana", "deified", "civic"];

let palindromes = (function(arr) {
    let palindromeArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            palindromeArray.push(arr[i]);
        }
    }

    return palindromeArray;
})(words);

console.log(palindromes); 

//6.Return median of two sorted arrays of the same size:
let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

let median = (function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    let sortedArray = mergedArray.sort((a, b) => a - b);
    let mid = Math.floor(sortedArray.length / 2);

    if (sortedArray.length % 2 === 0) {
        return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
    } else {
        return sortedArray[mid];
    }
})(arr1, arr2);

console.log(median); 

//6.Remove duplicates from an array:
let array = [1, 2, 2, 3, 4, 4, 5];

let uniqueArray = (function(arr) {
    let unique = {};
    arr.forEach(function(item) {
        unique[item] = true;
    });
    return Object.keys(unique).map(Number);
})(array);

console.log(uniqueArray); 

//7.Rotate an array by k times:

let array = [1, 2, 3, 4, 5];
let k = 2;

let rotatedArray = (function(arr, k) {
    let len = arr.length;
    k = k % len; 
    return arr.slice(k).concat(arr.slice(0, k));
})(array, k);

console.log(rotatedArray); 


