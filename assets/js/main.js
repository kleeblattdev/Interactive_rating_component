// Input
//Cards
const ratingCard = document.querySelector('.ratingCard');
const thankYouCard = document.querySelector('.thankYouCard');
//Rating
const ratingOne = document.querySelector("#ratingOne");
const ratingTwo = document.querySelector("#ratingTwo");
const ratingThree = document.querySelector("#ratingThree");
const ratingFour = document.querySelector("#ratingFour");
const ratingFive = document.querySelector("#ratingFive");


const btnSubmit = document.querySelector("#submit");

//Output
const output = document.querySelector("#selected");
//

ratingOne.addEventListener("click", (event) =>{
    event.preventDefault();
    ratingOne.classList.toggle("selectedRating");
})

ratingTwo.addEventListener("click", (event) =>{
    event.preventDefault();
    ratingTwo.classList.toggle("selectedRating");
})

ratingThree.addEventListener("click", (event) =>{
    event.preventDefault();
    ratingThree.classList.toggle("selectedRating");
})

ratingFour.addEventListener("click", (event) =>{
    event.preventDefault();
    ratingFour.classList.toggle("selectedRating");
})

ratingFive.addEventListener("click", (event) =>{
    event.preventDefault();
    ratingFive.classList.toggle("selectedRating");
})

btnSubmit.addEventListener("click", () => {
    ratingCard.style.display = "none";
    //Value was ausgewählt wurde fehlt 
    output.innerHTML = "You selected" + + "out of 5";
    thankYouCard.style.display = "block";
})