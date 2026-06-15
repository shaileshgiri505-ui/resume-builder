// EasyEdit Script

document.addEventListener("DOMContentLoaded", () => {

    console.log("EasyEdit Loaded");

});

// Mobile Menu

function toggleMenu(){

    const menu =
    document.querySelector(".nav-links");

    menu.classList.toggle("active");

}

// Dark Mode

function toggleTheme(){

    document.body.classList.toggle("light-mode");

    const current =
    localStorage.getItem("theme");

    if(current === "light"){

        localStorage.setItem("theme","dark");

    }else{

        localStorage.setItem("theme","light");

    }

}

// Load Theme

window.onload = () => {

    const theme =
    localStorage.getItem("theme");

    if(theme === "light"){

        document.body.classList.add("light-mode");

    }

};

// Smooth Scroll

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document
        .querySelector(
            this.getAttribute("href")
        )
        ?.scrollIntoView({
            behavior:"smooth"
        });

    });

});

// Tool Search

function searchTools(){

    let input =
    document.getElementById("toolSearch")
    .value
    .toLowerCase();

    let cards =
    document.querySelectorAll(".tool-card");

    cards.forEach(card => {

        let text =
        card.innerText.toLowerCase();

        if(text.includes(input)){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

}

// Notification

function showNotification(message){

    let note =
    document.createElement("div");

    note.className =
    "notification";

    note.innerText =
    message;

    document.body.appendChild(note);

    setTimeout(() => {

        note.remove();

    },3000);

}

// Tool Open Demo

function openTool(toolName){

    showNotification(
        toolName + " Coming Soon"
    );

}

// Button Effects

document
.querySelectorAll("button")
.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.style.transform =
        "scale(0.95)";

        setTimeout(() => {

            btn.style.transform =
            "scale(1)";

        },150);

    });

});

// Counter Animation

function animateCounters(){

    const counters =
    document.querySelectorAll(".stat-box h3");

    counters.forEach(counter => {

        let count = 0;

        const target =
        parseInt(counter.innerText);

        const update = () => {

            if(count < target){

                count++;

                counter.innerText =
                count + "+";

                requestAnimationFrame(update);

            }

        };

        update();

    });

}

animateCounters();
