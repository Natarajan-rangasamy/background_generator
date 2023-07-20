var color1 = document.getElementById("col1");
var color2 = document.getElementById("col2");
var body = document.querySelector(".grade");
function colorpick() {
  body.style.background =
    `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  document.querySelector(".css").innerText =
    `Hex value for color 1 is ${color1.value} Hex value for color 2 is ${color2.value}`;
  document.querySelector(".css2").textContent = `${body.style.background};`;
  
  
}
color1.addEventListener("input", colorpick);
color2.addEventListener("input", colorpick);

// color1.addEventListener("mouseenter",colorpick)
