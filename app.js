const button =document.querySelector("button")
const body = document.querySelector("body")

const color = ['lightred','pink','yellow','lightgreen','orange','#lightpurple']

body.style.backgroundColor = 'lightcyan'

button.addEventListener('click',()=>{
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]; 
});
