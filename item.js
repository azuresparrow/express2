const items = require('./fakeDb')

class Item {
    constructor(name, price){
        this.name = name;
        this.price = price;
        items.push(this); 
    }

    static all(){
        return items;
    }

    static find(name){
        let item = items.find(i => i.name === name);
        if(item === undefined) throw { message: "Not Found", status: 404 }
        return item;
    }

    static update(name, data){
        let item = Item.find(name);
        if(item === undefined) throw { message: "Not Found", status: 404 }
        return item = {...item, name: data.name, price: data.price };
    }

    static remove(name){
        let index = items.findIndex(i => i.name === name);
        if(index === -1) throw { message: "Not Found", status: 404 }
        items.splice(index, 1);
    }
}

module.exports = Item;