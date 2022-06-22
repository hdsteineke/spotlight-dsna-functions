function map(arr, callback) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const value = callback(item);
    newArray.push(value);
  }

  return newArray;
}

const myArray = [1, 6, 5];
const newArray = map(myArray, (num) => num ** 2);

//console.log(newArray, 'newArray');


/// filter 
function filter(arr, predicate) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (predicate(item)) newArray.push(item);
  }
  return newArray;
}

const newArrayFilter = filter([2, 6, 5], n => n % 2 === 0);

//console.log('newArrayFilter', newArrayFilter);


//// every method ////

function every(arr, predicate) {
  // loop through every item in the array, checking if it meets the predicate condition
  // if any item in the array does not meet the condition, returns 'false'
  // otherwise returns 'true'
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!predicate(item)) return false;
  }
  return true;
}

// console.log(every([2, 4, 6], n => n % 2 === 0));
// console.log(every([1, 2, 3], n => n % 2 === 0));


/// some method ///
function some(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) return true;
  }
  return false;
}
console.log(some([1, 6, 5], n => n % 2 === 0));
console.log(some([1, 7, 3], n => n % 2 === 0));


/// add-punctuation

function addPunctuation(punct) {
  return (x) => {
    return x + punct;
  };
}

const addExcitement = addPunctuation('!!!');
// console.log(addExcitement('Hello World'));

// console.log(addExcitement('Pokemon, catch em all'));
// Pokemon, catch em all!!!

const addUnsure = addPunctuation('?!?');
// console.log(addUnsure('Hello World'));
// Hello World?!?
// console.log(addUnsure('Pokemon, catch em all'));
// Pokemon, catch em all?!?

function addFirst(el) {
  return (arr) => {
    const newArr = [el, ...arr];
    return newArr;
  };
}
const addOrange = addFirst('orange');
//console.log(addOrange(['red', 'blue', 'green']));
// [orange,red,blue,green]
//console.log(addOrange(['blue', 'blue', 'blue']));
// [orange,blue,blue,blue]

const addCat = addFirst('cat');
//console.log(addCat(['dog', 'bird', 'lizard']));
// [cat,dog,bird,lizard]
//console.log(addCat(['lizard', 'donkey', 'whale']));
// [cat,lizard,donkey,whale]


//////////// FIBONACCI 

function fib(n) {
  //0 1 1 2 3 5 8 13 21
  // fib(5) should return fib(3) + fib(4) => 2 + 3 => 5
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n-1) + fib(n-2);
}


console.log(fib(0));  // 0
console.log(fib(1));  // 0, 1
console.log(fib(2));  // 0, 1, 1
console.log(fib(6)); // 0, 1, 1, 2, 3, 5, 8
console.log(fib(8));  // 0, 1, 1, 2, 3, 5, 8, 13, 21