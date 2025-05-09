let currentImageIndex = 0; // Track the index of the current image
const images = [
  "img1.jpg", // Image paths
  "img2.jpg",
  "img3.jpeg",
  "img4.jpeg"
];

function setImage(element) {
  const main = document.getElementById('current');
  const thumbnails = document.querySelectorAll('.thumbnails img');

  console.log("Image clicked:", element.src); // Debug line

  // Set main image source
  main.src = element.src;

  // Remove 'active' class from all thumbnails
  thumbnails.forEach(thumb => thumb.classList.remove('active'));

  // Add 'active' class to clicked thumbnail
  element.classList.add('active');
  currentImageIndex = images.indexOf(element.src.split("/").pop()); // Set the index of the clicked image
}

// Optional: Set the first thumbnail as active on load
document.addEventListener('DOMContentLoaded', () => {
  const firstThumb = document.querySelector('.thumbnails img');
  if (firstThumb) firstThumb.classList.add('active');
});

// Change image when left or right arrow is clicked
function changeImage(direction) {
  currentImageIndex += direction; // Change the current image index by the direction (1 or -1)

  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1; // If at the beginning, go to the last image
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0; // If at the end, go to the first image
  }

  const main = document.getElementById('current');
  main.src = images[currentImageIndex]; // Update the main image

  // Update the active thumbnail
  const thumbnails = document.querySelectorAll('.thumbnails img');
  thumbnails.forEach(thumb => thumb.classList.remove('active')); // Remove active class from all thumbnails
  thumbnails[currentImageIndex].classList.add('active'); // Add active class to the new thumbnail
}
