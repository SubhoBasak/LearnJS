// var paragraph = document.getElementById("info");
// var inc = document.getElementById("inc");
// var dec = document.getElementById("dec");

// var size = 12;

// inc.onclick = function () {
//   size++;
//   paragraph.style.fontSize = size + "px";
// };

// dec.onclick = function () {
//   size--;
//   paragraph.style.fontSize = size + "px";
// };

var img1 = document.getElementById("img-1");
var img2 = document.getElementById("img-2");
var img3 = document.getElementById("img-3");

var prev = document.getElementById("prev");
var nxt = document.getElementById("nxt");

img1.style.display = "block";
img2.style.display = "none";
img3.style.display = "none";

var cur_img = 1;

prev.onclick = function () {
  cur_img--;

  if (cur_img < 1) cur_img = 3;

  change_img();
};

nxt.onclick = function () {
  cur_img++;

  if (cur_img > 3) cur_img = 1;

  change_img();
};

function change_img() {
  switch (cur_img) {
    case 1:
      img1.style.display = "block";
      img2.style.display = "none";
      img3.style.display = "none";
      break;
    case 2:
      img1.style.display = "none";
      img2.style.display = "block";
      img3.style.display = "none";
      break;
    case 3:
      img1.style.display = "none";
      img2.style.display = "none";
      img3.style.display = "block";
      break;
  }
}
