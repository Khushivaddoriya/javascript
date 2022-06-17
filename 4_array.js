//array
//collection of  "Homogenious" "indexed" elements called as "array"
//[]
//index starts from "0"
//we can access array elements with "indexes"

/* 1..

// index= [ 0 , 1 , 2 , 3 , 4]
let arr = [10, 20, 30, 40, 50];
console.log(arr[2])                     //30
console.log(arr[-1])                  //undefined
console.log(arr[5])                 //undefined

console.log(arr[0],arr[2],arr[4])  //10 30 50
console.log(arr[5],arr[-1])         //undefined undefined

*/

/*2..

length:

    the length property of an Object which is an instance of type array sets or returns the number of elements in that array.

*/


/*
let arr=[10,20,30,40,50]
console.log(arr)              //[ 10, 20, 30, 40, 50 ]
console.log(arr.length)      //5
arr.length=3;
console.log(arr)             //[ 10, 20, 30 ]

arr.length=6;
console.log(arr)             //[ 10, 20, 30, 40, 50, <1 empty item> ]
*/

//        0  1  2  3   4
// let arr=[10,20,30,40,50]

// console.log(arr[0], arr[2], arr[3], arr[5], arr[100], arr[-100], arr[-1])      //10 30 40 undefined undefined undefined undefined


// let arr=[]
// console.log(arr.length)        //0
// arr[0]=10;
// console.log(arr.length)         //1
// arr[100]=1000;
// console.log(arr.length)         //101

//3..

//insert  -- > //push()    //unshift()
//delete -- > //pop()     //shift()

// let arr = [20, 30, 40];
// console.log(arr.length)  //3
// console.log(arr)       //[ 20, 30, 40 ]
// arr.push(50);
// console.log(arr);     //[ 20, 30, 40, 50 ]
// arr.unshift(10);
// console.log(arr);       //[ 10, 20, 30, 40, 50 ]
// arr.pop();
// console.log(arr);     //[ 10, 20, 30, 40 ]
// arr.shift();
// console.log(arr);       //[ 20, 30, 40 ]
// arr.shift(40);
// console.log(arr)         //[ 30, 40 ]
// arr.pop(30);
// console.log(arr);       //[ 30 ]

//4..

//delete
//deletes an element at only a particular index
//delete property never releses the memory of deleted element

// let arr=[10,20,30,40,50]
// console.log(arr.length)       //5
// console.log(arr)           //[ 10, 20, 30, 40, 50 ]
// console.log(arr[0])       //10
// console.log(arr.length)    //5
// delete arr[4];
// console.log(arr.length)    //5
// console.log(arr)          //[ 10, 20, 30, 40, <1 empty item> ]
// delete arr[2];
// console.log(arr)   //[ 10, 20, <1 empty item>, 40, <1 empty item> ]
// console.log(arr.length)    //5

// arr[2]=undefined
// console.log(arr)  //[ 10, 20, undefined, 40, <1 empty item> ]    

//5..

// splice()

//     it is used to add & remove the element at any index..

//Syntax

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)


//     //    0  1  2  3  4  5  6  7  8   9  
// let arr1=[10,20,30,40,50,60,70,80,90,100]
// arr1.splice(4,3)
//          // (index 4 , 4 to 3 (4,5,6)index count and remove index )
// console.log(arr1)     //[10, 20,  30, 40,80, 90,100 ]

// arr1.splice(6,1)
// console.log(arr1)   //[ 10, 20, 30, 40, 80, 90 ]

// arr1.splice(0,1)
// console.log(arr1)  //
// // [ 20, 30, 40, 80, 90 ] 

// arr1.splice(1,1)
// console.log(arr1)   //[ 20, 40, 80, 90 ]

// arr1.splice(2, 0, 11, 12, 13);
// console.log(arr1);  //[20, 40, 11, 12,13, 80, 90]

// arr1.splice(1,1,11,12)
// console.log(arr1)  //[20, 11, 12, 11,12, 13, 80, 90]

// // arr1.splice(0,1,11)
// // console.log(arr1)   ////[11, 11, 12, 11,12, 13, 80, 90]


// arr1.splice(0,0,11)
// console.log(arr1)   ////[11, 11, 12, 11,12, 13, 80, 90]



// arr1.splice(9,0,110)
// console.log(arr1)   ////[11,20, 11, 12, 11,12, 13, 80, 90,110]


// let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr1.splice(-1, 1);
// console.log(arr1);  //[10, 20, 30, 40, 50,60, 70, 80, 90]
// arr1.splice(-3, 3);
// console.log(arr1);   //[ 10, 20, 30, 40, 50, 60 ]
// arr1.splice(-3, -3);
// console.log(arr1);  //[ 10, 20, 30, 40, 50, 60 ]
// arr1.splice(-3, 1, 11, 12, 13);
// console.log(arr1);   //[10, 20, 30, 11,12, 13, 50, 60]


//6...

//slice

    // The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

//syntax
    // slice()
    // slice(start)
    // slice(start,end)

//        0   1  2  3  4  5  6  7  8  9
// let arr1=[10,20,30,40,50,60,70,80,90,100]
//         0 -9 -8 -7 -6 -5 -4 -3 -2 -1

// arr1.slice(5,7)
// console.log(arr1)  //[10, 20, 30, 40,50,60, 70, 80, 90, 100]
// console.log(arr1.slice(5,7))   //[ 60, 70 ]
// console.log(arr1.slice(2,-1))  //[30, 40, 50, 60,70, 80, 90]

// console.log(arr1.slice(1, -4));    //[ 20, 30, 40, 50, 60 ]

// console.log(arr1.slice(-5,-1))   //[ 60, 70, 80, 90 ]

// console.log(arr1.slice(7,1))  //[]   

// console.log(arr1.slice(7,9))//[ 80, 90 ]
// arr1[3.5]
// console.log(arr1[3.0])   //40
// console.log(arr1[3.5])    //undefind


/*

let arr = [10, 20, "thirty", 40, " 50", 60, "70", 80, 90, 100];

console.log(typeof arr);  //object
console.log(arr);
console.log(arr["0"]);   //10
console.log(arr[3.0]);    //40
console.log(arr[3.1]);    //undefined
arr[3.5] = 45;
arr["A"] = 110;

console.log(arr[3.5]);      //45
console.log(arr["A"]);     //110
console.log(arr[2][0]);    //t
console.log(arr.length);    //10

*/
// concat

// let arr1 = [10,20,30];
// let arr2 = [40,50,60];
// console.log( [...arr1,...arr2] );



//immutability

// let grand = ["5acrs"];
// let father = [...grand,"5acrs"];
// let child = [...father,"10acrs"];
// console.log(child)   //[ '5acrs', '5acrs', '10acrs' ]




//deep cloning
// let c1 = [10,20,30];
// let xerox = [...c1];
// c1.push(40);
// xerox.push(50);               //[ 10, 20, 30, 50 ]
// console.log(c1);              //[ 10, 20, 30, 40 ]
// console.log(xerox);           //[ 10, 20, 30, 50 ]   



// let arr = [10,20,30,40,50,60];


// let x = arr.slice(3);
// let y = arr.slice(0,3);
// console.log( [...x,...y] );    ////[40,50,60,10,20,30]





//findIndex()
// let arr = [10,20,30,40,50,60];
// console.log(
//     arr.findIndex((element,index)=>{
//         return element === 30;     //2
//     })
// );           

// console.log(
//     arr.findIndex((element,index)=>{
//         return element == 60;       //=>5
//     })
// );          

// console.log(
//     arr.findIndex((element,index)=>{
//         return element === 100;      //-1
//     })
// );         

// arr.splice(arr.findIndex((element,index)=>{
//     return element == 20;              //[ 10, 30, 40, 50, 60 ]
// }),1);

// console.log(arr);       


// arr.splice(arr.findIndex((element,index)=>{
//     return element == 50;      //[10,30,40,60]
// }),1);

// console.log(arr);



// let arr1 = [{"cost":"100 INR"},
//             {"cost":"200 INR"},
//             {"cost":"300 $"},
//             {"cost":"400 INR"},
//             {"cost":"500 INR"}];
// arr1.splice(arr1.findIndex((element,index)=>{
//     return element.cost == "300 $";
// }),1);
// console.log( arr1 );






















