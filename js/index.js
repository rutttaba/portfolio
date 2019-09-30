
function showContacts() {
    $(".js-contact").click(function() {
        $(".js-projects").hide();
        $(".js-bio").hide();
        $(".js-contacts").show();
    });
}

function showProjects() {
    $(".js-work").click(function () {
        $(".js-bio").hide();
        $(".js-contacts").hide();
        $(".js-projects").show();
    });
}

function showAbout() {
    $(".js-about").click(function () {
        
        $(".js-projects").hide();
        $(".js-contacts").hide();
        $(".js-bio").show();
    });
}

function makeItWork() {
    showAbout();
    showProjects();
    showContacts();
}

$(makeItWork);