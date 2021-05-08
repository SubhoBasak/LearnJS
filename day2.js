// for loop
for (var i = 0; i < 5; i++) {
  console.log("Hello World");
}

// while loop
var i = 0;

while (i < 5) {
  console.log("Hello World");
  i++;
}

// do while loop
var i = 0;
do {
  console.log("Hello World");
  i++;
} while (i < 5);

// function
function myFunc(x, y) {
  var z = x + y;
  console.log(z);
  return z;
}

const myFunc2 = function (x, y) {
  var z = x + y;
  console.log(z);
  return z;
};

const myFunc3 = (x, y) => {
  var z = x + y;
  console.log(z);
  return z;
};

// array
var array = [1, 2, 3, "A", "B", "C", "SKFGI", 99.99, [10, 20, [1, 2, 3]]];

// push & pop
array.push("new element"); // return the current size of the array
array.pop(); // return the last added element

console.log(array.length); // length of the array

// check if a value is in the array or not
// if exist then return the same value
// otherwise return undefined
array.find((element) => element === "A");

// check if a value is in the array or not
// if is in then return the index of the value
// otherwise return -1
array.findIndex((item) => item === "c");

// combine two arrays
array.concat(["m", "n", "o"]);

// subset of an array
array.slice(0, 3);

array.forEach((value, index) => {
  console.log(value, " at index ", index);
});

const map_vals = array.map((data, index) => {
  return data + " : " + index;
});
