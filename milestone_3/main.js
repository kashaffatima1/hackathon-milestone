document.addEventListener('DOMContentLoaded', function (event) {
    //Display area to the form
    var form = document.getElementById("resumeform");
    var resumeDisplayElement = document.getElementById("resumeoutput");
    //Hande form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        //Type assertion
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var objective = document.getElementById("objective").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skill = document.getElementById("skill").value;
        //create ResumeOutput
        var resumeOutput = "\n<h2><b>Resume</b></h2>\n<hr>\n<h3>Objective</h3>\n<hr>\n<p>".concat(objective, "</p>\n<hr>\n<h3>Personal Information</h3>\n<hr>\n<p><strong>Name:</strong> ").concat(name, " </p>\n<p><strong>Email:</strong> <u>").concat(email, "</u> </p>\n<p><strong>Phone Number: </strong> ").concat(phone, " </p>\n<hr>\n<h3>Education</h3>\n<hr>\n<p>").concat(education, "</p>\n<hr>\n<h3>Experience</h3>\n<hr>\n<p>").concat(experience, "</p>\n<hr>\n<h3>Skill</h3>\n<hr>\n<p>").concat(skill, "</p>\n");
        //Display generated resume
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeOutput;
        }
        else {
            console.error("The resume display element is missing");
        }
    });
});
