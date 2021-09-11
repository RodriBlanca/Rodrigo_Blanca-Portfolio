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
const certificates = document.querySelector('.certificates');
const upArrowBtn = document.querySelector('.arrow');
const header = document.querySelector('.header');
const skillsItems = document.querySelectorAll('.skills-list__item');
const emailInput = document.querySelector('.email');
const subjectInput = document.querySelector('.subject');
const messageInput = document.querySelector('.message');
const mobileSkills = document.querySelectorAll('.skill');
const linkedin = document.querySelector('.social-linkedin');
const github = document.querySelector('.social-github');
const menuButton = document.querySelector('.mobile-menu');
const mobileMenu = document.querySelector('.mobile-options');
const htmlItem = document.getElementById('html-item');
const cssItem = document.getElementById('css-item');
const jsItem = document.getElementById('js-item');
const sassItem = document.getElementById('sass-item');
const bootstrapItem = document.getElementById('bootstrap-item');
const gitItem = document.getElementById('git-item');
const englishItem = document.getElementById('english-item');
const skillsContainer = document.getElementById('skills-description');
const aboutMobileButton = document.getElementById('about-menu');
const mobileMenu = document.getElementById('mobile-menu');

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

/* PROJECTS SECTION EFFECT */
window.addEventListener('scroll', () => {
    const projectsUbication = projects.getBoundingClientRect();
    if(projectsUbication.top < 467) {
        projects.style.opacity = 1;
        projects.classList.add('projects-show');
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
    const certificatesUbication = certificates.getBoundingClientRect();
    console.log(certificatesUbication);

    /* ABOUT */
    if(aboutMeUbication.top < 446 && aboutMeUbication.top > -230) {
        navMenu.children[0].children[0].style.color = '#e30613';
        navMenu.children[0].children[0].style.textShadow = '2.3px 2.3px 3px rgb(136, 136, 136)';
    } else {
        navMenu.children[0].children[0].style.color = '#001931';
        navMenu.children[0].children[0].style.textShadow = '0px 0px 0px transparent';
    }

    /* SKILLS */
    if(projectsUbication.top < 200 && projectsUbication.top > -362) {
        navMenu.children[2].children[0].style.color = '#e30613';
        navMenu.children[2].children[0].style.textShadow = '2.3px 2.3px 3px rgb(136, 136, 136)';
    } else {
        navMenu.children[2].children[0].style.color = '#001931';
        navMenu.children[2].children[0].style.textShadow = '0px 0px 0px transparent';
    }

    /* PROJECTS */
    if(skillsUbication.top < 185 && skillsUbication.top > -352) {
        navMenu.children[4].children[0].style.color = '#e30613';
        navMenu.children[4].children[0].style.textShadow = '2.3px 2.3px 3px rgb(136, 136, 136)';
    } else {
        navMenu.children[4].children[0].style.color = '#001931';
        navMenu.children[4].children[0].style.textShadow = '0px 0px 0px transparent';
    }

    /* CERTIFICATES */
    if(certificatesUbication.top < 223 && certificatesUbication.top > -830) {
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
// contact.addEventListener('click', () => {
    // window.scrollTo({
    //     top: 2520,
    //     left: 0,
    //     behavior: "smooth"
    // })
    // console.log('f')
// })

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
    descriptionHTML(skillTiltle);
    return descriptionItem;
}

/* CREATES HTML DESCRIPTION */
function descriptionHTML(skill) {
    clearDescription();
    switch(skill) {
        case 'HTML': 
            htmlItem.style.color = '#e30613';
            const htmlDescription = document.createElement('div');
            htmlDescription.classList.add('description-effect');
            htmlDescription.classList.add('description-item');
            htmlDescription.innerHTML = `
                <p class="skills-description__item">Empecé a estudiar HTML de manera autodidácta mediante cursos de YouTube a finales del 2020.<br>
                Dichos conocimientos me fueron útiles para obtener luego el certificado de Responsive Web Design de freeCodeCamp y lograr un 10 en el proyecto final del curso de Desarrollo Web de Coderhouse, institución a la que me inscribiría luego para ampliar mis conocimientos.</p>
            `;
            skillsContainer.appendChild(htmlDescription);
            break;
        case 'CSS':
            cssItem.style.color = '#e30613';
            const cssDescription = document.createElement('div');
            cssDescription.classList.add('description-effect');
            cssDescription.classList.add('description-item');
            cssDescription.innerHTML = `
                <p class="skills-description__item">De igual forma que con HTML, comencé a estudiar CSS de manera autodidácta. Dichos conocimientos me fueron útiles para obtener el certificado en Desarrollo Web en Coderhouse.<br>
                Al ser el diseño una de las cosas que más me apasionan del desarrollo front-end, sigo aprendiendo mediante cursos en Udemy nuevas técnicas para mejorar el apartado visual de mis sitios web.<br>
                Cuento con conocimientos en box-modeling, pseudo-clases, media queries, flexbox, grid y animaciónes.</p>
            `;
            skillsContainer.appendChild(cssDescription);
            break;
        case 'JAVASCRIPT':
            jsItem.style.color = '#e30613';
            const jsDescription = document.createElement('div');
            jsDescription.classList.add('description-effect');
            jsDescription.classList.add('description-item');
            jsDescription.innerHTML = `
                <p class="skills-description__item">Finalicé el curso de JavaScript en Coderhouse obteniendo la certificación del curso en Agósto del 2021.<br>
                Además, en simultáneo a la cursada, estúve realizando el curso de "JavaScript Moderno" en Udemy para seguir perfeccionándome en el lenguaje y aprender cosas que por los tiempos de la cursada a veces se hace difícil.<br>
            Encontré en JavaScript un lenguaje que permite darle mucha vida a las páginas web.<br>
            Cuento con los siguientes conocimientos: variables, iteradores, condicionales, funciones tradicionales y funciones de flecha, arreglos, objetos,POO, clases, desestructuración de objetos y arreglos, DOM, eventos, storage, AJAX y jQuery. 
            </p>
            `;
            skillsContainer.appendChild(jsDescription);
            break;
        case 'SASS':
            sassItem.style.color = '#e30613';
            const sassDescription = document.createElement('div');
            sassDescription.classList.add('description-effect');
            sassDescription.classList.add('description-item');
            sassDescription.innerHTML = `
                <p class="skills-description__item">Aprendí Sass en el curso de Desarrollador Web de Coderhouse y es una herramienta que sigo utilizando a día de hoy en todos mis proyectos.</p>
            `;
            skillsContainer.appendChild(sassDescription);
            break;
        case 'BOOTSTRAP':
            bootstrapItem.style.color = '#e30613';
            const bootstrapDescription = document.createElement('div');
            bootstrapDescription.classList.add('description-effect');
            bootstrapDescription.classList.add('description-item');
            bootstrapDescription.innerHTML = `
                <p class="skills-description__item">Bootstrap es otra de las herramientas que aprendí en el primer curso de Coderhouse. Considero que tengo un nivel básico, ya que por gusto personal, de preferir hacer las cosas por mi cuenta; y por ciertas limitaciones que tenía con Bootstrap, decidí no aplicarlo mucho en el proyecto.</p>
            `;
            skillsContainer.appendChild(bootstrapDescription);
            break;
        case 'GIT':
            gitItem.style.color = '#e30613'; 
            break;  
        case 'ENGLISH':
            englishItem.style.color = '#e30613';
            break;
    }
}

/* VERIFICA SI HAY OTRO SKILL ITEM EN EL CONTENEDOR DE LA DESCRIPCIÓN */
function clearDescription() {
    /* LIMPIA EL CONTENEDOR */
    if(skillsContainer.children.length > 0) {
        skillsContainer.textContent = '';
    }

    /* QUITA EL ESTILO A LOS ITEMS SELECCIONADOS ANTERIORMENTE */
    skillsItems.forEach(skill => {
        if(skill.style.color == 'rgb(227, 6, 19)') {
            skill.style.color = '#131928';
        }
    })
}

/* CONTACT */
// emailInput.addEventListener('blur', (e) => {
//     e.preventDefault();
//     if(e.target.value.length === 0) {
//         console.log('Todos los campos son obligatorios');
//         emailInput.classList.add('error');
//     } else {
//         if(e.target.value.includes('@')) {
//             console.log(e.target.value);
//             emailInput.classList.add('validate');
//         } else {
//             console.log('El dato ingresado no es un mail');
//             emailInput.classList.add('error');
//         }
//     }
// })

// subjectInput.addEventListener('blur', (e) => {
//     e.preventDefault();
//     if(e.target.value.length === 0) {
//         console.log('Todos los campos son obligatorios');
//         subjectInput.classList.add('error');
//     } else {
//         console.log(e.target.value);
//         subjectInput.classList.add('validate');
//     }
// })

// messageInput.addEventListener('blur', (e) => {
//     e.preventDefault();
//     if(e.target.value.length === 0) {
//         console.log('Todos los campos son obligatorios');
//     } else {
//         console.log(e.target.value);
//     }
// })

/* MOBILE MENÚ */
aboutMobileButton.addEventListener('click', () => {
    console.log('funciona');
})