// let cartIcon = document.querySelector('#cart-icon');
// let cart = document.querySelector('.cart');
// let closeCart = document.querySelector('#close-cart');

// // Showing Cart 
// cartIcon.onclick = () => {
//   cart.classList.add('active');
// }

// // Closing Cart
// closeCart.onclick = () => {
//   cart.classList.remove('active');
// }

// // Cart Working
// if (document.readyState == 'loading') {
//   document.addEventListener("DOMContentLoaded", ready);
// } else {
//   ready();
// }

// // ready function
// function ready() {
//   // Remove Items from Cart
//   var removeCartButtons = document.getElementsByClassName('cart-remove');
//   console.log(removeCartButtons);

//   for (var i = 0; i < removeCartButtons.length; i++) {
//     var buttons = removeCartButtons[i];
//     buttons.addEventListener('click', removeCartItem);
//   }

//   // Handling Quantity Changes
//   var quantityInputs = document.getElementsByClassName('cart-quantity');

//   for (var i = 0; i < quantityInputs.length; i++) {
//     var input = quantityInputs[i];
//     input.addEventListener('change', quantityChanged);
//   }

//   // Add to Cart
//   var addCart = document.getElementsByClassName('add-cart');
//   for (var i = 0; i < addCart.length; i++) {
//     var button = addCart[i];
//     button.addEventListener('click', addCartClicked);
//   }
// }

// // Quantity Changes
// function quantityChanged(event) {
//   var input = event.target;
//   if (isNaN(input.value) || input.value <= 0) {
//     input.value = 1;
//   }
//   updateTotal();
// }

// function removeCartItem(event) {
//   var buttonClicked = event.target;
//   buttonClicked.parentElement.remove();
//   updateTotal();
// }

// // Add to Cart Function
// function addCartClicked(event) {
//   var button = event.target;
//   var shopProducts = button.parentElement;
//   var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
//   var price = shopProducts.getElementsByClassName('price')[0].innerText;
//   var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
//   addProductToCart(title, price, productImg);
//   updateTotal();
// }

// // Add Product To Cart
// function addProductToCart(title, price, productImg) {
//   var cartShopBox = document.createElement('div');
//   cartShopBox.classList.add('cart-box');

//   var cartBoxContent = `
//     <img src="${productImg}" alt="" class="cart-img"></img>
//     <div class="detail-bo">
//       <div class="cart-product-title">${title}</div>
//       <div class="cart-price">${price}</div>
//       <input type="number" name="" value="1" class="cart-quantity">
//     </div>
//     <!-- Remove Item from Cart -->
//     <i class="fa fa-trash cart-remove"></i>`;

//   cartShopBox.innerHTML = cartBoxContent;

//   var cartItems = document.getElementsByClassName('cart-content')[0];
//   cartItems.appendChild(cartShopBox);

//   cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
//   cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
// }

// // Update Total
// function updateTotal() {
//   var cartContent = document.getElementsByClassName('cart-content')[0];
//   var cartBoxes = cartContent.getElementsByClassName('cart-box');
//   var total = 0;

//   for (var i = 0; i < cartBoxes.length; i++) {
//     var cartBox = cartBoxes[i];
//     var priceElement = cartBox.getElementsByClassName('cart-price')[0];
//     var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];

//     var price = parseFloat(priceElement.innerText.replace('Ugx. ', ''));
//     var quantity = quantityElement.value;
//     total = total + price * quantity;
//   }

//   document.getElementsByClassName('total-price')[0].innerText = 'Ugx. ' + total.toFixed(2);
// }






let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// Showing Cart 
cartIcon.onclick = () => {
  cart.classList.add('active');
}

// Closing Cart
closeCart.onclick = () => {
  cart.classList.remove('active');
}

// Cart Working
if (document.readyState == 'loading') {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// Ready function
function ready() {
  // Remove Items from Cart
  var removeCartButtons = document.getElementsByClassName('cart-remove');
  console.log(removeCartButtons);

  for (var i = 0; i < removeCartButtons.length; i++) {
    var buttons = removeCartButtons[i];
    buttons.addEventListener('click', removeCartItem);
  }
  // Handling Quantity Changes
  var quantityInputs = document.getElementsByClassName('cart-quantity');

  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
  }
  // Add to Cart
  var addCart = document.getElementsByClassName('add-cart');
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener('click', addCartClicked);
  }
}


// Quantity Changes
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}


// Add to Cart Function
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
  var price = shopProducts.getElementsByClassName('price')[0].innerText;
  var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
  addProductToCart(title, price, productImg);
  updateTotal();
}

// Add Product To Cart
function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement('div');
  cartShopBox.classList.add('cart-box');
  var cartItems = document.getElementsByClassName('cart-content')[0];
  var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("This item is already added to the cart.");
      return;
    }
  }

  var cartBoxContent = `
    <img src="${productImg}" alt="" class="cart-img">
    <div class="detail-bo">
      <div class="cart-product-title">${title}</div>
      <div class="cart-price">${price}</div>
      <input type="number" name="" value="1" class="cart-quantity">
    </div>
    <!-- Remove Item form Cart -->
    <i class="fa fa-trash cart-remove"></i>`;

  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
  cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
}

// Update Total
function updateTotal() {
  var cartContent = document.getElementsByClassName('cart-content')[0];
  var cartBoxes = cartContent.getElementsByClassName('cart-box');
  var total = 0;

  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName('cart-price')[0];
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];

    var price = parseFloat(priceElement.innerText.replace('Ugx. ', '').replace(/,/g, ''));
    var quantity = quantityElement.value;
    total += price * quantity;
  }

  var totalElement = document.querySelector('.total-price');
  totalElement.textContent = 'Ugx. ' + numberWithCommas(total.toFixed(2));
}

// Function to add comma separator for thousands
function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
