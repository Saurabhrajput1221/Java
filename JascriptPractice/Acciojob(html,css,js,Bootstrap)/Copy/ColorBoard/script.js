const colors = ['#e74c3c', '#8e44ad','Yellow', '#3498db', '#e67e22', '#2ecc71']


const SQUARES = 800

for(let i=0;i<SQUARES;i++){
    const square = document.createElement("div")
    square.classList.add("square")

    square.addEventListener("mouseover",()=> sColor(square))
    square.addEventListener("mouseout",()=> rColor(square))

    container.appendChild(square)
}

function sColor(element){
    const color = randomColor()

    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function rColor(element){
    element.style.background = "black"
    element.style.boxShadow = "0 0 2px #000"
}
function randomColor(){
    const index = Math.floor(Math.random()*colors.length)
    return colors[index]
}
// function abc(){
//     // var = hellow saurabh
// style.background = 'Yellow'
// }
// document.write(abc())