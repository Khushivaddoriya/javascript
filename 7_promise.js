// Promises
// ********
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//     - Promises divided into two categories.

//     1) Promise Creation

//     2) Promise Consumption

//     - Producer will create the Promises

//     - Consumer will consume the Promises

//     "Promise" is the Predefined class, used to create the "Promises"

//     we can consume Promises in two ways

//     1) then()

//     2) async & await keywords

//     Promises are alternative solution of Callback hell

// let promise1 = new Promise((resolve, reject) => {
//   //   resolve("tomarrow we will discuss async & await keyword");
//   reject("cant do that not clear promises");
// });
// console.log(typeof Promise);
// console.log(promise1);

// promise1.then(
//   (posRes) => {
//     console.log(posRes);
//   },
//   (errRes) => {
//     console.log(errRes);
//   }
// );

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello_1");
//     // reject("reject promise");
//   }, 5000);
// });
// promise1.then(
//   (posRes) => {
//     console.log("Before");
//     console.log(posRes);
//     console.log("After");
//   },
//   (errRes) => {
//     console.log(errRes);
//   }
// );

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello_1");
//   }, 2000);
// });

// let promise2 = new Promise((resolve, reject) => {
//   resolve("Hello_2");
// });

// promise1.then(
//   (posRes) => {
//     console.log(posRes);
//   },
//   (errRes) => {
//     console.log(errRes);
//   }
// );

// promise2.then(
//   (posRes) => {

    
//     console.log(posRes);
//   },
//   (errRes) => {
//     console.log(errRes);
//   }
// );



// let stocks = {
//     Fruits: ["strawberry", "grapes", "banana", "apple"],
//     liquid: ["water", "ice"],
//     holder: ["cone", "cup", "stick"],
//     toppings: ["chocolate", "peanuts"],
//   };
  let is_shop_open = true;
  let order = (time, work) => {
    return new Promise((resolve, reject) => {
      if (is_shop_open) {
        setTimeout(() => {
          resolve(work());
        }, time);
      } else {
        reject(console.log("Our shop is closed"));
      }
    });
  };
  console.log(order(0, () => {}));
  order(1000, () => {
    console.log(`order placed for ${stocks.Fruits[0]} ice Creame`);
  });
    .catch(() => {
      console.log("error handle");
    })
  order(1000, () => {
    console.log(`order placed for ${stocks.Fruits[0]} ice Creame`);
  })
    // console.log(order(1000, () => { console.log(`order placed for ${stocks.Fruits[0]} ice Creame`) }))
  .then(() => {
    return order(0000, () => console.log("production has started"));
  })
  .then(() => {
    return order(2000, () => console.log("Fruit has been chopped"));
  })
  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
    );
  })
  .then(() => {
    return order(1000, () => console.log("start the machine"));
  })
  .then(() => {
    return order(2000, () =>
      console.log(`ice cream placed on ${stocks.holder[1]}`)
    );