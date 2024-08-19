// test.js
const assert = require('assert');

// Function that returns the string we want to test
function getGreeting() {
  return "Hello, Github Actions!";
}

// Test to check if the output matches the expected string
assert.strictEqual(getGreeting(), "Hello, Github Actions!", "The output does not match the expected string!");

console.log("Test passed: Output matches 'Hello, Github Actions!'");

