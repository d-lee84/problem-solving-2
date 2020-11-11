"use strict";
/*
* Function returns true or false if the average of any two values equals the inputted target average
*/
function averagePair(sortedNums, targetAvg) {

    //create left pointer and right pointer
    let left = 0;
    let right = sortedNums.length - 1;

    //while loop as long as left pointer is less than right pointer
    while (left < right) {
        let avg = (sortedNums[left] + sortedNums[right]) / 2;

        //if average of left pointer value and right pointer value... 
        // - is equal to target average return true
        // - is greater than target average, move right pointer down one index
        // - less than target average, move left pointer up one index
        if (avg === targetAvg) {
            return true;
        } else if (avg > targetAvg) {
            right--;
        } else {
            left++;
        }
    }

    return false;
}