//getting the id for the tag of quote and the author
var quote = document.getElementById("quote");
var author = document.getElementById("author");

// Function to update the quote element
function updateQuote() {
  // Make an API call to get a random quote
  fetch('https://api.quotable.io/random?maxLength=150')
    .then(response => response.json())
    .then(data=>{
        quote.innerHTML=data.content;
        author.innerHTML=data.author;
        localStorage.setItem('quote',quote.innerHTML);
        localStorage.setItem('author',author.innerHTML);
    })
    .catch(error =>{ 
        quote.innerHTML = "Be the change that you wish to see in the world.";
        author.innerHTML = "- Mahatma Gandhi";
    })
}
var storedQuote = localStorage.getItem("quote");
var storedAuthor = localStorage.getItem("author");
if (storedQuote && storedAuthor) {
    quote.innerHTML = storedQuote;
    author.innerHTML = storedAuthor;
  } else {
    // Update the quote if it is not stored in localStorage
    updateQuote();
  }
  setInterval(updateQuote, 7 * 60 * 1000);