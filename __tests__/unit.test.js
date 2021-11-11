// unit.test.js

const functions = require("../code-to-unit-test/unit-test-me.js");

// TODO - Part 2

//for isPhoneNumber function
test("testing a valid phone number 1", () => {
  let number = "(949) 413-7042";
  expect(functions.isPhoneNumber(number)).toBe(true);
});

test("testing a valid phone number 2", () => {
  let number = "413-634-9283";
  expect(functions.isPhoneNumber(number)).toBe(true);
});

test("testing an empty number", () => {
  let number = "";
  expect(functions.isPhoneNumber(number)).toBe(false);
});

test("testing a phone number with only 3 numbers in parantheses", () => {
  let number = "938";
  expect(functions.isPhoneNumber(number)).toBe(false);
});

//for isEmail function
test("testing valid person email", () => {
  let email = "ykostina@ucsd.edu";
  expect(functions.isEmail(email)).toBe(true);
});

test("testing another valid email", () => {
  let email = "getinvolved@gmail.com";
  expect(functions.isEmail(email)).toBe(true);
});

test("testing email with no .", () => {
  let email = "kkostinagmailcom";
  expect(functions.isEmail(email)).toBe(false);
});

test("testing email with no @", () => {
  let email = "kkostinagmail.com";
  expect(functions.isEmail(email)).toBe(false);
});

//for isStrongPassword function

test("testing strong pass 2", () => {
  let password = "Kpo_a334";
  expect(functions.isStrongPassword(password)).toBe(true);
});

test("testing strong pass 2", () => {
  let password = "Bf9169_ry";
  expect(functions.isStrongPassword(password)).toBe(true);
});

test("testing weak pass 1", () => {
  let password = "123";
  expect(functions.isStrongPassword(password)).toBe(false);
});

test("testing empty pass", () => {
  let password = "";
  expect(functions.isStrongPassword(password)).toBe(false);
});

//for isDate function

test("testing valid date 1", () => {
  let date = "05/17/1998";
  expect(functions.isDate(date)).toBe(true);
});

test("testing valid date 1", () => {
  let date = "02/26/2015";
  expect(functions.isDate(date)).toBe(true);
});

test("testing date where YYYY is 2 digits", () => {
  let date = "09/15/20";
  expect(functions.isDate(date)).toBe(false);
});

test("testing date where X has 0 digits with only 4 digits of Y", () => {
  let date = "2000";
  expect(functions.isDate(date)).toBe(false);
});

//for isHexColor function
test("testing valid 3 character hex code", () => {
  let hex = "#7FF";
  expect(functions.isHexColor(hex)).toBe(true);
});

test("testing valid 6 character hex code", () => {
  let hex = "FFFF00";
  expect(functions.isHexColor(hex)).toBe(true);
});

test("testing invalid 4 character hex code", () => {
  let hex = "1256";
  expect(functions.isHexColor(hex)).toBe(false);
});

test("testing empty hex code", () => {
  let hex = "";
  expect(functions.isHexColor(hex)).toBe(false);
});
