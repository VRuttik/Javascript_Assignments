
function myFunction(){

  let color = document.getElementById("color_pick").value;
  let container = document.querySelector(".container");
  container.style.backgroundColor = color;

  let result = document.getElementById("result");

  result.innerHTML = "RGB Color Code: "+ color;
}
