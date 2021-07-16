'use strict'

import Good from "./good.js"

export default class GoodInCart extends Good {
    constructor ({title, _price, description, image, id}, quantity = 1) {
        super({title, price: _price, description, image});

        this.id = id;
        this.quantity = quantity;
    }

    get price () {
        return this._price * this.quantity;
    }

    add () {
        this.quantity++;
    }
}