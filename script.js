function send_Email(params){
    var tempParams = {
        to_name : document.getElementById("name").value,
        email_to : document.getElementById("email").value,

    }

    emailjs.send("service_dt0st8b", "template_3ltdb1g", tempParams)
    .then(function(res){
        console.log("Success", res.status)
    })


    

}