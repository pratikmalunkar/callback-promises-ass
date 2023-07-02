let books=[{ title:"mca",author:"pratik",year:2003
},
{
    title:"parth",author:"ram",year:2005   
},
{
    title:"abc",author:"wyx",year:2006 
}
];
// books.map((Element)=>
// {
// console.log(Element.title);
// })

let titleName=books.map((Element)=>Element.title);
// console.log(titleName);
 
 function alphaorder(titleName, callback)
 {
    callback(titleName);
 }

  function sortelement()
 {
    titleName.sort();
    console.log(titleName);
 }
 alphaorder(titleName,sortelement);