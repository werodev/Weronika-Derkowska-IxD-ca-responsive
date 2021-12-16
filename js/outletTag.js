import { productArray } from "./constants/productList.js";
const discountContainer = document.querySelector(".discount");
productArray.forEach(function (product) {
    if (product.outlet === 1) {
        console.log(product.id);
        discountContainer.innerHTML +=
            `<img src="./img/icons/discount.png" title="discount" alt="discount">                                                                                                
            `;
    }
})



