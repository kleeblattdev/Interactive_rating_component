// Input
//Cards
const ratingCard = document.querySelector('.ratingCard');
const thankYouCard = document.querySelector('.thankYouCard');

//Rating Buttons
const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const button4 = document.querySelector("#button4")
const button5 = document.querySelector("#button5")
//Submit Button
const btnSubmit = document.querySelector("#submit");

//Output
const output = document.querySelector("#selected");
//

//ausgewähltes Rating
let ratingNumber

const ratingInput = (rating) => {
    //gibt variable ausgewähltes Rating
    ratingNumber = rating
    // gibt ausgewähltem Button .selectedRating und entfernt .selectedRating bei allen nicht ausgewählten Buttons
    rating === 1 ? (button1.classList.toggle("selectedRating"),button2.classList.remove("selectedRating"),button3.classList.remove("selectedRating"),button4.classList.remove("selectedRating"),button5.classList.remove("selectedRating")): 
    rating === 2 ? (button2.classList.toggle("selectedRating"),button1.classList.remove("selectedRating"),button3.classList.remove("selectedRating"),button4.classList.remove("selectedRating"),button5.classList.remove("selectedRating")):
    rating === 3 ? (button3.classList.toggle("selectedRating"),button1.classList.remove("selectedRating"),button2.classList.remove("selectedRating"),button4.classList.remove("selectedRating"),button5.classList.remove("selectedRating")): 
    rating === 4 ? (button4.classList.toggle("selectedRating"),button1.classList.remove("selectedRating"),button2.classList.remove("selectedRating"),button3.classList.remove("selectedRating"),button5.classList.remove("selectedRating")):
    (button5.classList.toggle("selectedRating"),button1.classList.remove("selectedRating"),button2.classList.remove("selectedRating"),button3.classList.remove("selectedRating"),button4.classList.remove("selectedRating"))
}

btnSubmit.addEventListener("click", () => {
    ratingCard.style.display = "none"; 
    output.innerHTML = "You selected " + ratingNumber + " out of 5";
    thankYouCard.style.display = "block";
}) 