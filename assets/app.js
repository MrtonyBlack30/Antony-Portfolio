// Nav Bar Function

let btn = document.querySelector('.arrow'),
    links = document.querySelector('.nav-links');

btn.addEventListener('click', () => {

    links.classList.toggle('display');

    btn.children[0].classList.toggle('toggle1');
    btn.children[1].classList.toggle('toggle2');
    btn.children[2].classList.toggle('toggle3');
});

const navLink = document.querySelectorAll('.nav-links');

const linkAction = () => {

    links.classList.remove('display');
    btn.children[0].classList.toggle('toggle1');
    btn.children[1].classList.toggle('toggle2');
    btn.children[2].classList.toggle('toggle3');

}
navLink.forEach(n => n.addEventListener('click', linkAction))


// Scroll top to bottom

function ScrollToTop() {
    window.scroll(0, 0);
}

// Form Validation

const form = document.querySelector('#form');
const Uname = document.querySelector('#name');
const Umail = document.querySelector('#mail');
const Umessage = document.querySelector('#message');
const contactMessage = document.querySelector('.contact-message');

form.addEventListener('submit', (e) => {
    // Error checking
    if (!validateInput()) {
        e.preventDefault();
    } else {
        sendEmail(e);
    }
});

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_74gqk4x', 'template_cn82elf', '#form', 'UReIZ61Bdl_uVThgy')
        .then(() => {
            contactMessage.textContent = 'Message sent successfully! ✅';

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);

            // Clear input fields
            form.reset();
        }, () => {
            // Show error
            contactMessage.textContent = 'Message not sent! ❌';
        });
};

function validateInput() {
    const nameVal = Uname.value.trim();
    const mailVal = Umail.value.trim();
    const messageVal = Umessage.value.trim();
    let success = true;

    if (nameVal === '') {
        success = false;
        setError(Uname, 'Username is required.');
    } else {
        setSuccess(Uname);
    }

    if (mailVal === '') {
        success = false;
        setError(Umail, 'Email is required.');
    } else if (!validateEmail(mailVal)) {
        setError(Umail, 'Enter a valid email!');
    } else {
        setSuccess(Umail);
    }

    if (messageVal === '') {
        success = false;
        setError(Umessage, 'Message is required.');
    } else {
        setSuccess(Umessage);
    }

    return success;
}

// Error Message
function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

// Email Verification
const validateEmail = (Uemail) => {
    return String(Uemail)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

// Correct Message
function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

// Context menu disable

window.addEventListener('contextmenu' , (e) => {
    e.preventDefault();
});


// Scroll Button Invisible 
const scroolling = document.getElementById('back_to_top');

window.onscroll = () => {

    if(window.scrollY > 400){

        back_to_top.style.display = "flex";
        
    }
    else{

        back_to_top.style.display = "none";

    }

}
