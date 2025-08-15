// Covert Binary to Decimal 

function binaryToDecimal(x){
    let decimal = 0;
    let pow = 1; // taking this because 2^0 = 1 and then we will multiply itby 2 to get the next powered value.

    while(x > 0){
        let lastDigit = x % 10;// finding the last value 
            decimal += lastDigit * pow; //Multiplying the last digit with the power of 2
        // and adding it to the decimal value.
            pow = pow * 2; // increasing the power of 2 for the next iteration
        x = Math.floor(x / 10); // removing the last digit from the binary number
    }
    console.log(decimal);
}

// binaryToDecimal(101);

function decimalToBinary(n){
        let pow =0;
        let binary = 0;

        while(n > 0){
            let remainder = n % 2;
            binary += remainder * Math.pow(10, pow); // multiplying the remainder with 10 raised to the power of current position
            pow++; // incrementing the power for the next position
            n = Math.floor(n / 2); // removing the last digit from the decimal number

        }
        console.log(binary);
}

// decimalToBinary(5);

//Print the indexes of all the SubArray of an Array

function PrintAllSubarray(arr){
    for(let start=0; start < arr.length; start++){ debugger// printing all the start 0,1,2,3,4
        for(let end=start; end < arr.length; end++){debugger//printing all the end for each start value
           //console.log("( " + start + " , " + end + " ) "  );//print all indexed

           for(let i=start; i<end; i++){
            console.log(arr[i] + " " ); // printing all the subarray values
           }
        }
    }
}
 //PrintAllSubarray([1,2,3,4,5]);

 function PrintMaxSumSubarray(arr){ // n^3 approach to find the maximum sum of subarray
    let maxSum = 0; // initializing the maximum sum to 0
    for(let start=0; start < arr.length; start++){ debugger// printing all the start 0,1,2,3,4
        for(let end=start; end < arr.length; end++){debugger//printing all the end for each start value
           //console.log("( " + start + " , " + end + " ) "  );//print all indexed
            let currentSum = 0; // initializing the current sum for each subarray
            
           for(let i=start; i<=end; i++){
                currentSum += arr[i]; // adding the current subarray value to the current sum
                
           }
           maxSum = Math.max(maxSum, currentSum); // updating the maximum sum if current sum is greater
           
        }
    }
    console.log("Maximum Sum of Subarray: " + maxSum); // printing the maximum sum of subarray
}
//  PrintMaxSumSubarray([1,2,3,4,5]);




 function PrintMaxSumSubarray2(arr){ // n^2 approach to find the maximum sum of subarray
    let maxSum = 0; // initializing the maximum sum to 0
    for(let start=0; start < arr.length; start++){ debugger// printing all the start 0,1,2,3,4
       
       let currentSum = 0; // initializing the current sum for each subarray

        for(let end=start; end < arr.length; end++){debugger//printing all the end for each start value
           //console.log("( " + start + " , " + end + " ) "  );//print all indexed
            currentSum += arr[end]; // adding the current subarray value to the current sum
           maxSum = Math.max(maxSum, currentSum); // updating the maximum sum if current sum is greater
           
        }
    }
    console.log("Maximum Sum of Subarray: " + maxSum); // printing the maximum sum of subarray
}
//  PrintMaxSumSubarray2([1,2,3,4,5]);

function KadaneAlgo(arr){ // O(n) approach to find the maximum sum of subarray using Kadane's Algorithm
    let currentSum = 0; // initializing the current sum to 0
    let maxSum = 0; // initializing the maximum sum to 0
    for(let i =0; i < arr.length; i++){
        currentSum += arr[i]; // adding the current element to the current sum
        if(currentSum < 0){ // if current sum is negative, reset it to 0
            currentSum = 0;
        }
        maxSum = Math.max(maxSum, currentSum); // updating the maximum sum if current sum is greater
    }
    console.log("Maximum Sum of Subarray using Kadane's Algorithm: " + maxSum); // printing the maximum sum of subarray
}

// KadaneAlgo([2,-3,6,-5,4,2])

function BuySellStocks(arr){
        let minBuyprice = arr[0]; // initializing the minimum buy price to the first element
        let maxProfit = 0; // initializing the maximum profit to 0
        for(let i = 1; i < arr.length; i++){ // starting from the second element
            if(arr[i] < minBuyprice){ // if current price is less than minimum buy price
                minBuyprice = arr[i]; // update the minimum buy price
            } else { // if current price is greater than minimum buy price
                let profit = arr[i] - minBuyprice; // calculate the profit
                maxProfit = Math.max(maxProfit, profit); // update the maximum profit if current profit is greater
            }

        }
        console.log("Maximum Profit from Buy and Sell Stocks: " + maxProfit); // printing the maximum profit
}

BuySellStocks([7,1,5,3,6,4]); // Example input for BuySellStocks function