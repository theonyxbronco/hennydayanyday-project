/*-------------------------------------------------*/
/* PRODUCT-TAB HATS */
/*-------------------------------------------------*/
import sharedStyles from './shop_component_style.js';
import { addToBasket } from './basket.js';

const hatsTemplate = document.createElement("template")
// WHEN ADDING NEW PRODUCTS:
// Change data-target="img_1_1" to "img_2_1" to "img_3_1" for every new addition and onwards
// Change incrementally id="product_views_1"
hatsTemplate.innerHTML = `
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
        
        <!----------------------------->
        <!-- PRODUCT CONTENT -->
        <!----------------------------->
        <!------------- Product 1 -------------->
        <div class="item">
            <div class="product-views" id="product_views_1">
                <div class="img-wrapper" data-target="img_1_1"><img src="images/products_main/Hats/Black Boonie/Front Black Boonie.svg" alt=""></div>
                <div class="img-wrapper" data-target="img_1_2"><img src="images/products_main/Hats/Black Boonie/Left Side Black Boonie.svg" alt=""></div>
                <div class="img-wrapper" data-target="img_1_3"><img src="images/products_main/Hats/Black Boonie/Right Side Black Boonie.svg" alt=""></div>
            </div>
            <div class="product-body">
                <div class="product-display">
                    <img id="img_1_1" src="images/products_main/Hats/Black Boonie/Front Black Boonie.svg" alt="">
                    <img class="initial-hidden" id="img_1_2" src="images/products_main/Hats/Black Boonie/Left Side Black Boonie.svg" alt="">
                    <img class="initial-hidden" id="img_1_3" src="images/products_main/Hats/Black Boonie/Right Side Black Boonie.svg" alt="">
                </div>
                <div class="shine">
                    <img src="images/shiner.png" alt="">
                </div>
                <div class="product-description">
                    <h2>Hennyday Anyday Black Boonie</h2>
                    <p>30€</p>
                </div>
                <div class="product-purchase">
                    <button class="buy-btn" data-product-id="price_1O8jOVENXkUfS20iPLS06i8v">ADD</button>
                </div>
            </div>
        </div>

        <!------------- Product 2 -------------->
        <div class="item">
            <div class="product-views" id="product_views_2">
                <div class="img-wrapper" data-target="img_2_1"><img src="images/products_main/Hats/Stone Boonie/Front Stone Boonie.svg" alt=""></div>
                <div class="img-wrapper" data-target="img_2_2"><img src="images/products_main/Hats/Stone Boonie/Left Side Stone Boonie.svg" alt=""></div>
                <div class="img-wrapper" data-target="img_2_3"><img src="images/products_main/Hats/Stone Boonie/Right Side Stone Boonie.svg" alt=""></div>
            </div>
            <div class="product-body">
                <div class="product-display">
                    <img id="img_2_1" src="images/products_main/Hats/Stone Boonie/Front Stone Boonie.svg" alt="">
                    <img class="initial-hidden" id="img_2_2" src="images/products_main/Hats/Stone Boonie/Left Side Stone Boonie.svg" alt="">
                    <img class="initial-hidden" id="img_2_3" src="images/products_main/Hats/Stone Boonie/Right Side Stone Boonie.svg" alt="">
                </div>
                <div class="shine">
                    <img src="images/shiner.png" alt="">
                </div>
                <div class="product-description">
                    <h2>Hennyday Anyday Stone Boonie</h2>
                    <p>30€</p>
                </div>
                <div class="product-purchase">
                    <button class="buy-btn" data-product-id="price_1O8jQLENXkUfS20i3brn3Pm1">ADD</button>
                </div>
            </div>
        </div>

        <!------------- Product 3 -------------->
        <div class="item">
            <div class="product-views" id="product_views_3">
                <div class="img-wrapper" data-target="img_3_1"><img src="images/products_main/Hats/Black Cap/Front Black Cap.svg" alt=""></div>
                <div class="img-wrapper" data-target="img_3_2"><img src="images/products_main/Hats/Black Cap/Left Side Black Cap.svg" alt=""></div>
                <div class="img-wrapper" data-target="img_3_3"><img src="images/products_main/Hats/Black Cap/Back Black Cap.svg" alt=""></div>
            </div>
            <div class="product-body">
                <div class="product-display">
                    <img id="img_3_1" src="images/products_main/Hats/Black Cap/Front Black Cap.svg" alt="">
                    <img class="initial-hidden" id="img_3_2" src="images/products_main/Hats/Black Cap/Left Side Black Cap.svg" alt="">
                    <img class="initial-hidden" id="img_3_3" src="images/products_main/Hats/Black Cap/Back Black Cap.svg" alt="">
                </div>
                <div class="shine">
                    <img src="images/shiner.png" alt="">
                </div>
                <div class="product-description">
                    <h2>Hennyday Anyday Black Cap</h2>
                    <p>30€</p>
                </div>
                <div class="product-purchase">
                    <button class="buy-btn" data-product-id="price_1O8jPBENXkUfS20ifv2MNihA">ADD</button>
                </div>
            </div>
        </div>

        <!------------- Product 4 -------------->
        <div class="item">
            <div class="product-views" id="product_views_4">
                <div class="img-wrapper" data-target="img_4_1"><img src="images/products_main/Hats/Grey Cap/Front Grey Cap.svg" alt=""></div>
                <div class="img-wrapper" data-target="img_4_2"><img src="images/products_main/Hats/Grey Cap/Left Side Grey Cap.svg" alt=""></div>
                <div class="img-wrapper" data-target="img_4_3"><img src="images/products_main/Hats/Grey Cap/Back Grey Cap.svg" alt=""></div>
            </div>
            <div class="product-body">
                <div class="product-display">
                    <img id="img_4_1" src="images/products_main/Hats/Grey Cap/Front Grey Cap.svg" alt="">
                    <img class="initial-hidden" id="img_4_2" src="images/products_main/Hats/Grey Cap/Left Side Grey Cap.svg" alt="">
                    <img class="initial-hidden" id="img_4_3" src="images/products_main/Hats/Grey Cap/Back Grey Cap.svg" alt="">
                </div>
                <div class="shine">
                    <img src="images/shiner.png" alt="">
                </div>
                <div class="product-description">
                    <h2>Hennyday Anyday Grey Cap</h2>
                    <p>30€</p>
                </div>
                <div class="product-purchase">
                    <button class="buy-btn" data-product-id="price_1O8jPjENXkUfS20i8c5s8s4B">ADD</button>
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

class HatsProductTab extends HTMLElement {
    constructor() {
        super();
        this.slideIndex = 1;
        this.attachShadow({ mode: "open" }).appendChild(hatsTemplate.content.cloneNode(true));
    }

    assignProductIds() {
        // Select all buy buttons
        this.shadowRoot.querySelectorAll('.product-purchase .buy-btn').forEach(button => {
            // Retrieve the product ID from the button's data attribute
            const productId = button.getAttribute('data-product-id');
    
            // Optional: Set up an event listener for the button click
            button.addEventListener('click', () => {
                addToBasket(productId); // Use the retrieved product ID
            });
        });
    }

    connectedCallback() {
        this.assignProductIds();

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

customElements.define("product-hats", HatsProductTab);
