let name="priya";
console.log(name);
//string
let name1 ="john";

console.log(name1);
//integer
let age=30;
console.log(age);
//bolean
let isstudent =true;
console.log(isstudent);
//undefined
let adress;
console.log(adress);

let bigIntValue = 123456789012345678901234567890n;
console.log(bigIntValue);
console.log( typeof bigIntValue);

//objects 
let person = {
    name:"Shlok",
    age:21,
    isstudent:false

};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isstudent);


//array 
let numbers =[1,2,3,4,5];
console.log(numbers);
let arr1=[1,"hello","56"];
console.log(arr1);
//operations
arr1.shift();
console.log(arr1);
arr1.push(3);
console.log(arr1);
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}
let squaredarr=numbers.map(function(element){
    return element*element;
});
console.log(squaredarr);
//filtermethod
let evenarr=numbers.filter(function(element){
    return element%2==0;
});
console.log(evenarr);

//function
function greet(){
    console.log("hello world");
}
greet();
//function with parameter
function greet1(name){
console.log("hello, " +name +"!");
}
greet1("shlok");
function add(a,b){
return a+b;
}
let result=add(5,11);
console.log(result);

//template literals
let name2 ="shlok";
let greeting=`Hello,${name2}`;
console.log(greeting);