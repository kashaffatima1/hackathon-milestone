// CREATE TOGGLE BUTTON
var toggleButton = document.getElementById('toggleButton');
//SKILLSSECTION
var skillsSection = document.getElementById('skills');
//CERTIFICATESECTION
var certificateSection = document.getElementById('certificate');
toggleButton.addEventListener('click', function () {
    if (skillsSection.classList.contains("hidden")) {
        skillsSection.classList.remove("hidden");
        certificateSection.classList.remove("hidden");
        toggleButton.textContent = "Hide Skills & Certificate";
    }
    else {
        skillsSection.classList.add("hidden");
        certificateSection.classList.add("hidden");
        toggleButton.textContent = "Show Skills & Certificate";
    }
});
