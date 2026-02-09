const characterThumbs = document.querySelectorAll('.character-thumb');
const selectedImage = document.getElementById('selected-image');
const characterName = document.getElementById('character-name');

let selectedThumb = null;

characterThumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
        if (selectedThumb) {
            selectedThumb.classList.remove('selected');
        }

        thumb.classList.add('selected');
        selectedThumb = thumb;

        selectedImage.style.backgroundImage = `url(${thumb.dataset.image})`;
        characterName.textContent = thumb.dataset.name;
    });
});
