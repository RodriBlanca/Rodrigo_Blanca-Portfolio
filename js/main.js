// VARIABLES

/* Nav menu */
const navMenu = document.querySelector('.nav-menu');
/* Hero introduction */
const heroIntroduction = document.querySelector('.hero-introduction');
/* About me */
const aboutMe = document.querySelector('.about-me');
/* Skills */
const skills = document.querySelector('.skills');
/* Projects */
const projects = document.querySelector('.projects');
/* Contact */
const contact = document.querySelector('.contact');

const linkedin = document.querySelector('.social-linkedin');
const github = document.querySelector('.social-github');

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
    // console.log(e.target);
    if(e.target.classList == 'social-linkedin__text') {
        linkedin.children[0].classList.add('rotate-animation');
    }
})

linkedin.addEventListener('mouseout', () => {
    linkedin.children[0].classList.remove('rotate-animation');
})

/* GITHUB EFECT */
github.addEventListener('mouseover', (e) => {
    if(e.target.classList == 'social-github__text') {
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

