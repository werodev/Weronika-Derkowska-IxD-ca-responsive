import { productArray } from "./constants/productList.js";
const productsContainer = document.querySelector(".products");

productArray.forEach(function (product) {
    if (product.category === "sneakers") {
        productsContainer.innerHTML +=
            `<div class="product">
            <img src="./img/products/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <h4>${product.price} NOK</h4>
            <div class="buttonContainer"><button class="more" data-product=${product.id}>Go to product</button></div>
            </div>
            `;
    }
})

const buttons = document.querySelectorAll(".more");
const productPageContainer = document.querySelector(".productPage")
const headlineContainer = document.querySelector(".headlineGroup")
buttons.forEach(function (btn) {
    btn.onclick = function (event) {
        const itemToShow = productArray.find(item => item.id === event.target.dataset.product);
        headlineContainer.innerHTML = "";
        productsContainer.innerHTML = "";
        productPageContainer.innerHTML +=
            `<div class="productDetails">
                        <img src="./img/products/${itemToShow.image}" class="productPic" alt="${itemToShow.name}">
                        <div class="price">
                            <div class="priceTag">
                            <h3>${itemToShow.name}</h3>
                            <h4>${itemToShow.price} NOK</h4>
                            </div>
                            <div class="selectContainer">
                            <label for="ruler" class="label">Size Guide</label>
                            <a href="./size_guide.html" alt="Size guide"><img src="./img/icons/ruler.png" alt="ruler" id="ruler"></a>
                            </div>
                            <div class="selectContainer">
                            <label for="size" class="label">Size</label>
                            <select id="size" onchange="change(value)"></select>
                            </div>
                            <div class="selectContainer">
                            <label for="colour" class="label">Colour</label>
                            <select class="action" id="colour" onchange="change(value)"></select>
                            </div>
                            <div class="buttonContainer"><button class="addToCart">Add to cart</button></div>
                        </div>
                        <div class="infobox">
                            <div class="headlineBox headline">
                                <h4>Revievs &#40;103&#41;</h4>
                                <img src="./img/icons/stars45.png" alt="Four and a half star">
                            </div>
                            <div class="headlineBox">
                                <h4>${itemToShow.author_1}</h4>
                                <img src="./img/icons/stars4.png" alt="Four stars">
                            </div>
                            <p>${itemToShow.reviev_1}</p>
                            <div class="headlineBox">
                                <h4>${itemToShow.author_2}</h4>
                                <img src="./img/icons/stars5.png" alt="Five stars">
                            </div>
                            <p>${itemToShow.reviev_2}</p>
                        </div>
                        <div class="infobox">
                        <h4>Product description:</h4>
                        <p>${itemToShow.description}</p>
                        <div class="headlineBox2">
                            <div class="iconContainer">
                                <img src="./img/icons/delivery.png" alt="Delivery car">
                            </div>
                            <h4>Free delivery in 3&#8211;4 days</h4>
                            </div>
                            <div class="headlineBox2">
                            <div class="iconContainer">
                            <img src="./img/icons/gift.png" alt="Gift box">
                            </div>
                            <h4>5&#37; discount for you and your 
                            friend at next purchase</h4>
                        </div>
            </div>
            `;
        const sizeChoice = itemToShow.size;
        sizeChoice.forEach(function (item, id) {
            const select = document.getElementById("size");
            const newOption = document.createElement("option");
            select.appendChild(newOption).innerHTML = sizeChoice[id];
        })
        const colourChoice = itemToShow.colour;
        colourChoice.forEach(function (item, id) {
            const select = document.getElementById("colour");
            const newOption = document.createElement("option");
            select.appendChild(newOption).innerHTML = colourChoice[id];
        })
    }
}
)

