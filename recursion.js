/** product: calculate the product of an array of numbers. */
/**
 * p([]) = 1
 *
 * p([1,2,3,4,5]): initial case
 * 1 + p([2,3,4,5]
 */

function product(nums) {
  if(nums.length === 0){
    return 1
  }
  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */
/** ["hello", "hi", "hola", "sskhfskhds"]
 * "hello" ["hi", "hola"]
 *
 */
function longest(words) {
  if(words.length === 0){
    return 0;
  }
  return Math.max(words[0].length, longest(words.slice(1)))
}

/** everyOther: return a string with every other letter. */
/**
 * hello ->
 * he   llo -> h
 * he ll o -> hl
 * he ll 0 | -> hlo
 *
 */

function everyOther(str) {
  if (str.length === 0) return "";
  return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */

// [duck, cat, pony] | cat
// duck !== cat -> false | [cat, pony]
// cat === cat -> true | [pony]
// pony !== cat -> false | []
// [] -> false -> false | end

function find(arr, val) {
  if (arr.length === 0) return false;
  return (arr[0] === val) || find(arr.slice(1), val);
}


/** isPalindrome: checks whether a string is a palindrome or not. */
// tacocat
// t === t | true -> acoca
// a === c | true -> coc
// c === c | true -> o -> true (base case)


// noon
// n === n | true -> 00
// o === o | true -> ""
// true (base case)

function isPalindrome(str) {
  if (str.length <= 1) return true;
  return (str[0] === str[str.length - 1]) && isPalindrome(str.slice(1, str.length - 1));
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";
  debugger;
  return str[str.length - 1] + revString(str.slice(0, str.length - 1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

// ["duck", "cat", "pony"] | cat
// duck [cat, pony] -> false
// cat [pony] -> true
// pony -> false

// ["duck", "cat", "pony"]

function findIndex(arr, val) {
  if (arr.length === 0) return -1;
  if (arr[0] === val) return 0;

  const curIndex = findIndex(arr.slice(1), val);

  if (curIndex === -1) {
    return -1;
  }

  return 1 + curIndex;
}

/** gatherStrings: given an object, return an array of all of the string values. */

// Loop through the object, append to res array when property is a string, otherwise go deeper intpo the data structure.

function gatherStrings(obj) {
  let strings = [];

  for (const key in obj) {

    if (typeof obj[key] === "string") {
      strings.push(obj[key]);
    } else if (typeof obj[key] === "object"){
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }

  return strings;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */
/**
 * base case = [one thing in here]
 * [1,2,3,4]
 * [1,2]
 * [1]
 *
 */
function binarySearch(arr, val) {
  if(arr.length === 0) return false;
  if(arr.length === 1) return arr[0] === val;
  let mid = Math.floor((arr.length-1)/2);

 if(arr[mid] > val){
  return false || binarySearch(arr.slice(0, mid), val)
 }else if(arr[mid] < val){
  return false || binarySearch(arr.slice(mid + 1), val)
 }else{
  return true;
 }

}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
