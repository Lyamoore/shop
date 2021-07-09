'use strict'

import GoodList from "./goodList"

class Cart extends GoodList {
    constructor (goodsData) {
        super(goodsData);
    }

    getPrice () {
        return this.goods.reduce((acc, good) => acc + good.price, 0);
    }
}