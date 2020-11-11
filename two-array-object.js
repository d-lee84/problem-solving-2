"use strict";


/* 
*  Function returns an object given an array of keys and of values
*  If no value for a key is given, the value is null
 */
function twoArrayObject(keyArr, valArr) {
    // Initialize the object
    let finalObj = {};

    // Loop through the keys array
    for (let i = 0; i < keyArr.length; i++) { 
        
        // If the index is greater than the length of values array, the value should be null
        let value = (i >= valArr.length) 
            ? null
            : valArr[i];

        finalObj[keyArr[i]] = value;
    }

    return finalObj; 
}
