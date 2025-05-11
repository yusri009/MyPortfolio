function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("senderMail").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_ha2h4nm", "template_yp9udyt",parms).then(alert("Email has been sent !!!"))
}