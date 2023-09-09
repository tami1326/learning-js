let count = 0;

document.getElementById("increase").onclick = function() {
    count += 1;
    printCount(count);
}

document.getElementById("decrease").onclick = function() {
    count -= 1;
    printCount(count);
}

document.getElementById("reset").onclick = function() {
    count = 0;
    printCount(count);
}

function printCount(count) {
    document.getElementById("count").innerHTML = count;
}

