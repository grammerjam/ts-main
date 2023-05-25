// get card image text elements
var cardImageNumber = document.getElementById('cardImageNumber');
var cardImageHolder = document.getElementById('cardImageHolder');
var cardImageMonth = document.getElementById('cardImageMonth');


window.onload = (event) => {
    var inputCardNumber = sessionStorage.getItem('cardNumber');
    cardImageNumber.innerHTML = inputCardNumber;

    var inputCardHolder = sessionStorage.getItem('cardHolder');
    cardImageHolder.innerHTML = inputCardHolder.toUpperCase();

    var inputMonth = sessionStorage.getItem('inputMonth');
    cardImageMonth.innerHTML = inputMonth + '/';

    var inputYear = sessionStorage.getItem('inputYear');
    cardImageYear.innerHTML = inputYear;

    var inputCvc = sessionStorage.getItem('inputCvc');
    cardImageCvc.innerHTML = inputCvc;
  };