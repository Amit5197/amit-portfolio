// =============================
// Typing Animation
// =============================


const text = [
    "Cloud & DevOps Engineer",
    "AWS Cloud Specialist",
    "Kubernetes Enthusiast",
    "Automation Engineer"
];


let index = 0;
let charIndex = 0;

const typingElement = document.querySelector(".hero h2");


function typeEffect(){

    if(charIndex < text[index].length){

        typingElement.textContent += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(deleteEffect,1500);

    }

}



function deleteEffect(){

    if(charIndex > 0){

        typingElement.textContent =
        text[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(deleteEffect,50);

    }

    else{

        index++;

        if(index >= text.length){

            index = 0;

        }

        setTimeout(typeEffect,500);

    }

}


typeEffect();





// =============================
// Scroll Reveal Animation
// =============================


const sections =
document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


sections.forEach(section=>{


const position =
section.getBoundingClientRect().top;


const screenHeight =
window.innerHeight;


if(position < screenHeight - 100){


section.style.opacity="1";

section.style.transform="translateY(0)";


}


});


});





// =============================
// Initial Animation Setup
// =============================


sections.forEach(section=>{


section.style.opacity="0";

section.style.transform="translateY(50px)";

section.style.transition=
"all .8s ease";


});



// Show first section after load

window.addEventListener("load",()=>{


document.querySelector(".hero").style.opacity="1";

document.querySelector(".hero").style.transform="translateY(0)";


});
