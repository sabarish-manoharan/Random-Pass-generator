const includesUpperCase = false ; 
const includesLowerCase = false ; 
const includesSymbols = false ; 
const includesNumbers = false ;

let allowedChars=""; 
let length = 12;
let password ="" ; 

const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const numbers ="0123456789";
const symbols ="!@#$%^&*_+?";

allowedChars += includesUpperCase ? upperCase : "";
allowedChars += includesLowerCase ? lowerCase : "";
allowedChars += includesSymbols ? symbols : "";
allowedChars += includesNumbers ? numbers : "";

if(length<6 || length >12){
    console.log("The Length of Password must be 6 to 12");
}
else if(allowedChars==""){
    console.log("Select Atleast One Characters");
}
else{
for(let i=0;i<length;i++){
    let randomIndex = Math.floor(Math.random()*(allowedChars.length));
    password+=(allowedChars[randomIndex]);
}
    console.log(`Password : ${password}`);
}
