const options = document.querySelectorAll('.option');
const armorSlots = document.querySelectorAll('.armor-slot');
const saveButton = document.getElementById('save-button');
const confirmationMessage = document.getElementById('confirmation-message');

// Adds click event listeners to each option. When an option is clicked, it updates the corresponding armor slot with the selected image and highlights the selected option.
function handleOptionClick() {
    options.forEach(option => {
        option.addEventListener('click', () => {
 
            const part = option.parentElement.dataset.part;
            const src = option.dataset.src;

            // Selects the armor slot element corresponding to the clicked option's 'part'.
            const slot = document.querySelector(`.armor-slot[data-part="${part}"]`);

            // Removes any existing child elements (images) from the armor slot.
            while (slot.firstChild) {
                slot.removeChild(slot.firstChild);
            }

            if (src) {
                const img = document.createElement('img');
                img.src = src;
                slot.appendChild(img);
            }

            // Removes the 'selected' class from all sibling options and adds it to the clicked option.
            const siblings = option.parentElement.querySelectorAll('.option');
            siblings.forEach(sibling => sibling.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
}

// Adds a click event listener to the save button. When clicked, it displays a confirmation message for 3 seconds.
function handleSaveButtonClick() {
    saveButton.addEventListener('click', () => {
        confirmationMessage.style.display = 'block';

        setTimeout(() => {
            confirmationMessage.style.display = 'none';
        }, 3000);
    });
}

handleOptionClick();
handleSaveButtonClick();