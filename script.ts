//TALLEST MOUNTAIN
interface Mountain{
    name: string;
    height: number;
}

let mountains:Mountain[] = [
    {
        name:"Kilimanjaro",
        height: 19341
    },
       {
        name:"Everest",
        height: 29029
    },    
    {
        name:"Denali",
        height: 20310
    },
];

function findNameOfTallestMountain(mountains:Mountain[]):string{
    let tallestMountain:Mountain = mountains[0];
    mountains.forEach((m:Mountain) => {
        if(m.height > tallestMountain.height){
            tallestMountain = m;
        }
    });

    return tallestMountain.name;
}

let mountainName:string = findNameOfTallestMountain(mountains);
console.log(mountainName);

//PRODUCTS
interface Product{
    name: string;
    price: number;
}

let products:Product[] = [
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

function calcAverageProductPrice(products:Product[]):number{
    let runningTotal:number = 0;
    products.forEach((p:Product) => {
        runningTotal += p.price;
    });
    let averageTotal:number = runningTotal / products.length;
    return averageTotal;
};

let averagePrice = calcAverageProductPrice(products);
console.log("$" + averagePrice);

//INVENTORY
interface InventoryItem{
    product: Product;
    quantity: number;
}

let motor: Product = {
    name: "motor",
    price: 10
}
let sensor: Product = {
    name: "sensor",
    price: 12.50
}
let LED: Product = {
    name: "LED",
    price: 1
}

let inventory:InventoryItem[] = [
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

function calcInventoryValue(inventory:InventoryItem[]):number{
    let runningTotal:number = 0;
    inventory.forEach((i:InventoryItem) => {
        runningTotal += i.quantity * i.product.price;
    });
    return runningTotal;
}

let inventoryValue:number = calcInventoryValue(inventory);
console.log(inventoryValue);