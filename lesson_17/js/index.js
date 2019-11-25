'use strict'

// #1

async function getProductById(id) {
    const res = await fetch(`/products/${id}`);
    const body = await res.json();
    return body;
}

// const product =  await getProductById(); // - function call


// #2

function createProduct(product) {
    fetch(`/products/`, {
        method: 'POST',
        body: JSON.stringify(product)
    });
}

// #3

function updateProduct(product) {
    fetch(`/products/`, {
        method: 'PUT',
        body: JSON.stringify(product)
    });
}

// #4

function deleteProduct(id) {
    fetch(`/products/${id}`, {
        method: 'DELETE'
    });
}

// #5

async function getProductsByPrice(price) {
    const products = await fetch(`/products/`);
    const body = await products.json();
    const filteredArray = body.filter(item => item.price >= price);

    return filteredArray;
}

// const product =  await getProductsByPrice(); // - function call

// #6

async function getProductByName(name) {
    const products = await fetch(`/products/`);
    const body = await products.json();
    const filteredArray = body.filter(item => item.name === name);

    return filteredArray;
}

// const product =  await getProductByName(); // - function call

// #7 

async function getProductsList() {
    const res = await fetch(`/products`);
    const body = await res.json();
    return body;
}

async function showProducts() {
    const list = await getProductsList();

    let n = 0;
    while (true) {
        filteredList = list.slice(0, 5 * ++n);
        console.log(filteredList);
        let more = confirm("Show more?");
        if (!more) break;
    }
}

showProducts();