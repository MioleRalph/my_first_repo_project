function updateName() {
    let newName = document.getElementById("nameInput").value;
    document.getElementById("profileName").innerText = newName;
}

function updateBio() {
    let newBio = document.getElementById("bioInput").value;
    document.getElementById("profileBio").innerText = newBio;
}

function updateImage() {
    const newImage = document.getElementById("imageInput").value;
    const imgElement = document.getElementById("profileImg");
    imgElement.setAttribute("src", newImage);
}

function updateColor() {
    const newColor = document.getElementById("colorInput").value;
    const card = document.getElementById("card");
    card.style.setProperty("background-color", newColor);
}

function updateFont() {
    let newFont = document.getElementById("fontSelect").value;
    document.getElementById("cardBody").style.fontFamily = newFont;
}