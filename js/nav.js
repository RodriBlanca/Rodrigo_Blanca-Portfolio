const navMenu = document.querySelector('.nav-menu');
const aboutme = document.querySelector('.about-me'); 

console.log(navMenu.children);

window.addEventListener('scroll', () => {
    const aboutmeUbication = aboutMe.getBoundingClientRect();
    console.log(aboutmeUbication);
    if(aboutmeUbication.top < 446 && aboutmeUbication.top > -333) {
        navMenu.children[0].children[0].style.color = '#e30613';
        navMenu.children[0].children[0].style.textShadow = '2.3px 2.3px 3px rgb(136, 136, 136)';
    } else {
        navMenu.children[0].children[0].style.color = '#001931';
        navMenu.children[0].children[0].style.textShadow = '0px 0px 0px transparent';
    }
})
