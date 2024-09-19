
//Display area to the form
const form = document.getElementById(`resumeform`) as HTMLFormElement;
const resumeDisplayElement = document.getElementById(`resumeoutput`) as HTMLDivElement;
//Shareable link & PDF

const shareablelinkconatiner =  document.getElementById("shareablelinkcontainer") as HTMLDivElement;
const  shareablelinkelement =  document.getElementById("shareablelink") as HTMLAnchorElement;
const downloadPDFButton =  document.getElementById("downloadpdf") as HTMLButtonElement;

//Hande form submission
form.addEventListener(`submit`, (event: Event) => {
  event.preventDefault();


      //Type assertion
      const username = (document.getElementById(`username`) as HTMLInputElement).value;
      const name = (document.getElementById(`name`) as HTMLInputElement).value;
      const email = (document.getElementById(`email`) as HTMLInputElement).value;
      const phone = (document.getElementById(`phone`) as HTMLInputElement).value;
      const objective = (document.getElementById(`objective`) as HTMLInputElement).value;
      const education = (document.getElementById(`education`) as HTMLInputElement).value;
      const experience = (document.getElementById(`experience`) as HTMLInputElement).value;
      const skill = (document.getElementById(`skill`) as HTMLInputElement).value;

//save form data in localstorage
const resumeData = {
  name,
  email,
  phone,
  objective,
  education,
  experience,
  skill
};
localStorage.setItem (username, JSON.stringify(resumeData));//saving the data locally


//create ResumeOutput
const resumeOutput = `
<h2><b>Shareable Resume</b></h2>
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
  resumeDisplayElement.innerHTML = resumeOutput;

//Generate the URL 
const shareableURL = 
`${window.location.origin}username=${encodeURIComponent(username)}`;
//Display the shareable link
shareablelinkconatiner.style.display = 'block';
shareablelinkelement.href = shareableURL;
shareablelinkelement.textContent = shareableURL;
});

//Handle PDF Download
downloadPDFButton.addEventListener('click', () => {
  window.print(); //save as pdf
})
//prefill the username based on url
window.addEventListener('DOMContentLoaded', () => {
  const url = new URLSearchParams(window.location.search);
  const username = url.get('username');
  if (username) {

//Auto fill form data found in local siorage
 const savedresumeData = localStorage.getItem(username);
 if (savedresumeData) {
  const resumedata = JSON.parse(savedresumeData);

  (document.getElementById(`username`) as HTMLInputElement).value = username;
  (document.getElementById(`name`) as HTMLInputElement).value = resumedata.name;
  (document.getElementById(`email`) as HTMLInputElement).value = resumedata.email;
  (document.getElementById(`phone`) as HTMLInputElement).value = resumedata.phone;
  (document.getElementById(`objective`) as HTMLInputElement).value = resumedata.objective;
 (document.getElementById(`education`) as HTMLInputElement).value = resumedata.education;
 (document.getElementById(`experience`) as HTMLInputElement).value = resumedata.experience;
 (document.getElementById(`skill`) as HTMLInputElement).value= resumedata.skill;

    }
  }
});