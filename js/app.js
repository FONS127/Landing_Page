/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/




/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/

const sections = []
const anchors = []




/**
 * End Global Variables
 * Start Helper Functions
 *
*/

//A function that takes a section as input and it disables the active-class styling from every other 
//section so it's the only highlighted section, aslo applies that for navbar li highlight so only one li is highlighted
function helperToggleActiveFromRest(selectedSection) {
    for (var j = 0; j < sections.length; j++) {
        console.log("Selected " + selectedSection.id)
        if (selectedSection.id != sections[j].id) {
            console.log("Loop " + sections[j].id)
            sections[j].classList.remove("your-active-class")
            anchors[j].classList.remove("clicked_navbar")
        }
        else {
            sections[j].classList.add("your-active-class")
            anchors[j].classList.add("clicked_navbar")
        }
    }
}











/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNavBar(event) {
    const main = document.querySelector("main")

    for (var i = 0; i < main.childNodes.length; i++) {
        if (main.childNodes[i].id)
            if (main.childNodes[i].id.startsWith("section")) {
                sections.push(main.childNodes[i])
            }
    }


    const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>
    sections.forEach((element, index) => {
        const anchor = document.createElement("a")
        anchor.classList.add("menu__link")
        const li = document.createElement("li")
        li.id = "li" + element.id

        anchor.setAttribute("href", "#" + element.id)
        anchor.innerText = " " + element.getAttribute("data-nav") + " "

        li.appendChild(anchor)
        anchors.push(anchor)
        fragment.appendChild(li)
    });
    document.querySelector("#navbar__list").appendChild(fragment)
}





// Add class 'active' to section when near top of viewport
function addActiveScroll() {
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top >= -150 && sections[i].getBoundingClientRect().top <= 300) {
            helperToggleActiveFromRest(sections[i])

        }
    }

}



// Scroll to anchor ID using scrollTO event
function scrollToWhenClicked(event) {
    event.preventDefault()
    if (event.target.getAttribute("href")) {
        const clickedSection = document.getElementById(event.target.getAttribute("href").substring(1))


        helperToggleActiveFromRest(clickedSection)


        clickedSection.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })
    }

}

//function to animate and toggle the hamburger menu
function toggleMenu(menu) {
    menu.classList.toggle("change");
    const items = document.getElementsByTagName("li")
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        console.log(element)
        if (element.style.display == "block")
            element.style.display = "none"
        else
            element.style.display = "block"
    }


}




/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
window.addEventListener('DOMContentLoaded', (event) => buildNavBar(event));

// Scroll to section on link click
window.addEventListener('scroll', (event) => addActiveScroll(event));

// Set sections as active
document.querySelector("#navbar__list").addEventListener('click', (event) => scrollToWhenClicked(event));


