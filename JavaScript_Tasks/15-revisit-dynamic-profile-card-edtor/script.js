// DOM Elements: Input fields and profile elements reference
const nameInput = document.getElementById('nameInput');
const bioInput = document.getElementById('bioInput');
const imageInput = document.getElementById('imageInput');
const colorInput = document.getElementById('colorInput');
const fontSelect = document.getElementById('fontSelect');

// Form validation function to ensure all required fields are filled
function validateForm() {
    var isValid = true;
    var inputs = [nameInput, bioInput, imageInput, fontSelect];

    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i] || !inputs[i].value.trim()) {
            if (inputs[i]) inputs[i].classList.add('is-invalid');
            isValid = false;
        } else {
            inputs[i].classList.remove('is-invalid');
        }
    }   

    return isValid;
}

// Function to update the profile card based on user input
function updateProfile() {
    if (!validateForm()) {
        alert('Please fill in all required fields!');
        return;
    }

    const profileName = document.getElementById('profileName');
    const profileBio = document.getElementById('profileBio');
    const profileImg = document.getElementById('profileImg');
    const fontSelect = document.getElementById('fontSelect');
    const card = document.getElementById('card');

    if (!profileName || !profileBio || !profileImg || !fontSelect || !card) {
        throw new Error('Profile display elements not found');
    }

    profileName.textContent = nameInput.value;
    profileBio.textContent = bioInput.value;
    card.style.fontFamily = fontSelect.value;
    profileImg.src = imageInput.value;
    card.style.backgroundColor = colorInput.value;
}

// Event handler for the update button click, with error handling
function handleProfileUpdate(event) {
    event.preventDefault();
    try {
        updateProfile();
    } catch (error) {
        console.error('Profile update failed:', error);
        alert('Error updating profile. Please check console for details.');
    }
}

// Attach event listener to the update button with error handling for missing element
const updateBtn = document.getElementById('updateProfileBtn');
if (updateBtn) {
    updateBtn.addEventListener('click', handleProfileUpdate);
} else {
    console.error('Update button not found in DOM');
}