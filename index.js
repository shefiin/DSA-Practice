// function fibonacci(n){
//     const fib = [0, 1]
//     for(let i = 2; i < n; i++){
//         fib[i] = fib[i - 1] + fib[i - 2]
//     }
//     return fib
    
// }

// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(7));
// console.log(fibonacci(12));



// function factorial(n){
//     let result = 1  
//     for(let i = 2; i <= n; i++){
//         result = result * i
//     }
//     return result
// }

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(5));

// Big-O = O(n)



// function isPrime(n){
//     if(n < 2) return false

//     for(let i = 2; i < n; i ++){
//         if(n % i === 0) return false
//     }
//     return true
// }


// console.log(isPrime(1));
// console.log(isPrime(5));
// console.log(isPrime(4));


//Optimized way

// function isPrime(n){
//     if(n < 2) return false

//     for(let i = 2; i < Math.sqrt(n); i ++){
//         if(n % i === 0) return false
//     }
//     return true
// }


// console.log(isPrime(1));
// console.log(isPrime(5));
// console.log(isPrime(4));




// function isPowerOfTwo(n){
//     if(n < 1) return false;
//     while(n > 1){
//         if(n % 2 !== 0) return false
        
//         n = n / 2
//     }
//     return true
// }

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(5));


//Big-O = O(logn)



// function isPowerOfTwoBitwise(n){
//     if(n < 1) return false;

//     return(n & (n - 1)) === 0
// }

// console.log(isPowerOfTwoBitwise(1));
// console.log(isPowerOfTwoBitwise(2));
// console.log(isPowerOfTwoBitwise(5));


//Big-O = O(1)