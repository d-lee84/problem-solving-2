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

        // if value at left is negative and the value at right is positive, we swap the values, move both indexes
        //  - if both are negative, right goes down one index
        //  - if both are positive, left goes up one index
        // feedback: change nums[left] as a variable 
        if (nums[left] < 0 && nums[right] > 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        } else if (nums[right] < 0) {
            right--;
        } else if (nums[left] > 0) {
            left++;
        }
    }
    return nums;
}
