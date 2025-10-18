//Given an array arr[], the task is to print every alternate element of the array starting from the first element.

// Input: arr[] = [10, 20, 30, 40, 50]
// Output: 10 30 50
// Explanation: Print the first element (10), skip the second element (20), print the third element (30), skip the fourth element(40) and print the fifth element(50).



//1.Iterative approach

// function printAlter(arr){
//     let newArr = [];
//     for(let i = 0; i < arr.length; i+=2){
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// console.log(printAlter([10, 20, 30, 40, 50]));




// Leaders in an array

// Input: arr[] = [16, 17, 4, 3, 5, 2]
// Output: [17 5 2]
// Explanation: 17 is greater than all the elements to its right i.e., [4, 3, 5, 2], therefore 17 is a leader. 5 is greater than all the elements to its right i.e., [2], therefore 5 is a leader. 2 has no element to its right, therefore 2 is a leader.



//2.Nested loop approach (O[n^2])


// function leadersInArr(arr){
//     let leaders = [];
//     for(let i = 0; i < arr.length; i++){
//         let isLeader = true
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[j] > arr[i]){
//                 isLeader = false;
//                 break;
//             }
//         }
//         if(isLeader){
//             leaders.push(arr[i])
//         }
//     }
//     return leaders;
// }

// console.log(leadersInArr([16, 17, 4, 3, 5, 2]));



//Optimized method(O(n))

// function leadersInArr(arr){
//     let leaders = [];
//     let maxRight = arr[arr.length - 1]
//     leaders.push(maxRight);

//     for(let i = arr.length - 2; i >= 0; i --){
//         if(arr[i] >= maxRight){
//             leaders.push(arr[i])
//             maxRight = arr[i];
//         }
//     }

//     return leaders.reverse();
// }

// console.log(leadersInArr([16, 17, 4, 3, 5, 2]));

