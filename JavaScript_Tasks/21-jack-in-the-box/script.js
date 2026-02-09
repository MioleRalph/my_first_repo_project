const boxContainer = document.getElementById('box-container');
const button = document.getElementById('button');
const popupImage = document.getElementById('popup-image');

// Set the source of the popup image
popupImage.src = "assets/mochi.jpg";

// Initialize Lottie animation
let boxAnimation = lottie.loadAnimation({
    container: boxContainer,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/box.json'
});

// Function to toggle the box animation and popup image
function toggleBox() {
    if (boxContainer.getAttribute('data-state') === 'closed') {
        boxAnimation.goToAndPlay(0, true);
        boxContainer.setAttribute('data-state', 'open');

        // Show popup image
        setTimeout(() => {
            popupImage.style.opacity = "1";
            popupImage.style.transform = "translateX(-50%) scale(1)";
            popupImage.style.bottom = "300px";

            // Hide popup image
            setTimeout(() => {
                popupImage.style.opacity = "0";
                popupImage.style.transform = "translateX(-50%) scale(0)";
                popupImage.style.bottom = "10px";

                resetBox();
            }, 2000);

        }, 500);
    }
}

// Function to reset the box to closed state
function resetBox() {
    setTimeout(() => {
        boxContainer.setAttribute('data-state', 'closed');
    }, 500);
}

// Event listeners
boxContainer.addEventListener('click', toggleBox);
button.addEventListener('click', toggleBox);
