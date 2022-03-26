const textEl = document.getElementById("text")
const speedEl = document.getElementById("speed")

const text = "I'm Developer!"

let idx = 1

const NUM = 500
let time = NUM/speedEl.value

writeText()

function writeText(){
    textEl.innerHTML = text.slice(0,idx)
    speedEl.style.display= 'hidden'


    idx++;

    if(idx>text.length){
        idx=1
    }

    setTimeout(writeText,time)
}

speedEl.addEventListener("input",(e)=> {time = NUM/e.target.value
    
})










