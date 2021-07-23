// VARIABLES

/* Hero introduction */
const heroIntroduction = document.querySelector('.hero-introduction');
/* About me */
const aboutMe = document.querySelector('.about-me');
/* Skills */
const skills = document.querySelector('.skills');
/* Projects */

/* Contact */

window.addEventListener('load', () => {
    if(!heroIntroduction.style.opacity) {
        heroIntroduction.style.opacity = 1;
    }
})

/* ABOUT ME SECTION EFFECT */
window.addEventListener('scroll', () => {
    const aboutMeUbication = aboutMe.getBoundingClientRect();
    if(aboutMeUbication.top > 410) {

    } else {
        aboutMe.style.opacity = 1;
        aboutMe.classList.add('about-me__animation');
    }
})

/* SKILLS SECTION EFFECT */
window.addEventListener('scroll', () => {
    const skillsUbication = skills.getBoundingClientRect();
    console.log(skillsUbication);
    if(skillsUbication.top > 467) {

    } else {
        skills.style.opacity = 1;
        skills.classList.add('skills-animation');
    }
})
