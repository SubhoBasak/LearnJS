// var x = prompt("Enter a number");

// if (x % 2) {
//   alert("It's a odd number");
// } else {
//   alert("It's a even number");
// }

// var x = [33, 98, 44, 9, 32, 86];

// x.map((val) => {
//   if (val % 2) console.log(val, "is an odd number");
//   else console.log(val, "is an even number");
// });

// var x = [98, 34, 23, 99, -1, 23, 0];

// function checkOddEven(val) {
//   if (val % 2) console.log(val, "is an odd number");
//   else console.log(val, "is an even number");
// }

// for (var i = 0; i < x.length; i++) {
//   checkOddEven(x[i]);
// }

var nums = [1, 2, 34, 54, 55, 34, 32, 11, 19, 17, 54, 66, 13];
var evens = [];
var odds = [];

var evenNumbers = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 != 1) {
      evens.push(nums[i]);
      console.log(evens);
    } else {
      odds.push(nums[i]);
      console.log(odds);
    }
  }
};

alert(evens);
alert(odds);
