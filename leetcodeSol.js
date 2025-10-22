//Question 121 - Best time to buy and sell stocks

var maxProfit = function(prices) {
    let minPrice = prices[0]; 
    let maxProfit = 0;        

    for (let i = 1; i < prices.length; i++) {

        let profit = prices[i] - minPrice;

        if (profit > maxProfit) {
            maxProfit = profit;
        }

        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }
    return maxProfit;
};