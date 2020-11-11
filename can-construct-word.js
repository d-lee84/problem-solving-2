"use strict";

/* The function takes in a word and some letters and returns whether the word could be made with the letters */

function canConstructWord(word, letters) {
    // Get frequency map for both strings
    let wordFreq = getFreqLetters(word);
    let ltrFreq = getFreqLetters(letters);
    
    debugger;


    // Loop through the map for the word
    for (let letter of wordFreq.keys()) {
        // Test whether the frequency in ltrFreq is less than frequency of wordFreq or if the letters string does not contain this specific letter.
        if (ltrFreq.get(letter) < wordFreq.get(letter) || !ltrFreq.get(letter)) {
            return false;
        }
    }

    return true;
}


/* The function gets a string and returns a Map object with letters as key and frequencies as values */
function getFreqLetters(str) {
    let frequencies = new Map();

    for (let letter of str) {
        let countValue = frequencies.get(letter) || 0;
        frequencies.set(letter, countValue + 1);
    }

    return frequencies;
}
