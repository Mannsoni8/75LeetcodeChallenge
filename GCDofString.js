/**
 * 1071. Greatest Common Divisor of Strings
 
  For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

  Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 */

let s1 = "ABCABC";
let s2 = "ABC";

for (let i = s2.length; i >= 1; i--) {
  let candidate = s2.slice(0, i);

  if (s1.length % candidate.length !== 0 || s2.length % candidate.length) {
    continue;
  }
  let times1 = s1.length / candidate.length;
  let times2 = s2.length / candidate.length;

  if (candidate.repeat(times1) === s1 && candidate.repeat(times2) === s2) {
    console.log("Candidate works: ", candidate);
  }
}
