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



//leetcode 1768

// function mergeStrings(word1, word2){
//     let i = 0
//     let j = 0
//     let result = "";

//     while(i < word1.length || j < word2.length){
//         if(i < word1.length){
//             result += word1[i];
//             i++;
//         }

//         if(j < word2.length){
//             result += word2[j];
//             j++;
//         }
//     }

//     return result;
// }

// console.log(mergeStrings("hello", "shefin"));


//another way


// function mergeStrings(word1, word2){
//     let result = "";
//     let maxLen = Math.max(word1.length, word2.length)

//     for(let i = 0; i < maxLen; i++){
//         if(i < word1.length) result += word1[i]
//         if(i < word1.length) result += word2[i]
//     }
//     return result
// }
// console.log(mergeStrings("hello", "shefin"));


//leetcode 88 merge two sorted array


// var merge = function(nums1, m, nums2, n) {
//     let i = m - 1
//     let j = n - 1
//     let k = m + n - 1

//     while(j >= 0){
//         if(i >= 0 && nums1[i] > nums2[j]){
//             nums1[k] = nums1[i];
//             i--;
//         } else {
//             nums1[k] = nums2[j];
//             j--;
//         }
//         k--;
//     }
// };

