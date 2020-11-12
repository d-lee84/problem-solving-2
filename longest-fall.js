"use strict";

/* This function takes an array of integers and returns the length of consecutive decrease of integers */
function longestFall(nums) {

    if (!nums.length) return 0;

    let longestLength = 1;
    let prevVal = nums[0];
    let currCount = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < prevVal) {
            currCount++;
        }   else {
            currCount = 1;
        }
        prevVal = nums[i];

        longestLength = (currCount > longestLength)
            ? currCount
            : longestLength;
    }

    return longestLength;

}
