
//1)Print odd numbers in an array arrow :

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var odd=[];

let result = ()=>{
  for (var i = 0 ; i< arr.length ; i++) { 
     if (arr [i]%2!=0)  // false is even number , true is odd number
      {
       odd.push(arr[i])
    } 
  }
  return odd;

}
//console.log(result());

//2.Convert all the strings to title caps in a string array :

var str = "welcome to my git"

var titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  } 
  //console.log(titleCase(str));        

  //3.Sum of all numbers in an array:

  var arr=[3,6,8,9,10,15,25];


 let add = (arr)=>{
    var sum = 0;
         for(var i = 0 ; i< arr.length ; i++){
            sum = sum + arr[i];
          }
          return sum;
          }
//console.log(add(arr));

