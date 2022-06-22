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

console.log(newArray, 'newArray');

function filter(arr, predicate) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (predicate(item)) newArray.push(item);
  }
  return newArray;
}

const newArrayFilter = filter([2, 6, 5], n => n % 2 === 0);

console.log('newArrayFilter', newArrayFilter);