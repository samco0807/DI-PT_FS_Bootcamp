// DAILY CHALLENGE:

// get back the HTML element

const gitForm=document.getElementById('gitForm')
const searchInput=document.getElementById('searchInput')
const gifContainer=document.getElementById('gifContainer')

// Function to get a random GIF
const fetchRandomGif = async(searchTerm) => {
  
  try {
        // Request to API to get a random GIF according to search category
    const response=await fetch(`https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=${searchTerm}`)
    const data=await response.json()
    const gifUrl=data.data.image_original_url

    //Create an img element to display the GIF
    const gifElement=document.createElement("img")
    gifElement.src=gifUrl
    gifElement.classList.add("gif")

    //Add a delete button near the GIF
    const gifDeleteButton=document.createElement("button")
    gifDeleteButton.textContent = "Delete";
    gifDeleteButton.classList.add("gifdelete")

    // Add a button delete all near the GIF
    const gifDeleteAllButton=document.createElement("button")
    gifDeleteAllButton.textContent = "Delete All";
    gifDeleteAllButton.classList.add("gifdeleteall")

    // Add an event delete gif to delete button
    gifDeleteButton.addEventListener("click", () =>{
      gifContainer.removeChild(gifElement)
      gifContainer.removeChild(gifDeleteButton)
    })

    // Delete all while clicking on button delete all
    gifDeleteAllButton.addEventListener("click", () =>{
      gifContainer.innerHTML=''
    })

    //Add the GIF and button to the contenair
    gifContainer.appendChild(gifDeleteButton)
    gifContainer.appendChild(gifDeleteAllButton)
    gifContainer.appendChild(gifElement)

  } catch (error) {
  console.error('Error fetching gif: ', error);  
  }
}
gifContainer.innerHTML=''

gitForm.addEventListener("submit", (e)=> {
  e.preventDefault();

    //Get the value of the user's request
  const searchTerm=searchInput.value;

  // Delete the previous GIFS et and delete buttons
  gifContainer.innerHTML=''
  
  fetchRandomGif(searchTerm)
})
