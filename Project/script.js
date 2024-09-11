const downloadCV = document.getElementById('downloadCV');
const Contact = document.getElementById('Contact');
const linkedin = document.getElementById('linkedin');
const github = document.querySelector('#github');
const mail = document.querySelector('#mail');
const instgram = document.getElementById('instgram');
const textMotion = document.getElementById('text_motion');

/* =================== Text iterable ============== */

const text = [
    "Fronted Developer",
    "FullStack Developer",
    "Web Developer"
] 

let speed = 100;

let textIndex = 0;
let characterIndex = 0;

window.onload = typeWriter();

function typeWriter() {

    if(characterIndex < text[textIndex].length){
        textMotion.innerHTML += text[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter,speed);
    }else {
        setTimeout(eraseText,1000);
    }
}

function eraseText() {
    if(textMotion.innerHTML.length > 0){
        textMotion.innerHTML = textMotion.innerHTML.slice(0,-1);
        setTimeout(eraseText,50);
    }else {
        textIndex = (textIndex + 1) % text.length;
        characterIndex = 0;
        setTimeout(typeWriter,500);
    }
}

/* ========================= Click events of buttons & Icon ============================== */

downloadCV.addEventListener('click', () => {
    window.open('./assets/Shahzain khan.pdf');
});

Contact.addEventListener('click', () => {
    location.href = "#contact"
});

linkedin.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/shahzainkhan/')
});

github.addEventListener('click', () => {
    window.open('https://github.com/Shahzain333')
});

instgram.addEventListener('click', () => {
    window.open('https://www.instagram.com/shahzain._.niazi/profilecard/?igsh=MXNieTBkYzl6Mmd4Ng==')
})

mail.addEventListener('click', () => {
    window.open('mailto:shahzainkhannaizi1234@gmail.com')
})

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".mobile-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
