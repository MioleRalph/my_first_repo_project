document.getElementById("container").addEventListener("click", function () {
    alert("You clicked the container!");
    this.style.backgroundColor = "lightgray";
});

document.querySelectorAll(".color-box").forEach(button => {
    button.addEventListener("click", function (event) {
        event.stopPropagation();
        const buttonColor = window.getComputedStyle(this).backgroundColor;
        document.getElementById("container").style.backgroundColor = buttonColor;
        alert("You clicked the " + this.textContent + " button!");
    });
});