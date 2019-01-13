// ------------------------------->> ADD TEXT / SET TEXT<<-----------------------------------------
const nanodegreeCard = document.querySelector('.card');

nanodegreeCard.innerHTML; // The .innerHTML property sets or returns the HTML content inside the selected element
nanodegreeCard.outerHTML; // represents the HTML element itself, as well as its children.
nanodegreeCard.textContent; // If we just want to get/replace the text content we can use the textContent property
nanodegreeCard.textContent = 'Replacing the text content of nanodegreeCard'
// myElement.innerHTML = 'The <strong>Greatest</strong> Ice Cream Flavors';  // works as expected


const textCenter = document.querySelector('.brow');

textCenter.innerHTML = '<h4>Look at it</h4>';

// ---------------------------->> ADD NEW PAGE CONTENT <<-----------------------------------

// create span element
const container = document.createElement('span');
container.textContent = ' ,here we go!'

// append the span element to h1 tag

const h1 = document.querySelector('h1');

h1.appendChild(container)

// --->> insertAdjacentHTML <<---

// beforebegin before the tag is open
// afterbegin after the tag is open
//beforeend before the tag is closed
// afterend after the tag is closed

```
<!-- beforebegin -->
<p>
    <!-- afterbegin -->
    Existing text/HTML content
    <!-- beforeend -->
</p>
<!-- afterend -->
```
const mainHeading = document.querySelector('#main-heading');
const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';

mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);

// ------------------------------->> REMOVE PAGE CONTENT <<-------------------------------------------

// .removeChild() must be called on the parent of the element being removed (require access to parent to function)
// .remove() can be called directly on the element to delete.

// syntax
// <parent-element>.removeChild(<child-to-remove>);

// firstElementChild, lastElementChild, parentElement

const parentContainer = document.querySelector('hero__module'); // get the parent first

const elementToBeRemoved = parentContainer.lastElementChild // select the child you want to remove from that parent

const remove = parentContainer.removeChild(elementToBeRemoved) // remove child from its parent

const mainHeading2 = document.querySelector('h1');

mainHeading2.parentElement.removeChild(mainHeading); // an element uses itself to remove itself from its parent.

mainHeading2.remove(); // .remove does the same as line 68 more easy

// ----------------------------------->> STYLING <<----------------------------------------------

// $0.style.backgroundColor = 'red';
// cssText for multiple styles

const comunityHeading = document.querySelector('h6.text-center');

comunityHeading.style.color = 'purple';
comunityHeading.style.fontSize = '2em';
// ----------------------------------->> CLASLIST <<----------------------------------------------

const myElement = document.querySelector('h2');

 myElement.classList.contains('this-class');
//  expected output: false

myElement.classList.add('this-class');
// expected output: <h2 class="this-class"></h2>

myElement.classList.remove('this-class');
// expected output: <h2></h2>

myElement.classList.toggle('other-class');
// expected output: <h2 class="other-class"></h2>

myElement.classList.toggle('other-class');
// expected output: <h2></h2>

// ------------------------------------>> EVENT LISTENER <<----------------------------------------

document.addEventListener('click', function() {
    console.log('hey the page has been clicked!');
    
})

document.addEventListener('keypress', function(){
    console.log('removed!');
    document.querySelector('#contain-all').firstElementChild.remove();
    
})

