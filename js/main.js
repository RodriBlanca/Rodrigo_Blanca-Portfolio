/* CLASES */
class SkillDescription {
    constructor(skill) {
        this.skill = skill;
        this.description;
    }
}

// VARIABLES

const navMenu = document.querySelector('.nav-menu');
const heroIntroduction = document.querySelector('.hero-introduction');
const aboutMe = document.querySelector('.about-me');
const skills = document.querySelector('.skills');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');
const upArrowBtn = document.querySelector('.arrow');
const header = document.querySelector('.header');
const descriptionContainer = document.querySelector('.skills-description');
const skillsItems = document.querySelectorAll('.skills-list__item');
const emailInput = document.querySelector('.email');
const subjectInput = document.querySelector('.subject');
const messageInput = document.querySelector('.message');
const mobileSkills = document.querySelectorAll('.skill');
const linkedin = document.querySelector('.social-linkedin');
const github = document.querySelector('.social-github');
const menuButton = document.querySelector('.mobile-menu');
const mobileMenu = document.querySelector('.mobile-options');

window.addEventListener('load', () => {
    if(!heroIntroduction.style.opacity) {
        heroIntroduction.style.opacity = 1;
    }
});

/* ABOUT ME SECTION EFFECT */
window.addEventListener('scroll', () => {
    const aboutMeUbication = aboutMe.getBoundingClientRect();
    if(aboutMeUbication.top < 410) {
        aboutMe.style.opacity = 1;
        aboutMe.classList.add('about-me__animation');
    }
});

/* SKILLS SECTION EFFECT */
window.addEventListener('scroll', () => {
    const skillsUbication = skills.getBoundingClientRect();
    if(skillsUbication.top < 467) {
        skills.style.opacity = 1;
        skills.classList.add('skills-animation');
    }
});

/* LINKEDIN EFECT */
linkedin.addEventListener('mouseover', (e) => {
    if(e.target.classList == 'social-linkedin__link') {
        linkedin.children[0].classList.add('rotate-animation');
    }
})

linkedin.addEventListener('mouseout', () => {
    linkedin.children[0].classList.remove('rotate-animation');
})

/* GITHUB EFECT */
github.addEventListener('mouseover', (e) => {
    if(e.target.classList == 'social-github__link') {
        github.children[0].classList.add('rotate-animation');
    }
})

github.addEventListener('mouseout', () => {
    github.children[0].classList.remove('rotate-animation');
})


// NAV EFFECTS
window.addEventListener('scroll', () => {
    const aboutMeUbication = aboutMe.getBoundingClientRect();
    const skillsUbication = skills.getBoundingClientRect();
    const projectsUbication = projects.getBoundingClientRect();
    const contactUbication = contact.getBoundingClientRect();

    /* ABOUT */
    if(aboutMeUbication.top < 446 && aboutMeUbication.top > -230) {
        navMenu.children[0].children[0].style.color = '#e30613';
        navMenu.children[0].children[0].style.textShadow = '2.3px 2.3px 3px rgb(136, 136, 136)';
    } else {
        navMenu.children[0].children[0].style.color = '#001931';
        navMenu.children[0].children[0].style.textShadow = '0px 0px 0px transparent';
    }

    /* SKILLS */
    if(skillsUbication.top < 200 && skillsUbication.top > -362) {
        navMenu.children[2].children[0].style.color = '#e30613';
        navMenu.children[2].children[0].style.textShadow = '2.3px 2.3px 3px rgb(136, 136, 136)';
    } else {
        navMenu.children[2].children[0].style.color = '#001931';
        navMenu.children[2].children[0].style.textShadow = '0px 0px 0px transparent';
    }

    /* PROJECTS */
    if(projectsUbication.top < 185 && projectsUbication.top > -352) {
        navMenu.children[4].children[0].style.color = '#e30613';
        navMenu.children[4].children[0].style.textShadow = '2.3px 2.3px 3px rgb(136, 136, 136)';
    } else {
        navMenu.children[4].children[0].style.color = '#001931';
        navMenu.children[4].children[0].style.textShadow = '0px 0px 0px transparent';
    }

    /* CONTACT */
    if(contactUbication.top < 223 && contactUbication.top > -179) {
        navMenu.children[6].children[0].style.color = '#e30613';
        navMenu.children[6].children[0].style.textShadow = '2.3px 2.3px 3px rgb(136, 136, 136)';
    } else {
        navMenu.children[6].children[0].style.color = '#001931';
        navMenu.children[6].children[0].style.textShadow = '0px 0px 0px transparent';
    }
})


/* NAV ITEMS HOVER EFFECT  */
/* ABOUT */
navMenu.children[0].children[0].addEventListener('mouseover', () => {
    if(!navMenu.children[0].children[0].classList.contains('nav-animation')) {
        navMenu.children[0].children[0].classList.add('nav-animation');
        navMenu.children[0].children[0].style.color = '#e30613';
        navMenu.children[0].children[0].style.textShadow = '2.3px 2.3px 3px rgb(136, 136, 136)';
    }
})

navMenu.children[0].children[0].addEventListener('mouseout', () => {
    if(navMenu.children[0].children[0].classList.contains('nav-animation')) {
        navMenu.children[0].children[0].classList.remove('nav-animation');
        navMenu.children[0].children[0].style.color = '#001931';
        navMenu.children[0].children[0].style.textShadow = '0px 0px 0px transparent';
    }
})

/* SKILLS */
navMenu.children[2].children[0].addEventListener('mouseover', () => {
    if(!navMenu.children[2].children[0].classList.contains('nav-animation')) {
        navMenu.children[2].children[0].classList.add('nav-animation');
        navMenu.children[2].children[0].style.color = '#e30613';
        navMenu.children[2].children[0].style.textShadow = '2.3px 2.3px 3px rgb(136, 136, 136)';
    }
})

navMenu.children[2].children[0].addEventListener('mouseout', () => {
    if(navMenu.children[2].children[0].classList.contains('nav-animation')) {
        navMenu.children[2].children[0].classList.remove('nav-animation');
        navMenu.children[2].children[0].style.color = '#001931';
        navMenu.children[2].children[0].style.textShadow = '0px 0px 0px transparent';
    }
})

/* PROJECTS */
navMenu.children[4].children[0].addEventListener('mouseover', () => {
    if(!navMenu.children[4].children[0].classList.contains('nav-animation')) {
        navMenu.children[4].children[0].classList.add('nav-animation');
        navMenu.children[4].children[0].style.color = '#e30613';
        navMenu.children[4].children[0].style.textShadow = '2.3px 2.3px 3px rgb(136, 136, 136)';
    }
})

navMenu.children[4].children[0].addEventListener('mouseout', () => {
    if(navMenu.children[4].children[0].classList.contains('nav-animation')) {
        navMenu.children[4].children[0].classList.remove('nav-animation');
        navMenu.children[4].children[0].style.color = '#001931';
        navMenu.children[4].children[0].style.textShadow = '0px 0px 0px transparent';
    }
})

/* CONTACT */
navMenu.children[6].children[0].addEventListener('mouseover', () => {
    if(!navMenu.children[6].children[0].classList.contains('nav-animation')) {
        navMenu.children[6].children[0].classList.add('nav-animation');
        navMenu.children[6].children[0].style.color = '#e30613';
        navMenu.children[6].children[0].style.textShadow = '2.3px 2.3px 3px rgb(136, 136, 136)';
    }
})

navMenu.children[6].children[0].addEventListener('mouseout', () => {
    if(navMenu.children[6].children[0].classList.contains('nav-animation')) {
        navMenu.children[6].children[0].classList.remove('nav-animation');
        navMenu.children[6].children[0].style.color = '#001931';
        navMenu.children[6].children[0].style.textShadow = '0px 0px 0px transparent';
    }
})

/* MOBILE SKILL */
mobileSkills.forEach(skill => {
    skill.addEventListener('click', () => {
        skill.classList.toggle('active');
    })
})

/* MOBILE MENU BUTTON */
menuButton.addEventListener('click', () => {
    menuButton.querySelectorAll("span").forEach(span => {
        span.classList.toggle('open');
    })
    mobileMenu.classList.toggle('open')
})

/* TO SECTION */
contact.addEventListener('click', () => {
    // window.scrollTo({
    //     top: 2520,
    //     left: 0,
    //     behavior: "smooth"
    // })
    console.log('f')
})

// window.addEventListener('scroll', () => {
//     console.log(window.scrollY)
// })

/* UP ARROW BUTTON */
/* Arreglar que el botón se desvanezca cuando sube */
window.addEventListener('scroll', () => {
    const headerUbication = header.getBoundingClientRect();

    if(headerUbication.top < 190) {
        if(upArrowBtn.classList.contains('arrow-desanimation')) {
            upArrowBtn.classList.remove('arrow-desanimation');
            upArrowBtn.classList.add('arrow-animation');
            upArrowBtn.style.opacity = 1;
        } else {
            upArrowBtn.classList.add('arrow-animation');
            upArrowBtn.style.opacity = 1;
        } 
    } else {
        if(upArrowBtn.classList.contains('arrow-animation')) {
            upArrowBtn.classList.add('desanimation-arrow');
            upArrowBtn.classList.remove('arrow-animation');
            upArrowBtn.style.opacity = 0;
        } else {
            upArrowBtn.classList.add('desanimation-arrow');
            upArrowBtn.style.opacity = 0;
        }
    }
})

/* ENVÍA AL USUARIO AL TOP DE LA PÁGINA */
upArrowBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})


/* SKILLS DESCRIPTIONS */
// console.log(skillsItems.length);
console.log(skillsItems[0].children[1]);

for(let i = 0; i < skillsItems.length; i++) {
    skillsItems[i].addEventListener('click', (e) => {
        console.log(e.target);

        if(e.target == skillsItems[i].children[1]) {
            console.log(skillsItems[i].children[1].textContent)
            createDescription(i);
        }
    })
}

/* CREATE A DESCRIPTION */
function createDescription(i) {
    const skillTiltle = skillsItems[i].children[1].textContent;
    const descriptionItem = new SkillDescription(skillTiltle);
    console.log(descriptionItem)
    return descriptionItem;
}

/* CREATES HTML DESCRIPTION */
// function descriptionHTML() {
//     switch(skillsItems[i].children[1].textContent) {
//         case 'HTML': 

//         case 
//     }
// }



/* CONTACT */
emailInput.addEventListener('blur', (e) => {
    e.preventDefault();
    if(e.target.value.length === 0) {
        console.log('Todos los campos son obligatorios');
        emailInput.classList.add('error');
    } else {
        if(e.target.value.includes('@')) {
            console.log(e.target.value);
            emailInput.classList.add('validate');
        } else {
            console.log('El dato ingresado no es un mail');
            emailInput.classList.add('error');
        }
    }
})

subjectInput.addEventListener('blur', (e) => {
    e.preventDefault();
    if(e.target.value.length === 0) {
        console.log('Todos los campos son obligatorios');
        subjectInput.classList.add('error');
    } else {
        console.log(e.target.value);
        subjectInput.classList.add('validate');
    }
})

messageInput.addEventListener('blur', (e) => {
    e.preventDefault();
    if(e.target.value.length === 0) {
        console.log('Todos los campos son obligatorios');
    } else {
        console.log(e.target.value);
    }
})