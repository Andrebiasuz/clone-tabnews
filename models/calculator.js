//function treat_variables(argument1 , argument2)

function add(number1, number2) {
  if (typeof number1 !== "number") {
    number1 = parseFloat(number1);
    if (isNaN(number1)) {
      return "Error";
    }
  }

  if (typeof number2 !== "number") {
    number2 = parseFloat(number2);
    if (isNaN(number2)) {
      return "Error";
    }
  }

  return number1 + number2;
}

exports.add = add; // export value of add. This is an "API-like" between the models and the system. Using commonJS
