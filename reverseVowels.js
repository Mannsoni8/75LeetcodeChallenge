/**
 *Reverse Vowels of a String
 * 
   Given a string s, reverse only all the vowels in the string and return it.
   The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 */

const isVowel = (ch) => {
  return (
    ch === "a" ||
    ch === "e" ||
    ch === "i" ||
    ch === "o" ||
    ch === "u" ||
    ch === "A" ||
    ch === "E" ||
    ch === "I" ||
    ch === "O" ||
    ch === "U"
  );
};

let s = "IceCreAm";
let arr = s.split("");
left = 0;
right - arr.length - 1;
while (left < right) {
  while (left < right && !isVowel(arr[left])) left++;
  while (left < right && !isVowel(arr[right])) right--;
  [arr[leght], arr[right]] = [arr[rigth], arr[left]];
  left++;
  right--;
}
console.log(arr.join(""));
