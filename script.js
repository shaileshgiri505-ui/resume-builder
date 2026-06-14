function generateResume(){

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const phone =
    document.getElementById("phone").value;

    const objective =
    document.getElementById("objective").value;

    const education =
    document.getElementById("education").value;

    const skills =
    document.getElementById("skills").value;

    const photo =
    document.getElementById("photo");

    let imageHTML = "";

    if(photo.files && photo.files[0]){

        const reader = new FileReader();

        reader.onload = function(e){

            imageHTML =
            `<img src="${e.target.result}"
            class="profile-image">`;

            document.getElementById("resumePreview").innerHTML = `

            ${imageHTML}

            <h2 class="resume-name">${name}</h2>

            <p><strong>Email:</strong> ${email}</p>

            <p><strong>Phone:</strong> ${phone}</p>

            <div class="section">
                <h3>Professional Summary</h3>
                <p>${objective}</p>
            </div>

            <div class="section">
                <h3>Education</h3>
                <p>${education}</p>
            </div>

            <div class="section">
                <h3>Skills</h3>
                <p>${skills}</p>
            </div>

            `;
        };

        reader.readAsDataURL(photo.files[0]);

    }else{

        document.getElementById("resumePreview").innerHTML = `

        <h2 class="resume-name">${name}</h2>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <div class="section">
            <h3>Professional Summary</h3>
            <p>${objective}</p>
        </div>

        <div class="section">
            <h3>Education</h3>
            <p>${education}</p>
        </div>

        <div class="section">
            <h3>Skills</h3>
            <p>${skills}</p>
        </div>

        `;
    }
}

function resetForm(){

    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("phone").value="";
    document.getElementById("objective").value="";
    document.getElementById("education").value="";
    document.getElementById("skills").value="";
    document.getElementById("photo").value="";

    document.getElementById("resumePreview").innerHTML="";
}
