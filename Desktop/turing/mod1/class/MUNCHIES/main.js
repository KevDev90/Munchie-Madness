//Iteration 1
// When the user hits `Add Snack`, a card is created that has the munchie name and the description.
var snack = document.getElementById('snackItem');
var snackInfo = document.getElementById('snackDesc');
var addSnack = document.getElementById('addSnack')
var groceryList = document.querySelector('.grocery-list')

addSnack.addEventListener('click', createCard);

function createCard() {
  groceryList.insertAdjacentHTML('afterbegin', "<section class='snack-card'><h1 id='card-title' contentEditable='true'>Snack</h1><p id='description' contentEditable='true'>description</p><button class='delete'>Delete</button></section>");
  document.querySelector('#snackItem').innerText = `${snack.value}`;
  document.querySelector('#snackDesc').innerText = `${snackInfo.value}`;
  snack.value = '';
  snackInfo.value = '';
};

function removeCard() {
    var elem = document.querySelector('grocery-list');
    elem.parentNode.removeChild(elem);
    return false;
}




//Iteration 2
// Edit the HTML of the dynamic snack cards to include a DELETE button. When the user clicks the DELETE button, that specific CARD is removed from the DOM


//Iteration 3
//User can edit the name of the snack OR its description by clicking on the particular field on the CARD!


//Iteration 4
// If there is no text in the item field OR the info field, the Add Snack button should be disabled
