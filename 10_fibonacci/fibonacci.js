const fibonacci = function(nth) {
    //conversion to integer
    nth = parseInt(nth)
    
    //initialize the two numbers added together
    let num1 = 1
    let num2 = 0
    //check for negatives
    if(nth < 0){
        return "OOPS"
    }
    //check if 0
    if(nth === 0){
        return 0
    }
    // FOR loop taking the num as the nth fibonacci sequence
    for(let i = 1; i < nth; i++){
        //buffer to hold the soon to be previous number 
        let buffer = num1
        num1 = num1 + num2
        //assigning the new previous number to num2
        num2 = buffer
    }
    return num1
};

// Do not edit below this line
module.exports = fibonacci;
