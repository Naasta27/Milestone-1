// This function validates the contact form input fields
function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    // Simple validation
    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = 'red'; // Set message color to red for errors
    } else {
        formMessage.textContent = 'Thank you for your message, ' + name + '! We will get back to you shortly.';
        formMessage.style.color = 'green'; // Set message color to green for success
        document.getElementById('contactForm').reset(); // Reset the form fields
    }
}

// This function toggles the visibility of a message on the About page
function toggleMessage() {
    const aboutMessage = document.getElementById('aboutMessage');
    if (aboutMessage.style.display === 'none' || aboutMessage.style.display === '') {
        aboutMessage.style.display = 'block'; // Show the message
    } else {
        aboutMessage.style.display = 'none'; // Hide the message
    }
}

// Add event listeners to the contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', validateForm);
}

// Add event listener to the toggle button on the About page
const toggleButton = document.getElementById('toggleButton');
if (toggleButton) {
    toggleButton.addEventListener('click', toggleMessage);
}