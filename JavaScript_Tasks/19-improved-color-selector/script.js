const colorDisplay = document.getElementById("selected-color-display");
const container = document.getElementById("container");
const body = document.body;

// Add click event listener to the container to reset the background color and display
container.addEventListener("click", function() {
  alert("You clicked the container!");
  body.style.backgroundColor = "white";
  colorDisplay.textContent = "No color selected";
  
  document.querySelectorAll(".color-box").forEach(btn => {
    btn.classList.remove("active");
  });
});

// Add click event listeners to each color button
document.querySelectorAll(".color-box").forEach(button => {
  button.addEventListener("click", function(event) {
    event.stopPropagation();
    
    const colorName = this.textContent;
    const buttonColor = window.getComputedStyle(this).backgroundColor;
    
    document.querySelectorAll(".color-box").forEach(btn => {
      btn.classList.remove("active");
    });
    this.classList.add("active");
    
    colorDisplay.textContent = `Selected Color: ${colorName}`;
    
    body.style.backgroundColor = buttonColor;
    alert("You clicked the " + colorName + " button!");
  });
});