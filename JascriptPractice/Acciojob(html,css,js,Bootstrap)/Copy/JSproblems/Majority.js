function major (nums,n)
{
  //your code here

    // Store frequency of every element

    let requiredFrequency = Math.floor(n/2)+1

    let store = {} //object

    for(let i=0;i<n;i++){

        return(store)

        if(store[nums[i]]!==undefined)
            store[nums[i]]++;
        else
            store[nums[i]]=1

        if(store[nums[i]]===requiredFrequency){
            console.log(store)
            return nums[i]
        }  
    }

}

let nums = [2,2,2,2,2,3,2]

// console.log(major(nums,nums.length))
let store2={}

console.log(store2[2])

store2[2]=1
store2[2]++

return(store2[2])
 
// // var arr = [2,1,2];
// var n = arr.length;
// function Majority(arr,n){
//     var max=arr[0];
//     var arr1 = [n];
//     for(let i=0;i<n;i++)
//     arr1[i]=0;
//     for(let i=0;i<n;i++)
//     for(let j=0;j<n;j++)
//     {
//         if(arr[i]==arr[j])
//         {
//             arr1[i]=arr1[i]+1;
//         }
//     }
//     for(let i=0;i<n;i++)
//     {
//             if (arr[i]>max)
//             max=arr[i];
//     }
//     if(max>n/2)
//     document.write(max);
// }
// Majority(arr,n);

//  // <!DOCTYPE html>
// // <html>
// //     <head>

// //     </head>
// //     <body>
// //         <script>
// //             var arr = [2,1,2];
// //             var n = arr.length;
// //             function Majority(arr,n){
// //                 var max=arr[0];
// //                 var arr1 = [n];
// //                 for(let i=0;i<n;i++)
// //                 arr1[i]=0;
// //                 for(let i=0;i<n;i++)
// //                 for(let j=0;j<n;j++)
// //                 {
// //                     if(arr[i]==arr[j])
// //                     {
// //                         arr1[i]=arr1[i]+1;
// //                     }
// //                 }
// //                 for(let i=0;i<n;i++)
// //                 {
// //                         if(arr[i]>max)
// //                         max=arr[i];
// //                 }
// //                 if(max>n/2)
// //                 document.write(max);
// //             }
// //             Majority(arr,n);
// //         </script>
// //     </body>
// // </html>