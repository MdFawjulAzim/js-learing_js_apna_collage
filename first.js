// console.log("welcome to Emil js");
// console.log("Fawjul Azim");

// Fullname="Md Fawjul Azim";

// console.log(Fullname);

// Fullname=undefined;

// console.log(Fullname);

// Fullname=null;

// console.log(Fullname);

// isFollow=false;

// console.log(isFollow);
// Fullname=undefined;
// console.log(Fullname);

// let FullName=123;

// console.log(FullName);

// const student = {
//     fullName: "Md Fawjul Azim",
//     age: 20,
//     cgpa:8.2,
//     isPass:true,
// }
// student["name"]="Azim";

// console.log(student);


// // Artimetic Operators

// let a =1;
// let b= 2;

// c=a+b;

// console.log("a=",a,"& b=",b);

// console.log("a+b=",c);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);

// console.log("a%b=",a%b); //Modulus
// console.log("a**b=",a**b);//Exponentiation

// //unary operator

// console.log("a/b=",a/b);

// let d =5;
// let e= 2;

// console.log("d=",d,"& e=",e);
// console.log("++d=",++d);
// console.log("--e=",--e);
// d++
// e--


// console.log("d++=",d);
// console.log("e--=",e);

//assignment operator

// let r=1;
// let u=1;

// // r+=2

// console.log("r=",r);


// //comparison operator
// console.log("r=u",r != u);
// console.log("r=u",r == u);


// //conditional Statements

// let mode="light";
// let color;

// if(mode === "dark"){
//     color="black";

// }
// if(mode === "light"){
//     color ="white";
// }

// console.log(color);

// let mode="light";
// let color;

// if(mode === "dark"){
//     color="black";

// }
// else{
//     color ="white";
// }

// console.log(color);


// alert("hello!")

// prompt("Hello");


//Question answer

// let num = prompt ("Enter a number:");


// if(num%5 ===0){
//     console.log(num,"is multiple of 5");
// }
// else{
//     console.log(num, "is NOT a multiple of 5");
// }

// //for-of loop

// let str = "Md fawjul Azim";
// for (let i of str ){
//     console.log("i=",i)
// }



// const student = {
//     fullName: "Md Fawjul Azim",
//     age: 20,
//     cgpa:8.2,
//     isPass:true
// }
// for(let i in student){
//     console.log(i)
// }

// // practise Qs 1

// for(let num =0;num<=100;num++){
//     if(num%2!==0){
//         console.log("num=",num);
//     } 
// }
// let gameNum =25;

// let user= prompt("Guess the game number:");

// while (user != gameNum){
//   user=  prompt("wrong");
// }

// console.log("congratulation")


// //string in js
// let str ="emil";
// let str2='Emil';

// console.log(str[3]);


// //template Literals
// let obj={
//     item:"pen",
//     price:10,

// }

// // string method

// console.log(`the cost of ${obj.item} is ${obj.price} taka`);

// console.log("emil\t hasan")


// let emil="   azim hassan     ";

// console.log(emil.trim())
// console.log(emil)

// document.write(emil.trim())

// let str = "emil";

// console.log(str.slice(0,2))


// let str1 = "fawjul"
// let str2 ="Azim"

// let res =str1.concat(str2);
// let ress =str1+str2;

// console.log(res)
// console.log(ress)

// let hassan ="hasan";

// console.log(hassan.replace ('h',"m"));

// //Qu 3
// let fullName = prompt ("Enter your fullname without spaces");

// let userName= "@" + fullName + fullName.length;

// console.log(userName);

// // arrays in JS

// const marks =[23,34,34,35];

// let name=["fawjul",52,"azim",56];

// console.log(name[2]);

// for( let idx =0;idx<name.length;idx++){
//     console.log(name[idx]);
// }


// //for of
// for (let hero of name){
//     console.log(hero);
// }

// //for in 
// for (let i in  name){
//     console.log(i);
// }


// //Qu no

// let marks=[85,65,36,96,34,36,96,65,64,69];
// let sum=0;

// for (let val of marks){
//     sum = sum+val;
// }

// let avg = sum /marks.length;

// console.log(avg);

//qu ans

// let items =[300,366,253,236,26358,265];

// let i=0;
// for (let val of items){
//     let offer =val/10;
//     items[i]-=offer;
//     console.log(`value after offer =${items[i]}`);
//     i++;
// }
// console.log("others")


// for(let i=0;i<items.length;i++){
//     let offer=items[i]/10;
//     items[i]-=offer;
// }

// // console.log(`value after offer=${items[i]}`);
// console.log(items);

//array methods

// let items =[300,366,253,236,26358,265];

// console.log(items.push("chips","ice"));

// console.log(items) ;

// console.log(items.slice(6));

// console.log(items);

// console.log(items.splice(4));

// console.log(items); 

// //function in JS


// function sum(a,b){
//     s=a+b;
//     return s;
// }

// let sums = sum(4,5);
// console.log(sums);

