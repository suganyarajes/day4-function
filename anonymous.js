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
//5.Return all the palindromes in an array:
//6.Return median of two sorted array of the same size:
//6.Remove duplicates from an array:
//7.Rotate an array by k times:
