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

