/**
 * Created by underthex on 6/14/18.
 */
console.clear();

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

let newArr = [];

let showResult = (methodName, returnValue, result) => {
    console.log(methodName + ' returns '
        + returnValue + '\nOriginal Array = ' + result);
    console.log('\r');
};


newArr = letters.map(x=>x);
showResult('toString()',
    newArr.toString(),
    newArr);

newArr = letters.map(x=>x);
showResult('letters.join("-")',
    newArr.join("-"),
    newArr);

newArr = letters.map(x=>x);
showResult('letters.pop() ',
    newArr.pop(),
    newArr);

newArr = letters.map(x=>x);
showResult('letters.push("poop") ',
    newArr.push("poop"),
    newArr);

newArr = letters.map(x=>x);
showResult('letters.shift() ',
    newArr.shift(),
    newArr);

newArr = letters.map(x=>x);
showResult('letters[1] = "poop" ',
    newArr[1]="poop",
    newArr);

newArr = letters.map(x=>x);
showResult('letters.concat(["POOP", "dog", "CAT"], [1,2,3]) ',
    newArr.concat(["POOP", "dog", "CAT"], [1,2,3]),
    newArr);

newArr = letters.map(x=>x);
showResult('letters.splice(2,5,"POOP", "dog", "CAT") ',
    newArr.splice(2,5,"POOP", "dog", "CAT"),
    newArr);

newArr = letters.map(x=>x);
showResult('letters.slice(2) ',
    newArr.slice(2),
    newArr);

newArr = letters.map(x=>x);
showResult('letters.slice(2,4) ',
    newArr.slice(2,4),
    newArr);