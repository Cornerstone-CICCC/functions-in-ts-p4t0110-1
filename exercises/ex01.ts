// Create a function that makes mathematical operations dynamically.
// This function should receive as param a string or number, number and string
// First param: string or number (mandatory)
// Second param: number (optional)
// Third param: Enum (optional) - '+', '-', '/', '*'
// If the first param is string, just return it. Otherwise, use the two numbers and the string to make the math operation
// Eg: printInfoOrCalculate(3,5,"+") //Expected result: 8
// Eg: printInfoOrCalculate(5,3,"-") //Expected result: 2
// Eg: printInfoOrCalculate("TS",5,"+") //Expected result: TS
// Eg: printInfoOrCalculate("TS") //Expected result: TS

type Operation = "+" | "-" | "*" | "/";

const printInfoOrCalculate = (
  first: string | number,
  second?: number,
  op?: Operation
): string | number => {
  if (typeof first === "string") {
    return first;
  }

  if (second === undefined || op === undefined) {
    return first;
  }

  switch (op) {
    case "+":
      return first + second;
    case "-":
      return first - second;
    case "*":
      return first * second;
    case "/":
      return first / second;
    default:
      return first;
  }
};

// Tests
console.log(printInfoOrCalculate(3, 5, "+")); // Expected result: 8
console.log(printInfoOrCalculate(5, 3, "-")); // Expected result: 2
console.log(printInfoOrCalculate("TS", 5, "+")); // Expected result: "TS"
console.log(printInfoOrCalculate("TS")); // Expected result: "TS"

export default printInfoOrCalculate;
