//regular expression practice Questions

//match any 10 digit number

let regex = /^\d{10} $/;
console.log(regex.test("1234567891"));

//Match all words star ting with “cat” (like cat, cater, catalog).

let word = /\bcat\w*/;

//Match all email addresses of the form something@something.com.
let email = /\b\w+@\w+\.com\b/;

//Extract all phone numbers in the format 123-456-7890.
let phone = /\b\d{3}-\d{3}-\d{4}\b/;

//Match all words ending with "ing" (like running, singing).
let sinWords = /\b\w+ing\b/;

//Find all dates in the format dd/mm/yyyy or dd-mm-yyyy.
let dates = / \b\d{2}[/-]\d{2}[/-]\d{4}\b/;

//Match all words that start with a vowel (a, e, i, o, u).
let vowels = / \b[aeiouAEIOU]\w*/;

//Extract all hashtags from a sentence (#webdev, #Learning).
let hastag = / #\w+/;

//Validate a password that:has at least 8 characters
// includes 1 uppercase, 1 lowercase, 1 digit, and 1 special character.

let password =
  / ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//Match repeated words (like hello hello, bye bye).
let repWords = / \b(\w+)\s+\1\b/;
