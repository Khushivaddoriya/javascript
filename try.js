// console.log("I")
// console.log("eat")
// console.log("ice cream")

// console.log("I")
// setTimeout(()=>{
//     console.log("eat")
// },2000)
// console.log("ice cream")

// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let order = (fruit_name, call_production) => {
//   setTimeout(function () {
//     console.log(`${stocks.Fruits[fruit_name]} was selected`);
//     call_production();
//   }, 2000);
// };
// let production = () => {
//   setTimeout(() => {
//     console.log("production has started");
//     setTimeout(() => {
//       console.log("the fruits has been chopped");
//       setTimeout(() => {
//         console.log("add ice and water")
//         setTimeout(() => {
//             console.log("machine started bhmmmmmm");
//             setTimeout(() => {
//                 console.log(`container ${stocks.holder[0]} was selected`)
//             },2000);
//         },1000);
//       },1000);
//     },2000);
//   },0000);
// };
// order(0,production)

// function one(two){
//   console.log("two")
//   // return two
// }
// function two(){
//   console.log("hello")
// }
// one(two())

// let promise1=new Promise((resolve,reject) => {
//   reject("hello")
// });
// console.log(typeof Promise)
// console.log(promise1);

// promise1.then(
//   (PosRes) => {
//     console.log(PosRes)
//   },
//   (errRes) => {
//     console.log(errRes)
//   }
// );

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hello_1");
//   }, 5000);
// });
// promise1.then(
//   (posRes) => {
//     console.log("before");
//     console.log(posRes);
//     console.log("After");
//   },
//   (errRes) => {
//     console.log(errRes);
//   }
// );

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//     // reject("reject promise");
//   }, 5000);
// });
// promise1.then(
//   (posRes) => {
//     console.log("1");
//     console.log(posRes);
//     console.log("After");
//   },
//   (errRes) => {
//     console.log(errRes);
//   }
// );

// let promise1 = new Promise((resolve, reject) => {
//     resolve("strat");
// });
// promise1.then(()=>
//   {console.log("1")}
// )
// console.log("2")
// setTimeout(() => {
//     console.log("3")
// }, 1000)
// console.log("4")

// console.log([]==" ")    //false
// console.log([] == 0)  //true
// console.log(1 == "1")   //true
// console.log(true == true)   //true
// console.log(false == true)    //false
// console.log(0 == true)    //false
// console.log('' == true)      //false
// console.log(null == true)      //false
// console.log(null === 0)          //false
// console.log(undefined == true)
// console.log('abc'+'abc')

// let a=[0];
// console.log(a[0])

var http = require("http");

var server = http.createServer((Request, Response) => {
  Response.setHeader("content-type", "text/html");
  Response.write("<h1> Hello greeting </h1>");
  console.log("request rec");
});
server.listen(6565, () => {
  console.log("listening 7878");
});
