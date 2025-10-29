// Get all the buttons with the class 'details-toggle'
const toggleButtons = document.querySelectorAll('.details-toggle');

// Loop through each button and attach a click event listener
toggleButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        // Prevent the link from trying to navigate (e.g., to '#')
        event.preventDefault();

        // 1. Find the parent .project-card of the clicked button
        const projectCard = button.closest('.project-card');

        // 2. Find the .project-details section inside that card
        const details = projectCard.querySelector('.project-details');

        // 3. Toggle the 'is-visible' class on the details section
        // This is what switches the CSS from display: none to display: block
        details.classList.toggle('is-visible');

        // 4. Update the button text for better user experience
        if (details.classList.contains('is-visible')) {
            button.textContent = 'Hide Details';
        } else {
            button.textContent = 'View Details';
        }
    });
});