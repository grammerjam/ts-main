// get input-form elements
var inputCardNumber = document.getElementById("inputCardNumber");
var inputCardHolder = document.getElementById("inputCardHolder");
var inputMonth = document.getElementById("inputMonth");
var inputYear = document.getElementById("inputYear");  
var inputCvc = document.getElementById("inputCvc");
 
// add listeners to input-form elements
inputCardNumber.addEventListener("keypress", updateCard);
inputCardHolder.addEventListener("keypress", updateCard);
inputMonth.addEventListener("keypress", updateCard);
inputYear.addEventListener("keypress", updateCard);
inputCvc.addEventListener("keypress", updateCard);

// get card image text elements
var cardImageNumber = document.getElementById("cardImageNumber");
var cardImageHolder = document.getElementById("cardImageHolder");
var cardImageMonth = document.getElementById("cardImageMonth");
var cardImageYear = document.getElementById("cardImageYear");
var cardImageCvc = document.getElementById("cardImageCvc");

// update the card image text element on listener update
function updateCard() {
    if(inputCardNumber.value != ""){
      // add spaces every 4 characters in cc field
      inputCardNumber.value = inputCardNumber.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
      cardImageNumber.innerHTML = inputCardNumber.value;
    }
    if(inputCardHolder.value != ""){
      cardImageHolder.innerHTML = inputCardHolder.value.toUpperCase();
    }
    if(inputMonth.value != ""){
      cardImageMonth.innerHTML = inputMonth.value + '/';
    }
    if(inputYear.value != ""){
      cardImageYear.innerHTML = inputYear.value;
    }
    if(inputCvc.value != ""){
      cardImageCvc.innerHTML = inputCvc.value;
    }
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
  })()


function submitForm() {
  sessionStorage.setItem('cardNumber', inputCardNumber.value);
  sessionStorage.setItem('cardHolder', inputCardHolder.value);
  sessionStorage.setItem('inputMonth', inputMonth.value);
  sessionStorage.setItem('inputYear', inputYear.value);
  sessionStorage.setItem('inputCvc', inputCvc.value);
}