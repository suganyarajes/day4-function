//1)Print odd numbers in an array IIFE :

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var odd=[];

function findoddnumber(){
  for (var i = 0 ; i< arr.length ; i++) { 
     if (arr [i]%2!=0)  // false is even number , true is odd number
      {
       odd.push(arr[i])
    } 
  }
  return odd;

}

let result = findoddnumber();
//console.log(result)

//2.Convert all the strings to title caps in a string array :

let str = "welcome to my git";
let capitalizeWords = (function (str) {
    var str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
})(str);

//console.log(capitalizeWords); 

  //3.Sum of all numbers in an array:
  var arr=[3,6,8,9,10,15,25];

  (function(arr){
    var sum = 0;
         for(var i = 0 ; i< arr.length ; i++){
            sum = sum + arr[i];
          }
          console.log(sum);
    } )
(arr);


//4.Return all the prime numbers in an array:
//5.Return all the palindromes in an array:
//6.Return median of two sorted arrays of the same size:
//6.Remove duplicates from an array:
//7.Rotate an array by k times:


   
