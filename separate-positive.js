"use strict";

/* 
*  Function takes in an array of non-zeros and returns and array with positive numbers on the left side and negative numbers on the right.
*/
function separatePositive(nums) {

    // initialize the left and right pointers to the first and last index
    let left = 0;
    let right = nums.length - 1;

    // while left is less than right
    while (left < right) {

        let leftVal = nums[left];
        let rightVal = nums[right];

        // if value at left is negative and the value at right is positive, we swap the values, move both indexes
        //  - if both are negative, right goes down one index
        //  - if both are positive, left goes up one index
        // feedback: change nums[left] as a variable 
        if (leftVal < 0 && rightVal > 0) {
            [nums[left], nums[right]] = [rightVal, leftVal];
            left++;
            right--;
        } else if (rightVal < 0) {
            right--;
        } else if (leftVal > 0) {
            left++;
        }
    }
    return nums;
}
