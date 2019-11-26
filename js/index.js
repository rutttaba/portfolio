
const projectData = [
    {
        title: 'Quiz about DNA',
        image: 'images/quiz_screesnhot.png',
        imageAlt: 'screenshot of quiz about DNA',
        descr: 'Find out how much you know about DNA and genes using this fun little quiz. Relates to my previous career in science where I played around with DNA every day. Created with <span class= "emf" > HTML5</span>, <span class="emf">CSS</span>, <span class="emf">Javascript</span> and <span class= "emf" > jQuery</span>.',
        demoLink: 'https://rutttaba.github.io/dna-quiz/',
        repoLink: 'https://github.com/rutttaba/dna-quiz'
    },
    {
        title: 'Daily cute',
        image: 'images/iPad_landing.png',
        imageAlt: 'screenshot of app for cute animal pictures and facts',
        descr: 'Get your daily dose of cute. Both cat and dog persons covered. Add a random fact to the mix. User can choose up to 50 images and facts and then decide whether to enjoy images and fun facts about dogs or cats. Built using <span class= "emf" > HTML5</span>, <span class="emf">CSS</span>, <span class="emf">Javascript</span> and <span class= "emf" > jQuery</span>',
        demoLink: 'https://rutttaba.github.io/daily-cute/',
        repoLink: 'https://github.com/rutttaba/daily-cute'
    }
];

function showContacts() {
    $('.js-contact').click(function () {
        $('.js-projects').hide();
        $('.js-bio').hide();
        $('.js-contacts').show();
    });
}

// function showProjects() {
//     $('.js-work').click(function () {
//         $('.js-bio').hide();
//         $('.js-contacts').hide();
//         $('.js-projects').show();
//     });
// }

function showProjects() {
    $('.js-bio').hide();
    $('.js-contacts').hide();
    for (let i=0; i< projectData.length; i++) {
        $('.project').append(
            `<h3 class="projectTitle">${projectData[i].title}</h3>
            <img class='screen' src=${projectData[i].image} alt=${projectData[i].imageAlt}>
            <p class='projectText'>${projectData[i].descr}</p>
            <a class='projectLink left' href=${projectData[i].demoLink} target="_blank">Demo</a>
            <hr class='vr'>
            <a class='projectLink' href=${projectData[i].repoLink} target="_blank">Github</a>
            `
        )};
    $('.js-projects').show();
}


function showAbout() {
    $('.js-about').click(function () {
        $('.js-projects').hide();
        $('.js-contacts').hide();
        $('.js-bio').show();
    });
}

function makeItWork() {
    showAbout();
    showProjects();
    showContacts();
}

$(makeItWork);