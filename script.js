function sendMail(){
    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("senderMail").value.trim();
    const message = document.getElementById("message").value.trim();
    
    // Check if all fields are filled
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields before sending the message.');
        return;
    }
    
    // Check if email format is valid (more permissive pattern)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    let parms = {
        name : name,
        email : email,
        message : message,
    }

    emailjs.send("service_ha2h4nm", "template_yp9udyt", parms).then(function(response) {
        alert("Email has been sent !!!");
        // Clear the form
        document.getElementById("name").value = '';
        document.getElementById("senderMail").value = '';
        document.getElementById("message").value = '';
    }).catch(function(error) {
        alert('Failed to send message. Please try again.');
        console.log('Error:', error);
    });
}