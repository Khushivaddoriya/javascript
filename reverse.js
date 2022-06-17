// const x = [3,2,2,4,3];
// x.reverse();
// console.log("reverse number is :",x);



// function pal(str) {
//     const len = String.length
//     for (let i = 0; i < len / 2; i++) {
//         if (String[i] !== String[len - 1 - i]) {
//             console.log("is not palindrome")
//         }
//     }
//     console.log("is palindrome")
// }
// const String = console.log("enter a string")
// const value = pal(String)
// console.log(value)




    var i, j, len = 0;
    function pal( str);

    printf("\nenter string:");
    gets(str1);
  

    for(j=0;str1[len]!= '\0';len++);
 
    j = len - 1;
    for (i = 0; i <= len; i++)
    {
        str2[i] = str1[j];
        j--;
    }
    printf("\n str2 : %s", str2);
     //printf("\n str1 : %s", str1);
    i = 0;

     if (str1[i] > str2[i] || str1[i] < str2[i])
    {
        printf("\n palindrom"); 
        
    }
    else
    {
        printf("\n NOT palindrom");
    }
    return 0;
}