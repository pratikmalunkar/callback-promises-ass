
// Write a js program that function that takes in an array of integers and a callback function, and returns a new array where each 
// element is doubled using the callback.


function double(arr, callback) {
   
return arr.map(callback);    

}
function mult(num)
 { return num*2;
}
let arr = [1, 2, 3];
let newarr = double(arr, mult);
console.log(newarr);

