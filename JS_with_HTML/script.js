var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");

box1.style.backgroundColor = "red";
box2.style.backgroundColor = "blue";
box3.style.backgroundColor = "green";

var layout_btn = document.getElementById("btn");

function change_layout() {
  var layout = document.getElementsByClassName("container")[0];

  if (layout.style.display === "flex") {
    layout.style.display = "block";
  } else {
    layout.style.display = "flex";
  }
}

layout_btn.onclick = change_layout;
