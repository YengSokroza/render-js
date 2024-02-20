'use strict'

import { cardComponent } from "../components/cardComponent.js";
import { products } from "../data/products.js";

let renderArea = document.querySelector("#render-area")

// console.log(products);
// console.log(renderArea);

products.map((product) => {
    // console.log(product);
    renderArea.innerHTML += cardComponent(product);
})
