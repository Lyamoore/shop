'use strict'

import Good from "./good"

export default class GoodInCart extends Good {
    constructor (data, quantity = 1) {
        super(data);

        this.quantity = quantity;
    }

    get price () {
        return this._price + this.quantity;
    }
}