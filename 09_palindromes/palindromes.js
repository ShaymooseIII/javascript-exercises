const palindromes = function (string) {
    // creating list of punctuation to filter out
    punctuation = [".", "!", ",", " "]
    // lowercasing the string and creating an array
    array = string.toLowerCase().split("")
    // filtering the array 
    filterdArray = array.filter(x => !punctuation.includes(x))
    //creation of the two variables to compare
    forward = filterdArray.join("")
    backwards = filterdArray.reverse().join("")
    // return condition  
    return forward === backwards
};

// Do not edit below this line
module.exports = palindromes;
