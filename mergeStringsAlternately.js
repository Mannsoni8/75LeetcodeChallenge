/**
 *  Merge Strings Alternately
 * 
  You are given two strings word1 and word2. Merge the strings by adding letters in alternating order,  starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

  Return the merged string.
 */

let s1 = "abc";
let s2 = "pqr";
let res = "";

for (let i = 0; i < Math.max(s1.length, s2.length); i++) {
  if (s1[i]) {
    res += s1[i];
  }
  if (s2[i]) {
    res += s2[i];
  }
}

console.log(res);
