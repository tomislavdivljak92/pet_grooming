let slideIndex = 0;

showSlides(); // Start automatic slideshow on page load

// Function to show slides automatically
function showSlides() {
    let slides = document.querySelectorAll('.mySlides');

    // Hide all images by removing the 'active' class
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Increase the slide index (loop back to the first slide)
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Add 'active' class to the next image
    slides[slideIndex - 1].classList.add('active');

    // Change the image every 4 seconds (adjust this as needed)
    setTimeout(showSlides, 5000); // Call showSlides every 4 seconds
}

// Function to manually change the slides
function plusSlides(n) {
    showSlidesManually(slideIndex += n);
}

// Function to display the slide manually
function showSlidesManually(n) {
    let slides = document.querySelectorAll('.mySlides');

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Remove active class from all images
    slides.forEach(slide => slide.classList.remove('active'));

    // Add active class to the selected image
    slides[slideIndex - 1].classList.add('active');
}
