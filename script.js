// Get all elements with the 'randomized' class
const tags = document.getElementsByClassName("randomized");

// Loop through the tags and assign a random background color
for (let i = 0; i < tags.length; i++) {
  const randomColor = getRandomColor();
  tags[i].style.setProperty("--random-color", randomColor);
}

// Function to generate a random color in hexadecimal format
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
