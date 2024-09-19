//Display area to the form
var form = document.getElementById("resumeform");
var resumeDisplayElement = document.getElementById("resumeoutput");
//Shareable link & PDF
var shareablelinkconatiner = document.getElementById("shareablelinkcontainer");
var shareablelinkelement = document.getElementById("shareablelink");
var downloadPDFButton = document.getElementById("downloadpdf");
//Hande form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //Type assertion
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var objective = document.getElementById("objective").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skill = document.getElementById("skill").value;
    //save form data in localstorage
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        objective: objective,
        education: education,
        experience: experience,
        skill: skill
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); //saving the data locally
    //create ResumeOutput
    var resumeOutput = "\n<h2><b>Shareable Resume</b></h2>\n<hr>\n<h3>Objective</h3>\n<hr>\n<p><span contenteditable=\"true\">".concat(objective, "</span></p>\n<hr>\n<h3></h3>\n<hr>\n<h3>Personal Information</h3>\n<hr>\n<p><strong>Name:</strong> <span contenteditable=\"true\">").concat(name, "</span> </p>\n<p><strong>Email:</strong> <span contenteditable=\"true\"><u>").concat(email, "</u></span> </p>\n<p><strong>Phone Number: </strong> <span contenteditable=\"true\">").concat(phone, "</span> </p>\n<hr>\n<h3>Education</h3>\n<hr>\n<p><span contenteditable=\"true\">").concat(education, "</span></p>\n<hr>\n<h3>Experience</h3>\n<hr>\n<p><span contenteditable=\"true\">").concat(experience, "</span></p>\n<hr>\n<h3>Skill</h3>\n<hr>\n<p><span contenteditable=\"true\">").concat(skill, "</span></p>\n");
    //Display generated resume
    resumeDisplayElement.innerHTML = resumeOutput;
    //Generate the URL 
    var shareableURL = "".concat(window.location.origin, "username=").concat(encodeURIComponent(username));
    //Display the shareable link
    shareablelinkconatiner.style.display = 'block';
    shareablelinkelement.href = shareableURL;
    shareablelinkelement.textContent = shareableURL;
});
//Handle PDF Download
downloadPDFButton.addEventListener('click', function () {
    window.print(); //save as pdf
});
//prefill the username based on url
window.addEventListener('DOMContentLoaded', function () {
    var url = new URLSearchParams(window.location.search);
    var username = url.get('username');
    if (username) {
        //Auto fill form data found in local siorage
        var savedresumeData = localStorage.getItem(username);
        if (savedresumeData) {
            var resumedata = JSON.parse(savedresumeData);
            document.getElementById("username").value = username;
            document.getElementById("name").value = resumedata.name;
            document.getElementById("email").value = resumedata.email;
            document.getElementById("phone").value = resumedata.phone;
            document.getElementById("objective").value = resumedata.objective;
            document.getElementById("education").value = resumedata.education;
            document.getElementById("experience").value = resumedata.experience;
            document.getElementById("skill").value = resumedata.skill;
        }
    }
});
