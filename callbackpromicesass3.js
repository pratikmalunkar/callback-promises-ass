
let personDetails={
    name:"ram",
    lastName:"patil",
    age:20,
}
function ageInDays(personDetails)
{
let fullName=personDetails.name.concat(" ",personDetails.lastName);
console.log(fullName);
let ageInDays=personDetails.age*365;
console.log(ageInDays);
}
ageInDays(personDetails);