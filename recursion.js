/** Product of Nums: Calculate the product of an array of numbers. */
function product(nums) {
  if (nums.length === 0) {
    return 1;
  } else {
    const num = nums.pop();
    return num * product(nums);
  }
}

/** Longest Word: Return the length of the longest word in an array of words. */
function longest(words) {
  if (words.length === 1) {
    return words[0].length;
  } else {
    const wordLength = words[0].length;
    const restLength = longest(words.slice(1));
    return wordLength > restLength ? wordLength : restLength;
  }
}

/** Every Other Character: Return a string with every other character. */
function everyOther(str) {
  if (str.length <= 1) {
    return str;
  } else {
    const newStr = str[0] + everyOther(str.slice(2));
    return newStr;
  }
}

/** Is Palindrome: Check whether a string is a palindrome or not. */
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z]/g, '');
  if (str.length <= 1) {
    return true;
  } else if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    return isPalindrome(str.slice(1, str.length - 1));
  }
}

/** Find Index: Return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val, index = 0) {
  if (index >= arr.length) {
    return -1;
  }
  if (arr[index] === val) {
    return index;
  }
  return findIndex(arr, val, index + 1);
}

/** Reverse String: Return a copy of a string, but in reverse. */
function revString(str) {
  if (str === '') {
    return '';
  }
  const lastChar = str.slice(-1);
  const restOfStr = str.slice(0, -1);
  return lastChar + revString(restOfStr);
}

/** Gather Strings: Given an object, return an array of all of the string values. */
function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }
  return strings;
}

/** Binary Search: Given an array (not a linked list!) of sorted numbers and a value, return the index of that value. If not found, return -1. This algorithm should run in O(log(N)) time. */
function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === val) {
    return mid;
  } else if (arr[mid] < val) {
    return binarySearch(arr, val, mid + 1, end);
  } else {
    return binarySearch(arr, val, start, mid - 1);
  }
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
