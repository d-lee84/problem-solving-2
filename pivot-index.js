"use strict";

/* This function finds the index in which the sum of values on the left and on the right are equal to each other*/
function pivotIndex(nums) {
    let rightSum = nums.reduce((a, b) => a + b, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i];
        
        if (rightSum === leftSum) {
            return i;
        }
        
        leftSum += nums[i];
    }

    return -1;
}
