// Exercise1:
const selectDiv=document.getElementById("container")
console.log(selectDiv);

let changeLi= selectDiv.firstElementChild("Pete")

const secondUlist=document.querySelector('ul:nth-of-type(2)')

secondUlist.removeChild(secondUlist.children[1])

const secondeLiListItems= secondUlist.querySelectorAll("li")
secondeLiListItems.forEach((li) => {
    li.innerText="Samuel"
});

// Exercise2:

// Add a “light blue” background color and some padding to the <div>.
let elem=document.querySelector("div")
elem.style.background="blue"

        
// Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
const secondUl=document.querySelector('ul:nth-of-type(1)')
secondUl.removeChild(secondUl.children[0])

// Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
secondUl.style.border="solid 2px black"

// Change the font size of the whole body.
elem.style.fontSize="2em"

// Exercise3:
let navBar=document.getElementById("navBar")
navBar.setAttribute("id", "socialNetworkNavigation")

let newListItem=document.createElement("li")
newListItem.textContent="Logout"
navBar.appendChild(newListItem)
let list=document.querySelector("ul")
list.appendChild(newListItem)

