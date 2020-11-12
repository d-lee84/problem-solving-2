"use strict";

/*
* Takes in two positive integers and returns whether the numbers have the same frequency of their digits
*/
function sameFrequency(num1, num2) {
    let num1Str = num1.toString();
    let num2Str = num2.toString();

    if (num1Str.length !== num2Str.length) return false;

    let num1Freq = createFrequencyCounter(num1Str);
    let num2Freq = createFrequencyCounter(num2Str);

    for (let key of num1Freq.keys()) {
        //checks whether the frequencies of a digit are different or if num2 does not have the digit
        if (num1Freq.get(key) !== num2Freq.get(key) || !num2Freq.has(key)) return false;
    }

    return true;
}

/*
* Creates a frequency counter for each digit in a number using Map
*/
function createFrequencyCounter(numStr) {
    let frequencies = new Map();
    
    for (let digit of numStr) {
        let count = frequencies.get(digit) || 0;
        frequencies.set(digit, count + 1);
    }

    return frequencies;
}