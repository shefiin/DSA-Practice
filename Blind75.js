//Brute force method 
//time complexity - O(n^2)
//space complexity - O(1)
var containsDuplicate = function(nums) {
    let num = 0
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                return true
            }
        }
    }
    return false;
};


//Sorting(not efficient)
//Time Complexity: O(n log n)
//Space Complexity: O(1) or O(n)
var containsDuplicate = function(nums) {
    nums.sort((a,b) => a - b);
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[i - 1]) return true;
    }
    return false;
}


//efficient method using Set
//time complexity - O(n)
//space complexity - O(n)

var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length; 
};


//Using hashmap
//time complexity - O(n)
//space complexity - O(n)

var containsDuplicate = function(nums){
    const map = {};

    for(let num of nums) {
        if(map[num]) return true;
        map[num] = true; // {1: true,}
    }
    return false;
}