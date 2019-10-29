// ITERATION 1



//console.log ($product[0].querySelector('.price span').innerText)
function updateSubtotal($product){
  for (let i=0 ; i<$product.length; i++){
    let $price = parseFloat($product[i].querySelector('.price span').innerText);
    let $quantity = $product[i].querySelector('.quantity input').valueAsNumber;
    let $subtotal = $product[i].querySelector('.subtotal span');

  $subtotal.innerText = $quantity * $price
  }
}
 
// ITERATION 2
function calculateAll() { 
  
  const $product = document.getElementsByClassName('product');
  let total= 0
   
  for (let i=0; i<$product.length; i++){
    updateSubtotal($product)
    let subtotal = parseInt($product[i].querySelector('.subtotal span').innerText)
    total += subtotal;
  }
    document.querySelector('#total-value span').innerText = total;
  }
  

  // ITERATION 3
  //...


const $calculateTrigger = document.getElementById('calculate');

$calculateTrigger.addEventListener('click', calculateAll);

// ITERATION 4


function addProductRemoveListener($removeButton) {
  event.currentTarget.parentNode.parentNode.remove();
}
let $removeButton = document.getElementsByClassName('btn-remove');
for (let i=0; i<$removeButton.length; i++){
  $removeButton[i].addEventListener('click', event => {
    addProductRemoveListener();
    calculateAll();
  });
};

// ITERATION 5

function createProduct(event) {

}
