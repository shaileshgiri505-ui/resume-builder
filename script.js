// EasyEdit Professional Script

document.addEventListener("DOMContentLoaded", () => {

    console.log("EasyEdit Loaded");

    loadTheme();

});

// ====================
// DARK MODE
// ====================

function toggleTheme(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        localStorage.setItem(
            "theme",
            "light"
        );

    }else{

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

}

function loadTheme(){

    const theme =
    localStorage.getItem("theme");

    if(theme === "light"){

        document.body.classList.add(
            "light-mode"
        );

    }

}

// ====================
// MOBILE MENU
// ====================

function toggleMenu(){

    const menu =
    document.querySelector(
        ".nav-links"
    );

    menu.classList.toggle(
        "show-menu"
    );

}

// ====================
// SMOOTH SCROLL
// ====================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(e){

            e.preventDefault();

            document
            .querySelector(
                this.getAttribute("href")
            )
            ?.scrollIntoView({

                behavior:"smooth"

            });

        }

    );

});

// ====================
// TOOL SEARCH
// ====================

function searchTools(){

    let input =
    document.getElementById(
        "toolSearch"
    );

    if(!input) return;

    let filter =
    input.value.toLowerCase();

    let cards =
    document.querySelectorAll(
        ".tool-card"
    );

    cards.forEach(card => {

        let text =
        card.innerText.toLowerCase();

        if(text.includes(filter)){

            card.style.display =
            "block";

        }else{

            card.style.display =
            "none";

        }

    });

}

// ====================
// NOTIFICATION
// ====================

function showNotification(message){

    let note =
    document.createElement("div");

    note.innerText =
    message;

    note.className =
    "notification";

    note.style.position =
    "fixed";

    note.style.bottom =
    "20px";

    note.style.right =
    "20px";

    note.style.padding =
    "12px";

    note.style.borderRadius =
    "10px";

    note.style.background =
    "#2563eb";

    note.style.color =
    "#fff";

    note.style.zIndex =
    "9999";

    document.body.appendChild(
        note
    );

    setTimeout(() => {

        note.remove();

    },3000);

}

// ====================
// BUTTON EFFECT
// ====================

document
.querySelectorAll("button")
.forEach(btn => {

    btn.addEventListener(
        "click",
        () => {

            btn.style.transform =
            "scale(0.95)";

            setTimeout(() => {

                btn.style.transform =
                "scale(1)";

            },150);

        }

    );

});

// ====================
// CARD ANIMATION
// ====================

document
.querySelectorAll(".tool-card")
.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
            "translateY(-8px)";

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
            "translateY(0px)";

        }
    );

});

// ====================
// COMING SOON
// ====================

function comingSoon(tool){

    showNotification(
        tool + " Coming Soon"
    );

}
