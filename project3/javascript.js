// get input-form elements
var inputCardNumber = document.getElementById("inputCardNumber");
var inputCardHolder = document.getElementById("inputCardHolder");
var inputCvc = document.getElementById("inputCvc");
var inputMonth = document.getElementById("inputMonth");
var inputYear = document.getElementById("inputYear");  
 
// add listeners to input-form elements
inputCardNumber.addEventListener("input", updateCard);
inputCardHolder.addEventListener("input", updateCard);
inputCvc.addEventListener("input", updateCard);
inputMonth.addEventListener("input", updateCard);
inputYear.addEventListener("input", updateCard);

// get card image text elements
var cardImageNumber = document.getElementById("cardImageNumber");
var cardImageHolder = document.getElementById("cardImageHolder");
var cardImageCvc = document.getElementById("cardImageCvc");
var cardImageMonth = document.getElementById("cardImageMonth");
var cardImageYear = document.getElementById("cardImageYear");

// update the card image text element on listener update
function updateCard() {
    cardImageNumber.innerHTML = inputCardNumber.value;
    cardImageHolder.innerHTML = inputCardHolder.value;
    cardImageCvc.innerHTML = inputCvc.value;
    cardImageMonth.innerHTML = inputMonth.value;
    cardImageYear.innerHTML = inputYear.value;
}