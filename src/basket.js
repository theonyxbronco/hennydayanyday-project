import { productDetailsMapping } from './productDetails.js';

export function addToBasket(productId) {
    // Retrieve the current basket from local storage
    let basket = JSON.parse(localStorage.getItem('basket')) || [];

    // Create a new product object
    const productToAdd = {
        id: productId,
        quantity: 1 // You can implement quantity logic as required
    };

    // Check if the product already exists in the basket
    const existingProductIndex = basket.findIndex(item => item.id === productId);
    if (existingProductIndex !== -1) {
        basket[existingProductIndex].quantity += 1;
    } else {
        basket.push(productToAdd);
    }

    // Save the updated basket back to local storage
    localStorage.setItem('basket', JSON.stringify(basket));
    updateBasketUI();

    // What the user is trying to add
    console.log('Attempting to add to basket:', productId);


    // Get the product details
    const productDetails = getProductDetails(productId);
    
    // Update the pop-up content
    const popupContent = document.getElementById('popupContent');
    popupContent.textContent = `${productDetails.name} to your Cart.`;

    // Show the pop-up
    const itemAddedPopup = document.getElementById('itemAddedPopup');
    itemAddedPopup.style.display = 'block';

    setTimeout(() => {
        itemAddedPopup.style.display = 'none';
    }, 4000);
}



/*-------------------------------------------------*/
/* CART UI */
/*-------------------------------------------------*/
function getProductDetails(productId) {
    return productDetailsMapping[productId] || {
        name: 'Unknown Product',
        image: ''
    };
}

function updateBasketUI() {
    const basket = JSON.parse(localStorage.getItem('basket')) || [];
    console.log('Basket contents:', basket);

    const cartContentElement = document.querySelector('.cart-content ul');

    cartContentElement.innerHTML = '';

    basket.forEach(item => {
        const productDetails = getProductDetails(item.id);
        
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="item-list-container">
                <img src="${productDetails.image}" alt="${productDetails.name}">
                <h2>${productDetails.name}</h2>
            </div>
            <p>Quantity: ${item.quantity}</p>
        `;

        cartContentElement.appendChild(listItem);
    });
}
updateBasketUI();



/*-------------------------------------------------*/
/* CLEAR CART BUTTON FUNCTION */
/*-------------------------------------------------*/
function clearCart() {
    localStorage.setItem('basket', JSON.stringify([]));
    
    updateBasketUI();
}

const clearCartButton = document.getElementById('clearCart');
clearCartButton.addEventListener('click', clearCart);
