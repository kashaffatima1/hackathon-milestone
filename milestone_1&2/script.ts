// CREATE TOGGLE BUTTON
const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
//SKILLSSECTION
const skillsSection = document.getElementById('skills') as HTMLElement;
//CERTIFICATESECTION
const certificateSection = document.getElementById('certificate') as HTMLElement;


toggleButton.addEventListener('click', () => {
    if (skillsSection.classList.contains(`hidden`)) {
        skillsSection.classList.remove(`hidden`);
        certificateSection.classList.remove(`hidden`);
        toggleButton.textContent = `Hide Skills & Certificate`;
    } else {
        skillsSection.classList.add(`hidden`);
        certificateSection.classList.add(`hidden`);
        toggleButton.textContent = `Show Skills & Certificate`;
    }
});
