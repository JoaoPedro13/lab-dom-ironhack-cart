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
  let = $removebutton = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < $removebutton.length; i++) {

    $removebutton[i].addEventListener('click', a => {
      event.currentTarget.parentNode.parentNode.remove();
    })
  }
}
// ITERATION 5

function createProduct(event) {

}
