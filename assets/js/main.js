// Input
//Cards
const ratingCard = document.querySelector('.ratingCard');
const thankYouCard = document.querySelector('.thankYouCard');
//Rating
const ratingSelected = document.querySelector(".rating");


const btnSubmit = document.querySelector("#submit");

//Output
const output = document.querySelector("#selected");
//

ratingSelected.addEventListener("click", (event) =>{
    event.preventDefault();
    ratingSelected.classList.toggle("selectedRating");
})

btnSubmit.addEventListener("click", () => {
    ratingCard.style.display = "none";
    //Value was ausgewählt wurde fehlt 
    output.innerHTML = "You selected " + ratingSelected.value + " out of 5";
    thankYouCard.style.display = "block";
})