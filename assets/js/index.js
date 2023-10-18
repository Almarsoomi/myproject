document.addEventListener("submit", function(event) {
    event.preventDefault();
    sendMail();
  }); 
function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        phone:  document.getElementById("phone").value,
        comments: document.getElementById("comments").value,
    };

const serviceID ="service_g48cbfo";
const templateID = "template_rxh118p";

emailjs.send(serviceID,templateID,params).then(res =>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("subject").value="";
        document.getElementById("phone").value="";
        document.getElementById("comments").value="";
        alert("Thank you for sending us your message. We will get in touch with you as soon as possible");
    })
    .catch(err=>alert("There is an error by sending your message, error is: " + err));

} 
  







