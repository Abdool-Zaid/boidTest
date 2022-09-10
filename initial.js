// console.log('running')
// console.log(document.querySelectorAll('.agent')[3].id)
// console.log(document.querySelectorAll('.agent')[3].classList.value)
let i
let agentArray=document.querySelectorAll('.agent')
for(i=0;i<agentArray.length;i++){
    console.log(agentArray[i].classList.value)
}
console.log(agentArray.length)
let defaultAgent= agentArray[0]
console.log(defaultAgent)
let all = document.querySelectorAll('*')
