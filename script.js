// JavaScript code for handling form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents the default form submission

    // You can add your logic here to handle form submission, such as sending an email or storing data

    // Example: Logging form values to the console
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Optionally, you can add code to reset the form after submission
    this.reset();
});
