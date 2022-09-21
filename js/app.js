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

const sections = document.querySelectorAll("section");
const navList = document.querySelector("ul");

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function buildNav() {
    let fragment = document.createDocumentFragment();
    for (const section of sections) {
        let anchorText = section.getAttribute("data-nav");
        let anchorHref = section.getAttribute("id");
        let listItem = document.createElement("li");
        let anchor = document.createElement("a");
        anchor.setAttribute("href", `#${anchorHref}`);
        anchor.setAttribute("class", "menu__link");
        anchor.textContent = anchorText;
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            section.scrollIntoView({
                behavior: "smooth"
            });
        });
        listItem.appendChild(anchor);
        fragment.appendChild(listItem);
    }
    navList.appendChild(fragment);
}

function isInViewPort(element) {
    const sectionPos = element.getBoundingClientRect();
    return (sectionPos.top >= 0 && sectionPos.top < 600);
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

buildNav();

// Add class 'your-active-class' to section when exists in the viewport

function addActiveClass() {
    for (const section of sections) {
        section.classList.remove("your-active-class");
    }
    for (const section of sections) {
        if (isInViewPort(section)) {
            section.classList.add("your-active-class");
            break;
        }
    };
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Set sections as active

window.addEventListener("scroll", addActiveClass);
