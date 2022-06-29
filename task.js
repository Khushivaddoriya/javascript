//*****Reverse Number******

// function reverse(n)
// {
//  n = n + "";                   //Convert into the String
//  return n.split("").reverse().join("");
// }
// console.log(reverse(32243));

//****Palindrome or not*******

// function palindrome(str) {
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     console.log(str)
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           return false;
//       }
//     }
//     return true;
//    }
//    console.log(palindrome("MaDAM"));
//    console.log(palindrome("12321"));

// ****All Combination of String******

// let possibleCombinations = (str) => {
//   let combinations = [];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length + 1; j++) {
//       combinations.push(str.slice(i, j));
//     }
//   }
//   return combinations;
// };
// console.log(possibleCombinations("return"));

// *****alphabet_order*******

// function sortString(str){
//     var arr = str.split('');
//     var tmp;
//     for(var i = 0; i < arr.length; i++){
//       for(var j = i + 1; j < arr.length; j++){
//         if(arr[i] > arr[j]){
//           tmp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = tmp;
//         }
//       }
//     }
//     console.log(arr)
//     return arr.join('');
//   }
//   console.log('sorting:',sortString('webmaster'));

//or

// function alphabet_order(str){
// return str.split('').sort().join('');
//   }
// console.log(alphabet_order("webmaster"));
// console.log(alphabet_order("46635632253"));

//****String First Letter toUpperCase*******

// function stringflupper(str){

//     const string =str ;
//     const words = string.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     console.log(words.join(" "));
// }
// stringflupper('all glory comes from daring to begin !!');

//****Longest word in String******

// function longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     }
//   }
//   return result;
// }
// console.log(longest_word('Web Development Tutorial'));

//*****Count vowels in String******

// function vowels(str){
//      str=str.toLowerCase();
//     let a=str.split('')
//     let count=0;
//     for(let i=0;i<a.length;i++){
//         if(a[i]==='a',a[i]==='e',a[i]==='i',a[i]==='o',a[i]==='u')
//         {
//             count++;
//         }
//     }
//     console.log('No of Vowels in given string is:',count);
// }
// vowels('Skillqode the Programming lab');

//or

// function vowel_count(str1)
// {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;

//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }

//   }
//   return vcount;
// }
// console.log(vowel_count("The quick brown fox"));

//*****Check Number is Prime*****

// function checkPrime(number) {
//     if (number <= 1) {
//       return false;
//     } else {
//       for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//           return false;
//         }
//       }
//       return true;
//     }
//   }
//   console.log(checkPrime(8));

//***accept argu check type********

// function detect_data_type(value)
// {
// var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;

// if (typeof value === "object" || typeof value === "function")
//     {
//      for (x = 0, len = dtypes.length; x < len; x++)
//      {
//             if (value instanceof dtypes[x])
//             {
//                 return dtypes[x];
//             }
//       }
//     }

//     return typeof value;
// }
// console.log(detect_data_type(12));
// console.log(detect_data_type('w3resource'));
// console.log(detect_data_type(false));

// or

// function checktype(arg1,arg2,arg3){
// console.log(typeof arg1)
// console.log(typeof arg2)
// console.log(typeof arg3)
// return console.log(typeof arg1,typeof arg2,typeof arg3);
// }
// checktype(['skill','development'],'Skill',(1,2,3));

//****n-row&n-column*******

// function matrix(n) {
//   var i;
//   var j;
//   var k = n;
//   let newarr;
//   for (i = 0; i < k; i++) {
//     for (j = 0; j < k; j++) {
      
    
//     if (i != j) {
//       newarr.push("0");
//     } else {
//       newarr.push("1");
//     }

//   }

//     console.log(newarr);
//     newarr='\0';
//   }
// }
// matrix(5);

//***Second Smallest and Largest Element******

// let arr=[27,29,21,23,25,22,24,26,28,30];
// function Secondslarray(arg){

//     console.log('array:',...arr);
//     arr=arr.sort();
//     console.log('sorted array:',...arr)
//     console.log('second smallest:',arr[1]);
//     let len=arr.length;
//     console.log('second largest:',arr[len-2]);
// }
// Secondslarray(arr);

//****Check Perfact Number*******

// function is_perfect(number)
// {
// var temp = 0;
//    for(var i=1;i<=number/2;i++)
//      {
//          if(number%i === 0)
//           {
//             temp += i;
//           }
//      }

//      if(temp === number && temp !== 0)
//         {
//        console.log("It is a perfect number.");
//         }
//      else
//         {
//        console.log("It is not a perfect number.");
//         }
//  }
// is_perfect(6);

// ****Factors of Positive Number*******

// function positiveinteger(num){
//     console.log(The factors of ${num} is:);
// for(let i = 1; i <= num; i++) {

//     if(num % i == 0) {
//         console.log(i);
//     }
// }
// }
// positiveinteger(17);

//*****Coins******

// function amountTocoins(amount, coins)
// {
//  if (amount === 0)
//   {
//      return [];
//    }
//  else
//    {
//      if (amount >= coins[0])
//        {
//         left = (amount - coins[0]);
//         console.log(coins);
//         return [coins[0]].concat( amountTocoins(left, coins) );
//         }
//       else
//         {
//          coins.shift();
//          return amountTocoins(amount, coins);
//         }
//     }
// }
// console.log(amountTocoins(70, [25, 10, 5, 2,1]));

// ****exponent&base*****

// function exp(b,n)
// {
//         var ans = 1;
//         for (var i =1; i <= n; i++)
//         {
//                 ans = b * ans;
//         }
//         return ans;
// }
// console.log(exp(2,3));

// initialise ans=1;
// i=1 ans=2*1,ans=2
// i=2 ans=2*2,ans=4
// i=3 ans=2*4,ans=8
// i=4 loop terminate
