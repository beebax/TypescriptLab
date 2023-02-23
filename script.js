var mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    },
];
function findNameOfTallestMountain(mountains) {
    var tallestMountain = mountains[0];
    mountains.forEach(function (m) {
        if (m.height > tallestMountain.height) {
            tallestMountain = m;
        }
    });
    return tallestMountain.name;
}
var mountainName = findNameOfTallestMountain(mountains);
console.log(mountainName);
var products = [
    {
        name: "Li hing mango",
        price: 5.20
    },
    {
        name: "Furikake popcorn",
        price: 3.80
    },
    {
        name: "Butter mochi",
        price: 6.10
    },
    {
        name: "Shrimp chips",
        price: 3.30
    },
    {
        name: "Manapua",
        price: 2.60
    }
];
function calcAverageProductPrice(products) {
    var runningTotal = 0;
    products.forEach(function (p) {
        runningTotal += p.price;
    });
    var averageTotal = runningTotal / products.length;
    return averageTotal;
}
;
var averagePrice = calcAverageProductPrice(products);
console.log("$" + averagePrice);
var motor = {
    name: "motor",
    price: 10
};
var sensor = {
    name: "sensor",
    price: 12.50
};
var LED = {
    name: "LED",
    price: 1
};
var inventory = [
    {
        product: motor,
        quantity: 10
    },
    {
        product: sensor,
        quantity: 4
    },
    {
        product: LED,
        quantity: 20
    }
];
function calcInventoryValue(inventory) {
    var runningTotal = 0;
    inventory.forEach(function (i) {
        runningTotal += i.quantity * i.product.price;
    });
    return runningTotal;
}
var inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
