const add = function(num1,num2) {
  return num1+num2
};

const subtract = function(num1,num2) {
  return num1-num2
};

const sum = function(array) {
  let answer = 0
  for(const num of array){
    answer += num
  }
	return answer
};

const multiply = function(array) {
  let answer = 1
  for(const num of array){
    answer = answer * num
  }
  return answer

};

const power = function(num1,num2) {
  return num1**num2
  
};

const factorial = function(num) {
  if(num ===0){
    return 1
  }else{
    for(let i = num - 1; i >= 1; i--){
      num = num * i
    }
    return num
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
