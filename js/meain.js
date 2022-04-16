let menu = document.querySelector(".menu-icon");
let nav = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("move")
    nav.classList.toggle("open-menu")
};

window.onscroll = () =>{
    menu.classList.remove("move")
    nav.classList.remove("open-menu")
}

// Email JS
function validate(){
    let name = document.querySelector(".name")
    let email = document.querySelector(".email")
    let msg = document.querySelector(".message")
    let sendBtn = document.querySelector(".send-btn")

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if( name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        }else{
            sendmail(name.value,email.value,msg.value);
            name.value = "";
            email.value = "";
            msg.value = "";
            success();
        }
    })
}
validate();

function sendmail(name,email,msg){
    emailjs.send("service_8jgzcdw","template_ui4ujlh",{
    from_name: email,
    to_name: name,
    message: msg,
    });
}

function emptyerror(){
    swal({
        title: "Oh No....",
        text: "Fields cannot be empty!",
        icon: "error",
      });
}

function success(){
    swal({
        title: "Email sent successfully",
        text: "I'll try to replay in 24 hours",
        icon: "success",
    });
}

//Header background Change in scroll
let header = document.querySelector("header")

window.addEventListener('scroll', () => {
    header.classList.toggle("header-active", window.scrollY > 0 )
})