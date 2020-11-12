"use strict";

/* Function returns the number of pairs that sum to the target number in the array of numbers O(n) time complexity */
function countPairs(nums, target) {

    // create counter for the number of pairs
    let pairCount = 0;

    // create a set with the nums array
    let numsSet = new Set(nums);

    // loop over the nums values
    for (let number of nums) {
        
        let complementNum = target - number;

        // remove the value from the set to prevent double counting
        numsSet.delete(number);

        // if the set contains the complement, add one to the counter
        if (numsSet.has(complementNum)) pairCount++;
        
        // feedback: make a complement (= target - number)?
        // make another variable for checking the number === target / 2

    }
    return pairCount;
}
