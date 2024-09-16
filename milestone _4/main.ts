document.addEventListener('DOMContentLoaded', (event) => {
//Display area to the form
const form = document.getElementById(`resumeform`) as HTMLFormElement;
const resumeDisplayElement = document.getElementById(`resumeoutput`) as HTMLDivElement;


//Hande form submission
form.addEventListener(`submit`, (event: Event) => {
  event.preventDefault();


    //Type assertion
    const name = (document.getElementById(`name`) as HTMLInputElement).value;
    const email = (document.getElementById(`email`) as HTMLInputElement).value;
    const phone = (document.getElementById(`phone`) as HTMLInputElement).value;
    const objective = (document.getElementById(`objective`) as HTMLInputElement).value;
    const education = (document.getElementById(`education`) as HTMLInputElement).value;
    const experience = (document.getElementById(`experience`) as HTMLInputElement).value;
    const skill = (document.getElementById(`skill`) as HTMLInputElement).value;


//create ResumeOutput
const resumeOutput = `
<h2><b>Editable Resume</b></h2>
<hr>
<h3>Objective</h3>
<hr>
<p><span contenteditable="true">${objective}</span></p>
<hr>
<h3>Personal Information</h3>
<hr>
<p><strong>Name:</strong> <span contenteditable="true">${name}</span> </p>
<p><strong>Email:</strong> <span contenteditable="true"><u>${email}</u></span> </p>
<p><strong>Phone Number: </strong> <span contenteditable="true">${phone}</span> </p>
<hr>
<h3>Education</h3>
<hr>
<p><span contenteditable="true">${education}</span></p>
<hr>
<h3>Experience</h3>
<hr>
<p><span contenteditable="true">${experience}</span></p>
<hr>
<h3>Skill</h3>
<hr>
<p><span contenteditable="true">${skill}</span></p>
`;

//Display generated resume
  if (resumeDisplayElement){
     resumeDisplayElement.innerHTML = resumeOutput;
  } else {
    console.error(`The resume display element is missing`);
  } 
 });
});