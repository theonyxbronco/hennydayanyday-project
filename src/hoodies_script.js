/*-------------------------------------------------*/
/* PRODUCT-TAB HOODIES */
/*-------------------------------------------------*/
import sharedStyles from './shop_component_style.js';
import { addToBasket } from './basket.js';

const hoodiesTemplate = document.createElement("template")
// WHEN ADDING NEW PRODUCTS:
// Change data-target="img_1_1" to "img_2_1" to "img_3_1" for every new addition and onwards
// Change incrementally id="product_views_1"
hoodiesTemplate.innerHTML = `
    ${sharedStyles}

    <div class="item-wrapper">
        <!-- next and prev butons -->
        <div class="slider-btn">
            <button class="lefter" onclick="plusDivs(-1)"><img src="images/chevron-left.svg" alt=""></button>
            <button class="righter" onclick="plusDivs(1)"><img src="images/chevron-right.svg" alt=""></button>
        </div>

         <!-- Shopping Cart -->
         <div class="cart" id="cart">
            <button onclick="openCart()">
                <img src="images/cart.svg" alt="">
                <p class="text">Cart</p>
            </button>
        </div>
        
        <!-- PRODUCT CONTENT -->
        <div class="item">
            <div class="product-views" id="product_views_1">
                <div class="img-wrapper" data-target="img_1_1"><img src="images/products_main/Hoodies/Front Black.svg" alt=""></div>
                <div class="img-wrapper" data-target="img_1_2"><img src="images/products_main/Hoodies/Back Black.svg" alt=""></div>
            </div>
            <div class="product-body">
                <div class="product-display">
                    <img id="img_1_1" src="images/products_main/Hoodies/Front Black.svg" alt="">
                    <img class="initial-hidden" id="img_1_2" src="images/products_main/Hoodies/Back Black.svg" alt="">
                </div>
                <div class="shine">
                    <img src="images/shiner.png" alt="">
                </div>
                <div class="product-description">
                    <h2>Hennyday Anyday Black Hoodie</h2>
                    <p class="product-price">40€</p>
                </div>
                <div class="product-purchase">
                    <button class="size-btn" data-size="S" data-product-id="price_1O8jRWENXkUfS20iATDXPxzC">S</button>
                    <button class="size-btn" data-size="M" data-product-id="price_1O8jYPENXkUfS20iLPp4pJTz">M</button>
                    <button class="size-btn" data-size="L" data-product-id="price_1O8jZ0ENXkUfS20iUzRN84YH">L</button>
                    <button class="size-btn" data-size="XL" data-product-id="price_1OAFKiENXkUfS20igDwG0VQ6">XL</button>
                    <button class="size-btn" data-size="XXL" data-product-id="price_1OAFL3ENXkUfS20icNCnP8Uz">XXL</button>
                    <button class="size-btn" data-size="XXXL" data-product-id="price_1OAFLQENXkUfS20iphOhYH1z">XXXL</button>
                    <button class="size-btn" data-size="4XL" data-product-id="price_1OAFLnENXkUfS20iNmYS78H8">4XL</button>
                    <button class="size-btn" data-size="4XL" data-product-id="price_1OAFMBENXkUfS20iWEfX7wS9">5XL</button>
                    <br>
                    <br>
                    <button class="buy-btn">ADD</button>
                </div>
            </div>
        </div>

        <div class="item">
            <div class="product-views" id="product_views_2">
                <div class="img-wrapper" data-target="img_2_1"><img src="images/products_main/Hoodies/Front Brown.svg" alt=""></div>
                <div class="img-wrapper" data-target="img_2_2"><img src="images/products_main/Hoodies/Back Brown.svg" alt=""></div>
            </div>
            <div class="product-body">
                <div class="product-display">
                    <img id="img_2_1" src="images/products_main/Hoodies/Front Brown.svg" alt="">
                    <img class="initial-hidden" id="img_2_2" src="images/products_main/Hoodies/Back Brown.svg" alt="">
                </div>
                <div class="shine">
                    <img src="images/shiner.png" alt="">
                </div>
                <div class="product-description">
                    <h2>Hennyday Anyday Brown Hoodie</h2>
                    <p class="product-price">40€</p>
                </div>
                <div class="product-purchase">
                    <button class="size-btn" data-size="S" data-product-id="price_1O8jR9ENXkUfS20ia1ETLR3z">S</button>
                    <button class="size-btn" data-size="M" data-product-id="price_1O8jZtENXkUfS20iXJsO7eRS">M</button>
                    <button class="size-btn" data-size="L" data-product-id="price_1O8jaSENXkUfS20iYpJkul66">L</button>
                    <button class="size-btn" data-size="XL" data-product-id="price_1OAFI4ENXkUfS20iMb6gn5qY">XL</button>
                    <button class="size-btn" data-size="XXL" data-product-id="price_1OAFITENXkUfS20i8yemisxn">XXL</button>
                    <button class="size-btn" data-size="XXXL" data-product-id="price_1OAFJ5ENXkUfS20i7LeT65RO">XXXL</button>
                    <button class="size-btn" data-size="4XL" data-product-id="price_1OAFJZENXkUfS20ilvopixW0">4XL</button>
                    <button class="size-btn" data-size="4XL" data-product-id="price_1OAFJvENXkUfS20ieDV0D7nX">5XL</button>
                    <br>
                    <br>
                    <button class="buy-btn">ADD</button>
                </div>
            </div>
        </div>
        
    </div>


    <style>
    .item .product-body .product-display img {
        height: auto;
        width: 100%;
    }

    .item .product-body .shine img {
        height: auto;
        width: 100%;
    }

    .item .product-body .shine {
        position: absolute;
        top: 280px;
        left: 0;
    }

    .item .product-body .product-display {
        margin-top: 60%;
    }

    .item .product-body .product-description {
        margin-top: 40%;
    }
    </style>
`

class HoodiesProductTab extends HTMLElement {
    constructor() {
        super();
        this.slideIndex = 1;
        this.attachShadow({ mode: "open" }).appendChild(hoodiesTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        let selectedProductId = null;

        // Setup listeners for size selection
        this.shadowRoot.querySelectorAll('.size-btn').forEach(sizeBtn => {
            sizeBtn.addEventListener('click', (e) => {
                // Update all size buttons to remove 'selected' class
                this.shadowRoot.querySelectorAll('.size-btn').forEach(btn => {
                    btn.classList.remove('selected');
                });
                
                // Add 'selected' class to the clicked button
                e.target.classList.add('selected');
                
                // Update the selected product ID
                selectedProductId = e.target.getAttribute('data-product-id');
            });
        });

        // Set up listener for the BUY button
        this.shadowRoot.querySelectorAll('.buy-btn').forEach(buyBtn => {
            buyBtn.addEventListener('click', () => {
                if (!selectedProductId) {
                    alert('Please select a size first.');
                    return;
                }
            
                addToBasket(selectedProductId);

                // Clear the selected product ID after adding to basket
                selectedProductId = null;
            
                // Optionally clear the selected visual state
                this.shadowRoot.querySelectorAll('.size-btn').forEach(btn => {
                    btn.classList.remove('selected');
                });
            });
        });

        //---------------------------------------//
        // IMAGE SELECTION //
        //---------------------------------------//
        this.slideIndex = 1; // initialize slide index
        
        // Set up click listeners for each .img-wrapper
        this.shadowRoot.querySelectorAll('.img-wrapper').forEach(wrapper => {
            wrapper.addEventListener('click', (e) => {
                let productDisplay = e.target.closest('.item').querySelector('.product-display');
                productDisplay.querySelectorAll('img').forEach(img => img.classList.add('initial-hidden'));
                let targetImageId = e.target.closest('.img-wrapper').getAttribute('data-target');
                let targetImage = this.shadowRoot.getElementById(targetImageId);
                if (targetImage) {
                    targetImage.classList.remove('initial-hidden');
                }
            });
        });
    
        // Set up listeners for .lefter and .righter buttons
        this.shadowRoot.querySelector('.lefter').addEventListener('click', () => this.plusDivs(-1));
        this.shadowRoot.querySelector('.righter').addEventListener('click', () => this.plusDivs(1));
        this.showDivs(this.slideIndex); // show initial slide
    }

    plusDivs(n) {
        this.showDivs(this.slideIndex += n);
    }

    showDivs(n) {
        let x = this.shadowRoot.querySelectorAll(".item");
        if (n > x.length) { this.slideIndex = 1; }
        if (n < 1) { this.slideIndex = x.length; }
        x.forEach(item => item.style.display = "none");
        x[this.slideIndex - 1].style.display = "block";
    }
}

customElements.define("product-hoodies", HoodiesProductTab);
