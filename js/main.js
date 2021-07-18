// VARIABLES
const skillsItem = document.querySelectorAll('.skills-list__item');
const skillsImg = document.querySelectorAll('.skills-list__item svg');
const skills = [];



loadEventListeners()
// FUNCTIONS
function loadEventListeners() {
    for(let i = 0; i < skillsItem.length; i++) {
        console.log(skillsItem[i].getAttribute('data-id'));
        skillsItem[i].addEventListener('click', skillsItemsStyles);
    }
}


function skillsItemsStyles() {
    addSkills();
    for(let i = 0; i < skills.length; i++) {
        if(skillsItem[i].getAttribute('data-id') == skills[i]) {
            skillsItem[i]
        }
    }
}

// Agrega todas las skills al array "skills"
function addSkills() {
    skillsItem.forEach(item => {
        console.log(item.getAttribute('data-id'));
        skills.push(item);
    })
    
    console.log(skills);
}

// Evalúa si el id es igual al index 
// function idEqualIndex(id) {
//     for(let i = 0; i < skills.length; i++) {
//         if(id == skills[i]) {

//         }
//     }
// }

// skillsItem.addEventListener('mouseenter', (e) => {
//     e.preventDefault();
//     skillsImg.style.fill = '#e30613';
// });

// function skillsItemsStyles() {
//     for(let i = 0; i < skillsItem.length; i++) {

//     }
// }

