// LOGO ROTATION FUNCTION //
window.addEventListener("load", function() {
    const loader1 = document.querySelector(".loading");
    loader1.className += " hidden"; //class "loader hidden"
});


function adjustVideoContainerHeight() {
    // Get the width of the viewport
    const viewportWidth = window.innerWidth;

    // Check if the viewport width is less than 500px
    if (viewportWidth < 500) {
        const bodyHeight = document.body.scrollHeight;
        const viewportHeight = window.innerHeight;
        const videoContainer = document.querySelector('.bg-video');
        const padding = 30;
        videoContainer.style.height = `${Math.max(bodyHeight, viewportHeight) + padding}px`;
    } else {
        // If the viewport width is 500px or greater, reset any inline styles
        const videoContainer = document.querySelector('.bg-video');
        videoContainer.style.height = '';
    }
}

window.onload = adjustVideoContainerHeight;
window.onresize = adjustVideoContainerHeight;


const observer = new MutationObserver(adjustVideoHeight);
observer.observe(document.body, { childList: true, subtree: true });


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