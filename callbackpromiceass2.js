function mapulateString(string,callback)
{
       callback();

     console.log(string.toUpperCase());
}; 
function logString()
{
    console.log("the manipulated string is:");
}

mapulateString("pratik",logString);
