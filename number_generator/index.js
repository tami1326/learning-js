const random_number = document.querySelector(".count");
const button = document.querySelector(".buttons");
 
button.addEventListener("click", () => {
    random_number.innerHTML = Math.round(Math.random() * 100);
})
