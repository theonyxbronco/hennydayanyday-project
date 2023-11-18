/*-------------------------------------------------*/
/* PRODUCT-TAB DISPLAY */
/*-------------------------------------------------*/
function showProduct(productId) {
    // Hide all product groups
    document.querySelectorAll('.product-group').forEach(function(group) {
        group.style.display = 'none';
    });
    
    // Show the selected product group
    document.getElementById(productId).style.display = 'block';
}


/*-------------------------------------------------*/
/* OPEN CART */
/*-------------------------------------------------*/
function openCart() {
    document.getElementById("cart_layer").style.display = "block";
}

function closeCart() {
    document.getElementById("cart_layer").style.display = "none";
}

function closePopup() {
    document.getElementById('itemAddedPopup').style.display = 'none';
}