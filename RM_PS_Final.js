// Problem 01: Solve me First
var multiply = function(a, b) {
 	return a+b;
 };
// Problem 02: Multiply
var multiply = function(a, b) {
 	return a * b;
 };
// Problem 03: Even or Odd Number
var evenOrOdd = function(number) {
 	if(number % 2 === 0){
        return "Even"
    } else {
        return "Odd"
    }
 };
// Problem 04: Return Negative
/**
  * @param {number} number
  * @return {number}
  */
var makeNegative = function(number) {
 	if(number>=0){
        return number * (-1);
    } else {
        return number
    }
 };
// Problem 05: Opposite Number
var opposite = function(number) {
 	return -number;
 };

// Problem 06: Simple Array Sum
var simpleArraySum = function(ar) {
    var initial = 0;
 	ar.forEach(element => {
        initial += element
    });
    return initial;
 };

// Problem 07: sleepIn
var sleepIn = function(weekday, vacation) {
 	return !weekday || vacation;
 };

// Problem 08: monkeyTrouble
// Two monkeys are in trouble if both are smiling or neither is smiling. Return true in that case.
var monkeyTrouble = function(aSmile, bSmile) {
 	return aSmile === bSmile; //works like XNOR, if both are same then gives true 
 };
// Problem 09: sumDouble
// Return the sum of two integers, but return double the sum when they are equal.
var sumDouble = function(a, b) {
 	return 2*(a+b);
 };
// Problem 10: diff21
// Return the absolute difference between n and 21, doubling it when n is greater than 21.
/**
  * @param {number} n
  * @return {number}
  */
var diff21 = function(n) {
 	if(n>21){
        return 2*(n-21) //n is greater than 21 so n is always positive
    } else{
        return Math.abs(n-21)
    }
 };

// Problem 11: parrotTrouble
// Return true when a talking parrot is causing trouble outside the allowed hours of 7 through 20.
var parrotTrouble = function(talking, hour) {
 	return talking && (hour<7 || hour>20)
 };

// Problem 12: makes10
// Return true if either number is 10 or their sum is 10.
/**
  * @param {number} a
  * @param {number} b
  * @return {boolean}
  */
var makes10 = function(a, b) {
 	return ((a+b)===10 || a===10 ||b===10);
 };

// Problem 13: nearHundred
// Return true if n is within 10 of 100 or within 10 of 200.
/**
  * @param {number} n
  * @return {boolean}
  */
var nearHundred = function(n) {
 	
 };

14. posNeg
Return true when one number is positive and the other is negative. If negative is true, both must be negative.
/**
  * @param {number} a
  * @param {number} b
  * @param {boolean} negative
  * @return {boolean}
  */
var posNeg = function(a, b, negative) {
 	
 };
Expected Input: "a: -1, b: 1, negative: false"
Expected Output: true
15. notString
Add "not " to the beginning of a string unless it already starts with "not".
/**
  * @param {string} str
  * @return {string}
  */
var notString = function(str) {
 	
 };
Expected Input: "str: "bad""
Expected Output: "not bad"


16. Compare the Triplets
Compare two three-element score arrays and return how many points each person earns.
/**
  * @param {number[]} a
  * @param {number[]} b
  * @return {number[]}
  */
var compareTriplets = function(a, b) {
 	
 };
Expected Input: "a: [5, 6, 7], b: [3, 6, 10]"
Expected Output: [1, 1]
17. A Very Big Sum
Return the sum of all values in an integer array.
/**
  * @param {number[]} ar
  * @return {number}
  */
var aVeryBigSum = function(ar) {
 	
 };
Expected Input: "ar: [1000000001, 1000000002, 1000000003]"
Expected Output: 3000000006
18. Staircase
Create a right-aligned staircase of height n using # characters.
/**
  * @param {number} n
  * @return {string}
  */
var staircase = function(n) {
 	
 };
Expected Input: "n: 4"
Expected Output: "   #\n  ##\n ###\n####"



19. Grading Students
Round a grade up to the next multiple of 5 when it is close enough; keep grades below 38 unchanged.
/**
  * @param {number[]} grades
  * @return {number[]}
  */
var gradingStudents = function(grades) {
 	
 };
Expected Input: "grades: [73, 67, 38, 33]"
Expected Output: [75, 67, 40, 33]
20. Time Conversion
Convert a 12-hour AM/PM time string into 24-hour format.
/**
  * @param {string} s
  * @return {string}
  */
var timeConversion = function(s) {
 	
 };
Expected Input: "s: "07:05:45PM""
Expected Output: "19:05:45"
21. String Repeat
Return a string repeated exactly n times.
/**
  * @param {number} n
  * @param {string} s
  * @return {string}
  */
var repeatStr = function(n, s) {
 	
 };
Expected Input: "n: 3, s: "ha""
Expected Output: "hahaha"



22. Reversed Strings
Return the given string with its characters in reverse order.
/**
  * @param {string} str
  * @return {string}
  */
var solution = function(str) {
 	
 };
Expected Input: "str: "world""
Expected Output: "dlrow"
23. Sum of Positive
Return the sum of all positive numbers in an array. Return 0 if there are none.
/**
  * @param {number[]} arr
  * @return {number}
  */
var positiveSum = function(arr) {
 	
 };
Expected Input: "arr: [1, -4, 7, 12]"
Expected Output: 20
24. Grasshopper - Summation
Return the sum of all integers from 1 through n.
/**
  * @param {number} num
  * @return {number}
  */
var summation = function(num) {
 	
 };
Expected Input: "num: 8"
Expected Output: 36



25. Convert a Boolean to a String
Convert a boolean value into the string "true" or "false".
/**
  * @param {boolean} b
  * @return {string}
  */
var booleanToString = function(b) {
 	
 };
Expected Input: "b: true"
Expected Output: "true"
26. Palindrome Number
Return true if an integer reads the same forward and backward.
/**
  * @param {number} x
  * @return {boolean}
  */
var isPalindrome = function(x) {
 	
 };
Expected Input: "x: 121"
Expected Output: true
27. Fizz Buzz
For numbers from 1 to n, output Fizz for multiples of 3, Buzz for multiples of 5, and FizzBuzz for both.
/**
  * @param {number} n
  * @return {string[]}
  */
var fizzBuzz = function(n) {
 	
 };
Expected Input: "n: 5"
Expected Output: ["1", "2", "Fizz", "4", "Buzz"]



28. Running Sum of 1d Array
Return an array where each element is the running sum of the input array.
/**
  * @param {number[]} nums
  * @return {number[]}
  */
var runningSum = function(nums) {
 	
 };
Expected Input: "nums: [1, 2, 3, 4]"
Expected Output: [1, 3, 6, 10]
29. Richest Customer Wealth
Return the largest total wealth among all customers.
/**
  * @param {number[][]} accounts
  * @return {number}
  */
var maximumWealth = function(accounts) {
 	
 };
Expected Input: "accounts: [[1,2,3],[3,2,1]]"
Expected Output: 6
30. Number of Steps to Reduce a Number to Zero
Count how many steps it takes to reduce a number to zero: divide even numbers by 2 and subtract 1 from odd numbers.
/**
  * @param {number} num
  * @return {number}
  */
var numberOfSteps = function(num) {
 	
 };
Expected Input: "num: 14"
Expected Output: 6



31. Two Sum
Return the indices of two numbers whose values add up to the target.
/**
  * @param {number[]} nums
  * @param {number} target
  * @return {number[]}
  */
var twoSum = function(nums, target) {
 	
 };
Expected Input: "nums: [2, 7, 11, 15], target: 9"
Expected Output: [0, 1]
32. Remove Duplicates from Sorted Array
Remove duplicates in-place from a sorted array and return the number of unique elements.
/**
  * @param {number[]} nums
  * @return {number}
  */
var removeDuplicates = function(nums) {
 	
 };
Expected Input: "nums: [1, 1, 2]"
Expected Output: 2
33. Contains Duplicate
Return true if any value appears at least twice in the array.
/**
  * @param {number[]} nums
  * @return {boolean}
  */
var containsDuplicate = function(nums) {
 	
 };
Expected Input: "nums: [1, 2, 3, 1]"
Expected Output: true



34. Move Zeroes
Move all zeros to the end of the array while keeping the relative order of non-zero elements.
/**
  * @param {number[]} nums
  * @return {void}
  */
var moveZeroes = function(nums) {
 	
 };
Expected Input: "nums: [0, 1, 0, 3, 12]"
Expected Output: [1, 3, 12, 0, 0]
35. Merge Sorted Array
Merge two sorted arrays into the first array in non-decreasing order.
/**
  * @param {number[]} nums1
  * @param {number} m
  * @param {number[]} nums2
  * @param {number} n
  * @return {void}
  */
var merge = function(nums1, m, nums2, n) {
 	
 };
Expected Input: "nums1: [1,2,3,0,0,0], m: 3, nums2: [2,5,6], n: 3"
Expected Output: [1,2,2,3,5,6]
36. 3Sum
Return all unique triples whose three values add up to zero.
/**
  * @param {number[]} nums
  * @return {number[][]}
  */
var threeSum = function(nums) {
 	
 };
Expected Input: "nums: [-1,0,1,2,-1,-4]"
Expected Output: [[-1,-1,2],[-1,0,1]]


37. Plus One
Add one to an integer represented as an array of digits.
/**
  * @param {number[]} digits
  * @return {number[]}
  */
var plusOne = function(digits) {
 	
 };
Expected Input: "digits: [1, 2, 9]"
Expected Output: [1, 3, 0]
38. Reverse String
Reverse an array of characters in-place.
/**
  * @param {string[]} s
  * @return {void}
  */
var reverseString = function(s) {
 	
 };
Expected Input: "s: ["h","e","l","l","o"]"
Expected Output: ["o","l","l","e","h"]
39. Length of Last Word
Return the length of the last word in a string.
/**
  * @param {string} s
  * @return {number}
  */
var lengthOfLastWord = function(s) {
 	
 };
Expected Input: "s: "Hello World""
Expected Output: 5



40. Longest Common Prefix
Return the longest string that is a prefix of every string in the array.
/**
  * @param {string[]} strs
  * @return {string}
  */
var longestCommonPrefix = function(strs) {
 	
 };
Expected Input: "strs: ["flower","flow","flight"]"
Expected Output: "fl"
41. Find the Index of the First Occurrence in a String
Return the index of the first occurrence of a pattern string inside another string, or -1 if it does not occur.
/**
  * @param {string} haystack
  * @param {string} needle
  * @return {number}
  */
var strStr = function(haystack, needle) {
 	
 };
Expected Input: "haystack: "sadbutsad", needle: "sad""
Expected Output: 0
42. Valid Anagram
Return true if two strings contain the same letters with the same frequencies.
/**
  * @param {string} s
  * @param {string} t
  * @return {boolean}
  */
var isAnagram = function(s, t) {
 	
 };
Expected Input: "s: "anagram", t: "nagaram""
Expected Output: true


43. Is Subsequence
Return true if s can be formed by deleting some characters from t without changing order.
/**
  * @param {string} s
  * @param {string} t
  * @return {boolean}
  */
var isSubsequence = function(s, t) {
 	
 };
Expected Input: "s: "abc", t: "ahbgdc""
Expected Output: true
44. First Unique Character in a String
Return the index of the first character that appears exactly once, or -1 if none exists.
/**
  * @param {string} s
  * @return {number}
  */
var firstUniqChar = function(s) {
 	
 };
Expected Input: "s: "leetcode""
Expected Output: 0
45. Valid Parentheses
Return true if every opening bracket is closed by the correct type in the correct order.
/**
  * @param {string} s
  * @return {boolean}
  */
var isValid = function(s) {
 	
 };
Expected Input: "s: "()[]{}""
Expected Output: true



46. Best Time to Buy and Sell Stock
Return the maximum profit from buying once and selling once later.
/**
  * @param {number[]} prices
  * @return {number}
  */
var maxProfit = function(prices) {
 	
 };
Expected Input: "prices: [7,1,5,3,6,4]"
Expected Output: 5
47. Majority Element
Return the element that appears more than half of the time in the array.
/**
  * @param {number[]} nums
  * @return {number}
  */
var majorityElement = function(nums) {
 	
 };
Expected Input: "nums: [2,2,1,1,1,2,2]"
Expected Output: 2
48. Single Number
Return the one element that appears once when every other element appears twice.
/**
  * @param {number[]} nums
  * @return {number}
  */
var singleNumber = function(nums) {
 	
 };
Expected Input: "nums: [4,1,2,1,2]"
Expected Output: 4



49. Search Insert Position
Return the index where the target is found or should be inserted to keep the array sorted.
/**
  * @param {number[]} nums
  * @param {number} target
  * @return {number}
  */
var searchInsert = function(nums, target) {
 	
 };
Expected Input: "nums: [1,3,5,6], target: 5"
Expected Output: 2

50. Climbing Stairs
Return the number of distinct ways to reach the top when you can climb 1 or 2 steps at a time.
/**
  * @param {number} n
  * @return {number}
  */
var climbStairs = function(n) {
 	
 };
Expected Input: "n: 5"
Expected Output: 8


