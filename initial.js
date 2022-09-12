// console.log(document.querySelectorAll('.agent')[3].classList.value)
let agentCount = Math.floor(
  (document.documentElement.clientWidth *
    document.documentElement.clientHeight) /
    8
);
// http://127.0.0.1:5500/
console.log(agentCount);
function generateRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
let u;
let i;
let ProxyArray = document.querySelectorAll(".agent");
let agentArray = [];
ProxyArray[0].style = `background-color:${generateRandomColor()}`;
document.querySelector("#target").innerHTML = ``;
agentArray.push(ProxyArray[0]);
let defaultAgent = agentArray[0];
for (u = 0; u < 999; u++) {
  agentArray.push(defaultAgent);
  document.querySelector("#target").innerHTML += agentArray[u].outerHTML;
  agentArray[u].style = `background-color:${generateRandomColor()}`;
  agentArray[u].id = "agentNO" + (u + 1);
}
initiateBoid = (id) => {
  document.querySelector("#" + id).classList.toggle("active");
  console.log(document.querySelector("#" + id).classList);
};
