// Majority Element

// function major(arr,n)
// {
//   //your code here
  
//  let reqfreq=Math.floor(n/2)

//  let store={}//object

//  for(let i=0;i<n;i++){
//      if(store[arr[i]]!==undefined)
//      store[arr[i]]++;
//      else
//      store[arr[i]]=1;
//      if(store[arr[i]]>reqfreq){
//          console.log(store)
//          return arr[i]
//      }
//  }
// }
// let arr=[2,3,2,3,2,3,3]

// console.log(major(arr,arr.length))
// // function major(arr,n)
// // {
// //   //your code here
// // }
// // module.exports=major;



function major(arr,n)
    {
        let n=arr.lenght;
        let maxCount =0;
        let index =1;
        for(let i=0; i<n; i++){
            let count=0;
            for( let j=0;   j<n;   j++){
                if(arr[i]==arr[j])
                count++;

            }
            if (count> maxCount){
                maxCount=count;
                index=i;
            }
        }
        if(maxCount> (n/2)){
            return (arr[index]);

        }
    }
    module.exports=major;
    console.log(major)