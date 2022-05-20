/*
    CIT 281 - Lab 07
    Name: Brady Rogers
*/

class CustomError extends Error {
  constructor(name) {
    super(name);
    this.customError = "Custom Error";
  }
}

function throwGenericError() {
  throw new CustomError("Generic Error");
}

function throwCustomError() {
  throw new CustomError("Custom Error");
}

// try catch finally block for Generic
console.log("Force Generic Error");
try {
  console.log("Generic Error try block");
  throwGenericError();
} catch (error) {
  console.log("Generic Error catch block");
  console.log("Error:", error.message);
} finally {
  console.log("Generic Error finally block");
}

// try catch finally block for Custom
console.log("Force custom Error");
try {
  console.log("Custom Error try block");
  throwCustomError();
} catch (error) {
  console.log("Custom Error catch block");
  console.log("Error:", error.message);
} finally {
  console.log("Custom Error finally block");
}
