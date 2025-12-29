let score="33"
let scre=33
//const {score}=req.body
console.log(typeof score)
console.log(typeof (scre))

let valueInNumber=Number(score) //converted in number now
console.log(typeof valueInNumber)
console.log(valueInNumber) //if score=33abc o/p is NaN(not a number)
//for null value convert into 0
//for undefined and string NaN
//for boolean true 1 false 0

let isLogged=1

let boolIsLogged=Boolean(isLogged)
console.log(boolIsLogged);   //1
//for isLogged=""   //false
//for isLogged="Kavya"   //true
let someNum=33

let strNum=String(someNum)
console.log(strNum)   //33 bcz "33"
console.log(typeof strNum);  //string

//*************Operations****************//

let value=3
let negValue=-value
console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(5/2);
//console.log(5%2);
//console.log(2**3);

let str1="hello"
let str2=" kitten"
let str3=str1+str2
console.log(str3);

console.log("1"+2);   //12
console.log(1+"2");   //12
console.log("1"+2+3);   //123
console.log(1+2+"4")   //34
console.log( (3 + 4) * 5 % 3);    //2

console.log(+true);     //1
console.log(true);      //true
console.log(+"");       //0  //not to do

let num1,num2,num3

num1=num2=num3=2+2

let gameCounter=100
gameCounter++
console.log(gameCounter);
++gameCounter
console.log(gameCounter);































