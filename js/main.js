'use strict'

import GoodList from "./model/goodList.js";
import Card from "./view/card.js";
import Cart from "./model/Cart.js";
import api from "./api.js";
import GoodInCart from "./model/goodinCart.js";

function addToCart (id) {
    const good = goodList.getById(id);
    cart.add(new GoodInCart(good));
}

const goodList = new GoodList(API.fetch());

const cart = new Cart([]);

const $product = document.querySelector(".");

const cards = goodList.get().map(good => new Card(good));

cards.forEach (card => {
    card.setAddHandler(addToCart);
    card.render($product);
});
