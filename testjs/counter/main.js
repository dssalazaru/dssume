let n = 0

const num = document.querySelector(".contador #num");
const btn = document.querySelectorAll(".buttons input");
// Decrease
btn[0].addEventListener("click", (e) => {
  e.preventDefault();
  n -= 1
  updateNum()
});
// Reset
btn[1].addEventListener("click", (e) => {
  e.preventDefault();
  n = 0
  updateNum()
});
// Increase
btn[2].addEventListener("click", (e) => {
  e.preventDefault();
  n += 1
  updateNum()
});

let updateNum = () => {
  num.innerHTML = n;
  if (n > 0) num.setAttribute("class", "pos")
  else if (n < 0) num.setAttribute("class", "neg")
  else num.setAttribute("class", "mid")
}

window.onload = () => {
  updateNum()
}