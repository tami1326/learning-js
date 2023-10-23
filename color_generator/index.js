const generator = document.querySelector(".generate");
const hex = document.querySelector(".color");

generator.addEventListener("click", () => {
    generateColor();
});

const generateColor = () => {
    const random_color = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = '#' + random_color;
    hex.innerHTML = '#' + random_color;
}
