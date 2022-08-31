function checkOddEven(number){
  if (number == null || number == undefined) {
    throw new Error("Value is undefined.")
  }

  if (typeof(number) != "number") {
    throw new Error("Value is not a number.")
  }

  return number % 2 === 0;
}

export {checkOddEven};