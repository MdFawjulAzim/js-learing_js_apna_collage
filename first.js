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


// //arrow function

// const le=(a,b)=>{
//     s=a+b;
//     return s;
// }

// let sum=le(25,5)
// console.log(sum);



// //Qu.solve


// function countVowels(str){
//     let count=0;
//     for (const char of str){
//         if(char === "a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
//     }
//     return count;
// }

// let count=countVowels("fawjul azim");
// console.log(count);


// // forEach function

// let arr =["dhaka","delhi","mumbai"];

// arr.forEach((val)=>{
//     console.log(val.toUpperCase());
// })

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(number) {
//   console.log(number);
// });
// numbers.forEach((number) => {console.log(number)});


// let arr =[22,32,4   ];

// let newValue =arr.map((val)=>{
//    return val **2;
// })

// console.log(newValue);

// let arr =[1,2,3,4,5,6,7,8,9,10   ];

// let newValue =arr.filter((val)=>{
//    return val % 2 === 0;
// })

// console.log(newValue);

// let arr =[1,2,3,4,5,6,7,8,9,10   ];

// const output=arr.reduce((res,curr)=>{
//     return res+curr;
// });

// console.log(output);


// let n=prompt("Enter a Number");

// let arr=[];

// for (let i=1;i<=n;i++){
//     arr[i-1]=i;

// }
// console.log(arr);

// let sum=arr.reduce((res,curr)=>{
//     return res+curr;
// })

// console.log(sum);

// //Dom
// // document.getElementsByTagName("body");

// let Dom_id=document.getElementById("myId");
// console.dir(Dom_id);
// console.log(Dom_id);

// let Dom_class=document.getElementsByClassName("myClass");
// console.dir(Dom_class);
// console.log(Dom_class);


// let Dom_tag=document.getElementsByTagName("p");
// console.dir(Dom_tag);
// console.log(Dom_tag);


// let elements=document.querySelector("p");
// console.log(elements);
// console.dir(elements);

// let elementss=document.querySelectorAll("p");
// console.log(elementss);
// console.dir(elementss);


// let h1=document.querySelector("h1");
// console.dir(h1.innerText);

// h1.innerText=h1.innerText.concat(" I am Fawjul azim");


// let divs = document.querySelectorAll(".box");

// // console.dir(divs);

// // divs[0].innerText ="Fawjul"

// let ind=1;
// for(div of divs){
//     div.innerText=`Fawjul ${ind}`;
//     ind++;
// }


// let dom =document.querySelector('div')

// dom.style.backgroundColor ="green";

// dm = dom.getAttribute("class");

// console.log(dm);

// let a = dom.setAttribute("class","azim");
// console.log(a);
// dm = dom.getAttribute("class");
// console.log(dm);

// // dom.style.visibility="hidden"


// let el =document.createElement("button")
// el.innerText="click me";
// el.style.backgroundColor ="green";


// document.querySelector(".myClass").append(el)

// let div = document.querySelector(".myClass");

// div.after(el);

// div.append(el);

// div.prepend(el);

// div.after(el);

// div.remove(el);



// let btn1 = document.querySelector("#btn");

// btn1.onclick = () => {
//     console.log("one click");
//     let a=25;
//     a++;
//     console.log(a);
// };


// let modeBtn = document.querySelector("#mode");
// let currMode = "light";

// modeBtn.addEventListener("click", () => {
//     if (currMode === "light") {
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black"; // Set background to black for dark mode
//     } else {
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white"; // Set background to white for light mode
//     }
//     console.log(currMode);
// });

// // Classes in js

// class ToyotaCar {
//     start(){
//         console.log("Car started");
//     }
//     stop(){
//         console.log("Car stopped");
//     }
//     setBand(brand){
//         this.brand=brand;
//     }
// }


// let fortuner = new ToyotaCar;

// fortuner.stop();

// fortuner.start();

// fortuner.setBand("Toyota");

// // console.log(typeof fortuner)



// //constuctor{}

// class ToyotaCar {
//     constructor(){
//        console.log("this is constructor");
//     }
//         start(){
//             console.log("Car started");
//         }
//         stop(){
//             console.log("Car stopped");
//         }
//         setBand(brand){
//             this.brand=brand;
//         }
//     }

//     let fortuner = new ToyotaCar();
//     fortuner.setBand("Car");
//     console.log (fortuner.brand);

// //inheritenses


// class Person{
//     sleep(){
//         console.log("person sleep");
//     }
//     eat(){
//         console.log("person eat");
//     }
//     speak(){
//         console.log("person speak");
//     }

// }
// class Person1 extends Person{
//     work(){
//         console.log("person1 work");
//     }
// }

// let perso = new Person1();
// perso.work();
// perso.eat();

// console.log(perso.work())


// class Person{
//     constructor(name){
//         this.name=name;
//         this.age=25;
//     }
//     eat(){
//         console.log(`${this.name} is eating`);
//     }
// }
// class Person1 extends Person{
//     constructor(name){
//        super(name);
//         this.city="Dhaka";
//     }

//     sleep(){
        
//         console.log(`${this.name} is sleeping`);
//         super.eat()
//     }
// }

// let person =new Person1("azim");
// person.eat;

//  console.log(person.sleep());


// //practices

// let DATA ="Secret Information";
// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("data=",DATA);
//     }
// }

// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         DATA="New Secret Information";
//         console.log("data edited=",DATA);
//     }
// }


// let student = new User("azim","azim@");
// let student2 = new User("rafi","rafi@");

// let admin = new Admin("admin","admin@");

// admin.editData();

//try catch(e){

// a=5;
// b=10;

// console.log("a=",a);
// console.log("b=",b);
// console.log("a+b=",a+b)
// console.log("a+b=",a+b)
// try{
//     console.log("a+b=",a+b+c)
// }catch(err){
//     console.error("Error:",err);
// }




// console.log("a+b=",a+b)
// console.log("a+b=",a+b)
// console.log("a+b=",a+b)
// console.log("a+b=",a+b)
// console.log("a+b=",a+b)
// console.log("a+b=",a+b)
// console.log("a+b=",a+b)
// console.log("a+b=",a+b)




// hassan azim;


 //callback

//  function sum(a,b){
//     console.log(a+b);
//  }

//  function calculator(a,b,sumCallback){
//     sumCallback(a,b);
//  }

//  calculator(5,5,(a,b)=>{
//     console.log(a-b);
//  });


//  function getData (dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }else{
//             console.log("No more data");
//         }

//     },2000);
//  }

//  getData(1,()=>{
//     console.log("data 2 pending");
//     getData(2);
//  },()=>{
//     console.log("data 3 pending");
//     getData(3);
//  },()=>{
//     getData(4);
//  });

//  function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(" pending");
//             resolve(200)
//         },2000);
//     });
//  }

// //  async function  getdata(){
// //     await getData();
// //     await getData();

// //  }

//  (async function (){
//     await getData();
//     await getData();

//  })();



