'use strict'

import idGenerator from "../utils/idGenerator";

export default class Good {
    constructor ({title, price, description, image, discount}) {
        this.id = idGenerator ();
        this.title = title;
        this._price = price;
        this.description = description;
        this.image = image;
        this.discount = discount;
    }

    getPrice () {
        return this._price - this.discount;
    }
}