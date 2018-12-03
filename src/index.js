// function $$(id) {
//     return document.getElementById(id);
// }
// function showSkillsPage() {
//     hide("home-page");
//     hide("languages-page");
//     hide("education-page");
//     show("skills-page");
// }
// function showEducationPage() {
//     hide("home-page");
//     hide("languages-page");
//     hide("skills-page");
//     show("education-page");
// }
// function showLanguagesPage() {
//     hide("home-page");
//     hide("skills-page");
//     show("languages-page");
//     hide("education-page");
// }
// function showHomePage() {
//     hide("skills-page");
//     hide("languages-page");
//     show("home-page");
//     hide("education-page");
// }
// $("home-menu").onclick = showHomePage;
// $("skills-menu").onclick = showSkillsPage;
// $("education-menu").onclick = showEducationPage;
// $("languages-menu").onclick = showLanguagesPage;

// function hideElement(pages) {
//     pages.style.display = 'none';
// }

// function hideAllPages() {
//     var pages = document.querySelectorAll(".page-block");
//     pages.forEach(hideElement);
// }


function initMenu() {
    var links = document.querySelectorAll("#top-menu-bar a");
    for (var i = 0; i < links.length; i++) {
        // console.log(links[i].getAttribute("data-page"), links[i]);
        links[i].onclick = function () {
            $('.page-block').hide();
            var page = this.getAttribute("data-page")
            $('#' + page + "-page");
        };
    }
}

function initSkillsPage() {
    var skills = [
        {name: 'JS', endorsements: '7', endorsedBy:'Andrei'}, 
        {name: 'html', endorsements: '6', endorsedBy:""}, 
        {name: 'css', endorsements: '2', endorsedBy:""} 
    ];
    var resultList = document.querySelector('#skills-page ul');

    var listItems = skills.map(function (skill) {
        var endorsedBy = ' - Endorsed by';
        if (skill.endorsedBy == "") {
            endorsedBy = "";
        }
        var name = skill.name.toUpperCase();
        return `<li>${name} <span style="color: grey">- ${skill.endorsements} ${endorsedBy} </span>
        ${skill.endorsedBy}</li>`;
    })

    console.log('resulList:', listItems);
    resultList.innerHTML = listItems.join('');
}

initMenu();
$("#skills-page").show();


initSkillsPage();