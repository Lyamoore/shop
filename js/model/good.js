'use strict'

import idGenerator from "../utils/idGenerator.js";

export default class Good {
    constructor ({title, price, description, image}) {
        this.id = idGenerator ();
        this.title = title;
        this._price = price;
        this.description = description;
        this.image = image;
    }

    get price () {
        return this._price;
    }

    set price (value) {
        this._price =value;
    }
}