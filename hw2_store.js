const goods = [
    {
        id: 1,
        name: "T-shirt",
        description: "color: white, material: coton",
        sizes: ["S", "M", "XL"],
        price: 1500,
        available: true
    },
    {
        id: 2,
        name: "Dress",
        description: "color: red, material: silk",
        sizes: ["S", "M", "L"],
        price: 10000,
        available: true
    },
    {
        id: 3,
        name: "Jacket",
        description: "color: black, material: leather",
        sizes: ["XS", "M", "XXL"],
        price: 35000,
        available: true
    },
    {
        id: 4,
        name: "Jeans",
        description: "color: blue, material: coton",
        sizes: ["S", "M", "L", "XL"],
        price: 8000,
        available: true
    },
    {
        id: 5,
        name: "Shorts",
        description: "color: grey, material: coton",
        sizes: ["L", "XL"],
        price: 4500,
        available: true
    },
]


const basket = [
    {
        good: 1,
        amount: 5
    },
    {
        good: 2,
        amount: 3
    },
]


function addGood(goodIndex, amount) {
    basket.push({"good":parseInt(goodIndex), "amount": parseInt(amount)});
    return basket
}


function delGood(goodIndex, amount) {
    for(let i = 0; i < basket.length; i++) {
        if (basket[i].good == goodIndex) {
            if (amount >= basket[i].amount) {
                basket.splice(i, 1);
                return;
            } 
            basket[i].amount -= amount;
        }    
    }
    return basket
}


function clearBasket() {
    basket.splice(0, basket.length);
    return basket
}


function getTotal() {
    result = {
        totalAmount: 0,
        totalSum: 0,
    }
    for(let each of basket) {
        result.totalAmount += each.amount;
        result.totalSum += goods[each.good].price * each.amount;
    }
    return result;
}


console.log(addGood(process.argv[2], process.argv[3]))
//console.log(delGood(process.argv[2], process.argv[3]))

//console.log(clearBasket())

console.log(getTotal())
