let agentCount = Math.floor(
  (document.documentElement.clientWidth *
    document.documentElement.clientHeight) /
    8
);
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
addEventListener("pointermove", (e) => {
  // console.log(e);
  let xcor = e.pageX + "px";
  let ycor = e.pageY + "px";
  console.log(xcor, ycor);
  document.querySelector(".active").style.left = e.pageX + "px";
  document.querySelector(".active").style.top = e.pageY + "px";
  // document.querySelectorAll(".agent").style.left = (e.pageX+() )+ "px";
  // document.querySelectorAll(".agent").style.top = e.pageY + "px";
});
