/*-------------------------------------------------*/
/* PRODUCT-TAB SHIRT */
/*-------------------------------------------------*/
import sharedStyles from './shop_component_style.js';
import { addToBasket } from './basket.js';

const shirtsTemplate = document.createElement("template")
// WHEN ADDING NEW PRODUCTS:
// Change data-target="img_1_1" to "img_2_1" to "img_3_1" for every new addition and onwards
// Change incrementally id="product_views_1"
shirtsTemplate.innerHTML = `
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
                <div class="img-wrapper" data-target="img_1_1"><img src="images/products_main/T-shirts/black T-shirt Basic Logo.svg" alt=""></div>
            </div>
            <div class="product-body">
                <div class="product-display">
                    <img id="img_1_1" src="images/products_main/T-shirts/black T-shirt Basic Logo.svg" alt="">
                    <img class="initial-hidden" id="img_1_2" src="images/products_main/T-shirts/black T-shirt Basic Logo.svg" alt="">
                </div>
                <div class="shine">
                    <img src="images/shiner.png" alt="">
                </div>
                <div class="product-description">
                    <h2>Hennyday Anyday Black T-shirt</h2>
                    <p class="product-price">40€</p>
                </div>
                <div class="product-purchase">
                    <button class="size-btn" data-size="S" data-product-id="price_1O8jSFENXkUfS20iLNJedl98">S</button>
                    <button class="size-btn" data-size="M" data-product-id="price_1O8jbxENXkUfS20ifv6pmlyl">M</button>
                    <button class="size-btn" data-size="L" data-product-id="price_1O8jccENXkUfS20io6khxIS8">L</button>
                    <button class="size-btn" data-size="XL" data-product-id="price_1OAFEZENXkUfS20iJvjijdEW">XL</button>
                    <button class="size-btn" data-size="XXL" data-product-id="price_1OAFFiENXkUfS20iPvJLBUo5">XXL</button>
                    <button class="size-btn" data-size="XXXL" data-product-id="price_1OAFGFENXkUfS20iksWSWcw5">XXXL</button>
                    <button class="size-btn" data-size="4XL" data-product-id="price_1OAFHIENXkUfS20iJRDtnhas">4XL</button>
                    <br>
                    <br>
                    <button class="buy-btn">ADD</button>
                </div>
            </div>
        </div>
        
    </div>
`

class ShirtsProductTab extends HTMLElement {
    constructor() {
        super();
        this.slideIndex = 1;
        this.attachShadow({ mode: "open" }).appendChild(shirtsTemplate.content.cloneNode(true));
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
        this.shadowRoot.querySelector('.buy-btn').addEventListener('click', () => {
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

customElements.define("product-shirts", ShirtsProductTab);
