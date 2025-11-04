//Question 121 - Best time to buy and sell stocks

// var maxProfit = function(prices) {
//     let minPrice = prices[0]; 
//     let maxProfit = 0;        

//     for (let i = 1; i < prices.length; i++) {

//         let profit = prices[i] - minPrice;

//         if (profit > maxProfit) {
//             maxProfit = profit;
//         }

//         if (prices[i] < minPrice) {
//             minPrice = prices[i];
//         }
//     }
//     return maxProfit;
// };




//LeetCode 1716. Calculate Money in Leetcode Bank 💰


//O(n) approach


var totalMoney = function(n) {
    let money = 1;
    let pointer = 1;
    let totalSavings = 0;

    for (let i = 0; i < n; i++) {
        if (i > 0 && i % 7 === 0) {
            pointer++;
            money = pointer;
        }
        totalSavings += money;
        money++;
    }

    return totalSavings;
};
