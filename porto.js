// dark mode-light mode implementation
const checkBoxDark = document.getElementById('checkbox-darkmode');
checkBoxDark.addEventListener('change',function () {
    const isDark = !this.checked;
    if (isDark) {
        document.body.classList.remove('light');
    }
    else {
        document.body.classList.add('light');
    }
    console.log(isDark);
})

//typed js
var  typed = new Typed(".multiple-text", {
    strings:["Student at UTCN","Football Passionate",
    "Gamer","Music Lover"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

var typed2 = new Typed(".multiple-txt", {
    strings:["Student at UTCN","Football Passionate",
    "Gamer","Music Lover"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

/* toggle icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

/* scroll sections active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*sticky navbar */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* remove toggle icon and navbar when click navbar link (scroll)*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* scroll reveal*/

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .skills-container, .portofolio-box, .contact form',
 { origin: 'bottom'});
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});


 function sendEmail(){
    Email.send({
        SecureToken: "496f0715-16f1-4c3b-8fcf-efefbf2db0ab",
        To : 'tudor.cercel@yahoo.ro',
        From : document.getElementById("adress").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("fullname").value
            + "<br> Email: " + document.getElementById("adress").value
            + "<br> Phone Number: " + document.getElementById("number").value
            + "<br> Email Subject: " + document.getElementById("esubject").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Succesfully")
    );
 }



