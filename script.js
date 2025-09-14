
const buttons = document.querySelectorAll(".button")   

const body = document.querySelector("body")

const reset = document.getElementById("reset")

const initialBackground = getComputedStyle(body).backgroundColor;

buttons.forEach( (button) => {
    button.addEventListener( 'click', (e) => {
       body.style.backgroundColor = e.target.id; 
    } )
} )


// for (let i = 0 ; i < buttons.length ; i ++) {
//     buttons[i].addEventListener("click" , (e) => body.style.backgroundColor = e.target.id)
    
// }


reset.addEventListener("click", (e) => {
    body.style.backgroundColor = initialBackground;
})

