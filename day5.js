// var x = 0;

// switch (x) {
//   case 0:
//     console.log("hello");
//     break;
//   case 1:
//     console.log("world");
//     break;
//   default:
//     console.log("invalid");
// }

// on click
// var btn = document.getElementById("our-btn");

// btn.onclick = function (e) {
//   console.log("hello");
// };

// on focus
// var inp = document.getElementById("inp-box");
// var tips = document.getElementById("pswd-tips");

// tips.style.display = "block";

// inp.onfocus = (e) => {
//   tips.style.display = "block";
// };

// // on blur
// inp.onblur = (e) => {
//   var pswd = e.target.value;
//   if (pswd.length >= 8) {
//     alert("Your password is accepted!");
//   } else {
//     alert("Please enter a password with minimum 8 character");
//   }
//   tips.style.display = "none";
// };

// on change
// console.log(inp);
// inp.addEventListener("change", function (e) {
//   console.log("your current input is", e.target.value);
// });

// inp.addEventListener("event name", <Function>)

// var paragraphs = document.getElementsByClassName("paragraph");
// console.log(paragraphs);

// for (var i = 0; i < paragraphs.length; i++) {
//   paragraphs[i].style.color = "blue";
// }

// var tags = document.getElementsByTagName("p");

// for (var i = 0; i < tags.length; i++) {
//   tags[i].style.color = "green";
// }

// function funcname() {

// }

// const funcname = function(){

// }

// const funcname = () => {}

// var p = document.getElementById("id");

// p.innerHTML =
//   "<h1>Hello World</h1><h2>Skfgi</h2><p>hello</p><img src='https://picsum.photos/128' />";

var form = document.getElementById("our-form");
var err = document.getElementById("error-msg");
err.style.display = "none";
var roll = document.getElementById("roll");
var age = document.getElementById("age");

age.oninput = (e) => {
  if (e.target.value > 200 || e.target.value < 0)
    alert("Please enter a valid age");
};

roll.oninput = (e) => {
  if (String(e.target.value).startsWith("253001190")) {
    err.style.display = "none";
  } else {
    err.style.display = "block";
  }
};

form.onsubmit = (e) => {
  e.preventDefault();

  var name = document.getElementById("name");
  var roll = document.getElementById("roll");

  console.log("You submit with name", name.value, "and roll", roll.value);
};

var x = prompt("Enter a number");
console.log(x);
