
// callback function

// function one(str){
//     return str;
// }
// function three (param1){
//     // console.log(param1)           //  [Function: two]
//     console.log(param1())
// }
// function two(){

//     return "two";
// }
// three(two);                            //two



// function three(param1){
//     console.log(param1())
// }
// three(function newfun(){
//  return "newfunction...";
// });                                                      //newfunction...



// function three(param1) {
//     console.log(param1())                        //[Function (anonymous)]
//     // console.log(param1())                      //newfunction...
// }
// let one = () => {
//     return "one"                               //[Function (anonymous)]
// }
// three(function () {
//     return "newfunction..."                      //newfunction...
// })
// three(() => "newfunction...")                  //[Function: one]
// three(one)                                     //one
// three(() => {
//     return "one"                                //one
// })


// function fun_one(param1,param2,param3){
//     console.log(param1)
//     return(param1("hello_1")+"_"+param2("hello_2")+"_"+param3("hello_3"));
// }
// fun_one(
//     (arg1)=>{
//         console.log(arg1)
//     },
//     (arg2)=>{
//         console.log(arg2)
//     },
//     (arg3)=>{
//         console.log(arg3)
//     }
// );


// function fun_one(param1) {
//   console.log(param1);
//   return param1("Hello_1");
// }
// fun_one((arg1) => {
//   console.log(arg1);
// });

// fun_one call  -> para (function) = param =   (arg1) =>  console.log(arg1)
// Hello_1 --> arg1 - return print





