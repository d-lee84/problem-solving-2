"use strict";

/*
Checks whether characters in string1 appear in the same subsequent order in string2
*/
function isSubsequence(str1, str2) {

    //create a pointer for str1 and a pointer for str2
    // feedback: str1Pos? startingPos? 
    let str1Pointer = 0;
    let str2Pointer = 0;
    
    //while str2 pointer < str2's length
    while (str2Pointer < str2.length) {
        
        //check if letter at str1 pointer is equal to letter at str2 pointer
        // - if equal, both pointers move up one index
        // - otherwise, str2 pointer moves up one index
        if (str1[str1Pointer] === str2[str2Pointer]) {
            str1Pointer++;
            str2Pointer++;
        } else {
            str2Pointer++;
        }
        
        //if the str1 pointer reaches the end of str1 return true
        if (str1Pointer === str1.length) return true;
    }
    
    return false;
}