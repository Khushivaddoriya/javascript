// function add(num, callback) {
//     return callback(num + 5, false);
//   }

//   function sub(num, callback) {
//     return callback(num - 3, false);
//   }

//   function mul(num, callback) {
//     return callback(num * 2, false);
//   }

//   function div(num, callback) {
//     return callback(num / 2 - 2, false);
//   }

//   add(5, (addRes, error) => {
//     if (!error) {
//       sub(addRes, (subRes, error) => {
//         if (!error) {
//           mul(subRes, (mulRes, error) => {
//             if (!error) {
//               div(mulRes, (divRes, error) => {
//                 if (!error) {
//                   console.log(divRes);
//                 }
//               });
//             }
//           });
//         }
//       });
//     }
//   });

// ___________________________
// //            5
// function add(num, callback) {
//     return callback(num + 5, false);
//   } //10,false
//   function sub(num, callback) {
//     return callback(num - 3, false);
//   }
//   function mul(num, callback) {
//     return callback(num * 2, false);
//   }
//   function div(num, callback) {
//     return callback(num / 2, false);
//   }
//   add(5, (addRes, error) => {
//     if (!error) {
//       console.log("addRes : ", addRes);
//       sub(addRes, (subRes, error) => {
//         if (!error) {
//           console.log("subRes : ", subRes);
//           mul(subRes, (mulRes, error) => {
//             if (!error) {
//               console.log("mulRes : ", mulRes);
//               div(mulRes, (divRes, error) => {
//                 if (!error) {
//                   console.log("divRes : ", divRes);
//                 }
//               });
//             }
//           });
//         }
//       });
//     }
//   })

function add(num, callback) {
  return new Promise (() => {
        callback(num + 5, false);
  })
  
}

function sub(num, callback) {
  return  new Promise (() => {
    callback(num - 6, false);
})
}

function mul(num, callback) {
  return callback(num * 2, false);
}

function div(num, callback) {
  return callback(num / 2 - 2, false);
}

async function call() {
  let a = await add(5, (addRes, error) => {
    // if (!error) {
      console.log("addRes : ", addRes)
    // }
  })
  
  let b = await sub(a, (subRes, error) => {
    if (!error) {
      console.log("subRes : ", subRes);
    }
  });
//   let c = await mul(b, (mulRes, error) => {
//     if (!error) {
//       console.log("mulRes : ", mulRes);
//     }
//   });
//   let d = await div(c, (divRes, error) => {
//     if (!error) {
//       console.log("divRes : ", divRes);
//     }
//   });
}
call();
