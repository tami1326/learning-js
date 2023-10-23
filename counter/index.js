const count = document.querySelector(".count");
// const add = document.querySelector(".add");
// const reset_count = document.querySelector(".reset");
// const sub = document.querySelector(".subtract");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        count.innerHTML++;
    } else if (e.target.classList.contains("subtract")){
        count.innerHTML--;
    } else {
        count.innerHTML = 0;
    }
    setColor();
})

function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "green";
    } else if (count.innerHTML < 0) {
        count.style.color = "red";
    } else {
        count.style.color = "white";
    }
}


// add.addEventListener("click", () => {
//     count.innerHTML++;
// });

// sub.addEventListener("click", () => {
//     count.innerHTML--;
// });

// reset_count.addEventListener("click", () => {
//     count.innerHTML = 0;
// });