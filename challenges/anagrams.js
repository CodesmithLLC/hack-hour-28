/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */


 function anagrams(string) {
	let result = [];
	string = string.split("");
	function inner(stringy, newStr) {
    console.log(`this is newStr ${newStr}`)
    console.log(`this is stringy.length ${stringy.length}`)
		if(!stringy.length) {
			result.push(newStr.join(""));
		}
    console.log(`this is result ${result}`)
		for(let i = 0; i < stringy.length; i++) {
			let copy = stringy.slice();
			copy.splice(i,1);
			inner(copy, newStr.concat(stringy[i]));
		}
	}
  inner(string, []);
  result = [...new Set(result)];
	return result;
}
anagrams('dog');

module.exports = anagrams;
