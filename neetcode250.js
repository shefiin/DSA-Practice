// 242. valid anagram 

// function isAnagram(s, t){
//     if(s.length !== t.length) return false;

//     let map = {};

//     for(let i = 0; i < s.length; i++){
//         let letter = s[i];

//         if(!map[letter]){
//             map[letter] = 1
//         }else{
//             map[letter]++
//         }
//     }

//     for(let i = 0; i < t.length; i++){
//         let letter = t[i];

//         if(map[letter] === undefined) return false;
//         if(map[letter] < 1) return false;
//         map[letter]--;
//     }
//     return true;
// }


// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("anagram", "nagbram"));


//another easy method


// function isAnagram(s, t){
//     if(s.length !== t.length) return false;

//     let map = {};

//     for(let ch of s){
//         map[ch] = (map[ch] || 0) + 1;
//     }

//     for(let ch of t){
//        if(!map[ch]) return false
//        map[ch]-- 
//     }
//     return true
// }

// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("anagram", "nagbram"));




//1. Two sum


//brute force approach
// time complexity O(n^2)


// function twoSum(nums, target){

//     for(let i = 0; i < nums.length; i++){
//         for(let j = 0; j < nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 return [i, j]
//             }
//         }
//     }

// }

// console.log(twoSum([2,7,11,15], 9));


//Optimal way using map


// function twoSum(nums, target){
//     let map = new Map();
    
//     for(let i = 0; i < nums.length; i++){
//         let num = target - nums[i]
//         if(map.has(num)){
//             return [i, map.get(num)]
//         } else {
//             map.set(nums[i], i)
//         }
//     }

// }

// console.log(twoSum([2,7,11,15], 9));


//14. longest common prefix

// function longestCommonPrefix(strs) {
//     let prefix = strs[0];
//     for(let i = 1; i < strs.length; i++){
//         while(strs[i].indexOf(prefix) !== 0){
//             prefix = prefix.substring(0, prefix.length - 1)
//         }
//     }
//     return prefix
// };

// console.log(longestCommonPrefix(["flower","flow","flight"]));
// console.log(longestCommonPrefix(["dog","racecar","car"]));





