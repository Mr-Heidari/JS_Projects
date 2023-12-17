//select inputs and output
let firstNumber = document.getElementById("firstnumber"); //select firstnumber input by id
let secondNumber = document.getElementById("secondnumber"); //select secondnumber input by id
let output = document.getElementById("output"); //select output by id
//select operators buttons
let operatorplus = document.getElementById("operator+"); //select + operator by id
let operatormines = document.getElementById("operator-"); //select - operator by id
let operatormultiple = document.getElementById("operator*"); //select * operator by id
let operatordivide = document.getElementById("operator/"); //select / operator by id
let equal = document.getElementById("equal"); //select equal button
//select reset button
let reset = document.getElementById("reset");
//define a variable for save operator
let operatorValue = null;
//use onclick property on all operators buttons and save operators inner text in operatorvalue
operatorplus.onclick = (event) => {
  //operatorplus
  operatorValue = operatorplus.innerText;
};
operatormines.onclick = (event) => {
  //operatormines
  operatorValue = operatormines.innerText;
};
operatormultiple.onclick = (event) => {
  //operatormultiple
  operatorValue = operatormultiple.innerText;
};
operatordivide.onclick = (event) => {
  //operatordivide
  operatorValue = operatordivide.innerText;
};
//use onclick property on reset button and sett all inputs and output value to null
reset.onclick = (event) => {
  //reset
  firstNumber.value = null;
  secondNumber.value = null;
  output.value = null;
};
//define a fucntion for calculating and show on output
function outputshow() {
  if (operatorValue === "+") {
    //if operatorValue was eqaual +
    output.value =
      firstNumber.value +
      "+" +
      secondNumber.value +
      "=" +
      `${+firstNumber.value + +secondNumber.value}`;
    firstNumber.value = null;
    secondNumber.value = null;
  } else if (operatorValue === "-") {
    //if operatorValue was equal -
    output.value =
      firstNumber.value +
      "-" +
      secondNumber.value +
      "=" +
      `${+firstNumber.value - +secondNumber.value}`;
    firstNumber.value = null;
    secondNumber.value = null;
  } else if (operatorValue === "*") {
    //if operatorValue was equal *
    output.value =
      firstNumber.value +
      "*" +
      secondNumber.value +
      "=" +
      `${+firstNumber.value * +secondNumber.value}`;
    firstNumber.value = null;
    secondNumber.value = null;
  } else if (operatorValue === "/") {
    //if opeeratorValue was equal /
    output.value =
      firstNumber.value +
      "/" +
      secondNumber.value +
      "=" +
      `${+firstNumber.value / +secondNumber.value}`;
    firstNumber.value = null;
    secondNumber.value = null;
  } else {
    //if operator value was out of 4 our conditions
    output.value = "please enter two number and select your operator";
  }
}
//use onclick property and declare outputshow funtion
equal.onclick = (event) => {
  outputshow();
};
