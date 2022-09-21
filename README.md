# Landing-Page
This project is part of udacity professional web track course.

## Requirments
- manipulating the DOM using javascript :
- building navigation bar dynamically 
- scrolls to anchors from navigation
- highlights Section in viewport upon scrolling.

## Building navigation bar
use `.querySelectorAll()` to select all sections and `.querySelector()` to select the unordered list to add anchors to it 

create a fragement to carry new elements using `document.createDocumentFragment()` for better performance

loop through sections and make new corresponing `<li>` element using `document.createElement()` conataining `<a>` using `.appendChild()` and append the created element to the fragment

after adding all sectinos, append that fragement to the DOM.

## Highlighting the Active Section
use `.getBoundingClientRect()` to get bounds of every `<section>` element and if it is in ViewPort then loop through sections and remove the active class from thier class list then add the active class to that section using `classList.add()`

add eventListener to `window` to listen to scrolls and act upon it.
 