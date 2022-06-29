/*
function fun_one(){
    return "welcome to named functions";
}
console.log(fun_one())                  ////welcome to named functions


function fun_two(arg1,arg2,arg3){
    return `welcome to named functions ${arg1},${arg2},${arg3}`
}
console.log(fun_two(10,20,30));      //welcome to named functions 10,20,30

*/

// function fun_one(){
//     return "welcome to named functions";   
// }
// console.log( fun_one() );                   //welcome to named functions

// function fun_one(){
//     return "welcome";
// }
// console.log( fun_one);        //[Function: fun_one]




// function fun_one(arg1,arg2,arg3){
//     console.log(arg1, arg2, arg3);
// }
// fun_one("Angular13","NodeJS","MongoDB");                    //Angular13 NodeJS MongoDB
// fun_one("ReactJS","NodeJS","MongoDB");                      //ReactJS NodeJS MongoDB
// fun_one();                                                  //undefined undefined undefined
// fun_one(undefined,"NodeJS");                                //undefined 'NodeJS' undefined
// fun_one(null,null,null);   



// function fun_one(){
//     return "Hello";
// }
// function fun_two(){
//     return fun_one();
// }
// // console.log( fun_two );                       //  [Function: fun_two]

// console.log( fun_two() );                       //Hello




// function fun_one(){
//     return "Hello";
// }
// function fun_two(){
//     return fun_one;
// }

// console.log( fun_two()() );                //Hello

// console.log( fun_two());     





// function fun_one(arg1,arg2,arg3){
//     // console.log( arg1(),arg2(),arg3() )
//     console.log( arg1,arg2,arg3)             //[Function: fun_two] [Function: fun_three] [Function: fun_four]

// }
// function fun_two(){
//     return "Hello_1";
// }
// function fun_three(){
//     return "Hello_2";
// }
// function fun_four(){
//     return "Hello_3";
// }
// fun_one( fun_two, fun_three, fun_four );      //Hello_1 Hello_2 Hello_3


// let arr = [];
// function fun_one(){
//    return "Hello"; 
// }
// for(let i=0;i<5;i++){
//     arr.push( fun_one);   
// }
// for(let j=0;j<5;j++){
//     console.log( arr[j]() )
// }



// var fun_one = "Hello_1";
// function fun_one(){
//     return "Hello_2";
// }
// console.log( fun_one );             //Hello_1



// function fun_one(){
//     return var_one;
// }
// console.log( fun_one() );           //undefined
// var var_one = "Hello_1";
// console.log( fun_one() );           //Hello_1



// function fun_one(){
//     var var_one = "Hello_1";
//  }
//  console.log(var_one);       //Uncaught ReferenceError: var_one is not defined


// arrow functions   
// anonymous functions

//  let fun_one = ()=>{
//     return "welcome to arrow functions";
// }
// console.log( fun_one() );                       //welcome to arrow functions



// let fun_one = ()=>"hello";
// console.log( fun_one() );                   //hello


// let fun_one = (arg1,arg2,arg3)=>{
//     console.log(arg1,arg2,arg3);
// }
// fun_one("Angular13","NodeJS","MongoDB");                //Angular13 NodeJS MongoDB
// fun_one("ReactJS","NodeJS","MongoDB");                  //ReactJS NodeJS MongoDB
// fun_one("VueJS","NodeJS","MongoDB");                    //VueJS NodeJS MongoDB
// fun_one();                                              //undefined undefined undefined
// fun_one(undefined,"Hello_2");                           //undefined Hello_2 undefined
// fun_one(null,null,null);                                //null null null




// let fun_one = ()=>{
//     return "Hello";
// };
// console.log( fun_one );     //[Function: fun_one]



//    let fun_one = ()=>{
//         return ()=>{
//             return "Hello";   
//         }
//    };
//    console.log( fun_one()() );              //Hello



//    let fun_one = (arg1,arg2,arg3)=>{
//     console.log( arg1, arg2, arg3 );    //[Function (anonymous)] [Function (anonymous)] [Function (anonymous)]
//     console.log( arg1(), arg2(), arg3() );
// };
// fun_one( ()=>{
//     return "Hello_1";
// }, ()=>{
//     return "Hello_2";
// }, ()=>{
//     return "Hello_3";
// } );                //Hello_1 Hello_2 Hello_3



// default parameters in functions 
// *******************************
//     while defining the functions, we will initilize arguments with default values
//     this concept introduced in ES6



// function fun_one(arg1="Hello_1",arg2="Hello_2",arg3="Hello_3"){
//     console.log( arg1, arg2, arg3 );
//  }
//  fun_one();                                                 //Hello_1 Hello_2 Hello_3
//  fun_one("H_1","H_2","H_3");                                //H_1 H_2 H_3
//  fun_one("Welcome_1","Welcome_2","Welcome_3","Welcome_4");  //Welcome_1 Welcome_2 Welcome_3
//  fun_one(undefined,undefined,undefined);                    //Hello_1 Hello_2 Hello_3
//  fun_one(null,null,null);                                   //null null null
//  fun_one(undefined,undefined,"H_3");                        //Hello_1 Hello_2 H_3



//  function fun_one(arg1,arg2="hello_2"){
//     console.log( arg1, arg2 );
// }
//fun_one();                         //undefined 'hello_2'
//fun_one("hello_1");                  //hello_1 hello_2
//fun_one(undefined,undefined);       //undefined 'hello_2'
// fun_one(null,null);                   //null null




// rest parameters in functions
// ****************************
//     by using rest parameter, we can hold/store more than one value
//     ES6
//     we will represent rest parameter with "..." operator
//     "..." operator called as spread operator
//     we can have only "one" spread operator per function
//     position of spread operator should be last in occurances



// function fun_one(...arg1){
//     console.log( arg1 );
// }
// fun_one();                                      //[]
// fun_one("Hello_1");                             //['Hello_1']
// fun_one("Hello_1","Hello_2");                   //['Hello_1', 'Hello_2']
// fun_one("Hello_1","Hello_2","Hello_3");         //['Hello_1', 'Hello_2', 'Hello_3']
// fun_one(undefined);                             //[undefined]
// fun_one(undefined,null);                        //[undefined, null]





//findIndex()
// let arr = [10,20,30,40,50,60];



// arr.splice(arr.findIndex((element,index)=>{
//     return element == 20;
// }),1);

// console.log(arr);         //[ 10, 30, 40, 50, 60 ]



// let arr1 = [{"cost":"100 INR"},
//             {"cost":"200 INR"},
//             {"cost":"300 $"},
//             {"cost":"400 INR"},
//             {"cost":"500 INR"}];
// arr1.splice(arr1.findIndex((element,index)=>{
//     return element.cost == "300 $";
// }),1);
// console.log( arr1 );
//[
//{ cost: '200 INR' },
//{ cost: '100 INR' },
//{ cost: '400 INR' },
//{ cost: '500 INR' }
//]


// console.log(
//     [1,2,3,4,5].filter((element,index)=>{
//         return element>=3;
//     })
// );
//[ 3, 4, 5 ]






