'use strict'

export default class GoodList {
    constructor (goods) {
        this.goods = goods.map(item => new Good(item));
    }

    get () {
        return this.goods;
    }

    add (good) {
        this.goods.push(good);
    }

    remove (id) {
        this.goods.findIndex(good => good.id === id);
        this.goods.splice(id, 1);
    }

    getPrice () {
        let goodsPrice = 0;
        
        return goodsPrice;
    }
}