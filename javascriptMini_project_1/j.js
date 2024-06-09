const counterElement = document.getElementById("counter");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

let counter = 0;

const updateCounter = (value) => {

    counter = counter + value;
    counterElement.textContent = counter;

    if(counter >= 10){
        plusBtn.setAttribute("disabled", true);
    }
    else{
        plusBtn.removeAttribute("disabled", false);
    }

// minusBtn .............
if(counter <= 0 )  // zero r soman ba zero r theke zodi choto hoy
{
    minusBtn.setAttribute("disabled", true);
}
else{
    minusBtn.removeAttribute("disabled", false);
}
}

// ..........................

plusBtn.addEventListener("click", () => {
    updateCounter(1);
});

minusBtn.addEventListener("click", () => {
   updateCounter(-1);
});