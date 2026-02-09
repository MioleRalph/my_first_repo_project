let fireflies = document.querySelectorAll(".firefly");

fireflies.forEach(firefly => {
    firefly.addEventListener("click", function () {

        this.style.transform = "scale(0.5)";

        setTimeout(() => {

            this.style.visibility = "hidden";

            setTimeout(() => {

                this.style.visibility = "visible";
                this.style.transform = "scale(1)";
            }, 1000);
        }, 500);
    });
});
