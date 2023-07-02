function promise()
{
 let name="praik";
 return  new Promise(function exec(resolve,reject)
 {
    console.log("hello"+name);

 })
}
  promise();