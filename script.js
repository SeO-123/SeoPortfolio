// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Replace these with your Email.js service and template IDs
    const serviceID = "service_ambxyca";
    const templateID = "template_9sdqef8";
  
    // Send the form data
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        alert("Your message has been sent successfully!");
        document.getElementById('contact-form').reset(); // Reset the form
      })
      .catch((error) => {
        alert("Failed to send your message. Please try again.");
        console.error("Error:", error);
      });
  });
  