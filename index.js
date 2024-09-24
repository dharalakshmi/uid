function sendMail(){
    var params = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value,

    };
    const serviceID = "service_lhrot0t";
const templateID = "template_0wvdsyn";
    

emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
        console.log(res);
        alert("your message sent successfully");
    }
)
.catch((err) => console.log(err));
}

